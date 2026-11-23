
import type { IncomingMessage } from "@/lib/whatsapp-webhook"
import { WEBSITE_WHATSAPP_MESSAGES } from "@/lib/website-whatsapp-messages"

const REQUEST_TIMEOUT_MS = 8000
const RETRY_DELAY_MS = 1000
const MAX_ATTEMPTS = 2
const MAX_MESSAGE_LENGTH = 1000

type Outcome =
  | { ok: true; duplicate: boolean; enquiryNumber?: number }
  | { ok: false; reason: string; status?: number; retryable: boolean }

const SOURCE_CODES = {
  BPS_SRC_GBP: {
    source: "Google",
    medium: "Organic",
  },
  BPS_SRC_GADS: {
    source: "Google",
    medium: "CPC",
  },
  BPS_SRC_WEB: {
    source: "Website",
    medium: "Website",
  },
  BPS_SRC_IG: {
    source: "Instagram",
    medium: "Social",
  },
  BPS_SRC_FB: {
    source: "Facebook",
    medium: "Social",
  },
} as const

function log(event: string, data: Record<string, unknown> = {}) {
  console.log(
    JSON.stringify({ source: "whatsapp-sheet-sync", event, ...data })
  )
}

const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms))

function cleanForSheet(value: string, max: number): string {
  const text = value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max)

  return /^[=+\-@]/.test(text) ? "'" + text : text
}

function detectSourceCode(messageText: string) {
  const upperText = messageText.toUpperCase()

  for (const [code, attribution] of Object.entries(SOURCE_CODES)) {
    if (upperText.includes(code)) {
      const cleanMessage = messageText
        .replace(new RegExp("\\[?" + code + "\\]?", "gi"), "")
        .replace(/\s+/g, " ")
        .trim()

      return {
        attribution,
        cleanMessage,
        detectedCode: code,
      }
    }
  }

  return {
    attribution: null,
    cleanMessage: messageText,
    detectedCode: null,
  }
}

// Website quote forms build a fixed multi-line message:
//   "Hi, I need ... quote." / "Name: ..." / "Phone: ..."
// That structure only comes from our website forms, so it identifies the
// website without any tracking code in the customer's message.
const FORM_MESSAGE_PATTERN =
  /^\s*Hi, I need [^\n]{2,80}? quote\.?[ \t]*\r?\n\s*Name:[^\n]*\r?\n\s*Phone:/i

function detectFormMessage(messageText: string) {
  if (!FORM_MESSAGE_PATTERN.test(messageText)) return null
  return { source: "Website", medium: "Website" }
}

// Google Business Profile link: its pre-filled message uses this natural
// wording instead of a visible tracking code, e.g.
//   "Hi, I found you on Google Maps. I need a painting quote."
// If the customer edits the wording the match fails and the source stays blank.
const GBP_WORDING_PATTERN =
  /\bfound (?:you|bhairav painting service) on google maps\b/i

function detectWordingMessage(messageText: string) {
  if (!GBP_WORDING_PATTERN.test(messageText)) return null
  // Same values as the BPS_SRC_GBP code above
  return { source: "Google", medium: "Organic" }
}

// Exact-match recognition of the website's own WhatsApp messages.
// The list (lib/website-whatsapp-messages.ts) is generated from the website source and holds
// only messages that are specific to one service or project. A message is recognised only when
// it equals one of them after normalizing case, spaces and trailing punctuation. No fuzzy
// matching: anything edited, extended or different stays unclassified (blank).
// It sets CHANNEL only and never guesses a traffic source.
function normalizeWebsiteMessage(text: string): string {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\s+/g, " ")
    .trim()
    .replace(/[.!?\s]+$/, "")
}

const WEBSITE_MESSAGE_SET = new Set(
  WEBSITE_WHATSAPP_MESSAGES.map(normalizeWebsiteMessage)
)

function isApprovedWebsiteMessage(messageText: string): boolean {
  const normalized = normalizeWebsiteMessage(messageText)
  return normalized.length > 0 && WEBSITE_MESSAGE_SET.has(normalized)
}

// Which website entry point produced this message? Empty when the message
// itself does not prove it.
function detectChannel(messageText: string): string {
  if (FORM_MESSAGE_PATTERN.test(messageText)) return "Website Form"
  if (isApprovedWebsiteMessage(messageText)) return "Website WhatsApp"
  return ""
}

function getReferralAttribution(message: IncomingMessage) {
  const referral = message.referral

  if (!referral) return {}

  const sourceUrl = referral.sourceUrl || ""
  const lowerUrl = sourceUrl.toLowerCase()
  const sourceType = (referral.sourceType || "").toLowerCase()

  let source = ""
  let medium = ""

  if (lowerUrl.includes("instagram.com")) {
    source = "Instagram"
    medium = "paid_social"
  } else if (
    lowerUrl.includes("facebook.com") ||
    lowerUrl.includes("fb.com")
  ) {
    source = "Facebook"
    medium = "paid_social"
  } else if (sourceType.includes("ad")) {
    source = "Meta Ads"
    medium = "paid_social"
  }

  if (!source) return {}

  return {
    traffic_source: source,
    traffic_medium: medium,
    lead_source: source,
    lead_medium: medium,
    referrer: sourceUrl,
    campaign_id: referral.sourceId || "",
  }
}

