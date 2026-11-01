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

export function getGoogleAdsClickIds(): ClickIds {
  if (typeof window === "undefined") return {}

  try {
    const params = new URLSearchParams(window.location.search)
    const stored = localStorage.getItem(STORAGE_KEY)
    const saved: StoredClickIds = stored ? JSON.parse(stored) : {}

    const ids: ClickIds = {
      gclid: params.get("gclid") || saved.gclid,
      gbraid: params.get("gbraid") || saved.gbraid,
      wbraid: params.get("wbraid") || saved.wbraid,
    }

    const hasNewId =
      params.has("gclid") ||
      params.has("gbraid") ||
      params.has("wbraid")

    if (hasNewId) {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          ...ids,
          savedAt: Date.now(),
        })
      )
    } else if (stored) {
      if (!saved.savedAt || Date.now() - saved.savedAt > STORAGE_DAYS * 24 * 60 * 60 * 1000) {
        localStorage.removeItem(STORAGE_KEY)
        return {}
      }
    }

    return ids
  } catch {
    return {}
  }
}

export default function CallTracker() {
  useEffect(() => {
    getGoogleAdsClickIds()

    function handleClick(e: MouseEvent) {
      const target = e.target
      if (!(target instanceof Element)) return

      const link = target.closest("a")
      if (!link) return

      const href = link.getAttribute("href") || ""
      const ids = getGoogleAdsClickIds()

      window.dataLayer = window.dataLayer || []

      if (href.startsWith("tel:")) {
        window.dataLayer.push({
          event: "phone_call_click",
          phone_number: href.replace("tel:", ""),
          page_path: window.location.pathname,
          ...ids,
        })
      }

      if (/wa\.me|api\.whatsapp\.com|web\.whatsapp\.com/i.test(href)) {
        window.dataLayer.push({
          event: "whatsapp_click",
          page_path: window.location.pathname,
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
