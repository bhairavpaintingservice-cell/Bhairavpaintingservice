"use client"

import { useState } from "react"

const serviceOptions = [
  "Residential Painting", "Interior Painting", "Building Painting", "Exterior Painting",
  "Commercial Painting", "Texture Painting", "Waterproofing", "Designer Wall Painting", "Other (Please Specify)",
]

export default function HomeQuoteForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", area: "", message: "" })

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert("Please enter your name and phone number.")
      return
    }
    const msg = `Hi, I need a painting quote.%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService: ${encodeURIComponent(form.service || "Not specified")}%0AArea: ${encodeURIComponent(form.area || "Not specified")}%0AMessage: ${encodeURIComponent(form.message || "-")}`
    window.open(`https://wa.me/919158800517?text=${msg}`, "_blank")
  }

  return (
    <div className="mt-12 mx-auto max-w-2xl rounded-2xl bg-orange-600 p-8">
      <h3 className="text-center text-xl font-bold text-white mb-6">📋 Get Free Quote — Fill Form Below</h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Your Name *</label>
          <input type="text" placeholder="Enter your name" value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-orange-300" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Phone Number *</label>
          <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-lg bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-orange-300" />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Service Required</label>
          <select aria-label="Service Required" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
            className="w-full rounded-lg bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-orange-300">
            <option value="">Select Service</option>
            {serviceOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Your Area</label>
          <input type="text" placeholder="e.g. Bhiwandi, Thane" value={form.area}
            onChange={(e) => setForm({ ...form, area: e.target.value })}
            className="w-full rounded-lg bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-orange-300" />
        </div>
      </div>
      <div className="mt-4">
        <label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Message (Optional)</label>
        <textarea rows={3} placeholder="Tell us about your project..." value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full rounded-lg bg-white px-4 py-3 text-sm text-gray-900 outline-none resize-none focus:ring-2 focus:ring-orange-300" />
      </div>
      <button onClick={handleSubmit}
        className="mt-6 w-full rounded-lg bg-[#1B2B8A] py-4 text-base font-bold text-white hover:bg-[#152270] transition-colors">
        🚀 Send Enquiry on WhatsApp
      </button>
    </div>
  )
}