export function buildSheetPayload(
  message: IncomingMessage,
  secret: string
) {
  const originalMessage = message.text || ""
  const detected = detectSourceCode(originalMessage)

  const codeAttribution = detected.attribution
    ? {
        traffic_source: detected.attribution.source,
        traffic_medium: detected.attribution.medium,
        lead_source: detected.attribution.source,
        lead_medium: detected.attribution.medium,
      }
    : {}

  const referralAttribution = getReferralAttribution(message)

  // Order of trust: explicit code > Meta ad referral > website form structure.
  // Anything we cannot identify stays blank (never guessed as Website).
  const canGuess = !detected.attribution && !referralAttribution.traffic_source
  const formMatch = canGuess ? detectFormMessage(originalMessage) : null
  const wordingMatch =
    canGuess && !formMatch ? detectWordingMessage(originalMessage) : null
  const guessedMatch = formMatch || wordingMatch

  const formAttribution = guessedMatch
    ? {
        traffic_source: guessedMatch.source,
        traffic_medium: guessedMatch.medium,
        lead_source: guessedMatch.source,
        lead_medium: guessedMatch.medium,
      }
    : {}

  const channel = detectChannel(originalMessage)

  const attributionMethod = detected.attribution
    ? "code"
    : referralAttribution.traffic_source
      ? "meta_referral"
      : formMatch
        ? "form_structure"
        : wordingMatch
          ? "message_wording"
          : channel === "Website WhatsApp"
            ? "website_exact_match"
            : ""

  return {
    secret,
    phone: message.from.replace(/\D/g, ""),
    event_id: message.messageId,
    message: cleanForSheet(
      detected.cleanMessage,
      MAX_MESSAGE_LENGTH
    ),
    timestamp: /^\d{1,12}$/.test(message.timestamp)
      ? message.timestamp
      : "",
    ...formAttribution,
    ...referralAttribution,
    ...codeAttribution,
    // Extra info only; the Apps Script ignores fields it does not know.
    attribution_method: attributionMethod,
    ...(channel ? { channel } : {}),
    ...(message.referral?.ctwaClid
      ? { ctwa_clid: message.referral.ctwaClid }
      : {}),
  }
}

async function postOnce(
  url: string,
  secret: string,
  payload: ReturnType<typeof buildSheetPayload>
): Promise<Outcome> {
  const controller = new AbortController()
  const timer = setTimeout(
    () => controller.abort(),
    REQUEST_TIMEOUT_MS
  )

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
      cache: "no-store",
      signal: controller.signal,
    })

    const text = await response.text()
    let result: Record<string, unknown> | null = null

    try {
      const parsed = JSON.parse(text)
      result =
        parsed && typeof parsed === "object" ? parsed : null
    } catch {
      result = null
    }

    if (response.ok && result?.success === true) {
      return {
        ok: true,
        duplicate: result.duplicate === true,
        enquiryNumber:
          typeof result.enquiry_number === "number"
            ? result.enquiry_number
            : undefined,
      }
    }

    const scriptMessage =
      typeof result?.message === "string"
        ? result.message.split(secret).join("[redacted]").slice(0, 120)
        : ""

    return {
      ok: false,
      status: response.status,
      reason: scriptMessage || "bad_response",
      retryable:
        result === null ||
        response.status >= 500 ||
        response.status === 429,
    }
  } catch (error) {
    return {
      ok: false,
      reason:
        error instanceof Error && error.name === "AbortError"
          ? "timeout"
          : "network_error",
      retryable: true,
    }
  } finally {
    clearTimeout(timer)
  }
}

export async function syncEnquiryToSheet(
  message: IncomingMessage
): Promise<void> {
  try {
    const url = process.env.BPS_WHATSAPP_APPS_SCRIPT_URL
    const secret = process.env.BPS_WHATSAPP_SECRET

    if (!url || !secret || !url.startsWith("https://")) {
      log("sheet_sync_config_missing", {
        messageId: message.messageId,
      })
      return
    }

    const payload = buildSheetPayload(message, secret)

    if (!payload.phone || !payload.event_id) {
      log("sheet_sync_skipped", {
        messageId: message.messageId,
        reason: "missing_phone_or_id",
      })
      return
    }

    log("source_attribution_detected", {
      messageId: message.messageId,
      source: payload.traffic_source || "Unknown",
      medium: payload.traffic_medium || "Unknown",
      method: payload.attribution_method || "none",
    })

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      const outcome = await postOnce(url, secret, payload)

      if (outcome.ok) {
        log("sheet_sync_ok", {
          messageId: message.messageId,
          duplicate: outcome.duplicate,
          enquiryNumber: outcome.enquiryNumber,
          attempt,
        })
        return
      }

      log("sheet_sync_failed", {
        messageId: message.messageId,
        attempt,
        status: outcome.status,
        reason: outcome.reason,
        willRetry: outcome.retryable && attempt < MAX_ATTEMPTS,
      })

      if (!outcome.retryable || attempt === MAX_ATTEMPTS) return

      await sleep(RETRY_DELAY_MS)
    }
  } catch (error) {
    log("sheet_sync_error", {
      messageId: message.messageId,
      error: error instanceof Error ? error.name : "unknown",
    })
  }
}
