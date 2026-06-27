"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Phone, MessageCircle, CheckCircle, MapPin, ChevronDown } from "lucide-react"

const serviceCards = [
  { title: "Office Painting", img: "/images/commercial/commercial-office.jpg", points: ["Office Interiors", "Cabins & Meeting Rooms", "Reception & Common Areas"], gallery: "/gallery/office-painting" },
  { title: "Shop & Showroom Painting", img: "/images/commercial/commercial-showroom.jpg", points: ["Storefronts", "Display Areas", "Billing & Customer Zones"], gallery: "/gallery/showroom-painting" },
  { title: "Warehouse & Factory Painting", img: "/images/commercial/commercial-warehouse.jpg", points: ["Storage Areas", "Factory Floors", "Industrial Walls & Roofing"], gallery: "/gallery/warehouse-painting" },
  { title: "Restaurant & Hotel Painting", img: "/images/commercial/commercial-restaurant.jpg", points: ["Dining Areas", "Kitchens", "Guest Rooms & Lobbies"], gallery: "/gallery/restaurant-painting" },
  { title: "Retail Chain Painting", img: "/images/commercial/commercial-retail.jpg", points: ["Multi-Branch Projects", "Consistent Brand Finish", "Phased Scheduling"], gallery: "/gallery/retail-painting" },
  { title: "Co-working & Business Centers", img: "/images/commercial/commercial-coworking.jpg", points: ["Shared Workspaces", "Cabins & Lounges", "Common Pantry Areas"], gallery: "/gallery/coworking-painting" },
]

const whoFor = [
  { title: "Office Owners", desc: "Corporate & small business offices", img: "/images/commercial/commercial-office.jpg", points: ["Cabin & workstation painting", "Reception area finish", "Weekend scheduling"] },
  { title: "Shop & Showroom Owners", desc: "Retail storefronts", img: "/images/commercial/commercial-showroom.jpg", points: ["Storefront branding finish", "Display area painting", "Fast turnaround"] },
  { title: "Restaurant & Hotel Owners", desc: "F&B & hospitality", img: "/images/commercial/commercial-restaurant.jpg", points: ["Kitchen-safe coatings", "Off-hours work", "Guest room painting"] },
  { title: "Warehouse / Factory Managers", desc: "Industrial properties", img: "/images/commercial/commercial-warehouse.jpg", points: ["Large-area coverage", "Floor marking", "Industrial coatings"] },
  { title: "Builders & Developers", desc: "New commercial handover", img: "/images/building/service-society-repainting.jpg", points: ["New construction painting", "Bulk project pricing", "Timeline-bound delivery"] },
  { title: "Retail Chain Owners", desc: "Multi-branch businesses", img: "/images/commercial/commercial-retail.jpg", points: ["Consistent finish across branches", "Phased rollout", "Single point of contact"] },
]

const problems = [
  { icon: "🎨", title: "Old / Outdated Branding", desc: "Walls no longer matching current brand colors or look" },
  { icon: "🧱", title: "Peeling & Cracked Paint", desc: "Visible damage that affects customer impression" },
  { icon: "🧽", title: "Dirty / Stained Walls", desc: "Build-up from daily foot traffic and handling" },
  { icon: "👀", title: "Poor Customer Impression", desc: "Faded interiors that don't match business quality" },
  { icon: "💧", title: "Water Damage & Seepage Marks", desc: "Stains from leaks needing proper surface treatment" },
  { icon: "🚶", title: "High Traffic Wear", desc: "Constant use causing faster paint deterioration" },
]

const whyUs = [
  { icon: "⏱️", title: "Minimal Business Downtime", desc: "Work planned to avoid disrupting your operations." },
  { icon: "🌙", title: "Off-Hours & Weekend Scheduling", desc: "Night & weekend slots available on request." },
  { icon: "👁️", title: "Owner Supervised Projects", desc: "Every site personally checked by the owner." },
  { icon: "🎨", title: "Branded Paints Only", desc: "Asian Paints, Berger, Nerolac, Dulux." },
  { icon: "📋", title: "Free Site Visit & Quotation", desc: "No obligation, written estimate." },
  { icon: "🔗", title: "Multi-Location Service", desc: "Consistent quality across all your branches." },
]

const processSteps = [
  { num: "1", title: "Free Site Visit", desc: "We assess your space & give honest scope advice" },
  { num: "2", title: "Quotation", desc: "Detailed written quotation, no hidden costs" },
  { num: "3", title: "Schedule Planning", desc: "Work timing planned around your business hours" },
  { num: "4", title: "Surface Prep", desc: "Cleaning, crack filling, putty & primer" },
  { num: "5", title: "Painting", desc: "Owner supervised execution with minimal disruption" },
  { num: "6", title: "Cleanup & Handover", desc: "Final inspection, cleanup & handover" },
]

const commercialProjects = [
  { image: "/images/commercial/commercial-office.jpg", title: "Corporate Office", type: "Office Painting", scope: "Full Interior Repaint", duration: "4 Days", paint: "Asian Paints Royale" },
  { image: "/images/commercial/commercial-showroom.jpg", title: "Retail Showroom", type: "Shop & Showroom", scope: "Storefront & Display Area", duration: "3 Days", paint: "Berger Silk" },
  { image: "/images/commercial/commercial-restaurant.jpg", title: "Restaurant", type: "Restaurant & Hotel", scope: "Interior + Exterior", duration: "5 Days", paint: "Asian Paints Apex" },
  { image: "/images/commercial/commercial-warehouse.jpg", title: "Warehouse", type: "Warehouse & Factory", scope: "Industrial Wall Coating", duration: "8 Days", paint: "Nerolac Excel" },
  { image: "/images/commercial/commercial-retail.jpg", title: "Retail Chain", type: "Retail Chain", scope: "Multi-Branch Repaint", duration: "6 Days", paint: "Dulux Weathershield" },
  { image: "/images/commercial/commercial-coworking.jpg", title: "Co-working Space", type: "Co-working Center", scope: "Full Interior Painting", duration: "5 Days", paint: "Asian Paints Royale" },
]

const reviews = [
  { text: "Office painting weekend mein complete hua, Monday tak koi disruption nahi hua. Professional team thi.", name: "Office Owner, Bhiwandi" },
  { text: "Showroom ka look bilkul fresh ho gaya, customers bhi notice kar rahe hain. Timely completion.", name: "Showroom Owner, Thane" },
  { text: "Restaurant band kiye bina kaam karwaya, raat ko hi team aati thi. Bahut convenient tha.", name: "Restaurant Owner, Mumbai" },
]

const costFactors = ["Area Size", "Surface Condition", "Paint Brand", "Work Schedule", "Scope of Work", "Free Site Inspection Available"]

