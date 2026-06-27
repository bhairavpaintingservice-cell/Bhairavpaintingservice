"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Phone, MessageCircle, CheckCircle, MapPin, ChevronDown } from "lucide-react"

const serviceCards = [
  { title: "Office Painting", img: "/images/commercial/commercial-office.jpg", points: ["Office Interiors", "Cabins & Meeting Rooms", "Reception & Common Areas"] },
  { title: "Shop & Showroom Painting", img: "/images/commercial/commercial-showroom.jpg", points: ["Storefronts", "Display Areas", "Billing & Customer Zones"] },
  { title: "Warehouse & Factory Painting", img: "/images/commercial/commercial-warehouse.jpg", points: ["Storage Areas", "Factory Floors", "Industrial Walls & Roofing"] },
  { title: "Restaurant & Hotel Painting", img: "/images/commercial/commercial-restaurant.jpg", points: ["Dining Areas", "Kitchens", "Guest Rooms & Lobbies"] },
  { title: "Retail Chain Painting", img: "/images/commercial/commercial-retail.jpg", points: ["Multi-Branch Projects", "Consistent Brand Finish", "Phased Scheduling"] },
  { title: "Co-working & Business Centers", img: "/images/commercial/commercial-coworking.jpg", points: ["Shared Workspaces", "Cabins & Lounges", "Common Pantry Areas"] },
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
  { image: "/images/commercial/commercial-office.jpg", title: "Corporate Office — Bhiwandi", type: "Office Painting", scope: "Full Interior Repaint", area: "2200 sq ft" },
  { image: "/images/commercial/commercial-showroom.jpg", title: "Retail Showroom — Thane", type: "Shop & Showroom", scope: "Storefront & Display Area", area: "1800 sq ft" },
  { image: "/images/commercial/commercial-restaurant.jpg", title: "Restaurant — Mumbai", type: "Restaurant & Hotel", scope: "Interior + Exterior", area: "3000 sq ft" },
  { image: "/images/commercial/commercial-warehouse.jpg", title: "Warehouse — Bhiwandi", type: "Warehouse & Factory", scope: "Industrial Wall Coating", area: "8000 sq ft" },
  { image: "/images/commercial/commercial-retail.jpg", title: "Retail Chain — Kalyan", type: "Retail Chain", scope: "Multi-Branch Repaint", area: "1500 sq ft each" },
  { image: "/images/commercial/commercial-coworking.jpg", title: "Co-working Space — Navi Mumbai", type: "Co-working Center", scope: "Full Interior Painting", area: "4000 sq ft" },
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
          <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">47+ years painting offices, shops, showrooms, warehouses &amp; restaurants — with minimal disruption to your business.</p>
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
            <div className="px-4 py-2"><p className="text-2xl font-black">Trusted</p><p className="text-xs font-semibold mt-1">Across Mumbai Region</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">100%</p><p className="text-xs font-semibold mt-1">Owner Supervised</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">FREE</p><p className="text-xs font-semibold mt-1">Site Visit</p></div>
          </div>
        </div>
      </section>

      {/* NUMBERS SECTION */}
      <section className="py-12" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-4xl font-black text-white">47+</p>
              <p className="mt-1 text-sm font-semibold text-blue-200">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white">500+</p>
              <p className="mt-1 text-sm font-semibold text-blue-200">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-black text-white">100%</p>
              <p className="mt-1 text-sm font-semibold text-blue-200">Owner Supervised</p>
            </div>
            <div>
              <p className="text-4xl font-black text-orange-400">Free</p>
              <p className="mt-1 text-sm font-semibold text-blue-200">Site Inspection</p>
            </div>
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
                <div className="relative h-44"><Image src={s.img} alt={s.title} fill className="object-cover" /></div>
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
            {whoFor.map((w, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-gray-100 bg-white">
                <div className="relative h-36"><Image src={w.img} alt={w.title} fill className="object-cover" /></div>
                <div className="p-5">
                  <h3 className="font-bold text-sm" style={{color:"#1B2B8A"}}>{w.title}</h3>
                  <p className="text-xs mt-0.5" style={{color:"#6b7280"}}>{w.desc}</p>
                  <ul className="mt-3 space-y-1">
                    {w.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2 text-xs" style={{color:"#6b7280"}}><CheckCircle className="h-3.5 w-3.5 text-orange-500 shrink-0 mt-0.5"/>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
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
              <div key={i} className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                <div className="relative h-28"><Image src={item.img} alt={item.label} fill className="object-cover" /></div>
                <div className="p-3">
                  <p className="text-xs font-bold" style={{color:"#1B2B8A"}}>{item.label}</p>
                  <p className="text-xs mt-0.5" style={{color:"#6b7280"}}>{item.desc}</p>
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
            {commercialProjects.map((p, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
                <div className="relative h-48"><Image src={p.image} alt={p.title} fill className="object-cover" /></div>
                <div className="p-5">
                  <h3 className="font-bold text-sm" style={{color:"#1B2B8A"}}>{p.title}</h3>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div><p className="text-xs" style={{color:"#9ca3af"}}>Type</p><p className="text-xs font-bold" style={{color:"#111827"}}>{p.type}</p></div>
                    <div><p className="text-xs" style={{color:"#9ca3af"}}>Scope</p><p className="text-xs font-bold" style={{color:"#111827"}}>{p.scope}</p></div>
                  </div>
                </div>
              </div>
            ))}
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

      {/* AEO SECTION */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Why Choose Us</span>
          <h2 className="mt-3 text-2xl font-black sm:text-3xl" style={{color:"#1B2B8A"}}>Why Businesses Prefer Bhairav Painting Service</h2>
          <p className="mt-4 text-sm leading-relaxed" style={{color:"#374151"}}>
            Business owners across Mumbai, Thane, and Bhiwandi choose Bhairav Painting Service because we schedule all commercial painting work around operating hours — including evenings and weekends — so there is zero disruption to daily business activities. We use only premium paint brands such as Asian Paints, Berger, Nerolac, and Dulux, following manufacturer-specified application methods for long-lasting results. Our teams maintain clean, organized work sites throughout the project. Every commercial painting project comes with a transparent written quotation with no hidden costs, and is personally supervised by the owner from start to finish — ensuring the quality commitment is met on every project, every time.
          </p>
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
