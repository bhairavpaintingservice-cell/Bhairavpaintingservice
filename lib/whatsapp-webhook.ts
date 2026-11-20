
import { createHmac, timingSafeEqual } from "node:crypto"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

// Meta sends this only for messages that started from a Click-to-WhatsApp ad.
// Ordinary wa.me links from the website never carry it.
export interface MessageReferral {
  sourceUrl: string
  sourceId: string
  sourceType: string
  ctwaClid: string
  headline: string
  body: string
}

export interface IncomingMessage {
  messageId: string
  from: string
  customerName: string
  type: string
  text: string
  timestamp: string
  timestampIso: string
  phoneNumberId: string
  displayPhoneNumber: string
  referral?: MessageReferral
}

export interface StatusUpdate {
  messageId: string
  status: string
  recipientId: string
  timestamp: string
  timestampIso: string
  phoneNumberId: string
  errorCode?: string
  errorTitle?: string
}

// ---------------------------------------------------------------------------
// Security
// ---------------------------------------------------------------------------

export function safeEqual(a: string, b: string): boolean {
  const bufferA = Buffer.from(a, "utf8")
  const bufferB = Buffer.from(b, "utf8")

  if (bufferA.length !== bufferB.length) {
    return false
  }

  return timingSafeEqual(bufferA, bufferB)
}

// ---------------------------------------------------------------------------
// WhatsApp signature verification
// ---------------------------------------------------------------------------

export function verifySignature(
  rawBody: Buffer,
  signature: string | null,
  appSecret: string
): boolean {
  if (!signature || !appSecret) {
    return false
  }

  const expectedSignature =
    "sha256=" +
    createHmac("sha256", appSecret)
      .update(rawBody)
      .digest("hex")

  return safeEqual(signature, expectedSignature)
}

// ---------------------------------------------------------------------------
// Duplicate event protection
// ---------------------------------------------------------------------------

const SEEN_TTL = 24 * 60 * 60 * 1000
const MAX_SEEN = 5000

const seenEvents = new Map<string, number>()

function cleanSeenEvents() {
  const now = Date.now()

  for (const [key, timestamp] of seenEvents) {
    if (now - timestamp > SEEN_TTL) {
      seenEvents.delete(key)
    }
  }

  while (seenEvents.size > MAX_SEEN) {
    const oldestKey = seenEvents.keys().next().value

    if (!oldestKey) break

    seenEvents.delete(oldestKey)
  }
}

export function hasSeen(key: string): boolean {
  const timestamp = seenEvents.get(key)

  if (!timestamp) return false

  if (Date.now() - timestamp > SEEN_TTL) {
    seenEvents.delete(key)
    return false
  }

  return true
}

export function markSeen(key: string): void {
  cleanSeenEvents()
  seenEvents.set(key, Date.now())
}

export function messageKey(messageId: string): string {
  return `message:${messageId}`
}

export function statusKey(
  messageId: string,
  status: string
): string {
  return `status:${messageId}:${status}`
}

// ---------------------------------------------------------------------------
// Phone number masking
// ---------------------------------------------------------------------------

export function maskPhone(phone: string): string {
  if (!phone) return ""

  if (phone.length <= 4) {
    return "****"
  }

  return `${"*".repeat(phone.length - 4)}${phone.slice(-4)}`
}

// ---------------------------------------------------------------------------
// Payload parsing helpers
// ---------------------------------------------------------------------------

function asObject(value: unknown): Record<string, any> {
  if (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value)
  ) {
    return value as Record<string, any>
  }

  return {}
}

function asString(value: unknown): string {
  return typeof value === "string" || typeof value === "number"
    ? String(value)
    : ""
}

function timestampToIso(timestamp: string): string {
  const seconds = Number(timestamp)

  if (!Number.isFinite(seconds) || seconds <= 0) {
    return ""
  }

  return new Date(seconds * 1000).toISOString()
}

