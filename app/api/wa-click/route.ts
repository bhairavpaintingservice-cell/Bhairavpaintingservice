import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Records that a visitor tapped a website WhatsApp link.
// No phone number or personal data is received or stored: WhatsApp does not
// tell the website who the visitor is, so this is for counting clicks only.
// It is NOT used to label individual incoming messages as "Website".
// For now each click is written as one structured line to the Vercel logs.

const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX = 60
const hits = new Map<string, { count: number; start: number }>()

function cleanText(value: unknown, max: number): string {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max)
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin")
  const host =
    request.headers.get("x-forwarded-host") || request.headers.get("host")

  if (origin && host) {
    try {
      return new URL(origin).host === host
    } catch {
      return false
    }
  }

  return request.headers.get("sec-fetch-site") === "same-origin"
}

function tooManyRequests(ip: string): boolean {
  const now = Date.now()
  const entry = hits.get(ip)

  if (hits.size > 1000) hits.clear()

  if (!entry || now - entry.start > RATE_WINDOW_MS) {
    hits.set(ip, { count: 1, start: now })
    return false
  }

  entry.count += 1
  return entry.count > RATE_MAX
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json({ success: false }, { status: 403 })
  }

  const ip = (request.headers.get("x-forwarded-for") || "unknown")
    .split(",")[0]
    .trim()

  if (tooManyRequests(ip)) {
    return NextResponse.json({ success: false }, { status: 429 })
  }

  if (Number(request.headers.get("content-length") || 0) > 2000) {
    return NextResponse.json({ success: false }, { status: 413 })
  }

  let data: Record<string, unknown> = {}
  try {
    const parsed = await request.json()
    if (parsed && typeof parsed === "object") data = parsed
  } catch {
    return NextResponse.json({ success: false }, { status: 400 })
  }

  const pagePath = cleanText(data.page_path, 300)

  console.log(
    JSON.stringify({
      source: "wa-click",
      event: "whatsapp_link_click",
      page_path: pagePath.startsWith("/") ? pagePath : "",
      link_text: cleanText(data.link_text, 60),
      lead_source: cleanText(data.lead_source, 150),
      lead_medium: cleanText(data.lead_medium, 150),
      campaign_name: cleanText(data.campaign_name, 150),
      campaign_id: cleanText(data.campaign_id, 150),
    })
  )

  return NextResponse.json({ success: true })
}
