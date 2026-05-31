"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Phone, MessageCircle, CheckCircle, MapPin, ChevronDown } from "lucide-react"

const serviceCards = [
  { title: "1 BHK Painting", desc: "Complete 1BHK flat painting — walls, ceiling, doors & windows. Quick completion.", icon: "🏠" },
  { title: "2 BHK Painting", desc: "Professional 2BHK painting with quality finish. Interior + ceiling included.", icon: "🏠" },
  { title: "3 BHK Painting", desc: "Full 3BHK flat painting. Surface prep, putty, primer & final coat.", icon: "🏠" },
  { title: "Flat Repainting", desc: "Refresh your old flat with new colours. Crack filling & putty included.", icon: "🖌️" },
  { title: "New Flat Painting", desc: "First-time painting for newly constructed flats. Premium finish guaranteed.", icon: "✨" },
  { title: "Villa Painting", desc: "Complete interior & exterior painting for villas & bungalows.", icon: "🏡" },
  { title: "Society Painting", desc: "Large-scale society & housing complex painting. Minimal resident disruption.", icon: "🏢" },
  { title: "Rental Flat Painting", desc: "Quick, clean painting for rental flats. Ready for new tenants fast.", icon: "🔑" },
]

const whyUs = [
  { icon: "🏆", title: "47+ Years Experience", desc: "Trusted residential painting contractor in Mumbai & Bhiwandi since decades." },
  { icon: "👁️", title: "Owner Supervision", desc: "Every project personally supervised by the owner — no shortcuts." },
  { icon: "🧹", title: "Clean Workmanship", desc: "We protect your furniture & clean up completely after work is done." },
  { icon: "⚡", title: "Timely Completion", desc: "We commit to deadlines — 1BHK in 2 days, 2BHK in 3–4 days." },
  { icon: "💰", title: "Budget & Premium Options", desc: "Options for every budget — no compromise on quality." },
  { icon: "🆓", title: "Free Site Inspection", desc: "Free site visit & detailed written quotation before any commitment." },
]

const processSteps = [
  { num: "1", title: "Free Site Visit", desc: "We visit your home for free assessment & measurements." },
  { num: "2", title: "Surface Inspection", desc: "Walls checked for cracks, dampness & peeling paint." },
  { num: "3", title: "Crack Repair & Putty", desc: "All cracks filled, putty applied for smooth surface." },
  { num: "4", title: "Primer Application", desc: "Quality primer applied for better paint adhesion." },
  { num: "5", title: "Paint Application", desc: "Professional painting — 2 coats for perfect finish." },
  { num: "6", title: "Final Cleanup & Handover", desc: "Complete cleanup, inspection & project handover." },
]

const beforeAfter = [
  { image: "/images/residential/res-before-after-1.jpg", location: "Bhiwandi", property: "2BHK Flat", work: "Interior Repainting + Putty Repair" },
  { image: "/images/residential/res-before-after-2.jpg", location: "Thane", property: "3BHK Apartment", work: "Full Interior Painting" },
  { image: "/images/residential/res-before-after-3.jpg", location: "Kalyan", property: "1BHK Flat", work: "Wall Colour Change + Putty" },
  { image: "/images/residential/res-interior.jpg", location: "Navi Mumbai", property: "New Flat", work: "First-time Painting" },
  { image: "/images/residential/res-villa.jpg", location: "Mumbai", property: "Villa", work: "Interior + Exterior Painting" },
  { image: "/images/residential/res-before-after-2.jpg", location: "Bhiwandi", property: "Rental Flat", work: "Quick Repainting — 2 Days" },
]

const recentProjects = [
  { image: "/images/residential/res-before-after-2.jpg", location: "Bhiwandi", property: "2BHK Flat", service: "Interior Repainting" },
  { image: "/images/residential/res-interior.jpg", location: "Thane", property: "3BHK Apartment", service: "Full Interior Painting" },
  { image: "/images/residential/res-before-after-3.jpg", location: "Kalyan", property: "Flat Repainting", service: "Interior + Putty Work" },
]

