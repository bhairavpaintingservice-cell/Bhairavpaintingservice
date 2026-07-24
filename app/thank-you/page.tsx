"use client"

import Link from "next/link"
import { CheckCircle, MessageCircle, Phone, Home } from "lucide-react"
import { useEffect } from "react"

export default function ThankYouPage() {
  useEffect(() => {
    // Fire GTM conversion event
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: "form_submission",
        event_category: "Contact",
        event_label: "Quote Request",
      })
    }
  }, [])

  return (
    <main>
      <section className="min-h-screen flex items-center justify-center py-20" style={{backgroundColor:"#f0f4ff"}}>
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="rounded-2xl bg-white p-10 shadow-lg border border-gray-100">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto" />
            <h1 className="mt-6 text-3xl font-black" style={{color:"#1B2B8A"}}>Thank You for Choosing Bhairav Painting Service!</h1>
            <p className="mt-3 text-lg font-semibold" style={{color:"#374151"}}>Your enquiry has been received.</p>
            <p className="mt-2 text-sm" style={{color:"#6b7280"}}>Our team will call or WhatsApp you within 30 minutes to confirm your free site visit.</p>

            <div className="mt-8 rounded-xl p-5" style={{backgroundColor:"#f0f4ff"}}>
              <p className="text-sm font-semibold" style={{color:"#1B2B8A"}}>Need faster response?</p>
              <div className="mt-3 flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://wa.me/919158800517?text=Hi%2C%20I%20just%20submitted%20a%20quote%20request." target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white"
                  style={{backgroundColor:"#25D366"}}>
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us Now
                </a>
                <a href="tel:+919158800517"
                  className="flex items-center justify-center gap-2 rounded-lg border-2 px-6 py-3 text-sm font-bold"
                  style={{borderColor:"#1B2B8A", color:"#1B2B8A"}}>
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: "✅", text: "Free Site Visit Confirmed" },
                { icon: "📋", text: "Written Quotation Provided" },
                { icon: "👁️", text: "Owner Supervised Work" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 p-4">
                  <p className="text-2xl">{item.icon}</p>
                  <p className="mt-2 text-xs font-semibold" style={{color:"#1B2B8A"}}>{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold" style={{color:"#6b7280"}}>
                <Home className="h-4 w-4" /> Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
