"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Phone, MessageCircle, CheckCircle, MapPin, ArrowLeft } from "lucide-react"

const serviceTypes = [
  { title: "1BHK / 2BHK / 3BHK Painting", description: "Complete flat painting with quality finish. Interior walls, ceiling, doors & windows." },
  { title: "Villa & Bungalow Painting", description: "Premium painting for villas & bungalows in Mumbai, Thane & Bhiwandi." },
  { title: "Society & Housing Complex", description: "Large scale society painting with minimal disruption to residents." },
  { title: "New Flat Painting", description: "First time painting for newly constructed flats across Mumbai region." },
  { title: "Renovation Painting", description: "Old home renovation — crack filling, putty, primer & final paint." },
  { title: "Interior + Exterior Combo", description: "Complete home makeover — inside & outside painting in one package." },
]

const beforeAfter = [
  { image: "/images/residential/res-before-after-1.jpg", label: "Bedroom Makeover" },
  { image: "/images/residential/res-before-after-2.jpg", label: "Room Transformation" },
  { image: "/images/residential/res-before-after-3.jpg", label: "Wall Color Change" },
]

const areas = [
  "Bhiwandi", "Thane", "Kalyan", "Dombivli", "Navi Mumbai",
  "Mumbai", "Kasheli", "Kalher", "Andheri", "Vasai", "Virar",
  "Mira Road", "Nalasopara", "Borivali", "Ulhasnagar"
]

const serviceOptions = [
  "1BHK Painting", "2BHK Painting", "3BHK Painting",
  "Villa / Bungalow Painting", "Society Painting",
  "New Flat Painting", "Renovation Painting", "Other"
]

