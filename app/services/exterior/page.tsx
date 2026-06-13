"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Phone, MessageCircle, CheckCircle, MapPin, ChevronDown } from "lucide-react"

const beforeAfter = [
  { image: "/images/exterior/ba-1.jpg", title: "House Exterior — Bhiwandi", sub: "Full Exterior Repaint" },
  { image: "/images/exterior/ba-2.jpg", title: "Building — Thane", sub: "Society Exterior Painting" },
  { image: "/images/exterior/ba-3.jpg", title: "Villa — Kalyan", sub: "Weather-Resistant Coating" },
  { image: "/images/exterior/ba-4.jpg", title: "Apartment — Mumbai", sub: "High-Rise Exterior" },
  { image: "/images/exterior/ba-5.jpg", title: "Bungalow — Navi Mumbai", sub: "Complete Exterior Makeover" },
  { image: "/images/exterior/ba-6.jpg", title: "Society — Dombivli", sub: "Multi-Building Project" },
]

const whoFor = [
  { image: "/images/exterior/house.jpg", title: "House Owners", desc: "Independent houses & bungalows across Mumbai region." },
  { image: "/images/exterior/villa.jpg", title: "Villa Owners", desc: "Premium villas & luxury properties — quality exterior finish." },
  { image: "/images/exterior/society.jpg", title: "Housing Societies", desc: "Complete society exterior — minimal disruption to residents." },
  { image: "/images/exterior/builders.jpg", title: "Builders & Developers", desc: "New construction exterior painting for developers & builders." },
  { image: "/images/exterior/commercial.jpg", title: "Commercial Buildings", desc: "Offices, showrooms & commercial property exterior." },
  { image: "/images/exterior/new-construction.jpg", title: "New Construction", desc: "First-time exterior painting for newly built properties." },
  { image: "/images/exterior/renovation.jpg", title: "Renovation Projects", desc: "Old building renovation — crack repair, putty & fresh paint." },
]

const serviceCards = [
  { image: "/images/exterior/house.jpg", title: "House Exterior Painting", desc: "Complete house exterior — walls, plinth, parapet & compound." },
  { image: "/images/exterior/society.jpg", title: "Building Exterior", desc: "High-rise & multi-storey building exterior painting with scaffolding." },
  { image: "/images/exterior/ba-2.jpg", title: "Society Painting", desc: "Complete housing society exterior. Minimal disruption to residents." },
  { image: "/images/exterior/villa.jpg", title: "Villa & Bungalow", desc: "Premium exterior finish for villas & bungalows. Durable results." },
  { image: "/images/exterior/ba-3.jpg", title: "Weather-Resistant Coating", desc: "Special paint for Mumbai monsoon — prevents peeling & seepage." },
  { image: "/images/exterior/ba-4.jpg", title: "Compound Wall Painting", desc: "Boundary walls, compound walls & gate painting." },
  { image: "/images/exterior/new-construction.jpg", title: "New Construction Painting", desc: "First-time exterior painting for newly constructed buildings." },
  { image: "/images/exterior/renovation.jpg", title: "Exterior Repainting", desc: "Old exterior renovation — crack repair, putty & fresh paint." },
]

const processSteps = [
  { num: "1", title: "Free Site Visit", desc: "Visit property for free assessment" },
  { num: "2", title: "Surface Inspection", desc: "Walls checked for cracks & seepage" },
  { num: "3", title: "Crack Repair & Putty", desc: "All cracks filled, surface prep done" },
  { num: "4", title: "Primer Application", desc: "Weather-resistant primer applied" },
  { num: "5", title: "Paint Application", desc: "2 coats — durable weather-resistant finish" },
  { num: "6", title: "Final Cleanup", desc: "Inspection & complete site cleanup" },
]

const recentProjects = [
  { image: "/images/exterior/ba-1.jpg", location: "Bhiwandi", property: "Independent House", area: "1200 sq ft", service: "Full Exterior Repaint" },
  { image: "/images/exterior/ba-2.jpg", location: "Thane", property: "7-Storey Building", area: "8000 sq ft", service: "Society Exterior" },
  { image: "/images/exterior/ba-5.jpg", location: "Kalyan", property: "Villa", area: "2500 sq ft", service: "Exterior + Compound" },
]

