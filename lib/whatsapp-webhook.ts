
import { createHash, createHmac, timingSafeEqual } from "crypto"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type WhatsAppAttribution = {
  source: string
  medium: string
  sourceCode: string
}

export type IncomingMessage = {
  messageId: string
  from: string
  customerName: string
  type: string
  text: string
  timestamp: string
  timestampIso: string
  phoneNumberId: string
  displayPhoneNumber: string
  referral?: {
    sourceUrl: string
    sourceType: string
    sourceId: string
    headline: string
    body: string
    ctwaClid: string
  }
  attribution?: WhatsAppAttribution
}

export type StatusUpdate = {
  messageId: string
  status: string
  recipientId: string
  timestamp: string
  timestampIso: string
  phoneNumberId: string
  errorCode?: number
  errorTitle?: string
}

export type ParsedWebhook = {
  messages: IncomingMessage[]
  statuses: StatusUpdate[]
}

// ---------------------------------------------------------------------------
// Security helpers
// ---------------------------------------------------------------------------

export function verifySignature(
  rawBody: Buffer,
  header: string | null,
  appSecret: string
): boolean {
  if (!header || !appSecret) return false

  const match = /^sha256=([0-9a-f]{64})$/i.exec(header.trim())
  if (!match) return false

  const expected = createHmac("sha256", appSecret).update(rawBody).digest()
  const received = Buffer.from(match[1], "hex")

  return (
    received.length === expected.length && timingSafeEqual(received, expected)
  )
}

export function safeEqual(a: string, b: string): boolean {
  const ha = createHash("sha256").update(a).digest()
  const hb = createHash("sha256").update(b).digest()
  return timingSafeEqual(ha, hb)
}

// ---------------------------------------------------------------------------
// Duplicate protection
// ---------------------------------------------------------------------------

const SEEN_TTL_MS = 24 * 60 * 60 * 1000
const SEEN_MAX = 5000
const seen = new Map<string, number>()

function prune(now: number) {
  if (seen.size <= SEEN_MAX) return

  for (const [key, time] of seen) {
    if (now - time > SEEN_TTL_MS) seen.delete(key)
  }

  if (seen.size > SEEN_MAX) {
    let toDrop = seen.size - SEEN_MAX

    for (const key of seen.keys()) {
      seen.delete(key)
      if (--toDrop <= 0) break
    }
  }
}

export function hasSeen(key: string): boolean {
  const time = seen.get(key)
  return typeof time === "number" && Date.now() - time < SEEN_TTL_MS
}

export function markSeen(key: string) {
  const now = Date.now()
  seen.set(key, now)
  prune(now)
}

export const messageKey = (id: string) => `msg:${id}`

export const statusKey = (id: string, status: string) =>
  `status:${id}:${status}`

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value)
}

function str(value: unknown, max: number): string {
  const text =
    typeof value === "string"
      ? value
      : typeof value === "number"
        ? String(value)
        : ""

  return text
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, " ")
    .trim()
    .slice(0, max)
}

function toIso(unixSeconds: string): string {
  const n = Number(unixSeconds)
  if (!Number.isFinite(n) || n <= 0) return ""

  const date = new Date(n * 1000)
  return Number.isNaN(date.getTime()) ? "" : date.toISOString()
}

export function maskPhone(phone: string): string {
  if (phone.length <= 4) return "****"
  return `${"*".repeat(phone.length - 4)}${phone.slice(-4)}`
}

// ---------------------------------------------------------------------------
// BPS source-code attribution
// ---------------------------------------------------------------------------

function extractAttribution(text: string): WhatsAppAttribution | undefined {
  const match = /\bBPS_SRC_(GBP|GADS|WEB|IG|FB)\b/i.exec(text)

  if (!match) return undefined

  const code = match[1].toUpperCase()

  const sources: Record<string, { source: string; medium: string }> = {
    GBP: { source: "Google", medium: "organic" },
    GADS: { source: "Google", medium: "cpc" },
    WEB: { source: "Website", medium: "referral" },
    IG: { source: "Instagram", medium: "social" },
    FB: { source: "Facebook", medium: "social" },
  }

  const result = sources[code]

  if (!result) return undefined

  return {
    source: result.source,
    medium: result.medium,
    sourceCode: `BPS_SRC_${code}`,
  }
}

function removeAttributionCode(text: string): string {
  return text
    .replace(/\s*\(?BPS_SRC_(GBP|GADS|WEB|IG|FB)\)?\s*/gi, " ")
    .replace(/\s+/g, " ")
    .trim()
}

