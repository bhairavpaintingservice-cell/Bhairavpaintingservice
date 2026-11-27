"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

// Applies the Google forwarding number (from Google's phone_conversion_callback, see app/layout.tsx)
// to the MAIN number's tel: links only. Runs after hydration and again after every client-side
// navigation. It never touches the secondary number, wa.me links, or numbers written in plain text.

declare global {
  interface Window {
    bpsCallNumber?: { formatted: string; mobile: string }
    bpsApplyCallNumber?: () => void
  }
}

const MAIN_TEL = "tel:+919158800517"
const MAIN_NUMBER_TEXT = /(?:\+91[\s-]?)?91588[\s-]?00517/g

export default function CallNumber() {
  const pathname = usePathname()

  useEffect(() => {
    function apply() {
      const n = window.bpsCallNumber
      if (!n) return

      const forwardedTel = "tel:" + n.mobile
      const links = document.querySelectorAll<HTMLAnchorElement>(
        `a[href="${MAIN_TEL}"], a[href="${forwardedTel}"]`
      )

      links.forEach((link) => {
        link.setAttribute("href", forwardedTel)

        const walker = document.createTreeWalker(link, NodeFilter.SHOW_TEXT)
        let node: Node | null
        while ((node = walker.nextNode())) {
          const text = node.nodeValue || ""
          const next = text.replace(MAIN_NUMBER_TEXT, n.formatted)
          if (next !== text) node.nodeValue = next
        }
      })
    }

    window.bpsApplyCallNumber = apply
    apply()

    return () => {
      if (window.bpsApplyCallNumber === apply) delete window.bpsApplyCallNumber
    }
  }, [pathname])

  return null
}