const areas = ["Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai", "Dombivli", "Vasai", "Virar", "Andheri", "Kasheli", "Kalher"]

const faqs = [
  { q: "Can you work outside business hours?", a: "Yes — we offer evening, night and weekend scheduling so your business operations are not disrupted." },
  { q: "Do you handle multi-location/branch projects?", a: "Yes — we manage consistent painting standards across multiple branches of the same business." },
  { q: "Do you provide material, or only labour?", a: "Both options — Material + Labour (we arrange everything) or Labour Only (you supply paint)." },
  { q: "Which paint brands do you use?", a: "Asian Paints, Berger, Nerolac and Dulux — branded paints only, no shortcuts." },
  { q: "How long does an office painting project take?", a: "A typical office (1500–2500 sq ft) takes 3–5 days depending on scope." },
  { q: "Do you offer a workmanship warranty?", a: "Yes — any defect due to our work is rectified at no extra cost." },
  { q: "Is furniture/equipment protected during work?", a: "Yes — all furniture, equipment and fixtures are properly covered before work begins." },
  { q: "Do you handle warehouse & factory floor painting?", a: "Yes — including epoxy/floor marking and industrial surface coatings." },
  { q: "Do you offer free site visits for commercial properties?", a: "Yes — 100% free, with a detailed written quotation, no obligation." },
  { q: "Do you paint occupied office spaces?", a: "Yes — we work in phases, room by room or floor by floor, so your team can continue working while painting is in progress." },
  { q: "Which paint lasts longest for commercial interiors?", a: "Asian Paints Royale and Berger Silk are best for commercial interiors — washable, durable and long-lasting in high-traffic areas." },
  { q: "Can you complete projects in phases?", a: "Yes — we specialise in phased painting for large offices, retail chains and commercial buildings where complete shutdown is not possible." },
  { q: "Do you provide annual maintenance contracts?", a: "Yes — we offer annual maintenance contracts for commercial clients who need regular touch-ups and upkeep of painted surfaces." },
  { q: "Can work be done in occupied/running offices?", a: "Yes — we plan section-by-section work to keep your office functional during painting." },
  { q: "What is included in surface preparation?", a: "Wall cleaning, crack filling, putty, sanding and primer — before final coats." },
  { q: "Do you provide GST invoice for businesses?", a: "Yes — proper GST invoicing available for business accounting." },
  { q: "Is the team owner supervised?", a: "Yes — every commercial project is personally supervised by the owner." },
  { q: "Is there a minimum project size for commercial painting?", a: "No — we handle everything from a single cabin to large multi-floor offices and warehouses." },
  { q: "What areas do you cover for commercial painting?", a: "Mumbai, Thane, Bhiwandi, Kalyan, Navi Mumbai, Dombivli, Vasai, Virar, Andheri, Kasheli & Kalher." },
]

const relatedServices = [
  { title: "Building Painting", href: "/services/building", image: "/images/building/service-exterior-building.jpg" },
  { title: "Exterior Painting", href: "/services/exterior", image: "/images/exterior-new.jpg" },
  { title: "Designer & Texture Painting", href: "/services/designer/texture", image: "/images/texture.webp" },
  { title: "Residential Painting", href: "/services/residential", image: "/images/residential.webp" },
]

const serviceOptions = ["Office Painting", "Shop & Showroom Painting", "Warehouse & Factory Painting", "Restaurant & Hotel Painting", "Retail Chain Painting", "Other"]