export default function ResidentialPaintingPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", area: "", message: "" })

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert("Please enter your name and phone number.")
      return
    }
    const msg = `Hi, I need a Residential Painting quote.%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService: ${encodeURIComponent(form.service || "Not specified")}%0AArea: ${encodeURIComponent(form.area || "Not specified")}%0AMessage: ${encodeURIComponent(form.message || "-")}`
    window.open(`https://wa.me/919158800517?text=${msg}`, "_blank")
  }

  return (
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="relative bg-[#1B2B8A] pt-20 pb-16 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-[#2238a8] opacity-40 translate-x-1/2 -translate-y-1/4" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-400 mb-6">
            ★ RESIDENTIAL PAINTING SERVICES
          </div>
          <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl leading-tight">
            Residential Painting in
          </h1>
          <h1 className="text-4xl font-black text-orange-500 sm:text-5xl lg:text-6xl mt-2 leading-tight">
            Mumbai, Thane & Bhiwandi
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">
            Professional home painting for flats, apartments, villas & societies across Mumbai, Thane, Bhiwandi, Kalyan, Virar & Vasai. 47+ years experience. Free site visit available!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20Residential%20Painting%20quote" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-bold text-white hover:bg-orange-600 transition-colors">
              <MessageCircle className="h-5 w-5" /> Get Free Quote on WhatsApp
            </a>
            <a href="tel:+919158800517"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-5 w-5" /> Call Now: 9158800517
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-orange-500 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30 text-center text-white">
            <div className="px-4 py-2"><p className="text-3xl font-black">47+</p><p className="text-xs font-semibold mt-1">Years Experience</p></div>
            <div className="px-4 py-2"><p className="text-3xl font-black">500+</p><p className="text-xs font-semibold mt-1">Homes Painted</p></div>
            <div className="px-4 py-2"><p className="text-3xl font-black">FREE</p><p className="text-xs font-semibold mt-1">Site Visit</p></div>
            <div className="px-4 py-2"><p className="text-3xl font-black">15+</p><p className="text-xs font-semibold mt-1">Areas Covered</p></div>
          </div>
        </div>
      </section>

      {/* ── SERVICE TYPES ── */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#6b7280]">What We Offer</span>
          <h2 className="mt-3 text-3xl font-black text-[#111827] sm:text-4xl">
            Residential <span className="text-orange-500">Painting Services</span>
          </h2>
          <p className="mt-3 text-[#6b7280] max-w-xl">
            From 1BHK flats in Bhiwandi to villas in Thane — we handle all types of residential painting across Mumbai region.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {serviceTypes.map((s) => (
              <div key={s.title} className="rounded-xl bg-white border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-[#1B2B8A]">{s.title}</h3>
                    <p className="mt-1 text-sm text-[#6b7280]">{s.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEFORE AFTER ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#6b7280]">Our Work</span>
          <h2 className="mt-3 text-3xl font-black text-[#111827] sm:text-4xl">
            Before & <span className="text-orange-500">After Results</span>
          </h2>
          <p className="mt-3 text-[#6b7280]">Real residential painting work done across Mumbai, Thane & Bhiwandi.</p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {beforeAfter.map((item) => (
              <div key={item.label} className="group relative h-64 overflow-hidden rounded-xl shadow-sm">
                <Image src={item.image} alt={item.label} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-bold text-white">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Collage */}
          <div className="mt-6 relative h-80 overflow-hidden rounded-xl shadow-sm">
            <Image src="/images/residential/res-collage.jpg" alt="Residential Painting Before After Mumbai Bhiwandi" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* ── GEO CONTENT ── */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-[#6b7280]">Service Areas</span>
          <h2 className="mt-3 text-3xl font-black text-[#111827] sm:text-4xl">
            Residential Painting Across <span className="text-orange-500">Mumbai Region</span>
          </h2>
          <p className="mt-4 text-[#4b5563] max-w-3xl leading-relaxed">
            Bhairav Painting Service provides professional residential painting in <strong>Bhiwandi, Thane, Kalyan, Mumbai, Navi Mumbai, Virar, Vasai, Mira Road, Nalasopara, Borivali, Andheri, Dombivli</strong> and surrounding areas.
            Whether you need flat painting in Bhiwandi, home painting in Thane, or society painting in Kalyan — our trained painters deliver quality results on time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span key={area} className="flex items-center gap-2 rounded-full bg-[#1B2B8A] px-5 py-2.5 text-sm font-semibold text-white">
                <MapPin className="h-4 w-4" />{area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FORM ── */}
      <section className="py-20 bg-orange-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white sm:text-4xl">Get Free Residential Painting Quote!</h2>
            <p className="mt-3 text-white/85">Serving Mumbai, Thane, Bhiwandi, Kalyan, Virar & surrounding areas.</p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20Residential%20Painting%20quote" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white px-6 py-3 text-sm font-bold text-orange-500 hover:bg-white/90 transition-colors">
                <MessageCircle className="h-5 w-5" /> WhatsApp Now
              </a>
              <a href="tel:+919158800517"
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                <Phone className="h-5 w-5" /> Call: 9158800517
              </a>
            </div>
          </div>
          <div className="mt-12 mx-auto max-w-2xl rounded-2xl bg-orange-600 p-8">
            <h3 className="text-center text-xl font-bold text-white mb-6">📋 Get Free Quote — Fill Form Below</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Your Name *</label>
                <input type="text" placeholder="Enter your name" value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg bg-white px-4 py-3 text-sm text-[#111827] outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Phone Number *</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full rounded-lg bg-white px-4 py-3 text-sm text-[#111827] outline-none" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Service Type</label>
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full rounded-lg bg-white px-4 py-3 text-sm text-[#111827] outline-none">
                  <option value="">Select Service</option>
                  {serviceOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Your Area</label>
                <input type="text" placeholder="e.g. Bhiwandi, Thane" value={form.area}
                  onChange={(e) => setForm({ ...form, area: e.target.value })}
                  className="w-full rounded-lg bg-white px-4 py-3 text-sm text-[#111827] outline-none" />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Message (Optional)</label>
              <textarea rows={3} placeholder="Tell us about your project..." value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg bg-white px-4 py-3 text-sm text-[#111827] outline-none resize-none" />
            </div>
            <button onClick={handleSubmit}
              className="mt-6 w-full rounded-lg bg-[#1B2B8A] py-4 text-base font-bold text-white hover:bg-[#152270] transition-colors">
              🚀 Send Enquiry on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* ── FLOATING BUTTONS ── */}
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