const reviews = [
  { name: "Verified Customer", loc: "Thane", text: "Building ka exterior painting Bhairav Painting Service ne kiya. Scaffolding se lekar final coat tak sab kuch professional tha. Paint quality achhi thi aur finish long-lasting lag rahi hai." },
  { name: "Verified Customer", loc: "Bhiwandi", text: "Hamare ghar ka exterior bahut kharab ho gaya tha — cracks, seepage sab tha. Bhairav Painting ne pehle repair kiya, phir weatherproof paint lagaya. Ab bilkul naya lag raha hai." },
  { name: "Verified Customer", loc: "Kalyan", text: "Society committee ke behalf pe contact kiya tha. 3 buildings ka exterior tha. Team ne time pe complete kiya aur residents ko minimum inconvenience hua. Highly recommended." },
  { name: "Verified Customer", loc: "Navi Mumbai", text: "Villa ka exterior painting + compound wall sab karwaya. Owner ne personally visit kiya aur quality check kiya. Final result expectations se better tha. Will definitely hire again." },
]

const areas = ["Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai", "Dombivli", "Kasheli", "Kalher", "Andheri", "Vasai", "Virar"]

const relatedServices = [
  { title: "Residential Painting", href: "/services/residential", image: "/images/residential.jpg" },
  { title: "Interior Painting", href: "/services/interior", image: "/images/interior/ba-living-room.jpg" },
  { title: "Waterproofing", href: "/services/waterproofing", image: "/images/interior/waterproofing.jpg" },
  { title: "Texture Painting", href: "/services/texture", image: "/images/texture.jpg" },
  { title: "Commercial Painting", href: "/services/commercial", image: "/images/commercial.jpg" },
]

const faqs = [
  { q: "What is the cost of exterior painting in Mumbai?", a: "Exterior painting cost depends on wall area, surface condition and paint grade. Free site visit & written quotation available — no hidden charges." },
  { q: "When is the best time for exterior painting in Mumbai?", a: "October to March is ideal. Avoid monsoon months (June-September) as humidity affects paint adhesion and finish." },
  { q: "Which paint is best for exterior walls in Mumbai?", a: "Asian Paints Apex, Berger Weathercoat, Nerolac Excel and Dulux Weathershield are ideal for Mumbai weather — waterproof, fade-resistant and durable." },
  { q: "How long does exterior painting last?", a: "With quality weatherproof paint and proper surface prep, exterior painting typically lasts 5-7 years in Mumbai climate." },
  { q: "Do you provide scaffolding for high-rise buildings?", a: "Yes. We arrange complete scaffolding setup for buildings above 2 floors. Scaffolding cost is included in the quotation." },
  { q: "Can you paint society buildings with minimal disruption?", a: "Yes. We specialise in society exterior painting — work is scheduled to minimise disruption to residents." },
  { q: "What surface preparation is done for exterior painting?", a: "Wall cleaning, crack filling, putty application, primer coat — then final paint. Proper prep is essential for exterior durability." },
  { q: "Do you do crack repair before exterior painting?", a: "Yes. Crack filling is part of our standard exterior painting process — essential to prevent water seepage." },
  { q: "How many coats for exterior walls?", a: "Minimum 2 coats of exterior paint after primer. For high-exposure areas, 3 coats may be recommended." },
  { q: "Do you provide warranty on exterior painting?", a: "Yes — workmanship warranty included. Any defect due to our work is rectified at no extra cost." },
  { q: "Do you handle large society contracts?", a: "Yes. We regularly handle large society and building exterior projects across Mumbai, Thane and Bhiwandi." },
  { q: "Can exterior painting prevent water leakage?", a: "Weatherproof exterior paint helps prevent surface water penetration. For serious seepage, we also offer waterproofing treatment." },
]

const serviceOptions = ["House Exterior Painting", "Building Exterior", "Society Painting", "Villa & Bungalow Exterior", "New Construction Painting", "Compound Wall Painting", "Exterior Repainting", "Other"]

