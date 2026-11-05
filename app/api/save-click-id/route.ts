import { NextResponse } from "next/server"
import { randomUUID } from "crypto"
import { ATTRIBUTION_PAYLOAD_KEYS, deriveSheetFields } from "@/lib/attribution"

// Sends a website lead (phone, name, service, location + Google Ads click IDs) to the
// Google Apps Script web app, which creates / updates the lead in Google Sheets.
// Secrets stay on the server: BPS_APPS_SCRIPT_URL and BPS_API_SECRET (never NEXT_PUBLIC_).
// The browser ignores this endpoint's response, so a failure here never blocks an enquiry
// or the WhatsApp redirect.

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const CLICK_ID_PATTERN = /^[A-Za-z0-9_-]{6,255}$/
const FORM_NAME_PATTERN = /^[a-z0-9_-]{1,60}$/
const EVENT_ID_PATTERN = /^[A-Za-z0-9_-]{8,64}$/
const DEDUPE_MS = 10 * 60 * 1000
const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX = 20

const recent = new Map<string, number>()
const hits = new Map<string, { count: number; start: number }>()

function reply(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status })
}

// Always a 10 digit Indian mobile number (accepts +91 / 91 / 0 prefixes)
function normalizePhone(value: unknown): string | null {
  let digits = String(value ?? "").replace(/\D/g, "")
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2)
  if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1)
  return /^[6-9]\d{9}$/.test(digits) ? digits : null
}

function cleanClickId(value: unknown): string {
  return typeof value === "string" && CLICK_ID_PATTERN.test(value) ? value : ""
}

// Plain text only: strips control characters, limits length, and stops a leading = + - @
// from being treated as a formula when the value is written into Google Sheets.
function cleanText(value: unknown, max: number): string {
  const text = String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max)
  return /^[=+\-@]/.test(text) ? "'" + text : text
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin")
  const host = request.headers.get("x-forwarded-host") || request.headers.get("host")
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
  if (!entry || now - entry.start > RATE_WINDOW_MS) {
    hits.set(ip, { count: 1, start: now })
    return false
  }
  entry.count += 1
  return entry.count > RATE_MAX
}

export async function POST(request: Request) {
  if (!isSameOrigin(request)) return reply({ success: false, message: "Forbidden" }, 403)

  const ip = (request.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim()
  if (tooManyRequests(ip)) return reply({ success: false, message: "Too many requests" }, 429)

  const length = Number(request.headers.get("content-length") || 0)
  if (length > 4000) return reply({ success: false, message: "Request too large" }, 413)

  let data: any
  try {
    data = await request.json()
  } catch {
    return reply({ success: false, message: "Invalid request" }, 400)
  }

  const phone = normalizePhone(data?.phone)
  if (!phone) return reply({ success: false, message: "Valid Indian phone number required" }, 400)

  const url = process.env.BPS_APPS_SCRIPT_URL
  const secret = process.env.BPS_API_SECRET
  if (!url || !secret || !url.startsWith("https://")) {
    return reply({ success: false, message: "Server configuration missing" }, 503)
  }

  const formName =
    typeof data?.form_name === "string" && FORM_NAME_PATTERN.test(data.form_name) ? data.form_name : ""
  const pagePath =
    typeof data?.page_path === "string" && data.page_path.startsWith("/") ? data.page_path.slice(0, 200) : ""
  const clientEventId =
    typeof data?.event_id === "string" && EVENT_ID_PATTERN.test(data.event_id) ? data.event_id : ""
  const eventId = clientEventId || randomUUID()

  // Same event_id (a retry or double request) is never sent twice
  const dedupeKey = clientEventId ? `event:${clientEventId}` : `lead:${phone}:${formName}`
  const now = Date.now()
  if (recent.has(dedupeKey) && now - (recent.get(dedupeKey) as number) < DEDUPE_MS) {
    return reply({ success: true, message: "Lead already synced" })
  }
  if (recent.size > 500) recent.clear()
  recent.set(dedupeKey, now)

  // Lead attribution (latest touch + first_ prefixed first touch): plain text only, length limited
  const attribution: Record<string, string> = {}
  for (const key of ATTRIBUTION_PAYLOAD_KEYS) {
    const long = key.endsWith("landing_page") || key.endsWith("referrer")
    attribution[key] = cleanText(data?.[key], long ? 300 : 100)
  }

  // The Apps Script fills LEAD TYPE / TRAFFIC SOURCE / TRAFFIC MEDIUM from these three names
  const sheetFields = deriveSheetFields(attribution)

  const payload = {
    secret,
    phone,
    name: cleanText(data?.name, 100),
    service: cleanText(data?.service ?? data?.service_name, 100),
    location: cleanText(data?.location, 200),
    source: "website_form",
    form_name: formName,
    page_path: pagePath,
    event_id: eventId,
    gclid: cleanClickId(data?.gclid),
    gbraid: cleanClickId(data?.gbraid),
    wbraid: cleanClickId(data?.wbraid),
    ...attribution,
    ...sheetFields,
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 8000)
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      redirect: "follow",
      cache: "no-store",
      signal: controller.signal,
    })

    let result: any = null
    try {
      result = JSON.parse(await response.text())
    } catch {}

    if (!response.ok || result?.success !== true) {
      recent.delete(dedupeKey)
      console.error("save-click-id: Apps Script sync failed, status", response.status)
      return reply({ success: false, message: "Lead sync failed" }, 502)
    }
    return reply({ success: true, message: "Lead synced successfully" })
  } catch {
    recent.delete(dedupeKey)
    console.error("save-click-id: Apps Script request failed")
    return reply({ success: false, message: "Unable to sync lead" }, 502)
  } finally {
    clearTimeout(timer)
  }
}
