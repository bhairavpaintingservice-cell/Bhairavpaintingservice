"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    dataLayer: any[]
  }
}

export default function CallTracker() {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="tel:"]') as HTMLAnchorElement | null
      if (link) {
        window.dataLayer = window.dataLayer || []
        window.dataLayer.push({
          event: "phone_call_click",
          phone_number: link.getAttribute("href")?.replace("tel:", ""),
          page_path: window.location.pathname,
        })
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return null
}
