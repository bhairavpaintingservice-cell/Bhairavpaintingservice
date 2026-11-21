"use client"

import { useEffect } from "react"
import { MessageCircle } from "lucide-react"

// Link for the Google Business Profile (Appointment link / post button).
// Opens WhatsApp with a natural message. The WhatsApp webhook recognises
// this wording and records the source as Google / Organic, so the customer
// never sees a tracking code.
const WHATSAPP_NUMBER = "919158800517"
const MESSAGE = "Hi, I found you on Google Maps. I need a painting quote."
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`

export default function GbpWhatsAppPage() {
  useEffect(() => {
    try {
      ;(window as any).dataLayer = (window as any).dataLayer || []
      // Separate event name so existing whatsapp_click conversions are not double counted
      ;(window as any).dataLayer.push({
        event: "gbp_whatsapp_redirect",
        page_path: window.location.pathname,
      })
    } catch {}

    // Short pause so the analytics event can be sent before leaving the page
    const timer = setTimeout(() => {
      window.location.replace(WHATSAPP_URL)
    }, 800)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main>
      <section
        className="min-h-screen flex items-center justify-center py-20"
        style={{ backgroundColor: "#f0f4ff" }}
      >
        <div className="mx-auto max-w-xl px-6 text-center">
          <div className="rounded-2xl bg-white p-10 shadow-lg border border-gray-100">
            <MessageCircle className="h-16 w-16 mx-auto" style={{ color: "#25D366" }} />
            <h1 className="mt-6 text-2xl font-black" style={{ color: "#1B2B8A" }}>
              Opening WhatsApp...
            </h1>
            <p className="mt-3 text-sm" style={{ color: "#6b7280" }}>
              Chat with Bhairav Painting Service for a free painting quote.
            </p>
            <a
              href={WHATSAPP_URL}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp did not open? Tap here
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