const reviews = [
  { name: "Anita Kanwar", location: "Bhiwandi", text: "Good work — single coat finishing was so good, no need to do double coat. Very satisfied." },
  { name: "Pradeep Rajpurohit", location: "Thane", text: "Fast kaam aur perfect finishing, highly satisfied." },
  { name: "Narendra Singh", location: "Mumbai", text: "Excellent painting work, neat finishing and on time service. Highly recommended." },
  { name: "Om Prakash", location: "Kalyan", text: "Professional and reliable. From site visit to final finishing, everything was smooth. Strongly recommend." },
  { name: "Kamlesh Vishwakarma", location: "Navi Mumbai", text: "One of the best painting services. Honest person, hardworking team, excellent finishing. 100% satisfied." },
  { name: "Rakesh Gupta", location: "Bhiwandi", text: "Very professional and clean work. Thoroughly impressed. Always on time. Highly recommended." },
]

const areas = ["Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai", "Dombivli", "Kasheli", "Kalher", "Andheri", "Vasai", "Virar"]

const faqs = [
  { q: "How much does 1BHK painting cost in Mumbai?", a: "1BHK painting cost in Mumbai & Bhiwandi depends on wall condition, paint brand & finish type. We provide a free site visit & detailed written quotation before any commitment. Contact us for an accurate estimate." },
  { q: "How long does residential painting take?", a: "1BHK typically takes 2 days, 2BHK takes 3–4 days, and 3BHK takes 4–5 days. Timelines depend on surface condition and work scope." },
  { q: "Do you provide material or only labour?", a: "We provide both options — Material + Labour (we arrange everything) or Labour Only (you provide the paint). Both options available at competitive rates." },
  { q: "Which paint brands do you use?", a: "We work with all leading brands — Asian Paints, Nerolac, Berger, and Dulux. Customers can choose their preferred brand and product range." },
  { q: "Do you protect furniture during painting?", a: "Yes. We cover all furniture, flooring & fixtures with protective sheets before starting work. Complete care is taken." },
  { q: "How many coats of paint are recommended?", a: "We recommend minimum 2 coats of paint after putty and primer for a long-lasting, even finish." },
  { q: "Do you offer waterproofing with painting?", a: "Yes, we offer waterproofing for terraces, bathrooms & exterior walls along with painting work." },
  { q: "Is a written quotation provided?", a: "Yes. After the free site visit, we provide a detailed written quotation covering labour, material & timeline." },
  { q: "Do you offer labour-only service?", a: "Yes. If you already have paint, we provide skilled painters for labour-only work at your flat or house." },
  { q: "Can I choose my own paint colour?", a: "Absolutely. You can choose any colour, shade or finish. We also help with colour consultation if needed." },
  { q: "What surface preparation do you do?", a: "Our process includes crack repair, putty application, sanding, primer coat and then final paint — for a smooth, durable finish." },
  { q: "Do you paint ceilings too?", a: "Yes. Ceiling painting is included in our standard flat painting service. White or colour — as per your preference." },
  { q: "Do you work on weekends?", a: "Yes. We work all days including weekends to suit your schedule and minimize disruption." },
  { q: "What areas do you cover for residential painting?", a: "We serve Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai for all residential painting work." },
  { q: "How do I book a free site visit?", a: "Simply call us on +91 9158800517 or WhatsApp us. We will schedule a free visit at your convenient time — no charges, no obligation." },
]

const serviceOptions = [
  "1BHK Painting", "2BHK Painting", "3BHK Painting",
  "Flat Repainting", "New Flat Painting", "Villa Painting",
  "Society Painting", "Rental Flat Painting", "Other"
]

