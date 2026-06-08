"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Phone, MessageCircle, CheckCircle, MapPin, ChevronDown } from "lucide-react"

const serviceCards = [
  { title: "Bedroom Painting", desc: "Smooth wall painting for bedrooms. Any colour, any finish.", image: "/images/interior/card-bedroom.jpg" },
  { title: "Living Room Painting", desc: "Premium finish for halls & living rooms. Accent walls available.", image: "/images/interior/ba-living-room2.jpg" },
  { title: "Kitchen Painting", desc: "Moisture-resistant paint for kitchens. Easy clean finish.", image: "/images/interior/card-kitchen.jpg" },
  { title: "Dining Room Painting", desc: "Elegant finish for dining areas & connected spaces.", image: "/images/interior/card-dining.jpg" },
  { title: "Study Room Painting", desc: "Calm, focused colour schemes for study & work rooms.", image: "/images/interior/card-study.jpg" },
  { title: "Kids Room Painting", desc: "Fun, safe paints for children's rooms & nurseries.", image: "/images/interior/card-kids.jpg" },
  { title: "Pooja Room Painting", desc: "Auspicious colours & clean finish for pooja & prayer rooms.", image: "/images/interior/card-pooja.jpg" },
  { title: "Ceiling & Staircase", desc: "Ceiling painting, staircase walls & corridor painting.", image: "/images/interior/card-staircase.jpg" },
]

const whoFor = [
  { icon: "🏠", text: "Flat & Apartment Owners" },
  { icon: "🏡", text: "Villa & Bungalow Owners" },
  { icon: "🔑", text: "New Home Buyers" },
  { icon: "🏗️", text: "Home Renovation Projects" },
  { icon: "📋", text: "Rental Property Owners" },
  { icon: "🏢", text: "Housing Society Members" },
]

const whyUs = [
  { icon: "🏆", title: "47+ Years Experience", desc: "Trusted interior painting expert in Mumbai region since decades." },
  { icon: "👁️", title: "Owner Supervision", desc: "Every interior project personally supervised by the owner." },
  { icon: "🧹", title: "Clean Workmanship", desc: "Furniture protected. Complete cleanup after work done." },
  { icon: "⚡", title: "Timely Completion", desc: "1 room in 1 day. Full flat in 3-5 days. Always on time." },
  { icon: "💰", title: "Budget & Premium Options", desc: "Every budget covered — no compromise on quality." },
  { icon: "🆓", title: "Free Site Inspection", desc: "Free visit & written quote before any work starts." },
]

const processSteps = [
  { num: "1", title: "Free Site Visit", desc: "Visit your home for free assessment" },
  { num: "2", title: "Surface Inspection", desc: "Walls checked for cracks & dampness" },
  { num: "3", title: "Crack Repair & Putty", desc: "All cracks filled, putty applied" },
  { num: "4", title: "Primer Application", desc: "Quality primer for better adhesion" },
  { num: "5", title: "Paint Application", desc: "2 coats — smooth perfect finish" },
  { num: "6", title: "Final Cleanup", desc: "Inspection & complete handover" },
]

const beforeAfter = [
  { image: "/images/interior/ba-living-room.jpg", title: "Living Room — Thane", sub: "Full Interior Painting" },
  { image: "/images/interior/ba-bedroom-old.jpg", title: "Bedroom — Bhiwandi", sub: "Interior Repainting + Putty" },
  { image: "/images/interior/ba-hall.jpg", title: "2BHK Hall — Mumbai", sub: "Complete Interior Repaint" },
  { image: "/images/interior/ba-kitchen-old.jpg", title: "Kitchen — Kalyan", sub: "Moisture-Resistant Paint" },
  { image: "/images/interior/card-kids.jpg", title: "Kids Room — Bhiwandi", sub: "Colourful Safe Paints" },
  { image: "/images/interior/ba-new-flat.jpg", title: "New Flat — Navi Mumbai", sub: "First-time Painting" },
]

const recentProjects = [
  { image: "/images/interior/project-bhiwandi.jpg", location: "Bhiwandi", property: "2BHK Flat", area: "850 sq ft", service: "Full Interior Repainting", paint: "Asian Paints Royale" },
  { image: "/images/interior/project-thane.jpg", location: "Thane", property: "3BHK Apartment", area: "1200 sq ft", service: "Full Interior Painting", paint: "Berger Silk" },
  { image: "/images/interior/project-kalyan.jpg", location: "Kalyan", property: "2BHK New Flat", area: "950 sq ft", service: "First-Time Interior", paint: "Nerolac Impressions" },
]