// ---------------------------------------------------------------------------
// Extract WhatsApp message text
// ---------------------------------------------------------------------------

function extractMessageText(message: Record<string, any>): string {
  const type = asString(message.type)

  switch (type) {
    case "text":
      return asString(message.text?.body)

    case "button":
      return asString(message.button?.text)

    case "interactive": {
      const interactive = asObject(message.interactive)

      return (
        asString(interactive.button_reply?.title) ||
        asString(interactive.list_reply?.title) ||
        ""
      )
    }

    default:
      return ""
  }
}

// ---------------------------------------------------------------------------
// Parse Meta webhook payload
// ---------------------------------------------------------------------------

export function parseWebhookPayload(payload: unknown): {
  messages: IncomingMessage[]
  statuses: StatusUpdate[]
} {
  const messages: IncomingMessage[] = []
  const statuses: StatusUpdate[] = []

  const root = asObject(payload)
  const entries = Array.isArray(root.entry) ? root.entry : []

  for (const entryValue of entries) {
    const entry = asObject(entryValue)
    const changes = Array.isArray(entry.changes)
      ? entry.changes
      : []

    for (const changeValue of changes) {
      const change = asObject(changeValue)
      const value = asObject(change.value)
      const metadata = asObject(value.metadata)

      const phoneNumberId = asString(metadata.phone_number_id)
      const displayPhoneNumber = asString(
        metadata.display_phone_number
      )

      const contacts = Array.isArray(value.contacts)
        ? value.contacts
        : []

      const contactNames = new Map<string, string>()

      for (const contactValue of contacts) {
        const contact = asObject(contactValue)
        const profile = asObject(contact.profile)

        const waId = asString(contact.wa_id)
        const name = asString(profile.name)

        if (waId && name) {
          contactNames.set(waId, name)
        }
      }

      const incoming = Array.isArray(value.messages)
        ? value.messages
        : []

      for (const messageValue of incoming) {
        const message = asObject(messageValue)

        const messageId = asString(message.id)
        const from = asString(message.from)
        const timestamp = asString(message.timestamp)
        const type = asString(message.type)

        if (!messageId || !from) continue

        const referralRaw = asObject(message.referral)
        const referral: MessageReferral | undefined =
          Object.keys(referralRaw).length > 0
            ? {
                sourceUrl: asString(referralRaw.source_url),
                sourceId: asString(referralRaw.source_id),
                sourceType: asString(referralRaw.source_type),
                ctwaClid: asString(referralRaw.ctwa_clid),
                headline: asString(referralRaw.headline),
                body: asString(referralRaw.body),
              }
            : undefined

        messages.push({
          messageId,
          from,
          customerName: contactNames.get(from) || "",
          type,
          text: extractMessageText(message),
          timestamp,
          timestampIso: timestampToIso(timestamp),
          phoneNumberId,
          displayPhoneNumber,
          ...(referral ? { referral } : {}),
        })
      }

      const statusUpdates = Array.isArray(value.statuses)
        ? value.statuses
        : []

      for (const statusValue of statusUpdates) {
        const status = asObject(statusValue)
        const messageId = asString(status.id)
        const statusName = asString(status.status)
        const recipientId = asString(status.recipient_id)
        const timestamp = asString(status.timestamp)

        if (!messageId || !statusName) continue

        const errors = Array.isArray(status.errors)
          ? status.errors
          : []

        const firstError = asObject(errors[0])
        const errorData = asObject(firstError.error_data)

        statuses.push({
          messageId,
          status: statusName,
          recipientId,
          timestamp,
          timestampIso: timestampToIso(timestamp),
          phoneNumberId,
          ...(firstError.code !== undefined
            ? { errorCode: asString(firstError.code) }
            : {}),
          ...(firstError.title || errorData.details
            ? {
                errorTitle: asString(
                  firstError.title || errorData.details
                ),
              }
            : {}),
        })
      }
    }
  }

  return { messages, statuses }
}
