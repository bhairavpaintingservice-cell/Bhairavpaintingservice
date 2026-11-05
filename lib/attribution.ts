// Lead attribution: where did the visitor come from?
// Captured once per page load (landing page), stored for 90 days in localStorage as
// a first touch (never replaced) and a latest touch (replaced only by a real, non-direct visit).
// No personal data is stored here. Nothing in this file reads or sends a phone number.

export type Touch = {
  lead_source: string
  lead_medium: string
  campaign_name: string
  campaign_id: string
  landing_page: string
  referrer: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  utm_term: string
  ts?: number
}

export type StoredAttribution = {
  first?: Touch
  latest?: Touch
}

export const ATTRIBUTION_KEY = "bps_attribution"
const ATTRIBUTION_DAYS = 90

export const TOUCH_FIELDS = [
  "lead_source",
  "lead_medium",
  "campaign_name",
  "campaign_id",
  "landing_page",
  "referrer",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const

// Keys sent to the server / Google Sheet: latest touch as-is, first touch with a first_ prefix
export const ATTRIBUTION_PAYLOAD_KEYS: string[] = [
  ...TOUCH_FIELDS,
  ...TOUCH_FIELDS.map((field) => "first_" + field),
]

const SOCIAL_DOMAINS = [
  "facebook.com", "fb.com", "fb.me", "instagram.com", "youtube.com", "youtu.be", "linkedin.com",
  "lnkd.in", "twitter.com", "x.com", "t.co", "pinterest.com", "pin.it", "reddit.com", "quora.com",
  "threads.net", "t.me", "telegram.org", "whatsapp.com", "wa.me", "snapchat.com", "tiktok.com",
]
const SEARCH_DOMAINS = [
  "bing.com", "yahoo.com", "duckduckgo.com", "ecosia.org", "baidu.com", "yandex.com", "yandex.ru",
  "brave.com", "startpage.com", "ask.com",
]
const SOCIAL_NAMES = [
  "facebook", "fb", "instagram", "ig", "youtube", "linkedin", "twitter", "x", "pinterest", "reddit",
  "quora", "threads", "telegram", "whatsapp", "snapchat", "tiktok",
]
const GBP_NAMES = [
  "gbp", "gmb", "google_business_profile", "google-business-profile", "googlebusinessprofile",
  "google_my_business", "google-my-business", "googlemybusiness", "google_maps", "google-maps",
  "googlemaps", "google_business", "google-business",
]
const GBP_REFERRER_HOSTS = ["maps.google.com", "business.google.com", "g.page", "maps.app.goo.gl"]
const PAID_MEDIUM = /^(cpc|ppc|paid|paidsearch|paid_search|paid-search|cpm|cpv|cpa|display|paid_social|paid-social|paidsocial)$/
const PAID_SOCIAL_MEDIUM = /^(paid_social|paid-social|paidsocial)$/
const SOCIAL_MEDIUM = /^(social|social-network|social-media|social_media|sm)$/
const EMAIL_MEDIUM = /^(email|e-mail|e_mail|newsletter)$/
const ANDROID_APP_REFERRERS: Record<string, string> = {
  "com.google.android.googlequicksearchbox": "google",
  "com.google.android.apps.maps": "gbp",
  "com.facebook.katana": "social",
  "com.facebook.lite": "social",
  "com.instagram.android": "social",
  "com.whatsapp": "social",
  "com.linkedin.android": "social",
  "com.twitter.android": "social",
  "com.google.android.youtube": "social",
}

function parseUrl(value: string): URL | null {
  try {
    return new URL(value)
  } catch {
    return null
  }
}

function hostOf(url: URL | null): string {
  return url ? url.hostname.toLowerCase().replace(/^www\./, "") : ""
}

function inDomains(host: string, list: string[]): boolean {
  return !!host && list.some((domain) => host === domain || host.endsWith("." + domain))
}

function isGoogleHost(host: string): boolean {
  return /(^|\.)google\.[a-z]{2,3}(\.[a-z]{2})?$/.test(host)
}

function clean(value: string | null | undefined, max = 100): string {
  return String(value ?? "")
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max)
}

const isNumeric = (value: string) => /^\d+$/.test(value)

type Signals = {
  hasClickId: boolean
  utmSource: string
  utmMedium: string
  utmCampaign: string
  referrer: URL | null
}