const reviews = [
  { name: "Verified Customer", loc: "Bhiwandi", text: "Hamare 2BHK flat ka complete interior painting Bhairav Painting Service ne kiya. Walls me kaafi cracks the jinko pehle repair kiya gaya, uske baad putty aur painting hui. Furniture ko proper cover kiya gaya aur daily cleanup bhi kiya gaya. Final finish smooth aur premium lag rahi hai." },
  { name: "Verified Customer", loc: "Thane", text: "Bedroom, living room aur kitchen ka interior repaint karwaya tha. Colour selection me guidance mili aur har room ka finish uniform raha. Kaam ke dauran ghar me rehna bhi comfortable tha kyunki team ne cleanliness maintain rakhi." },
  { name: "Verified Customer", loc: "Kalyan", text: "Naye 3BHK flat ke possession ke baad interior painting karwani thi. Site visit ke baad detailed quotation diya gaya aur jo commitment kiya tha usi hisab se kaam complete hua. Paint finish, edge work aur wall preparation sab professional level ka tha." },
  { name: "Verified Customer", loc: "Mumbai", text: "Owner ne khud site inspect ki aur pura project monitor kiya. Crack filling, putty work aur painting sab systematic tareeke se hua. Ghar ka interior pehle se kaafi bright aur fresh lag raha hai. Quality aur pricing dono se satisfied hu." },
  { name: "Verified Customer", loc: "Navi Mumbai", text: "Rental flat ko tenants ke liye ready karna tha. Bhairav Painting Service ne short timeline me pura interior repaint complete kiya. Walls clean aur fresh dikhne lagi aur property ka overall appearance improve ho gaya. Fast aur reliable service." },
  { name: "Verified Customer", loc: "Dombivli", text: "Kitchen aur dining area me moisture ke marks the. Team ne surface prepare karke proper paint system use kiya. Finishing smooth hai aur room pehle se zyada clean aur modern lag raha hai. Workmanship impressive thi." },
  { name: "Verified Customer", loc: "Vasai", text: "Interior painting ke saath ceiling painting bhi karwayi thi. Team punctual thi, daily progress update milta tha aur completion ke baad complete cleanup kiya gaya. Har room me finishing consistent hai aur result expected se better mila." },
  { name: "Verified Customer", loc: "Virar", text: "Poore ghar ka interior renovation project tha jisme wall preparation, putty aur painting include tha. Material quality achhi thi aur workers experienced lage. Project schedule ke andar complete hua aur final outcome bahut professional dikh raha hai." },
]

const areas = ["Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai", "Dombivli", "Kasheli", "Kalher", "Andheri", "Vasai", "Virar"]

const relatedServices = [
  { title: "Residential Painting", href: "/services/residential", image: "/images/residential.jpg" },
  { title: "Exterior Painting", href: "/services/exterior", image: "/images/interior/project-thane.jpg" },
  { title: "Waterproofing", href: "/services/waterproofing", image: "/images/interior/waterproofing.jpg" },
  { title: "Texture Painting", href: "/services/texture", image: "/images/texture.jpg" },
  { title: "Commercial Painting", href: "/services/commercial", image: "/images/commercial.jpg" },
]

const faqs = [
  { q: "What is the cost of interior painting in Mumbai?", a: "Interior painting cost starts from Rs.8 to Rs.25 per sq ft depending on wall condition, paint brand and area size. Free site visit and written quotation available — no hidden charges." },
  { q: "How long does interior painting take for a 2BHK?", a: "A standard 2BHK interior painting takes 3 to 4 days depending on wall condition and scope of work." },
  { q: "Which paint brands do you use for interiors?", a: "We use Asian Paints, Berger, Nerolac and Dulux for interior work. We recommend the right product based on surface type and budget." },
  { q: "How many coats of paint are required for interior walls?", a: "Minimum 2 coats of paint after putty and primer are recommended for a smooth, long-lasting interior finish." },
  { q: "What is the best paint for interior walls?", a: "Asian Paints Royale, Berger Silk, and Nerolac Impressions are among the best interior wall paints — smooth finish, washable, and long-lasting." },
  { q: "Is putty necessary before interior painting?", a: "Yes. Putty fills minor surface imperfections and creates a smooth base for paint — it significantly improves the final finish quality." },
  { q: "Can wall cracks be repaired before painting?", a: "Yes. Crack filling is included in our standard interior painting process — we fill all cracks before applying putty and paint." },
  { q: "Which paint is washable for interior walls?", a: "Asian Paints Royale, Berger Easy Clean, and Nerolac Impressions are washable interior paints — ideal for kitchens, kids rooms and high-traffic areas." },
  { q: "Do you move furniture before painting?", a: "Yes. We shift and cover all furniture with protective sheets before starting work — and put everything back after completion." },
  { q: "Do you work on weekends?", a: "Yes. We work all days including Saturdays and Sundays to suit your schedule and minimise disruption." },
  { q: "How often should interior walls be repainted?", a: "Interior walls generally need repainting every 4 to 6 years depending on paint quality, humidity, and wear." },
  { q: "Do you provide material or only labour?", a: "Both options — Material + Labour (we arrange everything) or Labour Only (you buy paint, we provide skilled manpower)." },
  { q: "Can interior painting be done in an occupied flat?", a: "Yes. We work room by room with furniture protection and daily cleanup — minimal disruption to your daily routine." },
  { q: "Do you provide warranty on interior painting work?", a: "Yes — workmanship warranty included. Any defect due to our work is rectified at no extra cost." },
  { q: "How do I book a free site visit for interior painting?", a: "Simply call or WhatsApp us at +91 9158800517. We will schedule a free visit at your convenient time — no charges, no obligation." },
]