// ---------------------------------------------------------------------------
// Referral information from Meta
// ---------------------------------------------------------------------------

function extractReferral(
  message: Record<string, unknown>
): IncomingMessage["referral"] {
  if (!isRecord(message.referral)) return undefined

  const referral = message.referral

  const result = {
    sourceUrl: str(referral.source_url, 1000),
    sourceType: str(referral.source_type, 100),
    sourceId: str(referral.source_id, 200),
    headline: str(referral.headline, 500),
    body: str(referral.body, 1000),
    ctwaClid: str(referral.ctwa_clid, 500),
  }

  return Object.values(result).some(Boolean) ? result : undefined
}

// ---------------------------------------------------------------------------
// Message text extraction
// ---------------------------------------------------------------------------

function extractText(
  message: Record<string, unknown>,
  type: string
): string {
  const part = (key: string): Record<string, unknown> => {
    const value = message[key]
    return isRecord(value) ? value : {}
  }

  switch (type) {
    case "text":
      return str(part("text").body, 4096)

    case "image":
    case "video":
    case "document":
      return str(part(type).caption, 1024)

    case "button":
      return str(part("button").text, 200)

    case "interactive": {
      const interactive = part("interactive")

      const reply = isRecord(interactive.button_reply)
        ? interactive.button_reply
        : isRecord(interactive.list_reply)
          ? interactive.list_reply
          : {}

      return str(reply.title, 200)
    }

    case "reaction":
      return str(part("reaction").emoji, 20)

    default:
      return ""
  }
}

// ---------------------------------------------------------------------------
// Webhook parser
// ---------------------------------------------------------------------------

export function parseWebhookPayload(payload: unknown): ParsedWebhook {
  const result: ParsedWebhook = { messages: [], statuses: [] }

  if (
    !isRecord(payload) ||
    payload.object !== "whatsapp_business_account" ||
    !Array.isArray(payload.entry)
  ) {
    return result
  }

  for (const entry of payload.entry) {
    if (!isRecord(entry) || !Array.isArray(entry.changes)) continue

    for (const change of entry.changes) {
      if (
        !isRecord(change) ||
        change.field !== "messages" ||
        !isRecord(change.value)
      ) {
        continue
      }

      const value = change.value
      const metadata = isRecord(value.metadata) ? value.metadata : {}

      const phoneNumberId = str(metadata.phone_number_id, 40)
      const displayPhoneNumber = str(metadata.display_phone_number, 40)

      const names = new Map<string, string>()

      if (Array.isArray(value.contacts)) {
        for (const contact of value.contacts) {
          if (!isRecord(contact)) continue

          const waId = str(contact.wa_id, 40)
          const profile = isRecord(contact.profile) ? contact.profile : {}

          if (waId) names.set(waId, str(profile.name, 100))
        }
      }

      if (Array.isArray(value.messages)) {
        for (const raw of value.messages) {
          if (!isRecord(raw)) continue

          const messageId = str(raw.id, 200)
          const from = str(raw.from, 40)

          if (!messageId || !from) continue

          const type = str(raw.type, 30) || "unknown"
          const timestamp = str(raw.timestamp, 20)

          const originalText = extractText(raw, type)
          const attribution = extractAttribution(originalText)

          result.messages.push({
            messageId,
            from,
            customerName: names.get(from) ?? "",
            type,

            // Tracking code is removed from saved customer notes.
            text: attribution
              ? removeAttributionCode(originalText)
              : originalText,

            timestamp,
            timestampIso: toIso(timestamp),
            phoneNumberId,
            displayPhoneNumber,
            referral: extractReferral(raw),
            attribution,
          })
        }
      }

      if (Array.isArray(value.statuses)) {
        for (const raw of value.statuses) {
          if (!isRecord(raw)) continue

          const messageId = str(raw.id, 200)
          const status = str(raw.status, 30)

          if (!messageId || !status) continue

          const timestamp = str(raw.timestamp, 20)

          const firstError =
            Array.isArray(raw.errors) && isRecord(raw.errors[0])
              ? raw.errors[0]
              : null

          result.statuses.push({
            messageId,
            status,
            recipientId: str(raw.recipient_id, 40),
            timestamp,
            timestampIso: toIso(timestamp),
            phoneNumberId,

            errorCode:
              firstError && typeof firstError.code === "number"
                ? firstError.code
                : undefined,

            errorTitle: firstError
              ? str(firstError.title, 200)
              : undefined,
          })
        }
      }
    }
  }

  return result
}
