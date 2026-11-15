import type { IncomingMessage } from "@/lib/whatsapp-webhook"

// ---------------------------------------------------------------------------
// Sends an incoming WhatsApp text enquiry to the "BPS WhatsApp CRM" Google
// Apps Script, which saves it to the QUALIFIED_LEAD_DATA sheet.
//
// The Apps Script decides whether the customer is new: it skips a message if
// the phone number (last 10 digits) or the WhatsApp message ID (EVENT_ID)
// already exists in the sheet, so only the first enquiry per customer is saved.
//
// Environment variables (Vercel):
//   BPS_WHATSAPP_APPS_SCRIPT_URL  the Apps Script web app (/exec) URL
//   BPS_WHATSAPP_SECRET           shared secret, must match the Script Property
//                                 of the same name in the Apps Script
//
// Nothing in this file logs the URL, the secret, the full phone number or the
// customer's message text.
// ---------------------------------------------------------------------------

const REQUEST_TIMEOUT_MS = 8000
const RETRY_DELAY_MS = 1000
const MAX_ATTEMPTS = 2 // first try + one retry for temporary failures
const MAX_MESSAGE_LENGTH = 1000

type Outcome =
  | { ok: true; duplicate: boolean; enquiryNumber?: number }
  | { ok: false; reason: string; status?: number; retryable: boolean }

function log(event: string, data: Record<string, unknown> = {}) {
  console.log(
    JSON.stringify({ source: "whatsapp-sheet-sync", event, ...data })
  )
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Same cleaning rules as the website lead route: no control characters, single
// spaces, and a leading ' so Google Sheets never treats text as a formula.
function cleanForSheet(value: string, max: number): string {
  const text = value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max)

  return /^[=+\-@]/.test(text) ? "'" + text : text
}

export function buildSheetPayload(message: IncomingMessage, secret: string) {
  return {
    secret,
    phone: message.from.replace(/\D/g, ""), // customer WhatsApp number
    event_id: message.messageId, // original WhatsApp message ID (wamid)
    message: cleanForSheet(message.text, MAX_MESSAGE_LENGTH),
    // Original WhatsApp timestamp in unix seconds, as the Apps Script expects.
    timestamp: /^\d{1,12}$/.test(message.timestamp) ? message.timestamp : "",
  }
}

async function postOnce(
  url: string,
  secret: string,
  payload: ReturnType<typeof buildSheetPayload>
): Promise<Outcome> {
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS)

  try {
    // Apps Script web apps answer a POST with a redirect to the result page,
    // so redirects must be followed.
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
      result = parsed && typeof parsed === "object" ? parsed : null
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

    // The script answers HTTP 200 with success:false for rejected requests
    // (wrong secret, missing fields...). Retrying would not help.
    const scriptMessage =
      typeof result?.message === "string"
        ? result.message.split(secret).join("[redacted]").slice(0, 120)
        : ""

    return {
      ok: false,
      status: response.status,
      reason: scriptMessage || "bad_response",
      retryable: result === null || response.status >= 500 || response.status === 429,
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

/**
 * Never throws. Failures are logged and the enquiry is simply not saved; the
 * WhatsApp webhook has already answered Meta with 200 by the time this runs.
 */
export async function syncEnquiryToSheet(
  message: IncomingMessage
): Promise<void> {
  try {
    const url = process.env.BPS_WHATSAPP_APPS_SCRIPT_URL
    const secret = process.env.BPS_WHATSAPP_SECRET

    if (!url || !secret || !url.startsWith("https://")) {
      log("sheet_sync_config_missing", { messageId: message.messageId })
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