function classify(sig: Signals): { lead_source: string; lead_medium: string } {
  const src = sig.utmSource.toLowerCase()
  const med = sig.utmMedium.toLowerCase()
  const camp = sig.utmCampaign.toLowerCase()

  const isAppReferrer = sig.referrer?.protocol === "android-app:"
  const refApp = isAppReferrer && sig.referrer ? ANDROID_APP_REFERRERS[sig.referrer.hostname.toLowerCase()] || "" : ""
  const refHost = sig.referrer && /^https?:$/.test(sig.referrer.protocol) ? hostOf(sig.referrer) : ""
  const refPath = sig.referrer ? sig.referrer.pathname.toLowerCase() : ""

  // 1. Google Ads: an ads click ID (gclid / gbraid / wbraid) is the strongest signal
  if (sig.hasClickId) return { lead_source: "Google Ads", lead_medium: "cpc" }

  // 2. Other paid traffic tagged with UTM
  if (PAID_MEDIUM.test(med)) {
    if (PAID_SOCIAL_MEDIUM.test(med) || SOCIAL_NAMES.includes(src)) return { lead_source: "Paid Social", lead_medium: "paid_social" }
    if (["google", "adwords", "google_ads", "googleads"].includes(src)) return { lead_source: "Google Ads", lead_medium: "cpc" }
    return { lead_source: "Other Paid", lead_medium: "cpc" }
  }

  // 3. Google Business Profile (the profile's website link must carry UTM tags to be reliable)
  if (GBP_NAMES.includes(src) || GBP_NAMES.includes(med) || GBP_NAMES.includes(camp)) {
    return { lead_source: "Google Business Profile", lead_medium: "organic" }
  }

  // 4. Explicit UTM tags for social, email, organic search
  if (SOCIAL_MEDIUM.test(med) || SOCIAL_NAMES.includes(src)) return { lead_source: "Social", lead_medium: "social" }
  if (EMAIL_MEDIUM.test(med) || src === "email") return { lead_source: "Email", lead_medium: "email" }
  if (med === "organic" || med === "search") {
    return src === "google"
      ? { lead_source: "Google Organic", lead_medium: "organic" }
      : { lead_source: "Other Search", lead_medium: "organic" }
  }
  if (src || med) return { lead_source: "Referral", lead_medium: med || "referral" }

  // 5. No UTM: use the referrer
  if (
    refApp === "gbp" ||
    GBP_REFERRER_HOSTS.includes(refHost) ||
    (isGoogleHost(refHost) && refPath.startsWith("/maps"))
  ) {
    return { lead_source: "Google Business Profile", lead_medium: "organic" }
  }
  if (refApp === "google" || isGoogleHost(refHost)) return { lead_source: "Google Organic", lead_medium: "organic" }
  if (inDomains(refHost, SEARCH_DOMAINS)) return { lead_source: "Other Search", lead_medium: "organic" }
  if (refApp === "social" || inDomains(refHost, SOCIAL_DOMAINS)) return { lead_source: "Social", lead_medium: "social" }
  if (refHost || refApp) return { lead_source: "Referral", lead_medium: "referral" }

  // 6. Nothing at all
  return { lead_source: "Direct", lead_medium: "none" }
}

type TouchInput = {
  search: string
  referrer: string
  origin: string
  pathname: string
  ownHost: string
  now?: number
}

// Builds the attribution of ONE page load from the URL and the referrer
export function buildTouch(input: TouchInput): Touch {
  const params = new URLSearchParams(input.search)
  const get = (key: string, max = 100) => clean(params.get(key), max)

  let referrerUrl = parseUrl(input.referrer)
  const ownHost = input.ownHost.toLowerCase().replace(/^www\./, "")
  if (referrerUrl && /^https?:$/.test(referrerUrl.protocol) && hostOf(referrerUrl) === ownHost) referrerUrl = null

  const utmSource = get("utm_source")
  const utmMedium = get("utm_medium")
  const utmCampaign = get("utm_campaign")
  const hasClickId = !!(get("gclid", 255) || get("gbraid", 255) || get("wbraid", 255))

  const { lead_source, lead_medium } = classify({
    hasClickId,
    utmSource,
    utmMedium,
    utmCampaign,
    referrer: referrerUrl,
  })

  // Google Ads ValueTrack {campaignid} often arrives as a number in utm_campaign
  const campaignId =
    get("utm_id") || get("campaign_id") || get("campaignid") || get("hsa_cam") || (isNumeric(utmCampaign) ? utmCampaign : "")
  const campaignName = utmCampaign && !isNumeric(utmCampaign) ? utmCampaign : ""

  let referrer = ""
  if (referrerUrl) {
    referrer =
      referrerUrl.protocol === "android-app:"
        ? "android-app://" + referrerUrl.hostname
        : (referrerUrl.origin + referrerUrl.pathname).slice(0, 300)
  }

  return {
    lead_source,
    lead_medium,
    campaign_name: campaignName,
    campaign_id: campaignId,
    landing_page: (input.origin + input.pathname).slice(0, 300),
    referrer,
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_content: get("utm_content"),
    utm_term: get("utm_term"),
    ts: input.now ?? Date.now(),
  }
}

function sameCampaign(a: Touch, b: Touch): boolean {
  return (
    a.lead_source === b.lead_source &&
    a.lead_medium === b.lead_medium &&
    a.utm_campaign === b.utm_campaign &&
    a.campaign_id === b.campaign_id
  )
}

// First touch: written once, never replaced.
// Latest touch: replaced only by a real (non-Direct) visit, so a later direct visit never wipes the
// real source. When the same campaign is seen again (for example a reload), empty fields keep the
// older value instead of being overwritten with blanks.
export function mergeTouch(stored: StoredAttribution, touch: Touch): StoredAttribution {
  const next: StoredAttribution = { first: stored.first, latest: stored.latest }

  if (!next.first) next.first = touch

  const isDirect = touch.lead_source === "Direct"
  if (!next.latest) {
    next.latest = touch
  } else if (!isDirect) {
    const merged: Touch = { ...touch }
    if (sameCampaign(next.latest, touch)) {
      for (const field of TOUCH_FIELDS) {
        if (field !== "landing_page" && !merged[field]) merged[field] = next.latest[field]
      }
    }
    next.latest = merged
  }
  return next
}

