import Image from "next/image"
import Link from "next/link"
import { CheckCircle, MessageCircle, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Professional painting services — residential, commercial, building, waterproofing, exterior and designer texture painting. 47+ years experience. Free site visit.",
}

const services = [
  {
    title: "Residential Painting",
    subtitle: "Home Interiors & Exteriors",
    desc: "Complete home painting — bedrooms, living rooms, kitchens, bathrooms and exteriors. Premium branded paints, proper surface preparation and owner-supervised quality.",
    img: "/images/residential.webp",
    href: "/services/residential",
    waMsg: "Hi, I need a quote for Residential Painting. Please contact me.",
    points: ["Interior & Exterior", "All Room Types", "Surface Preparation Included", "Premium Paint Brands"],
  },
  {
    title: "Commercial Painting",
    subtitle: "Offices, Shops & Businesses",
    desc: "Professional painting for offices, retail stores, restaurants, warehouses and co-working spaces. Off-hours scheduling available for zero business disruption.",
    img: "/images/commercial.webp",
    href: "/services/commercial",
    waMsg: "Hi, I need a quote for Commercial Painting. Please contact me.",
    points: ["Offices & Showrooms", "Restaurants & Hotels", "Warehouses & Factories", "Weekend Scheduling"],
  },
  {
    title: "Building & Society Painting",
    subtitle: "Large Scale Projects",
    desc: "Complete exterior repainting for residential societies, apartment buildings and commercial complexes. Scaffolding, waterproofing and common area painting included.",
    img: "/images/portfolio-building.webp",
    href: "/services/building",
    waMsg: "Hi, I need a quote for Building & Society Painting. Please contact me.",
    points: ["Society Repainting", "Common Area Painting", "Waterproofing Included", "Scaffolding Arranged"],
  },
  {
    title: "Exterior Painting",
    subtitle: "Weather Protection & Finish",
    desc: "Exterior painting with weatherproof paint systems designed for Mumbai's monsoon, humidity and UV conditions. Crack repair and surface preparation included.",
    img: "/images/exterior-new.jpg",
    href: "/services/exterior",
    waMsg: "Hi, I need a quote for Exterior Painting. Please contact me.",
    points: ["Weatherproof Systems", "Crack Repair Included", "Anti-Fungal Treatment", "Monsoon Ready"],
  },
  {
    title: "Waterproofing",
    subtitle: "Roof, Terrace & Wall Seepage",
    desc: "Stop roof leaks, wall seepage and damp problems with professional waterproofing. Dr Fixit, Asian Paints SmartCare and Pidilite products used.",
    img: "/images/waterproofing.jpg",
    href: "/services/waterproofing",
    waMsg: "Hi, I need a quote for Waterproofing. Please contact me.",
    points: ["Terrace Waterproofing", "Wall Seepage Treatment", "Bathroom Waterproofing", "Permanent Solutions"],
  },
  {
    title: "Designer & Texture Painting",
    subtitle: "Premium Finish & Textures",
    desc: "Add character to your walls with designer textures, metallic finishes, Venetian plaster and custom patterns. Transform any room into a statement space.",
    img: "/images/texture.webp",
    href: "/services/designer/texture",
    waMsg: "Hi, I need a quote for Designer & Texture Painting. Please contact me.",
    points: ["Texture Finishes", "Metallic & Venetian", "Accent Walls", "Custom Patterns"],
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-32 pb-16" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">Our Services</span>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Complete Painting Solutions</h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">From single rooms to entire buildings — residential, commercial, waterproofing and designer finishes. 47+ years of experience across Mumbai, Thane & Bhiwandi.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20painting%20quote.%20Please%20contact%20me." target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-bold text-white"
              style={{backgroundColor:"#25D366"}}>
              <MessageCircle className="h-5 w-5" /> Get Free Quote on WhatsApp
            </a>
            <a href="tel:+919158800517"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-5 w-5" /> Call: +91 9158800517
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-orange-500 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30 text-center text-white">
            <div className="px-4 py-2"><p className="text-2xl font-black">47+</p><p className="text-xs font-semibold mt-1">Years Experience</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">500+</p><p className="text-xs font-semibold mt-1">Projects Completed</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">100%</p><p className="text-xs font-semibold mt-1">Owner Supervised</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">Free</p><p className="text-xs font-semibold mt-1">Site Inspection</p></div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>What We Offer</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>All Painting Services</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>Click any service to learn more — or WhatsApp us directly for a free quote.</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => {
              const waUrl = `https://wa.me/919158800517?text=${encodeURIComponent(s.waMsg)}`
              const quoteUrl = `https://wa.me/919158800517?text=${encodeURIComponent(s.waMsg.replace('need a quote', 'want a free site visit'))}`
              return (
                <div key={i} className="overflow-hidden rounded-xl shadow-sm flex flex-col">
                  <Link href={s.href} className="relative h-48 block group">
                    <Image src={s.img} alt={s.title} fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="rounded-full bg-white px-4 py-2 text-xs font-bold" style={{color:"#1B2B8A"}}>View Service →</span>
                    </div>
                  </Link>
                  <div className="p-4 flex items-start justify-between gap-3 flex-1" style={{backgroundColor:"#1B2B8A"}}>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-orange-400 uppercase tracking-wide">{s.subtitle}</p>
                      <h3 className="font-bold text-sm text-white mt-0.5">{s.title}</h3>
                      <ul className="mt-2 space-y-0.5">
                        {s.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-1.5 text-xs text-blue-200">
                            <CheckCircle className="h-3 w-3 text-orange-400 shrink-0" />{pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                      <a href={waUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-white"
                        style={{backgroundColor:"#25D366"}}>
                        <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                      </a>
                      <a href={quoteUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold bg-white"
                        style={{color:"#1B2B8A"}}>
                        Free Quote
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Why Bhairav Painting Service?</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "47+ Years Experience", desc: "Trusted painting contractor since 1977 — serving Mumbai, Thane & Bhiwandi." },
              { title: "Owner Supervised", desc: "Every project personally supervised by the owner — not just labour." },
              { title: "Premium Paint Brands", desc: "Asian Paints, Berger, Nerolac & Dulux — branded paints only, no shortcuts." },
              { title: "Free Site Visit", desc: "100% free site inspection & written quotation — no obligation." },
              { title: "Surface Preparation", desc: "Crack filling, putty & primer included — not just topcoat painting." },
              { title: "Zero Disruption", desc: "Evening & weekend scheduling for commercial projects." },
              { title: "Clean Work Site", desc: "Daily cleanup — furniture protected, dust minimised throughout." },
              { title: "Written Quotation", desc: "No hidden costs — everything agreed in writing before work starts." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-5 shadow-sm">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <h3 className="mt-3 font-bold text-sm" style={{color:"#1B2B8A"}}>{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed" style={{color:"#6b7280"}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Ready to Start Your Project?</h2>
          <p className="mt-4 text-blue-200 text-sm max-w-xl mx-auto">Get a free site visit and written quotation — no obligation. We serve Mumbai, Thane, Bhiwandi, Kalyan & Navi Mumbai.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20want%20to%20schedule%20a%20free%20site%20visit." target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-bold text-white"
              style={{backgroundColor:"#25D366"}}>
              <MessageCircle className="h-5 w-5" /> Schedule Free Site Visit
            </a>
            <a href="tel:+919158800517"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-5 w-5" /> Call: +91 9158800517
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