export default function ResidentialPaintingPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", area: "", message: "" })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = () => {
    if (!form.name || !form.phone) { alert("Please enter your name and phone number."); return }
    const msg = `Hi, I need a Residential Painting quote.%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService: ${encodeURIComponent(form.service || "Not specified")}%0AArea: ${encodeURIComponent(form.area || "Not specified")}%0AMessage: ${encodeURIComponent(form.message || "-")}`
    window.open(`https://wa.me/919158800517?text=${msg}`, "_blank")
  }

  return (
    <div className="flex flex-col">

      {/* 1. HERO */}
      <section className="relative bg-[#1B2B8A] pt-20 pb-16 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-[#2238a8] opacity-40 translate-x-1/2 -translate-y-1/4" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-400 mb-6">
            ★ RESIDENTIAL PAINTING SERVICES
          </div>
          <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl leading-tight">
            Residential Painting Services in
          </h1>
          <h1 className="text-4xl font-black text-orange-500 sm:text-5xl lg:text-6xl mt-2 leading-tight">
            Mumbai, Thane & Bhiwandi
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">
            47+ years of experience in flat, apartment, villa and society painting. Professional work with owner supervision. Free site visit available!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-bold text-white hover:bg-orange-600 transition-colors">
              <MessageCircle className="h-5 w-5" /> Get Free Quote
            </a>
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20Residential%20Painting%20quote" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors">
              <MessageCircle className="h-5 w-5" /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
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

      {/* 3. SERVICE CARDS */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Residential Services</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            What We <span className="text-orange-500">Paint</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm" style={{color:"#6b7280"}}>From 1BHK flats to large villas — we handle all types of residential painting across Mumbai & Bhiwandi.</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((s) => (
              <div key={s.title} className="rounded-xl bg-white border border-gray-100 p-5 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-sm" style={{color:"#1B2B8A"}}>{s.title}</h3>
                <p className="mt-1 text-xs" style={{color:"#6b7280"}}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            Why Homeowners Choose <span className="text-orange-500">Bhairav Painting Service</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm" style={{color:"#6b7280"}}>47+ years of painting experience. Free site visit and quotation. Material and labour available. Owner-supervised projects. Residential painting specialists serving Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai.</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title} className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5 hover:shadow-sm transition-shadow">
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

      {/* 5. PAINTING PROCESS */}
      <section className="py-20 bg-[#1B2B8A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-orange-400 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">Our Process</span>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Our Residential <span className="text-orange-500">Painting Process</span>
          </h2>
          <p className="mt-3 text-white/70 text-sm">Simple, transparent process from first call to final handover.</p>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {processSteps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl font-black text-white">{step.num}</div>
                <h3 className="mt-3 font-bold text-white text-xs">{step.title}</h3>
                <p className="mt-1 text-white/60 text-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BEFORE & AFTER */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Before & After</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            Before & <span className="text-orange-500">After Gallery</span>
          </h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Real residential painting projects completed across Mumbai, Thane & Bhiwandi.</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beforeAfter.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="relative h-52">
                  <Image src={item.image} alt={`${item.property} painting ${item.location}`} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>{item.property} — {item.location}</p>
                  <p className="mt-1 text-xs" style={{color:"#6b7280"}}>{item.work}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RECENT PROJECTS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Recent Work</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            Recent Residential <span className="text-orange-500">Projects</span>
          </h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Real projects completed by our team with full details.</p>
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
                    <div className="flex items-center gap-2 text-xs" style={{color:"#6b7280"}}><CheckCircle className="h-3.5 w-3.5 text-orange-500" /><span>Service: {p.service}</span></div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. REVIEWS */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Customer Reviews</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            What Our <span className="text-orange-500">Customers Say</span>
          </h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Real reviews from homeowners across Mumbai, Thane & Bhiwandi.</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-xl bg-white p-6 border-l-4 border-orange-500 shadow-sm">
                <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <span key={i} className="text-orange-500 text-lg">★</span>)}</div>
                <p className="mt-3 text-sm italic" style={{color:"#4b5563"}}>"{r.text}"</p>
                <p className="mt-4 font-bold text-sm" style={{color:"#111827"}}>{r.name}</p>
                <p className="text-xs" style={{color:"#9ca3af"}}>{r.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY HOMEOWNERS CHOOSE */}
      <section className="py-20 bg-[#1B2B8A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-orange-400 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">Trusted Choice</span>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Why Homeowners Choose <span className="text-orange-500">Bhairav</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {["47+ years of residential painting experience in Mumbai & Bhiwandi","Free site visit and written quotation — no hidden charges","Material and labour both available — as per your requirement","Every project personally supervised by the owner","Specialists in 1BHK, 2BHK, 3BHK, villa and society painting","Serving Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai"].map((point, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-white/10 px-4 py-3">
                <CheckCircle className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                <p className="text-sm text-white/90">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. HOW TO CHOOSE A CONTRACTOR */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Expert Guide</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            How to Choose a <span className="text-orange-500">Residential Painting Contractor</span>
          </h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Before hiring a painter for your home, check these important points:</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "1", title: "Check Experience", desc: "Always choose a contractor with proven residential painting experience. Ask how long they have been operating and for references." },
              { num: "2", title: "Ask for Recent Projects", desc: "A reliable contractor will show you recent before/after photos of completed residential projects." },
              { num: "3", title: "Get a Written Quotation", desc: "Always insist on a written quote covering labour, material, number of coats and timeline — before any work starts." },
              { num: "4", title: "Confirm Paint Brand & Coats", desc: "Ask which paint brand will be used and how many coats are included. Minimum 2 coats after primer is recommended." },
              { num: "5", title: "Verify Cleanup Process", desc: "A professional contractor will protect your furniture and clean up completely after the work is done." },
              { num: "6", title: "Check Customer Reviews", desc: "Read Google reviews or ask for customer references to verify the quality of work and reliability." },
            ].map((item) => (
              <div key={item.num} className="rounded-xl bg-gray-50 p-5 border border-gray-100">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white mb-3">{item.num}</div>
                <h3 className="font-bold text-sm" style={{color:"#1B2B8A"}}>{item.title}</h3>
                <p className="mt-1 text-xs" style={{color:"#6b7280"}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. QUESTIONS HOMEOWNERS ASK */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Common Questions</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            Questions Homeowners Ask <span className="text-orange-500">Before Painting</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { q: "How many coats of paint are recommended for a flat?", a: "Minimum 2 coats of paint after putty and primer are recommended for a smooth, long-lasting finish in any flat or apartment." },
              { q: "What should be included in a painting quotation?", a: "A good quotation should include: labour charges, material cost (if applicable), surface preparation, number of coats, timeline and cleanup." },
              { q: "How long does a 2BHK repainting project take?", a: "A standard 2BHK flat repainting project takes 3 to 4 days depending on the wall condition and scope of work." },
              { q: "Is surface preparation important before painting?", a: "Yes. Proper surface prep — crack filling, putty application and priming — is essential for a smooth, durable paint finish." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm">
                <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>Q: {item.q}</p>
                <p className="mt-2 text-xs" style={{color:"#4b5563"}}>A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. AREAS WE SERVE */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Service Areas</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            Areas <span className="text-orange-500">We Serve</span>
          </h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Residential painting services across Mumbai Metropolitan Region.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span key={area} className="flex items-center gap-2 rounded-full bg-[#1B2B8A] px-5 py-2.5 text-sm font-semibold text-white">
                <MapPin className="h-4 w-4" />{area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 13. GEO PARAGRAPH */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-black sm:text-3xl" style={{color:"#111827"}}>
            Residential Painting Contractor in <span className="text-orange-500">Mumbai, Thane & Bhiwandi</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed" style={{color:"#4b5563"}}>
            Bhairav Painting Service has been providing professional residential painting services across Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai for over 47 years. We specialise in flat painting, apartment repainting, villa painting and society painting across the Mumbai Metropolitan Region. Our team of trained painters handles every project with owner supervision — ensuring quality workmanship, timely completion and complete site cleanup. Whether you need a fresh coat for your 1BHK in Bhiwandi, a full repainting for your 3BHK in Thane, or interior painting for your villa in Kalyan — Bhairav Painting Service delivers reliable, professional results at competitive rates. Contact us today for a free site visit and quotation.
          </p>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>FAQ</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <div className="mt-8 space-y-3 max-w-3xl">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-100 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-bold text-sm pr-4" style={{color:"#1B2B8A"}}>{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-orange-500 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm" style={{color:"#4b5563"}}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. FINAL CTA */}
      <section id="contact" className="py-20 bg-orange-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white sm:text-4xl">Get A Free Residential Painting Quote</h2>
            <p className="mt-3 text-white/85 text-sm">Serving Mumbai, Thane, Bhiwandi, Kalyan & Navi Mumbai. Free site visit — no obligation.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+919158800517" className="flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white px-6 py-3 text-sm font-bold text-orange-500 hover:bg-white/90 transition-colors">
                <Phone className="h-5 w-5" /> Call Now
              </a>
              <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20Residential%20Painting%20quote" target="_blank" rel="noopener noreferrer"
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
