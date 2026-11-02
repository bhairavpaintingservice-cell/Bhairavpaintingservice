"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer: any[]
  }
}

type ClickIds = {
  gclid?: string
  gbraid?: string
  wbraid?: string
}

type StoredClickIds = ClickIds & {
  savedAt?: number
}

const STORAGE_KEY = "bps_google_ads_click_ids"
const STORAGE_DAYS = 90
const LEAD_FLAG_KEY = "bps_lead_pending"
const CLICK_ID_KEYS: (keyof ClickIds)[] = ["gclid", "gbraid", "wbraid"]

// Blocks accidental double-click duplicates (same event + same key within 3 seconds)
const recentEvents: Record<string, number> = {}
function isDuplicate(key: string, windowMs = 3000) {
  const now = Date.now()
  if (recentEvents[key] && now - recentEvents[key] < windowMs) return true
  recentEvents[key] = now
  return false
}

export function getGoogleAdsClickIds(): ClickIds {
  if (typeof window === "undefined") return {}

  try {
    const params = new URLSearchParams(window.location.search)

    // New click ID in URL: it replaces everything saved before (old IDs are never merged in)
    const urlIds: ClickIds = {}
    for (const key of CLICK_ID_KEYS) {
      const value = params.get(key)
      if (value) urlIds[key] = value
    }

    if (Object.keys(urlIds).length > 0) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ...urlIds,
          savedAt: Date.now(),
        })
      )
      return urlIds
    }

    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return {}

    const saved: StoredClickIds = JSON.parse(stored)
    if (!saved.savedAt || Date.now() - saved.savedAt > STORAGE_DAYS * 24 * 60 * 60 * 1000) {
      localStorage.removeItem(STORAGE_KEY)
      return {}
    }

    return {
      gclid: saved.gclid,
      gbraid: saved.gbraid,
      wbraid: saved.wbraid,
    }
  } catch {
    return {}
  }
}

// Single place for the generate_lead event. Pass expectThankYou=true only when the form
// redirects to /thank-you, so the thank-you page fires form_submission once per real lead.
export function pushLeadEvent(
  formName: string,
  extra: Record<string, unknown> = {},
  expectThankYou = false
) {
  if (typeof window === "undefined") return
  if (isDuplicate("lead:" + formName)) return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: "generate_lead",
    form_name: formName,
    page_path: window.location.pathname,
    ...extra,
    ...getGoogleAdsClickIds(),
  })

  if (expectThankYou) {
    try {
      sessionStorage.setItem(LEAD_FLAG_KEY, "1")
    } catch {}
  }
}

// whatsapp_click for forms that open WhatsApp with window.open (CallTracker only sees <a> clicks).
// source: "form_submit" lets GTM tell it apart from plain WhatsApp link clicks (source: "link").
export function pushWhatsAppFormEvent(formName: string) {
  if (typeof window === "undefined") return
  if (isDuplicate("wa:" + formName)) return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: "whatsapp_click",
    form_name: formName,
    page_path: window.location.pathname,
    source: "form_submit",
    ...getGoogleAdsClickIds(),
  })
}

// Returns true only once after a real form submission (blocks refresh / direct-visit duplicates)
export function consumeLeadFlag(): boolean {
  try {
    if (sessionStorage.getItem(LEAD_FLAG_KEY)) {
      sessionStorage.removeItem(LEAD_FLAG_KEY)
      return true
    }
  } catch {}
  return false
}

export default function CallTracker() {
  useEffect(() => {
    getGoogleAdsClickIds()

    const lastFired: Record<string, number> = {}
    function shouldFire(key: string) {
      const now = Date.now()
      if (lastFired[key] && now - lastFired[key] < 1500) return false
      lastFired[key] = now
      return true
    }

    function handleClick(e: MouseEvent) {
      const target = e.target
      if (!(target instanceof Element)) return

      const link = target.closest("a")
      if (!link) return

      const href = link.getAttribute("href") || ""
      const isTel = href.startsWith("tel:")
      const isWhatsApp = /wa\.me|api\.whatsapp\.com|web\.whatsapp\.com/i.test(href)
      if (!isTel && !isWhatsApp) return

      const ids = getGoogleAdsClickIds()
      const linkText = (link.textContent || "").trim().slice(0, 60)

      window.dataLayer = window.dataLayer || []

      if (isTel && shouldFire("tel:" + href)) {
        window.dataLayer.push({
          event: "phone_call_click",
          phone_number: href.replace("tel:", ""),
          page_path: window.location.pathname,
          link_text: linkText,
          source: "link",
          ...ids,
        })
      }

      if (isWhatsApp && shouldFire("wa:" + href)) {
        window.dataLayer.push({
          event: "whatsapp_click",
          page_path: window.location.pathname,
          link_text: linkText,
          source: "link",
          ...ids,
        })
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return null
}