const serviceOptions = ["Bedroom Painting", "Living Room Painting", "Kitchen Painting", "Dining Room Painting", "Study Room Painting", "Kids Room Painting", "Pooja Room Painting", "Complete Home Interior", "New Flat Interior", "Rental Flat Interior", "Other"]

export default function InteriorPaintingPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", area: "", message: "" })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = () => {
    if (!form.name || !form.phone) { alert("Please enter your name and phone number."); return }
    const msg = `Hi, I need an Interior Painting quote.%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService: ${encodeURIComponent(form.service || "Not specified")}%0AArea: ${encodeURIComponent(form.area || "Not specified")}%0AMessage: ${encodeURIComponent(form.message || "-")}`
    window.open(`https://wa.me/919158800517?text=${msg}`, "_blank")
  }

  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="relative bg-[#1B2B8A] pt-20 pb-16 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-400 mb-6">
            ★ INTERIOR PAINTING SERVICES
          </div>
          <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl leading-tight" style={{color:"#f97316"}}>
            Interior Painting Services
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">
            47+ years of experience in bedroom, living room, kitchen & complete home interior painting. Professional work with owner supervision. Free site visit available!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-bold text-white hover:bg-orange-600 transition-colors">
              <MessageCircle className="h-5 w-5" /> Get Free Quote on WhatsApp
            </a>
            <a href="tel:+919158800517" className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-5 w-5" /> Call Now: 9158800517
            </a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-orange-500 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30 text-center text-white">
            <div className="px-4 py-2"><p className="text-2xl font-black">47+</p><p className="text-xs font-semibold mt-1">Years Experience</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">FREE</p><p className="text-xs font-semibold mt-1">Site Visit</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">500+</p><p className="text-xs font-semibold mt-1">Projects Done</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">✓</p><p className="text-xs font-semibold mt-1">Trained Painters</p></div>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Before & After</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Before & After Gallery</h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Real interior painting work across Mumbai, Thane & Bhiwandi.</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beforeAfter.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-white shadow-sm group">
                <div className="relative h-52 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold">View More →</span>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>{item.title}</p>
                  <p className="mt-1 text-xs" style={{color:"#6b7280"}}>{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Who Is This For</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Who Needs Interior Painting?</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {whoFor.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm font-600" style={{color:"#1B2B8A", fontWeight:600}}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Interior Services</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Areas We Paint Inside Your Home</h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Complete interior painting for every room — across Mumbai, Thane & Bhiwandi.</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((s, i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-36">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-sm" style={{color:"#1B2B8A"}}>{s.title}</h3>
                  <p className="mt-1 text-xs" style={{color:"#6b7280"}}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Why Choose Bhairav for Interior Painting?</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>47+ years of trusted interior painting in Mumbai, Thane, Bhiwandi & Kalyan.</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <div key={i} className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5 hover:shadow-sm transition-shadow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-xl">{w.icon}</div>
                <div>
                  <h3 className="font-bold text-sm" style={{color:"#111827"}}>{w.title}</h3>
                  <p className="mt-1 text-xs" style={{color:"#6b7280"}}>{w.desc}</p>
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
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Our Interior Painting Process</h2>
          <p className="mt-3 text-sm text-white/70">Simple, transparent process from first call to final handover.</p>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {processSteps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl font-black text-white">{step.num}</div>
                <h3 className="mt-3 font-bold text-white text-xs">{step.title}</h3>
                <p className="mt-1 text-xs text-white/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT PROJECTS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Recent Work</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Recent Interior Projects</h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Real projects completed with full details — location, area & scope.</p>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {recentProjects.map((p, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image src={p.image} alt={`${p.service} ${p.location}`} fill className="object-cover" />
                </div>
                <div className="p-5 bg-white">
                  <h3 className="font-bold text-sm" style={{color:"#1B2B8A"}}>{p.property} — {p.location}</h3>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs" style={{color:"#6b7280"}}><MapPin className="h-3.5 w-3.5 text-orange-500" /><span>Location: {p.location}</span></div>
                    <div className="flex items-center gap-2 text-xs" style={{color:"#6b7280"}}><CheckCircle className="h-3.5 w-3.5 text-orange-500" /><span>Property: {p.property}</span></div>
                    <div className="flex items-center gap-2 text-xs" style={{color:"#6b7280"}}><CheckCircle className="h-3.5 w-3.5 text-orange-500" /><span>Area: {p.area}</span></div>
                    <div className="flex items-center gap-2 text-xs" style={{color:"#6b7280"}}><CheckCircle className="h-3.5 w-3.5 text-orange-500" /><span>Service: {p.service}</span></div>
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
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>What Our Customers Say</h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Real reviews from homeowners across Mumbai, Thane & Bhiwandi.</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-xl bg-white p-6 border-l-4 border-orange-500 shadow-sm">
                <div className="flex gap-0.5">{[...Array(5)].map((_, j) => <span key={j} className="text-orange-500 text-lg">★</span>)}</div>
                <p className="mt-3 text-xs italic" style={{color:"#4b5563"}}>"{r.text}"</p>
                <p className="mt-4 font-bold text-sm" style={{color:"#111827"}}>{r.name}</p>
                <p className="text-xs" style={{color:"#9ca3af"}}>{r.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY HOMEOWNERS CHOOSE */}
      <section className="py-20 bg-[#1B2B8A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-orange-400 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">Trusted Choice</span>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Why Homeowners Choose Bhairav</h2>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {["47+ years of interior painting experience in Mumbai & Bhiwandi","Free site visit and written quotation — no hidden charges","Material and labour both available as per your requirement","Every interior project personally supervised by the owner","Specialists in bedroom, living room, kitchen & full home painting","Serving Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai"].map((point, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-white/10 px-4 py-3">
                <CheckCircle className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                <p className="text-sm text-white/90">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO CHOOSE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Expert Guide</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>How to Choose an Interior Painting Contractor</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { n:"1", t:"Check Experience", d:"Choose a contractor with proven interior painting experience. Ask for references." },
              { n:"2", t:"Get Written Quote", d:"Always insist on written quotation — labour, material, coats & timeline." },
              { n:"3", t:"Confirm Paint Brand", d:"Ask which brand & how many coats. Minimum 2 coats after primer recommended." },
              { n:"4", t:"Furniture Protection", d:"Professional painters protect all furniture & flooring before starting work." },
              { n:"5", t:"Verify Cleanup Process", d:"Reliable contractor cleans up completely after interior work is done." },
              { n:"6", t:"Read Google Reviews", d:"Check reviews or ask for customer references before finalising." },
            ].map((item) => (
              <div key={item.n} className="rounded-xl bg-gray-50 p-5 border border-gray-100">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white mb-3">{item.n}</div>
                <h3 className="font-bold text-sm" style={{color:"#1B2B8A"}}>{item.t}</h3>
                <p className="mt-1 text-xs" style={{color:"#6b7280"}}>{item.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Common Questions</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Questions Homeowners Ask Before Painting</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { q:"How long does interior painting take?", a:"1 room: 1 day. 2BHK: 3-4 days. 3BHK: 5-6 days. Timeline confirmed upfront." },
              { q:"Is furniture protected during painting?", a:"Yes. All furniture & flooring covered with protective sheets before work starts." },
              { q:"How many coats for interior walls?", a:"Minimum 2 coats after putty & primer for long-lasting smooth finish." },
              { q:"Can wall cracks be repaired before painting?", a:"Yes. Crack filling & putty work is part of our standard interior painting process." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm">
                <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>Q: {item.q}</p>
                <p className="mt-2 text-xs" style={{color:"#4b5563"}}>A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Service Areas</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Areas We Serve</h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Interior painting services across Mumbai Metropolitan Region.</p>
          <p className="mt-3 text-sm leading-relaxed max-w-2xl" style={{color:"#4b5563"}}>We provide interior painting services in <strong>Bhiwandi, Thane, Kalyan, Dombivli, Mumbai and Navi Mumbai</strong> for flats, apartments, villas, offices and commercial properties.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span key={area} className="flex items-center gap-2 rounded-full bg-[#1B2B8A] px-5 py-2.5 text-sm font-semibold text-white">
                <MapPin className="h-4 w-4" />{area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* GEO PARAGRAPH */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-black sm:text-3xl" style={{color:"#1B2B8A"}}>Interior Painting Contractor in Mumbai, Thane & Bhiwandi</h2>
          <p className="mt-4 text-sm leading-relaxed max-w-3xl" style={{color:"#4b5563"}}>
            Bhairav Painting Service has been providing professional interior painting services across Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai for over 47 years. We specialise in bedroom painting, living room painting, kitchen painting, and complete home interior painting across the Mumbai Metropolitan Region. Our trained painters handle every interior project with owner supervision — ensuring quality workmanship, smooth finish, and complete site cleanup. Whether you need a fresh coat for your bedroom in Bhiwandi, a full interior repaint for your 3BHK in Thane, or first-time painting for your new flat in Kalyan — Bhairav Painting Service delivers reliable results. Contact us for a free site visit.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>FAQ</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Frequently Asked Questions</h2>
          <div className="mt-8 space-y-3 max-w-3xl">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-100 overflow-hidden">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors bg-white"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-bold text-sm pr-4" style={{color:"#1B2B8A"}}>{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-orange-500 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 bg-white">
                    <p className="text-sm" style={{color:"#4b5563"}}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Related Services</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Other Painting Services</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {relatedServices.map((s, i) => (
              <Link key={i} href={s.href} className="overflow-hidden rounded-xl bg-white border-2 border-gray-100 hover:border-orange-400 transition-colors text-center">
                <div className="relative h-24">
                  <Image src={s.image} alt={s.title} fill className="object-cover" />
                </div>
                <div className="p-3">
                  <span className="text-xs font-bold" style={{color:"#1B2B8A"}}>{s.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FORM */}
      <section id="contact" className="py-20 bg-orange-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white sm:text-4xl">Get A Free Interior Painting Quote</h2>
            <p className="mt-3 text-white/85 text-sm">Serving Mumbai, Thane, Bhiwandi, Kalyan & Navi Mumbai. Free site visit — no obligation.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+919158800517" className="flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white px-6 py-3 text-sm font-bold text-orange-500 hover:bg-white/90 transition-colors">
                <Phone className="h-5 w-5" /> Call Now
              </a>
              <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20an%20Interior%20Painting%20quote" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                <MessageCircle className="h-5 w-5" /> WhatsApp Now
              </a>
            </div>
          </div>
          <div className="mt-12 mx-auto max-w-2xl rounded-2xl bg-orange-600 p-8">
            <h3 className="text-center text-xl font-bold text-white mb-6">📋 Free Quote — Fill Form Below</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div><label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Your Name *</label>
                <input type="text" placeholder="Enter your name" value={form.name} onChange={(e) => setForm({...form,name:e.target.value})} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none" style={{color:"#111827"}} /></div>
              <div><label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Phone Number *</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({...form,phone:e.target.value})} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none" style={{color:"#111827"}} /></div>
              <div><label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Service Type</label>
                <select value={form.service} onChange={(e) => setForm({...form,service:e.target.value})} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none" style={{color:"#111827"}}>
                  <option value="">Select Service</option>
                  {serviceOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select></div>
              <div><label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Your Area</label>
                <input type="text" placeholder="e.g. Bhiwandi, Thane" value={form.area} onChange={(e) => setForm({...form,area:e.target.value})} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none" style={{color:"#111827"}} /></div>
            </div>
            <div className="mt-4"><label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Message (Optional)</label>
              <textarea rows={3} placeholder="Tell us about your project..." value={form.message} onChange={(e) => setForm({...form,message:e.target.value})} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none resize-none" style={{color:"#111827"}} /></div>
            <button onClick={handleSubmit} className="mt-6 w-full rounded-lg bg-[#1B2B8A] py-4 text-base font-bold text-white hover:bg-[#152270] transition-colors">
              🚀 Send Enquiry on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* FLOATING BUTTONS */}
      <a href="https://wa.me/919158800517" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors">
        <MessageCircle className="h-7 w-7" />
      </a>
      <a href="tel:+919158800517"
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-colors">
        <Phone className="h-7 w-7" />
      </a>
    </div>
  )
}
