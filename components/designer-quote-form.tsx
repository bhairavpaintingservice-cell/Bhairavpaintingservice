"use client"

import { useState } from "react"
import { pushLeadEvent, pushWhatsAppFormEvent } from "@/components/call-tracker"

const serviceOptions = [
  "Stencil Wall Design", "Accent Wall", "Feature Wall", "Metallic Designer Wall", "Combination Finish",
  "Sand Texture", "Sponge Texture", "Rustic / Stone Texture", "Metallic Texture", "Not Sure — Need Guidance",
]

export default function DesignerQuoteForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", area: "", message: "" })

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      alert("Please enter your name and phone number.")
      return
    }
    pushLeadEvent("designer_service_page", { service: form.service || "Not specified", area: form.area })
    const msg = encodeURIComponent(
      `Hi, I need Designer Wall or Texture Painting quote.\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service || "Not specified"}\nArea: ${form.area || "Not specified"}\nMessage: ${form.message || "-"}`
    )
    pushWhatsAppFormEvent("designer_service_page")
    window.open(`https://wa.me/919158800517?text=${msg}`, "_blank")
  }

  return (
    <div className="form-box">
      <h3>📋 Free Quote — Fill Below</h3>
      <div className="form-row"><input type="text" placeholder="Your Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></div>
      <div className="form-row"><input type="tel" placeholder="Phone Number *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></div>
      <div className="form-row">
        <select aria-label="Service Type" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>
          <option value="">Select Service Type</option>
          {serviceOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
      <div className="form-row"><input type="text" placeholder="Your Area (e.g. Bhiwandi, Thane)" value={form.area} onChange={(e) => setForm({ ...form, area: e.target.value })} /></div>
      <div className="form-row"><textarea placeholder="Message (Optional)" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}></textarea></div>
      <button type="button" className="form-submit" onClick={handleSubmit}>🚀 Send Enquiry on WhatsApp</button>
    </div>
  )
}
