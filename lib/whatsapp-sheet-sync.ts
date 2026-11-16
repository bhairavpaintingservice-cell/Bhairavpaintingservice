
import type { IncomingMessage } from "@/lib/whatsapp-webhook"

const REQUEST_TIMEOUT_MS = 8000
const RETRY_DELAY_MS = 1000
const MAX_ATTEMPTS = 2
const MAX_MESSAGE_LENGTH = 1000

type Outcome =
  | { ok: true; duplicate: boolean; enquiryNumber?: number }
  | { ok: false; reason: string; status?: number; retryable: boolean }

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

function getReferralAttribution(message: IncomingMessage) {
  const referral = message.referral

  if (!referral) return {}

  const sourceUrl = referral.sourceUrl.toLowerCase()
  const sourceType = referral.sourceType.toLowerCase()

  let source = ""
  let medium = ""

  if (sourceUrl.includes("instagram.com")) {
    source = "Instagram"
    medium = "paid_social"
  } else if (
    sourceUrl.includes("facebook.com") ||
    sourceUrl.includes("fb.com")
  ) {
    source = "Facebook"
    medium = "paid_social"
  } else if (sourceType.includes("ad")) {
    source = "Meta Ads"
    medium = "paid_social"
  }

  return {
    traffic_source: source,
    traffic_medium: medium,
    lead_source: source,
    lead_medium: medium,
    referrer: referral.sourceUrl,
    campaign_id: referral.sourceId,
  }
}

export function buildSheetPayload(
  message: IncomingMessage,
  secret: string
) {
  return {
    secret,
    phone: message.from.replace(/\D/g, ""),
    event_id: message.messageId,
    message: cleanForSheet(message.text, MAX_MESSAGE_LENGTH),
    timestamp: /^\d{1,12}$/.test(message.timestamp)
      ? message.timestamp
      : "",
    ...getReferralAttribution(message),
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