export default function CommercialPaintingPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", area: "", message: "" })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = () => {
    if (!form.name || !form.phone) { alert("Please enter your name and phone number."); return }
    const msg = `Hi, I need a Commercial Painting quote.%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService: ${encodeURIComponent(form.service || "Not specified")}%0AArea: ${encodeURIComponent(form.area || "Not specified")}%0AMessage: ${encodeURIComponent(form.message || "-")}`
    window.open(`https://wa.me/919158800517?text=${msg}`, "_blank")
  }

  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="relative bg-[#1B2B8A] pt-20 pb-16 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-400 mb-6">★ COMMERCIAL PAINTING SPECIALISTS</div>
          <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl leading-tight" style={{color:"#f97316"}}>Commercial Painting Services in Mumbai, Thane &amp; Bhiwandi</h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">Trusted Commercial Painting Contractors with 47+ Years of Experience. We complete office, retail, warehouse, factory and commercial building painting projects with minimal business disruption, premium paint brands and owner-supervised quality.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-bold text-white hover:bg-orange-600 transition-colors"><MessageCircle className="h-5 w-5" /> Get Free Quote</a>
            <a href="tel:+919158800517" className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors"><Phone className="h-5 w-5" /> Call Now: 9158800517</a>
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

      {/* SERVICE CARDS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Our Services</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Commercial Painting We Handle</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>From single offices to multi-location retail chains — scheduled around your business hours.</p>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((s, i) => {
              const waMsg = encodeURIComponent(`Hi, I need a quote for ${s.title}. Please contact me.`)
              const quoteMsg = encodeURIComponent(`Hi, I want a free site visit for ${s.title}. Please contact me.`)
              const waUrl = `https://wa.me/919158800517?text=${waMsg}`
              const quoteUrl = `https://wa.me/919158800517?text=${quoteMsg}`
              return (
              <div key={i} className="overflow-hidden rounded-xl shadow-sm flex flex-col">
                <div className="relative h-44 group">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                  <Link href={s.gallery} className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-bold" style={{color:"#1B2B8A"}}>View More →</span>
                  </Link>
                </div>
                <div className="p-4 flex items-center justify-between gap-3" style={{backgroundColor:"#1B2B8A"}}>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm text-white">{s.title}</h3>
                    <ul className="mt-1 space-y-0.5">
                      {s.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-1.5 text-xs text-blue-200"><CheckCircle className="h-3 w-3 text-orange-400 shrink-0"/>{pt}</li>
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

      {/* WHO IS THIS FOR */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Who Is This For</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Built for Business Owners</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whoFor.map((w, i) => {
              const waMsg = encodeURIComponent(`Hi, I need a quote for ${w.title}. Please contact me.`)
              const quoteMsg = encodeURIComponent(`Hi, I want a free site visit for ${w.title}. Please contact me.`)
              return (
              <div key={i} className="overflow-hidden rounded-xl border border-gray-100 shadow-sm flex flex-col">
                <div className="relative h-36"><Image src={w.img} alt={w.title} fill className="object-cover" /></div>
                <div className="p-4 flex items-center justify-between gap-3 flex-1" style={{backgroundColor:"#1B2B8A"}}>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm text-white">{w.title}</h3>
                    <p className="text-xs mt-0.5 text-blue-200">{w.desc}</p>
                    <ul className="mt-2 space-y-0.5">
                      {w.points.map((pt) => (
                        <li key={pt} className="flex items-center gap-1.5 text-xs text-blue-200"><CheckCircle className="h-3 w-3 text-orange-400 shrink-0"/>{pt}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <a href={`https://wa.me/919158800517?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-white"
                      style={{backgroundColor:"#25D366"}}>
                      <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                    </a>
                    <a href={`https://wa.me/919158800517?text=${quoteMsg}`} target="_blank" rel="noopener noreferrer"
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
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Why Choose Bhairav</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Why Businesses Choose Us</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <div key={i} className="rounded-xl bg-gray-50 p-5">
                <div className="text-xl mb-2">{w.icon}</div>
                <h3 className="font-bold text-sm" style={{color:"#1B2B8A"}}>{w.title}</h3>
                <p className="text-xs mt-1" style={{color:"#6b7280"}}>{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Industries</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Industries We Serve</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>From corporate offices to industrial units — we handle commercial painting across all business types in Mumbai, Thane & Bhiwandi.</p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { img: "/images/commercial/industry-corporate.jpg", label: "Corporate Offices", desc: "Office interiors, cabins & common areas" },
              { img: "/images/commercial/industry-retail.jpg", label: "Retail Stores", desc: "Storefronts, display areas & billing zones" },
              { img: "/images/commercial/industry-hotel.jpg", label: "Hotels & Restaurants", desc: "Lobbies, dining areas & guest rooms" },
              { img: "/images/commercial/industry-factory.jpg", label: "Factories & Warehouses", desc: "Industrial walls, floors & roofing" },
              { img: "/images/commercial/industry-hospital.jpg", label: "Hospitals & Clinics", desc: "Corridors, wards & reception areas" },
              { img: "/images/commercial/industry-school.jpg", label: "Schools & Colleges", desc: "Classrooms, corridors & common areas" },
              { img: "/images/commercial/industry-bank.jpg", label: "Banks & Offices", desc: "Waiting areas, counters & cabins" },
              { img: "/images/commercial/industry-mall.jpg", label: "Shopping Malls", desc: "Atriums, corridors & retail spaces" },
              { img: "/images/commercial/industry-gym.jpg", label: "Gyms & Fitness", desc: "Workout areas, walls & locker rooms" },
              { img: "/images/commercial/industry-complex.jpg", label: "Commercial Complexes", desc: "Exterior facades & common areas" },
            ].map((item, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-sm flex flex-col">
                <div className="relative h-28"><Image src={item.img} alt={item.label} fill className="object-cover" /></div>
                <div className="p-3 flex items-center justify-between gap-2 flex-1" style={{backgroundColor:"#1B2B8A"}}>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white">{item.label}</p>
                    <p className="text-xs mt-0.5 text-blue-200">{item.desc}</p>
                  </div>
                  <div className="flex flex-col gap-1.5 shrink-0">
                    <a href={`https://wa.me/919158800517?text=${encodeURIComponent('Hi, I need painting for ' + item.label + '. Please contact me.')}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1 rounded-lg px-2 py-1.5 text-xs font-semibold text-white"
                      style={{backgroundColor:"#25D366"}}>
                      <MessageCircle className="h-3 w-3" /> WhatsApp
                    </a>
                    <a href={`https://wa.me/919158800517?text=${encodeURIComponent('Hi, I want a free site visit for ' + item.label + ' painting.')}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center rounded-lg px-2 py-1.5 text-xs font-semibold bg-white"
                      style={{color:"#1B2B8A"}}>
                      Free Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-[#1B2B8A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-orange-400 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">Our Process</span>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">How We Work</h2>
          <p className="mt-3 text-sm text-white/70">Planned around your business hours, every step of the way.</p>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {processSteps.map((s) => (
              <div key={s.num} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl font-black text-white">{s.num}</div>
                <h3 className="mt-3 font-bold text-white text-xs">{s.title}</h3>
                <p className="mt-1 text-xs text-white/60">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON PROBLEMS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Common Issues</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Common Commercial Painting Problems</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
              <div key={i} className="flex gap-3 rounded-xl bg-orange-50 p-4">
                <span className="text-xl shrink-0">{p.icon}</span>
                <div><h3 className="font-bold text-sm" style={{color:"#1B2B8A"}}>{p.title}</h3><p className="text-xs mt-0.5" style={{color:"#6b7280"}}>{p.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Recent Work</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Recent Commercial Projects</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>A look at some of our recent commercial painting work across Mumbai, Thane & Bhiwandi.</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {commercialProjects.map((p, i) => {
              const waMsg = encodeURIComponent(`Hi, I need a quote for ${p.type} similar to your ${p.title} project.`)
              const quoteMsg = encodeURIComponent(`Hi, I want a free site visit for ${p.type}. Please contact me.`)
              return (
              <div key={i} className="overflow-hidden rounded-xl shadow-sm flex flex-col">
                <div className="relative h-48"><Image src={p.image} alt={p.title} fill className="object-cover" /></div>
                <div className="p-4 flex items-center justify-between gap-3 flex-1" style={{backgroundColor:"#1B2B8A"}}>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm text-white">{p.title}</h3>
                    <div className="mt-2 space-y-0.5">
                      <p className="text-xs text-blue-200"><span className="text-blue-300">Type:</span> {p.type}</p>
                      <p className="text-xs text-blue-200"><span className="text-blue-300">Scope:</span> {p.scope}</p>
                      <p className="text-xs text-blue-200"><span className="text-blue-300">Paint:</span> {p.paint}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 shrink-0">
                    <a href={`https://wa.me/919158800517?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-white"
                      style={{backgroundColor:"#25D366"}}>
                      <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                    </a>
                    <a href={`https://wa.me/919158800517?text=${quoteMsg}`} target="_blank" rel="noopener noreferrer"
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

      {/* REVIEWS */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Customer Reviews</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>What Business Owners Say</h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-lg border-l-4 border-orange-500 bg-white p-5">
                <div className="text-orange-500 text-sm mb-2">★★★★★</div>
                <p className="text-sm italic" style={{color:"#374151"}}>"{r.text}"</p>
                <p className="mt-3 font-bold text-sm" style={{color:"#1B2B8A"}}>— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAINT BRANDS */}
      <section className="py-16 bg-white text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Paint Brands</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Paint Brands We Use</h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Branded paints only — no shortcuts.</p>
          <p className="mt-6 text-lg font-bold tracking-wide" style={{color:"#1B2B8A"}}>Asian Paints &nbsp;|&nbsp; Berger &nbsp;|&nbsp; Nerolac &nbsp;|&nbsp; Dulux</p>
        </div>
      </section>

      {/* COST FACTORS */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Pricing</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Free Site Visit &amp; Written Quotation</h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Every commercial property is different — cost depends on:</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {costFactors.map((c, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-4">
                <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                <span className="font-bold text-sm" style={{color:"#1B2B8A"}}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Service Area</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Commercial Painting Across Mumbai Region</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {areas.map((a) => <span key={a} className="flex items-center gap-2 rounded-full bg-[#1B2B8A] px-5 py-2.5 text-sm font-semibold text-white"><MapPin className="h-4 w-4"/>{a}</span>)}
          </div>
          <div className="mt-8 rounded-xl border-l-4 border-orange-500 bg-gray-50 p-6">
            <p className="text-sm leading-relaxed" style={{color:"#4b5563"}}><strong style={{color:"#111827"}}>Bhairav Painting Service</strong> has been providing commercial painting services across Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai for over <strong style={{color:"#111827"}}>47 years</strong>. We work with offices, shops, showrooms, warehouses, restaurants and retail chains — scheduling work around business hours to keep operations running smoothly. Every commercial project is owner-supervised, using only branded paints, with a free site visit and written quotation provided before work begins.</p>
          </div>
        </div>
      </section>

      {/* PROJECT TIMELINE */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Timeline</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>How Long Will It Take?</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>Typical project durations — actual timelines depend on area size, surface condition & scope of work.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { type: "Small Office", size: "Up to 1500 sq ft", duration: "2–4 Days", icon: "🏢" },
              { type: "Retail Store / Showroom", size: "1500–3000 sq ft", duration: "2–5 Days", icon: "🏪" },
              { type: "Warehouse / Factory", size: "Large Area", duration: "5–10 Days", icon: "🏭" },
              { type: "Commercial Building", size: "Multi-Floor", duration: "Depends on Area", icon: "🏗️" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm flex flex-col gap-3">
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <p className="font-black text-2xl" style={{color:"#f97316"}}>{item.duration}</p>
                  <p className="font-bold text-sm mt-1" style={{color:"#1B2B8A"}}>{item.type}</p>
                  <p className="text-xs mt-0.5" style={{color:"#6b7280"}}>{item.size}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs" style={{color:"#9ca3af"}}>* Timelines are estimates. Exact schedule confirmed after free site visit.</p>
        </div>
      </section>

      {/* QUALITY PROMISE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl p-10 lg:p-14" style={{backgroundColor:"#f0f4ff", border:"1px solid #d0dafa"}}>
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="flex-1">
                <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Our Promise</span>
                <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Our Quality Promise</h2>
                <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Every commercial project we take on comes with a clear quality commitment — no shortcuts, no excuses.</p>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "🎨", title: "Premium Paint Brands Only", desc: "Asian Paints, Berger, Nerolac, Dulux — no local or unbranded paints" },
                  { icon: "📋", title: "Manufacturer Guidelines Followed", desc: "Correct coats, drying time & application as per brand specs" },
                  { icon: "🧱", title: "Proper Surface Preparation", desc: "Cleaning, crack filling, putty & primer before final coats" },
                  { icon: "👁️", title: "Owner Supervised Execution", desc: "Every site personally checked by the owner — not just labour" },
                  { icon: "🔧", title: "Post-Project Support", desc: "Any defect due to our work is rectified at no extra cost" },
                  { icon: "📄", title: "Written Quotation", desc: "No hidden costs — everything agreed in writing before work starts" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="text-sm font-bold" style={{color:"#1B2B8A"}}>{item.title}</p>
                      <p className="text-xs mt-0.5" style={{color:"#6b7280"}}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL EXPERTISE / MUMBAI CLIMATE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Local Expertise</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Commercial Painting Across Mumbai's Climate</h2>
          <p className="mt-4 text-sm max-w-2xl leading-relaxed" style={{color:"#6b7280"}}>
            Commercial buildings across Mumbai, Thane, Navi Mumbai, Kalyan and Bhiwandi face heavy monsoon rains, high humidity, coastal salt air, dust and intense summer sunlight. These conditions are significantly more demanding than most other parts of India.
          </p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🌧️", title: "Heavy Monsoon", desc: "4–6 months of heavy rain causes seepage, dampness and paint failure on poorly protected surfaces." },
              { icon: "💧", title: "High Humidity", desc: "Coastal humidity accelerates paint degradation — wrong paint systems fail within 1–2 years." },
              { icon: "☀️", title: "Intense UV", desc: "Strong summer sunlight causes fading and chalking on exterior surfaces painted with inferior products." },
              { icon: "🌫️", title: "Industrial Dust", desc: "Bhiwandi and Thane industrial zones produce heavy dust that affects surface adhesion and finish life." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-6 shadow-sm">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="mt-3 font-bold text-sm" style={{color:"#1B2B8A"}}>{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed" style={{color:"#6b7280"}}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl p-8" style={{backgroundColor:"#f0f4ff", border:"1px solid #d0dafa"}}>
            <h3 className="font-black text-lg" style={{color:"#1B2B8A"}}>How We Address Mumbai's Climate Challenges</h3>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Weatherproof Exterior Systems", desc: "Asian Paints Apex, Berger WeatherCoat and Nerolac Excel — specifically selected for Mumbai's monsoon and humidity." },
                { title: "Anti-Fungal Treatments", desc: "Damp-prone areas treated with anti-fungal primers before painting to prevent mould and discolouration." },
                { title: "Correct Application Season", desc: "Exterior painting scheduled outside monsoon months for best adhesion and long-lasting results." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>{item.title}</p>
                    <p className="text-xs mt-1" style={{color:"#6b7280"}}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HIDDEN COST SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Quality Matters</span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>The Hidden Cost of Low-Quality Painting</h2>
              <p className="mt-4 text-sm leading-relaxed" style={{color:"#6b7280"}}>
                Many commercial properties require repainting within 2–3 years because surface preparation was skipped or low-quality paint was used. What seems cheaper upfront often costs significantly more over time.
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{color:"#6b7280"}}>
                Proper crack repair, surface preparation, primer application and premium paint significantly increase the life of the finish — reducing the frequency and cost of repainting cycles.
              </p>
              <div className="mt-6 rounded-xl p-6" style={{backgroundColor:"#fef2f2", border:"1px solid #fecaca"}}>
                <p className="font-bold text-sm mb-3" style={{color:"#dc2626"}}>Poor-quality projects often suffer from:</p>
                <div className="grid grid-cols-2 gap-2">
                  {["Peeling paint", "Bubbling walls", "Uneven finish", "Poor colour consistency", "Early fading", "Frequent maintenance"].map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs" style={{color:"#7f1d1d"}}>
                      <span className="text-red-500">✗</span> {pt}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{backgroundColor:"#f0f4ff", border:"1px solid #d0dafa"}}>
              <p className="font-bold text-sm mb-4" style={{color:"#1B2B8A"}}>✅ What proper painting includes:</p>
              <div className="space-y-3">
                {[
                  { step: "01", title: "Surface Cleaning", desc: "Dust, grease and old loose paint removed before work begins" },
                  { step: "02", title: "Crack Filling", desc: "All cracks and gaps filled with appropriate compounds" },
                  { step: "03", title: "Putty Application", desc: "Smooth base layer for even finish" },
                  { step: "04", title: "Primer Coat", desc: "Correct primer for adhesion and durability" },
                  { step: "05", title: "Premium Paint", desc: "Branded paint applied in correct number of coats" },
                  { step: "06", title: "Quality Check", desc: "Owner inspection before handover" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-xs font-black rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-white" style={{backgroundColor:"#1B2B8A"}}>{item.step}</span>
                    <div>
                      <p className="text-xs font-bold" style={{color:"#1B2B8A"}}>{item.title}</p>
                      <p className="text-xs" style={{color:"#6b7280"}}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAINTENANCE GUIDE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Maintenance Guide</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>How Often Should Commercial Buildings Be Repainted?</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>Repainting intervals depend on usage, sunlight exposure, moisture and maintenance. These are typical guidelines for Mumbai region commercial properties.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { type: "Office Interiors", interval: "Every 5–7 Years", icon: "🏢", color: "#e0e7ff" },
              { type: "Retail Stores", interval: "Every 3–5 Years", icon: "🏪", color: "#fef3c7" },
              { type: "Hotels & Restaurants", interval: "Every 2–4 Years", icon: "🏨", color: "#fee2e2" },
              { type: "Warehouse Interiors", interval: "Every 5–8 Years", icon: "🏭", color: "#d1fae5" },
              { type: "Commercial Exterior", interval: "Every 5–7 Years", icon: "🏗️", color: "#ede9fe" },
              { type: "High-Traffic Areas", interval: "Every 2–3 Years", icon: "👣", color: "#fce7f3" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-6 flex items-center gap-4" style={{backgroundColor:item.color}}>
                <span className="text-4xl">{item.icon}</span>
                <div>
                  <p className="font-black text-lg" style={{color:"#1B2B8A"}}>{item.interval}</p>
                  <p className="text-sm font-semibold mt-0.5" style={{color:"#374151"}}>{item.type}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs" style={{color:"#9ca3af"}}>* Intervals vary based on paint quality, surface preparation, exposure and usage. Get a free inspection to know when your property needs repainting.</p>
        </div>
      </section>

      {/* PAINT SELECTION GUIDE */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Paint Guide</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Which Paint is Best for Commercial Properties?</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>Different commercial spaces require different paint systems. Here is what we recommend based on property type.</p>
          <div className="mt-10 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr style={{backgroundColor:"#1B2B8A"}}>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Property Type</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Recommended Paint</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase tracking-wider">Key Benefit</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { property: "Office", paint: "Low VOC Washable Emulsion", benefit: "Safe for occupied spaces, easy to clean" },
                  { property: "Retail Store", paint: "Washable Interior Paint", benefit: "Durable in high-traffic areas" },
                  { property: "Restaurant", paint: "Moisture Resistant Washable Paint", benefit: "Handles steam, grease & frequent cleaning" },
                  { property: "Warehouse", paint: "Heavy Duty Industrial Coating", benefit: "Abrasion & dust resistant" },
                  { property: "Factory", paint: "Industrial Protective Paint", benefit: "Chemical & impact resistant" },
                  { property: "Commercial Exterior", paint: "Weatherproof Exterior Paint", benefit: "Mumbai monsoon & UV resistant" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-4 font-semibold text-xs" style={{color:"#1B2B8A"}}>{row.property}</td>
                    <td className="px-6 py-4 text-xs" style={{color:"#111827"}}>{row.paint}</td>
                    <td className="px-6 py-4 text-xs" style={{color:"#6b7280"}}>{row.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs" style={{color:"#9ca3af"}}>* Exact paint brand and grade recommended after free site inspection based on actual surface conditions.</p>
        </div>
      </section>

      {/* BUILDER SECTION */}
      <section className="py-20" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">Builders & Developers</span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl text-white">Commercial Painting for Builders & Developers</h2>
              <p className="mt-4 text-sm leading-relaxed text-blue-200">
                Builders require painting contractors who can manage timelines, labour and quality across large projects. We work with builders, developers and contractors for new commercial buildings, office complexes, retail developments and commercial handover painting across Mumbai, Thane, Bhiwandi and Kalyan.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Follow project schedules & site engineer coordination",
                  "Owner-supervised quality throughout execution",
                  "Large team capacity for multi-floor projects",
                  "Written quotation with scope & timeline",
                  "Premium branded paints — Asian Paints, Berger, Nerolac, Dulux",
                  "Handover-ready finish with snag list support",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white">
                    <CheckCircle className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/919158800517?text=Hi%2C%20I%20am%20a%20builder%20and%20need%20commercial%20painting%20for%20my%20project." target="_blank" rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white"
                style={{backgroundColor:"#25D366"}}>
                <MessageCircle className="h-4 w-4" /> WhatsApp for Builder Enquiry
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "🏗️", label: "New Commercial Buildings" },
                { icon: "🏢", label: "Office Complexes" },
                { icon: "🛍️", label: "Retail Developments" },
                { icon: "🏬", label: "Shopping Centres" },
                { icon: "🏘️", label: "Mixed-Use Projects" },
                { icon: "🔑", label: "Commercial Handover" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-4 text-center" style={{backgroundColor:"rgba(255,255,255,0.1)"}}>
                  <span className="text-3xl">{item.icon}</span>
                  <p className="mt-2 text-xs font-semibold text-white">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFFICE PAINTING CHALLENGES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Office Painting</span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Office Painting Requires Careful Planning</h2>
              <p className="mt-4 text-sm leading-relaxed" style={{color:"#6b7280"}}>
                Painting an office is different from painting a home. Commercial offices contain workstations, glass cabins, conference rooms, networking equipment and employees working throughout the day. Our team handles every aspect with minimal disruption.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "All furniture, electronics and flooring protected before work begins",
                  "Dust minimised through proper surface preparation techniques",
                  "Work scheduled after office hours or during weekends",
                  "Glass cabins & partitions masked and protected",
                  "Networking cables and server rooms handled with extra care",
                  "Daily cleanup so office is ready for next working day",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{color:"#374151"}}>
                    <CheckCircle className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {[
                { title: "Warehouse & Factory Painting", icon: "🏭", desc: "Warehouse walls and floors experience constant movement from forklifts, loading equipment and storage operations. We recommend durable industrial coatings that resist dust, abrasion and frequent cleaning while maintaining a professional appearance." },
                { title: "Restaurant & Hotel Painting", icon: "🍽️", desc: "Restaurants operate in high-humidity environments where kitchen steam, grease and regular cleaning affect paint performance. We select washable, moisture-resistant paint systems that improve durability and hygiene while keeping the space attractive." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="font-bold text-base" style={{color:"#1B2B8A"}}>{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{color:"#6b7280"}}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SURFACE ASSESSMENT SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Surface Inspection</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Every Commercial Project Starts with a Professional Surface Inspection</h2>
          <p className="mt-4 text-sm max-w-2xl leading-relaxed" style={{color:"#6b7280"}}>
            Every commercial property has different surface conditions. Some walls have moisture damage, while others have cracks, peeling paint, oil stains or damaged plaster. Before recommending any paint system, our team inspects the property thoroughly.
          </p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: "🎨", label: "Existing Paint Condition", desc: "Peeling, bubbling or fading checked" },
              { icon: "💧", label: "Moisture & Seepage", desc: "Damp walls identified before painting" },
              { icon: "🧱", label: "Wall Cracks", desc: "Hairline to structural cracks assessed" },
              { icon: "💪", label: "Surface Strength", desc: "Weak or hollow plaster identified" },
              { icon: "🔬", label: "Coating Compatibility", desc: "Previous paint type checked for adhesion" },
              { icon: "☀️", label: "Interior or Exterior", desc: "Correct paint system recommended" },
              { icon: "👣", label: "Foot Traffic Level", desc: "High-traffic areas get durable coatings" },
              { icon: "📋", label: "Written Report", desc: "Full inspection summary provided free" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm">
                <span className="text-2xl">{item.icon}</span>
                <p className="mt-2 font-bold text-xs" style={{color:"#1B2B8A"}}>{item.label}</p>
                <p className="mt-0.5 text-xs" style={{color:"#6b7280"}}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm font-medium" style={{color:"#6b7280"}}>Based on this inspection, we recommend the correct surface preparation and paint system — not a one-size-fits-all solution.</p>
        </div>
      </section>

      {/* ZERO DISRUPTION SECTION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Zero Disruption</span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Zero Business Disruption Planning</h2>
              <p className="mt-4 text-sm leading-relaxed" style={{color:"#6b7280"}}>
                Commercial painting isn't just about applying paint — it's about completing the work without affecting your daily operations. Before starting any project, we create a work schedule based on your business hours.
              </p>
              <div className="mt-6 space-y-4">
                {[
                  { icon: "🏢", title: "Offices", desc: "Painting completed after working hours or during weekends — your team continues working without interruption." },
                  { icon: "🍽️", title: "Restaurants", desc: "Work scheduled during weekly closing days or early mornings before opening hours." },
                  { icon: "🏪", title: "Retail Stores", desc: "Section-by-section phased painting keeps your store operational throughout the project." },
                  { icon: "🏭", title: "Warehouses & Factories", desc: "Work planned around production schedules to minimise downtime while maintaining safety standards." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-xl p-4" style={{backgroundColor:"#f0f4ff"}}>
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>{item.title}</p>
                      <p className="text-xs mt-0.5" style={{color:"#6b7280"}}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl p-8" style={{backgroundColor:"#1B2B8A"}}>
              <h3 className="text-xl font-black text-white">Our Disruption-Free Promise</h3>
              <p className="mt-2 text-sm text-blue-200">Every commercial project follows a structured approach:</p>
              <ul className="mt-6 space-y-3">
                {[
                  "Pre-project site visit & schedule planning",
                  "Work timed around your business hours",
                  "Furniture & equipment fully covered & protected",
                  "Dust minimised through proper surface prep",
                  "Section-by-section work for large spaces",
                  "Daily site cleanup before business opens",
                  "Owner present on site throughout execution",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-white">
                    <CheckCircle className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/919158800517?text=Hi%2C%20I%20want%20to%20discuss%20commercial%20painting%20with%20zero%20disruption." target="_blank" rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white"
                style={{backgroundColor:"#25D366"}}>
                <MessageCircle className="h-4 w-4" /> Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CHECKLIST + COST FACTORS + EEAT */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Checklist */}
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <span className="inline-block rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Free Checklist</span>
              <h3 className="mt-3 text-lg font-black" style={{color:"#1B2B8A"}}>Before Hiring a Commercial Painting Contractor</h3>
              <p className="mt-2 text-xs" style={{color:"#6b7280"}}>Use this checklist to evaluate any contractor before signing.</p>
              <ul className="mt-4 space-y-2">
                {["GST Invoice Provided", "Surface Preparation Included", "Branded Paints Used", "Written Quotation Given", "Owner Supervision Confirmed", "Project Timeline Shared", "Site & Furniture Protection", "Warranty on Workmanship", "Post-Work Cleanup Included"].map((pt, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs" style={{color:"#374151"}}>
                    <CheckCircle className="h-3.5 w-3.5 text-orange-500 shrink-0" />{pt}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/919158800517?text=Hi%2C%20I%20want%20to%20hire%20a%20commercial%20painting%20contractor.%20Please%20share%20details." target="_blank" rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-bold text-white"
                style={{backgroundColor:"#25D366"}}>
                <MessageCircle className="h-3.5 w-3.5" /> WhatsApp Us
              </a>
            </div>

            {/* Cost Factors */}
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <span className="inline-block rounded-full border border-gray-300 px-3 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Cost Guide</span>
              <h3 className="mt-3 text-lg font-black" style={{color:"#1B2B8A"}}>What Affects Commercial Painting Cost?</h3>
              <p className="mt-2 text-xs" style={{color:"#6b7280"}}>These factors determine the final cost of any commercial painting project.</p>
              <ul className="mt-4 space-y-2">
                {["Total carpet area & ceiling height", "Existing wall condition & repairs needed", "Number of paint coats required", "Premium vs standard paint grade", "Work during office hours or weekends", "Scaffolding requirement", "Surface crack & plaster repairs", "Waterproofing requirements", "Project completion deadline"].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs" style={{color:"#374151"}}>
                    <CheckCircle className="h-3.5 w-3.5 text-orange-500 shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/919158800517?text=Hi%2C%20I%20want%20a%20quotation%20for%20commercial%20painting.%20Please%20contact%20me." target="_blank" rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-bold text-white"
                style={{backgroundColor:"#25D366"}}>
                <MessageCircle className="h-3.5 w-3.5" /> Get Free Quote
              </a>
            </div>

            {/* E-E-A-T */}
            <div className="rounded-2xl p-6 shadow-sm" style={{backgroundColor:"#1B2B8A"}}>
              <span className="inline-block rounded-full border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">Our Promise</span>
              <h3 className="mt-3 text-lg font-black text-white">Every Commercial Project Includes</h3>
              <p className="mt-2 text-xs text-blue-200">No shortcuts. No surprises. Every single project.</p>
              <ul className="mt-4 space-y-2">
                {["Free Site Inspection", "Written Estimate", "Professional Surface Assessment", "Crack Repair & Filling", "Primer Application", "Premium Branded Paint", "Owner Supervision Throughout", "Final Quality Inspection", "Professional Cleanup"].map((pt, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-white">
                    <CheckCircle className="h-3.5 w-3.5 text-orange-400 shrink-0" />{pt}
                  </li>
                ))}
              </ul>
              <a href="https://wa.me/919158800517?text=Hi%2C%20I%20want%20to%20discuss%20a%20commercial%20painting%20project." target="_blank" rel="noopener noreferrer"
                className="mt-5 flex items-center justify-center gap-2 rounded-lg py-2.5 text-xs font-bold"
                style={{backgroundColor:"#f97316", color:"white"}}>
                <MessageCircle className="h-3.5 w-3.5" /> Discuss Your Project
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* BETTER CTA */}
      <section className="py-20" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Need Painting Without Interrupting Your Business?</h2>
          <p className="mt-4 text-blue-200 text-sm max-w-2xl mx-auto">We work around your schedule — evenings, weekends, or phased room-by-room. Zero disruption to your operations.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20want%20to%20schedule%20a%20free%20site%20visit%20for%20commercial%20painting." target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-bold text-white transition-colors"
              style={{backgroundColor:"#25D366"}}>
              <MessageCircle className="h-5 w-5" /> Schedule FREE Site Visit
            </a>
            <a href="tel:+919158800517"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-5 w-5" /> Call: +91 9158800517
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>FAQ</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Commercial Painting — Frequently Asked Questions</h2>
          <div className="mt-8 space-y-3 max-w-3xl">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-100 overflow-hidden">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white bg-white" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-bold text-sm pr-4" style={{color:"#1B2B8A"}}>{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-orange-500 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 bg-white"><p className="text-sm" style={{color:"#4b5563"}}>{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Related Services</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Other Services You May Need</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {relatedServices.map((s, i) => (
              <Link key={i} href={s.href} className="overflow-hidden rounded-xl bg-white border-2 border-gray-100 hover:border-orange-400 transition-colors text-center">
                <div className="relative h-24"><Image src={s.image} alt={s.title} fill className="object-cover"/></div>
                <div className="p-3"><span className="text-xs font-bold" style={{color:"#1B2B8A"}}>{s.title}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-orange-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white sm:text-4xl">Get a Free Commercial Painting Quote</h2>
            <p className="mt-3 text-white/85 text-sm">Free site visit • Written quotation • Off-hours scheduling available</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+919158800517" className="flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white px-6 py-3 text-sm font-bold text-orange-500"><Phone className="h-5 w-5"/>Call Now</a>
              <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20quotation%20for%20commercial%20painting" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white"><MessageCircle className="h-5 w-5"/>WhatsApp Now</a>
            </div>
          </div>
          <div className="mt-12 mx-auto max-w-2xl rounded-2xl bg-orange-600 p-8">
            <h3 className="text-center text-xl font-bold text-white mb-6">📋 Free Quote — Fill Form Below</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div><label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Your Name *</label><input type="text" placeholder="Enter your name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none" style={{color:"#111827"}}/></div>
              <div><label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Phone Number *</label><input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none" style={{color:"#111827"}}/></div>
              <div><label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Service Type</label>
                <select value={form.service} onChange={e=>setForm({...form,service:e.target.value})} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none" style={{color:"#111827"}}>
                  <option value="">Select Service</option>
                  {serviceOptions.map(o=><option key={o} value={o}>{o}</option>)}
                </select>
              </div>
              <div><label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Your Area</label><input type="text" placeholder="e.g. Bhiwandi, Thane" value={form.area} onChange={e=>setForm({...form,area:e.target.value})} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none" style={{color:"#111827"}}/></div>
            </div>
            <div className="mt-4"><label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Message (Optional)</label><textarea rows={3} placeholder="Tell us about your project..." value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none resize-none" style={{color:"#111827"}}/></div>
            <button onClick={handleSubmit} className="mt-6 w-full rounded-lg bg-[#1B2B8A] py-4 text-base font-bold text-white hover:bg-[#152270] transition-colors">🚀 Send Enquiry on WhatsApp</button>
          </div>
        </div>
      </section>

      {/* AEO / LLM SUMMARY BLOCK */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Why Choose Us</span>
          <h2 className="mt-3 text-2xl font-black sm:text-3xl" style={{color:"#1B2B8A"}}>Why Businesses Choose Bhairav Painting Service</h2>
          <p className="mt-4 text-sm leading-relaxed" style={{color:"#374151"}}>
            Bhairav Painting Service provides commercial painting for offices, retail stores, warehouses, factories, restaurants, hotels and commercial buildings across Mumbai, Thane, Navi Mumbai, Kalyan and Bhiwandi. Every project includes professional surface inspection, crack repair, surface preparation, primer application, premium branded paints, owner supervision and written quotations. Projects can be scheduled during evenings, weekends or in phases to minimise disruption to business operations.
          </p>
          <p className="mt-3 text-sm leading-relaxed" style={{color:"#374151"}}>
            With 47+ years of experience, Bhairav Painting Service has completed 500+ commercial projects across the Mumbai metropolitan region. Paint brands used include Asian Paints, Berger, Nerolac and Dulux — applied following manufacturer guidelines for maximum durability. Every project is personally supervised by the owner, ensuring consistent quality and on-time delivery.
          </p>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Zero Disruption Scheduling" },
              { label: "Owner Supervised Execution" },
              { label: "Premium Paint Brands Only" },
              { label: "Free Site Visit & Written Quote" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold" style={{backgroundColor:"#f0f4ff", color:"#1B2B8A"}}>
                <CheckCircle className="h-3.5 w-3.5 text-orange-500 shrink-0" />{item.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KNOWLEDGE CENTRE */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Knowledge Centre</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Commercial Painting Knowledge Centre</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>Helpful guides for business owners, facility managers and builders planning commercial painting projects.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "How to Choose the Right Commercial Paint",
                content: "Choosing the right paint for a commercial property depends on the type of space, usage, and exposure. Office interiors need low-VOC washable emulsions that are safe for occupied spaces. Retail stores require durable washable paints that can handle daily cleaning. Restaurants need moisture-resistant paint that withstands steam, grease and regular scrubbing. Warehouses and factories require industrial coatings that resist abrasion, dust and heavy usage. For exterior surfaces in Mumbai, weatherproof paints like Asian Paints Apex or Berger WeatherCoat are recommended to handle monsoon rains and humidity. Always choose paint based on the specific environment — not just cost."
              },
              {
                title: "Office Painting Checklist Before Work Starts",
                content: "Before commercial office painting begins, a proper checklist ensures smooth execution. First, confirm the work schedule — after office hours or weekends — to avoid disruption. Ensure all furniture, electronics and networking equipment will be covered and protected. Check that surface preparation includes crack filling, putty and primer before final coats. Confirm the paint brand and grade being used. Ask for a written quotation with scope of work, number of coats and timeline. Verify that the team will do daily cleanup so the office is ready for the next working day. Owner supervision should be confirmed for all quality checks."
              },
              {
                title: "Signs Your Commercial Building Needs Repainting",
                content: "Commercial buildings show clear signs when repainting is overdue. Peeling or flaking paint on walls or ceilings is an immediate indicator. Visible dampness, staining or mould growth suggests moisture has penetrated the paint layer. Fading and chalking on exterior surfaces means the paint has lost its protective properties. Cracks in walls that have been previously painted over need attention before the next paint cycle. If customers or employees are noticing a tired or unprofessional appearance, it is time to repaint. Regular inspection every 2 years helps identify these issues early and prevents expensive repair work later."
              },
              {
                title: "How Monsoon Affects Commercial Exterior Paint",
                content: "Mumbai's monsoon season puts significant stress on commercial building exteriors. Heavy rainfall, combined with high humidity, causes moisture to penetrate paint layers that were not properly prepared or sealed. This leads to bubbling, peeling, seepage and mould growth — especially on north-facing walls and areas with poor drainage. Exterior painting should ideally be completed before monsoon — between November and May — for best adhesion and drying. During this window, surfaces are dry enough for proper surface preparation and paint application. Weatherproof exterior paint systems with anti-fungal properties provide significantly better protection against Mumbai's monsoon conditions."
              },
              {
                title: "Difference Between Industrial & Commercial Painting",
                content: "Industrial and commercial painting are often confused but serve different purposes. Commercial painting covers offices, retail stores, restaurants, hotels and public-facing business spaces where aesthetics and professional appearance are important. Industrial painting covers factories, warehouses, manufacturing units and storage facilities where durability, chemical resistance and safety are the primary requirements. Industrial coatings are heavier, more durable and formulated to withstand physical impact, chemicals, heat and heavy machinery movement. Commercial paints focus on appearance, washability and occupant safety. Both require different surface preparation methods, paint systems and application techniques."
              },
              {
                title: "Best Paint Finishes for Offices & Retail Stores",
                content: "The right paint finish affects both appearance and durability in commercial spaces. For office walls, a matte or low-sheen finish is preferred as it hides surface imperfections and reduces glare. For high-traffic areas like corridors and reception zones, a satin or semi-gloss finish is better as it is easier to clean and more durable. For retail stores, a satin finish provides a balance between appearance and washability — important for spaces that are cleaned daily. Ceilings in commercial spaces are typically finished in matte white for maximum light reflection. Accent walls in offices and retail spaces can use deeper colours in semi-gloss for a professional, modern look."
              },
              {
                title: "How to Reduce Business Downtime During Painting",
                content: "Minimising business downtime during commercial painting requires careful planning. The most effective approach is phased painting — completing one section or floor while the rest remains operational. For offices, work can be scheduled after business hours or during weekends. Retail stores can be painted in sections, keeping most of the floor space open for customers. Restaurants can be painted during weekly closing days or early mornings before opening. Advance planning of work schedules, protecting furniture and equipment, and ensuring daily cleanup before business hours resume are key to zero-disruption painting. Discuss the full schedule with your contractor before work begins."
              },
              {
                title: "Commercial Painting Cost Factors Explained",
                content: "Commercial painting costs depend on several factors. Surface area is the primary factor — larger spaces require more material and labour. Surface condition affects cost significantly — walls with cracks, dampness or old peeling paint require more preparation work. The number of paint coats required depends on the surface and paint type — typically two finish coats over primer. Paint brand and grade chosen affects material cost — premium branded paints cost more but last longer and reduce repainting frequency. Type of space also matters — industrial coatings for warehouses cost more than standard emulsions for offices. Always get a written quotation with clear scope before work begins to avoid surprises."
              },
            ].map((article, i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
                <h3 className="font-black text-base" style={{color:"#1B2B8A"}}>{article.title}</h3>
                <p className="mt-3 text-xs leading-relaxed" style={{color:"#6b7280"}}>{article.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL SEO SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-black" style={{color:"#1B2B8A"}}>Commercial Painting Services Across Mumbai Region</h2>
          <p className="mt-4 text-sm leading-relaxed" style={{color:"#6b7280"}}>
            Bhairav Painting Service provides professional commercial painting in Mumbai, Thane, Bhiwandi, Kalyan, and Navi Mumbai. 
            Whether you need office painting in Thane, warehouse painting in Bhiwandi, shop painting in Kalyan, or commercial building painting in Mumbai — 
            our experienced team handles projects of all sizes with minimal disruption to your business operations.
          </p>
          <p className="mt-3 text-sm leading-relaxed" style={{color:"#6b7280"}}>
            As a trusted commercial painting contractor with 47+ years of experience, we specialize in office painting, 
            retail store painting, restaurant painting, factory painting, and co-working space painting across the Mumbai metropolitan region. 
            Every project includes a free site visit, written quotation, and owner-supervised execution.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {["Commercial Painting Mumbai", "Office Painting Thane", "Warehouse Painting Bhiwandi", "Shop Painting Kalyan", "Commercial Painting Navi Mumbai", "Office Painting Contractor", "Factory Painting Mumbai", "Restaurant Painting Thane"].map((tag, i) => (
              <span key={i} className="rounded-full border border-gray-300 px-3 py-1 text-xs font-medium" style={{color:"#6b7280"}}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      <a href="https://wa.me/919158800517" target="_blank" rel="noopener noreferrer" className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg"><MessageCircle className="h-7 w-7"/></a>
      <a href="tel:+919158800517" className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg"><Phone className="h-7 w-7"/></a>
    </div>
  )
}
