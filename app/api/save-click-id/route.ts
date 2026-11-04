import { NextResponse } from "next/server"

// Saves a lead's phone number + Google Ads click IDs to the Google Apps Script (Google Sheet).
// Secrets stay on the server: BPS_APPS_SCRIPT_URL and BPS_API_SECRET (never NEXT_PUBLIC_).
// This endpoint never blocks a customer enquiry: the browser ignores its response.

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const CLICK_ID_PATTERN = /^[A-Za-z0-9_-]{6,255}$/
const FORM_NAME_PATTERN = /^[a-z0-9_-]{1,60}$/
const DEDUPE_MS = 10 * 60 * 1000
const RATE_WINDOW_MS = 10 * 60 * 1000
const RATE_MAX = 20

const recent = new Map<string, number>()
const hits = new Map<string, { count: number; start: number }>()

function reply(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status })
}

function normalizePhone(value: unknown): string | null {
  let digits = String(value ?? "").replace(/\D/g, "")
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2)
  if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1)
  return /^[6-9]\d{9}$/.test(digits) ? digits : null
}

function cleanClickId(value: unknown): string | undefined {
  return typeof value === "string" && CLICK_ID_PATTERN.test(value) ? value : undefined
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
  if (!isSameOrigin(request)) return reply({ ok: false, error: "forbidden" }, 403)

  const ip = (request.headers.get("x-forwarded-for") || "unknown").split(",")[0].trim()
  if (tooManyRequests(ip)) return reply({ ok: false, error: "rate_limited" }, 429)

  const length = Number(request.headers.get("content-length") || 0)
  if (length > 2000) return reply({ ok: false, error: "too_large" }, 413)

  let body: any
  try {
    body = await request.json()
  } catch {
    return reply({ ok: false, error: "invalid_json" }, 400)
  }

  const phone = normalizePhone(body?.phone)
  if (!phone) return reply({ ok: false, error: "invalid_phone" }, 400)

  const gclid = cleanClickId(body?.gclid)
  const gbraid = cleanClickId(body?.gbraid)
  const wbraid = cleanClickId(body?.wbraid)

  // No click ID means nothing to attribute, so nothing is sent
  if (!gclid && !gbraid && !wbraid) return reply({ ok: true, skipped: "no_click_id" })

  const formName =
    typeof body?.form_name === "string" && FORM_NAME_PATTERN.test(body.form_name) ? body.form_name : "unknown"
  const pagePath =
    typeof body?.page_path === "string" && body.page_path.startsWith("/") ? body.page_path.slice(0, 200) : ""

  const url = process.env.BPS_APPS_SCRIPT_URL
  const secret = process.env.BPS_API_SECRET
  if (!url || !secret || !url.startsWith("https://")) return reply({ ok: false, skipped: "not_configured" })

  const dedupeKey = `${phone}:${gclid || gbraid || wbraid}`
  const now = Date.now()
  if (recent.has(dedupeKey) && now - (recent.get(dedupeKey) as number) < DEDUPE_MS) {
    return reply({ ok: true, skipped: "duplicate" })
  }
  if (recent.size > 500) recent.clear()
  recent.set(dedupeKey, now)

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 8000)
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret,
        phone,
        gclid,
        gbraid,
        wbraid,
        form_name: formName,
        page_path: pagePath,
        source: "form_submit",
      }),
      redirect: "follow",
      cache: "no-store",
      signal: controller.signal,
    })
    if (!response.ok) recent.delete(dedupeKey)
    return reply({ ok: response.ok })
  } catch {
    recent.delete(dedupeKey)
    return reply({ ok: false, error: "upstream_failed" })
  } finally {
    clearTimeout(timer)
  }
}