export default function ExteriorPaintingPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", area: "", message: "" })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = () => {
    if (!form.name || !form.phone) { alert("Please enter your name and phone number."); return }
    const msg = `Hi, I need an Exterior Painting quote.%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService: ${encodeURIComponent(form.service || "Not specified")}%0AArea: ${encodeURIComponent(form.area || "Not specified")}%0AMessage: ${encodeURIComponent(form.message || "-")}`
    window.open(`https://wa.me/919158800517?text=${msg}`, "_blank")
  }

  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="relative bg-[#1B2B8A] pt-20 pb-16 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-400 mb-6">★ EXTERIOR PAINTING SERVICES</div>
          <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl leading-tight" style={{color:"#f97316"}}>Exterior Painting Services</h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">47+ years of experience in house exterior, building & society painting across Mumbai, Thane & Bhiwandi. Weather-resistant finish. Free site visit available!</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-bold text-white hover:bg-orange-600 transition-colors"><MessageCircle className="h-5 w-5" /> Get Free Quote on WhatsApp</a>
            <a href="tel:+919158800517" className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors"><Phone className="h-5 w-5" /> Call Now: 9158800517</a>
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
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Real exterior painting work across Mumbai, Thane & Bhiwandi.</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beforeAfter.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-white shadow-sm group">
                <div className="relative h-52 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-[#1B2B8A]/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold">View More →</span>
                  </div>
                </div>
                <div className="p-4"><p className="font-bold text-sm" style={{color:"#1B2B8A"}}>{item.title}</p><p className="mt-1 text-xs" style={{color:"#6b7280"}}>{item.sub}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Who Is This For</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Who Needs Exterior Painting?</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {whoFor.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-28"><Image src={item.image} alt={item.title} fill className="object-cover" /></div>
                <div className="p-3"><p className="font-bold text-sm" style={{color:"#1B2B8A"}}>{item.title}</p><p className="text-xs mt-1" style={{color:"#6b7280"}}>{item.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Exterior Services</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>What We Paint Outside</h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Complete exterior painting for every property type — across Mumbai, Thane & Bhiwandi.</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((s, i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-white border border-gray-100 hover:shadow-md transition-shadow">
                <div className="relative h-36"><Image src={s.image} alt={s.title} fill className="object-cover" /></div>
                <div className="p-4"><h3 className="font-bold text-sm" style={{color:"#1B2B8A"}}>{s.title}</h3><p className="mt-1 text-xs" style={{color:"#6b7280"}}>{s.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Why Choose Bhairav for Exterior Painting?</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon:"🏆", t:"47+ Years Experience", d:"Trusted exterior painting expert in Mumbai region since decades." },
              { icon:"👁️", t:"Owner Supervision", d:"Every exterior project personally supervised by the owner." },
              { icon:"🌧️", t:"Weather-Resistant Paint", d:"We use paints that withstand Mumbai monsoon & harsh weather." },
              { icon:"🪜", t:"Scaffolding Available", d:"Full scaffolding setup for high-rise & multi-storey buildings." },
              { icon:"💰", t:"Budget & Premium Options", d:"Every budget covered — no compromise on quality." },
              { icon:"🆓", t:"Free Site Inspection", d:"Free visit & written quote before any work starts." },
            ].map((w, i) => (
              <div key={i} className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-xl">{w.icon}</div>
                <div><h3 className="font-bold text-sm" style={{color:"#111827"}}>{w.t}</h3><p className="mt-1 text-xs" style={{color:"#6b7280"}}>{w.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-[#1B2B8A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-orange-400 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">Our Process</span>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Our Exterior Painting Process</h2>
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

      {/* RECENT PROJECTS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Recent Work</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Recent Exterior Projects</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {recentProjects.map((p, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-gray-100 shadow-sm">
                <div className="relative h-48"><Image src={p.image} alt={p.service} fill className="object-cover" /></div>
                <div className="p-5">
                  <h3 className="font-bold text-sm" style={{color:"#1B2B8A"}}>{p.property} — {p.location}</h3>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs" style={{color:"#6b7280"}}><MapPin className="h-3.5 w-3.5 text-orange-500" />Location: {p.location}</div>
                    <div className="flex items-center gap-2 text-xs" style={{color:"#6b7280"}}><CheckCircle className="h-3.5 w-3.5 text-orange-500" />Property: {p.property}</div>
                    <div className="flex items-center gap-2 text-xs" style={{color:"#6b7280"}}><CheckCircle className="h-3.5 w-3.5 text-orange-500" />Area: {p.area}</div>
                    <div className="flex items-center gap-2 text-xs" style={{color:"#6b7280"}}><CheckCircle className="h-3.5 w-3.5 text-orange-500" />Service: {p.service}</div>
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
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-xl bg-white p-6 border-l-4 border-orange-500 shadow-sm">
                <div className="flex gap-0.5">{[...Array(5)].map((_,j)=><span key={j} className="text-orange-500 text-lg">★</span>)}</div>
                <p className="mt-3 text-xs italic" style={{color:"#4b5563"}}>"{r.text}"</p>
                <p className="mt-4 font-bold text-sm" style={{color:"#111827"}}>{r.name}</p>
                <p className="text-xs" style={{color:"#9ca3af"}}>{r.loc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-20 bg-[#1B2B8A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-orange-400 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">Trusted Choice</span>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Why Property Owners Choose Bhairav</h2>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {["47+ years of exterior painting experience in Mumbai & Bhiwandi","Free site visit and written quotation — no hidden charges","Weather-resistant paints — designed for Mumbai climate","Scaffolding available for high-rise & multi-storey buildings","Society & building painting specialists since decades","Serving Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai"].map((p,i)=>(
              <div key={i} className="flex items-start gap-3 rounded-lg bg-white/10 px-4 py-3">
                <CheckCircle className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                <p className="text-sm text-white/90">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO CHOOSE */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Expert Guide</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>How to Choose an Exterior Painting Contractor</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[{n:"1",t:"Check Exterior Experience",d:"Exterior painting is different from interior. Ask specifically for exterior project experience."},
              {n:"2",t:"Ask About Paint Type",d:"For Mumbai climate, weather-resistant exterior paint is essential. Ask which brand and grade."},
              {n:"3",t:"Verify Surface Prep",d:"Crack filling, putty & primer are essential before exterior paint. Confirm these are included."},
              {n:"4",t:"Check Scaffolding",d:"For buildings above 2 floors, proper scaffolding is required for safety and quality work."},
              {n:"5",t:"Get Written Quote",d:"Always insist on written quotation covering labour, material, scaffolding & timeline."},
              {n:"6",t:"Check Past Projects",d:"Ask for photos of past exterior projects. Especially for buildings & high-rise work."},
            ].map((item)=>(
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
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Questions Property Owners Ask Before Exterior Painting</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[{q:"When is the best time for exterior painting in Mumbai?",a:"October to March is ideal. Avoid monsoon (June-September) as moisture affects adhesion and finish quality."},
              {q:"How long does exterior painting last?",a:"With quality weatherproof paint and proper surface prep, exterior painting lasts 5-7 years in Mumbai climate."},
              {q:"Do you provide scaffolding for high-rise buildings?",a:"Yes. We arrange complete scaffolding setup for buildings above 2 floors. Cost included in quotation."},
              {q:"Can exterior painting be done for society buildings?",a:"Yes. We specialise in housing society exterior painting — minimal disruption to residents & complete scaffolding."},
            ].map((item,i)=>(
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
          <p className="mt-3 text-sm leading-relaxed max-w-2xl" style={{color:"#4b5563"}}>We provide exterior painting in <strong>Bhiwandi, Thane, Kalyan, Dombivli, Mumbai and Navi Mumbai</strong> for houses, villas, buildings, societies and commercial properties.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {areas.map((a)=><span key={a} className="flex items-center gap-2 rounded-full bg-[#1B2B8A] px-5 py-2.5 text-sm font-semibold text-white"><MapPin className="h-4 w-4"/>{a}</span>)}
          </div>
        </div>
      </section>

      {/* GEO */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-black sm:text-3xl" style={{color:"#1B2B8A"}}>Exterior Painting Contractor in Mumbai, Thane & Bhiwandi</h2>
          <p className="mt-4 text-sm leading-relaxed max-w-3xl" style={{color:"#4b5563"}}>Bhairav Painting Service has been providing professional exterior painting services across Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai for over 47 years. We specialise in house exterior painting, building exterior painting, society painting and villa painting. Our trained painters use weather-resistant paints designed for Mumbai's climate — ensuring long-lasting, durable finish. Contact us for a free site visit.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>FAQ</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Frequently Asked Questions</h2>
          <div className="mt-8 space-y-3 max-w-3xl">
            {faqs.map((faq,i)=>(
              <div key={i} className="rounded-xl border border-gray-100 overflow-hidden">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 bg-white" onClick={()=>setOpenFaq(openFaq===i?null:i)}>
                  <span className="font-bold text-sm pr-4" style={{color:"#1B2B8A"}}>{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-orange-500 shrink-0 transition-transform ${openFaq===i?"rotate-180":""}`}/>
                </button>
                {openFaq===i&&<div className="px-5 pb-4 bg-white"><p className="text-sm" style={{color:"#4b5563"}}>{faq.a}</p></div>}
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
            {relatedServices.map((s,i)=>(
              <Link key={i} href={s.href} className="overflow-hidden rounded-xl bg-white border-2 border-gray-100 hover:border-orange-400 transition-colors text-center">
                <div className="relative h-24"><Image src={s.image} alt={s.title} fill className="object-cover"/></div>
                <div className="p-3"><span className="text-xs font-bold" style={{color:"#1B2B8A"}}>{s.title}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + FORM */}
      <section id="contact" className="py-20 bg-orange-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white sm:text-4xl">Get A Free Exterior Painting Quote</h2>
            <p className="mt-3 text-white/85 text-sm">Serving Mumbai, Thane, Bhiwandi, Kalyan & Navi Mumbai. Free site visit — no obligation.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+919158800517" className="flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white px-6 py-3 text-sm font-bold text-orange-500"><Phone className="h-5 w-5"/>Call Now</a>
              <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20an%20Exterior%20Painting%20quote" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white"><MessageCircle className="h-5 w-5"/>WhatsApp Now</a>
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

      <a href="https://wa.me/919158800517" target="_blank" rel="noopener noreferrer" className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg"><MessageCircle className="h-7 w-7"/></a>
      <a href="tel:+919158800517" className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg"><Phone className="h-7 w-7"/></a>
    </div>
  )
}