function readStored(now: number): StoredAttribution {
  try {
    const raw = localStorage.getItem(ATTRIBUTION_KEY)
    if (!raw) return {}
    const stored: StoredAttribution = JSON.parse(raw)
    const startedAt = stored.first?.ts
    if (!startedAt || now - startedAt > ATTRIBUTION_DAYS * 24 * 60 * 60 * 1000) {
      localStorage.removeItem(ATTRIBUTION_KEY)
      return {}
    }
    return stored
  } catch {
    return {}
  }
}

let capturedThisPageLoad = false

// Call once when the site loads. Safe to call again: it only records once per page load.
export function captureAttribution(): StoredAttribution {
  if (typeof window === "undefined") return {}
  try {
    const now = Date.now()
    const stored = readStored(now)
    if (capturedThisPageLoad) return stored
    capturedThisPageLoad = true

    const touch = buildTouch({
      search: window.location.search,
      referrer: document.referrer || "",
      origin: window.location.origin,
      pathname: window.location.pathname,
      ownHost: window.location.hostname,
      now,
    })
    const next = mergeTouch(stored, touch)
    localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(next))
    return next
  } catch {
    return {}
  }
}

// Flat fields for the server / Google Sheet: latest touch + first_ prefixed first touch
export function getAttributionFields(): Record<string, string> {
  const stored = captureAttribution()
  const out: Record<string, string> = {}
  for (const field of TOUCH_FIELDS) {
    out[field] = stored.latest?.[field] || ""
    out["first_" + field] = stored.first?.[field] || ""
  }
  return out
}

// Small, non-personal set added to dataLayer events (keeps GA4 / GTM parameter count low)
export function getAttributionEventParams(): Record<string, string> {
  const latest = captureAttribution().latest
  return {
    lead_source: latest?.lead_source || "",
    lead_medium: latest?.lead_medium || "",
    campaign_name: latest?.campaign_name || "",
    campaign_id: latest?.campaign_id || "",
  }
}

const LEAD_TYPE_BY_SOURCE: Record<string, string> = {
  "Google Ads": "Paid",
  "Paid Social": "Paid",
  "Other Paid": "Paid",
  "Google Organic": "Organic",
  "Other Search": "Organic",
  "Google Business Profile": "Organic",
  Direct: "Direct",
  Referral: "Referral",
  Social: "Social",
  Email: "Email",
}

const SITE_NAME_ALIASES: Record<string, string> = {
  "t.co": "twitter",
  "x.com": "twitter",
  "youtu.be": "youtube",
  "lnkd.in": "linkedin",
  "fb.me": "facebook",
  "wa.me": "whatsapp",
  "pin.it": "pinterest",
  "g.page": "google",
}

// "https://l.facebook.com/" -> "facebook", "https://www.justdial.co.in/x" -> "justdial"
function siteName(referrer: string): string {
  if (!referrer) return ""
  if (referrer.startsWith("android-app://")) {
    const parts = referrer.slice("android-app://".length).split(".")
    return (parts[1] || parts[0] || "").toLowerCase()
  }
  const host = hostOf(parseUrl(referrer))
  if (!host) return ""
  if (SITE_NAME_ALIASES[host]) return SITE_NAME_ALIASES[host]
  const parts = host.split(".")
  if (parts.length < 2) return host
  const secondLevel = ["co", "com", "org", "net", "gov", "ac"]
  if (parts.length >= 3 && parts[parts.length - 1].length === 2 && secondLevel.includes(parts[parts.length - 2])) {
    return parts[parts.length - 3]
  }
  return parts[parts.length - 2]
}

// The Google Sheet's Apps Script reads lead_type, traffic_source and traffic_medium
// (columns M, N, O). This maps our classification onto those three names.
export function deriveSheetFields(fields: Record<string, string>): {
  lead_type: string
  traffic_source: string
  traffic_medium: string
} {
  const leadSource = fields.lead_source || ""
  const leadType = LEAD_TYPE_BY_SOURCE[leadSource] || ""

  let trafficSource = ""
  if (leadSource === "Google Ads" || leadSource === "Google Organic" || leadSource === "Google Business Profile") {
    trafficSource = "google"
  } else if (leadSource === "Direct") {
    trafficSource = "direct"
  } else if (leadSource) {
    const fallback: Record<string, string> = {
      Social: "social",
      "Paid Social": "paid_social",
      "Other Paid": "paid",
      Email: "email",
      "Other Search": "search",
      Referral: "referral",
    }
    trafficSource = (fields.utm_source || siteName(fields.referrer || "") || fallback[leadSource] || "").toLowerCase()
  }

  return {
    lead_type: leadType,
    traffic_source: trafficSource,
    traffic_medium: (fields.lead_medium || "").toLowerCase(),
  }
}
