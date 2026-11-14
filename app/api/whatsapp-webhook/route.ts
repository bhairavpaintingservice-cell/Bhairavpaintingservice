import { NextRequest, NextResponse } from "next/server"
import {
  hasSeen,
  markSeen,
  maskPhone,
  messageKey,
  parseWebhookPayload,
  safeEqual,
  statusKey,
  verifySignature,
  type IncomingMessage,
  type StatusUpdate,
} from "@/lib/whatsapp-webhook"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const MAX_BODY_BYTES = 1_000_000

// ---------------------------------------------------------------------------
// Safe logging
//
// Only parsed customer/event fields are ever logged. Headers, environment
// variables, the raw body, the App Secret, the Verify Token and any access
// token are NEVER logged. By default the customer's number is masked and the
// message text is not logged (only its length). Set WHATSAPP_DEBUG_LOG=true
// in Vercel while testing to see the full number and text.
// ---------------------------------------------------------------------------

function log(event: string, data: Record<string, unknown> = {}) {
  console.log(JSON.stringify({ source: "whatsapp-webhook", event, ...data }))
}

const debugEnabled = () => process.env.WHATSAPP_DEBUG_LOG === "true"

// ---------------------------------------------------------------------------
// Handlers (incoming messages and status updates are handled separately)
// ---------------------------------------------------------------------------

async function handleIncomingMessage(message: IncomingMessage) {
  const debug = debugEnabled()

  log("message_received", {
    messageId: message.messageId,
    from: debug ? message.from : maskPhone(message.from),
    customerName: debug ? message.customerName : undefined,
    type: message.type,
    text: debug ? message.text : undefined,
    textLength: message.text.length,
    timestamp: message.timestamp,
    timestampIso: message.timestampIso,
    phoneNumberId: message.phoneNumberId,
    displayPhoneNumber: message.displayPhoneNumber,
  })

  // Final stage (later): save the lead to Google Sheets here,
  // de-duplicating by message.messageId.
}

async function handleStatusUpdate(status: StatusUpdate) {
  const debug = debugEnabled()

  log("status_update", {
    messageId: status.messageId,
    status: status.status,
    recipient: debug ? status.recipientId : maskPhone(status.recipientId),
    timestamp: status.timestamp,
    timestampIso: status.timestampIso,
    phoneNumberId: status.phoneNumberId,
    errorCode: status.errorCode,
    errorTitle: status.errorTitle,
  })
}

// ---------------------------------------------------------------------------
// GET: Meta webhook verification
// ---------------------------------------------------------------------------

export async function GET(request: NextRequest) {
  const verifyToken = process.env.WHATSAPP_VERIFY_TOKEN

  if (!verifyToken) {
    log("config_missing", { variable: "WHATSAPP_VERIFY_TOKEN" })
    return NextResponse.json(
      { error: "Server configuration missing" },
      { status: 503 }
    )
  }

  const params = request.nextUrl.searchParams
  const mode = params.get("hub.mode")
  const token = params.get("hub.verify_token")
  const challenge = params.get("hub.challenge")

  if (mode === "subscribe" && token && challenge && safeEqual(token, verifyToken)) {
    log("verification_ok")
    return new NextResponse(challenge, {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
    })
  }

  log("verification_failed")
  return NextResponse.json({ error: "Forbidden" }, { status: 403 })
}

// ---------------------------------------------------------------------------
// POST: incoming messages and status updates
// ---------------------------------------------------------------------------

export async function POST(request: NextRequest) {
  const appSecret = process.env.WHATSAPP_APP_SECRET

  if (!appSecret) {
    log("config_missing", { variable: "WHATSAPP_APP_SECRET" })
    return NextResponse.json(
      { error: "Server configuration missing" },
      { status: 503 }
    )
  }

  // Raw bytes are required: the signature is calculated on the exact body.
  const rawBody = Buffer.from(await request.arrayBuffer())

  if (rawBody.length > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "Payload too large" }, { status: 413 })
  }

  const signature = request.headers.get("x-hub-signature-256")

  if (!verifySignature(rawBody, signature, appSecret)) {
    log("signature_invalid", { bodyBytes: rawBody.length })
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
  }

  // From here on the request is confirmed to come from Meta.
  // We always answer 200 so Meta does not keep retrying.
  let payload: unknown
  try {
    payload = JSON.parse(rawBody.toString("utf8"))
  } catch {
    log("payload_not_json")
    return NextResponse.json({ status: "ignored" }, { status: 200 })
  }

  const { messages, statuses } = parseWebhookPayload(payload)

  let processed = 0
  let duplicates = 0

  for (const message of messages) {
    const key = messageKey(message.messageId)

    if (hasSeen(key)) {
      duplicates++
      log("duplicate_ignored", { kind: "message", messageId: message.messageId })
      continue
    }

    try {
      await handleIncomingMessage(message)
      markSeen(key)
      processed++
    } catch (error) {
      log("handler_error", {
        kind: "message",
        messageId: message.messageId,
        error: error instanceof Error ? error.name : "unknown",
      })
    }
  }

  for (const status of statuses) {
    const key = statusKey(status.messageId, status.status)

    if (hasSeen(key)) {
      duplicates++
      log("duplicate_ignored", {
        kind: "status",
        messageId: status.messageId,
        status: status.status,
      })
      continue
    }

    try {
      await handleStatusUpdate(status)
      markSeen(key)
      processed++
    } catch (error) {
      log("handler_error", {
        kind: "status",
        messageId: status.messageId,
        error: error instanceof Error ? error.name : "unknown",
      })
    }
  }

  if (messages.length === 0 && statuses.length === 0) {
    log("no_supported_events")
  }

  return NextResponse.json({ status: "ok", processed, duplicates }, { status: 200 })
}
