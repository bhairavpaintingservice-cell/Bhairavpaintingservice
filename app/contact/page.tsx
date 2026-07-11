"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Clock, MessageCircle, CheckCircle, Send } from "lucide-react"
import emailjs from "@emailjs/browser"

const services = [
  "Residential Painting",
  "Interior Painting",
  "Exterior Painting",
  "Commercial Painting",
  "Building & Society Painting",
  "Waterproofing",
  "Designer & Texture Painting",
  "Wood & Metal Painting",
]

const serviceAreas = [
  "Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai", "Dombivli",
  "Kasheli", "Kalher", "Andheri", "Vasai", "Virar"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", area: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null)
  const [locationLoading, setLocationLoading] = useState(false)

  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.")
      return
    }
    setLocationLoading(true)
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
        setLocationLoading(false)
      },
      () => {
        alert("Unable to get location. Please allow location access.")
        setLocationLoading(false)
      }
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await emailjs.send("service_2zy0x0p", "template_zlc9l99", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        service: formData.service,
        message: formData.message,
      }, "vLWZyTtI0Jyri4AH")
      setIsSubmitted(true)
      setFormData({ name: "", phone: "", email: "", service: "", area: "", message: "" })
      // Open WhatsApp with location if available
      const locationText = location ? `\n📍 My Location: https://maps.google.com/?q=${location.lat},${location.lng}` : ""
      const waMsg = encodeURIComponent(`Hi, I submitted a quote request for ${formData.service} in ${formData.area}.${locationText}`)
      window.open(`https://wa.me/919158800517?text=${waMsg}`, "_blank")
    } catch (error) {
      alert("Something went wrong. Please WhatsApp or call us directly.")
    }
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <main>
      {/* HERO */}
      <section className="pt-32 pb-16" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">Contact Us</span>
              <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl leading-tight">Need Professional Painting Services?</h1>
              <p className="mt-2 text-2xl font-bold text-orange-400">Book Your Free Site Inspection Today.</p>
              <p className="mt-3 text-base text-blue-200">Get a written quote within 30 minutes. Call, WhatsApp or fill the form — we respond fast.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Free Site Visit","Written Quotation","No Hidden Charges","Owner Supervised","Same Day Response","Free Colour Consultation"].map((b, i) => (
                  <span key={i} className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
                    <CheckCircle className="h-3.5 w-3.5 text-orange-400" />{b}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20free%20site%20visit." target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white"
                  style={{backgroundColor:"#25D366"}}>
                  <MessageCircle className="h-4 w-4" /> WhatsApp Now
                </a>
                <a href="tel:+919158800517"
                  className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                  <Phone className="h-4 w-4" /> Call: +91 9158800517
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "47+", label: "Years Experience" },
                { num: "500+", label: "Projects Completed" },
                { num: "100%", label: "Owner Supervised" },
                { num: "30 Min", label: "Response Time" },
                { num: "Free", label: "Site Inspection" },
                { num: "★★★★★", label: "Rated by Customers" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl p-4 text-center" style={{backgroundColor:"rgba(255,255,255,0.1)"}}>
                  <p className="text-2xl font-black text-white">{item.num}</p>
                  <p className="mt-1 text-xs text-blue-200">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-orange-500 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30 text-center text-white">
            <div className="px-4 py-2"><p className="text-xl font-black">47+</p><p className="text-xs font-semibold mt-0.5">Years Experience</p></div>
            <div className="px-4 py-2"><p className="text-xl font-black">500+</p><p className="text-xs font-semibold mt-0.5">Projects Completed</p></div>
            <div className="px-4 py-2"><p className="text-xl font-black">100%</p><p className="text-xs font-semibold mt-0.5">Owner Supervised</p></div>
            <div className="px-4 py-2"><p className="text-xl font-black">Free</p><p className="text-xs font-semibold mt-0.5">Site Inspection</p></div>
          </div>
        </div>
      </section>

      {/* WHY CONTACT US */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Why Choose Us</span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Why Choose Bhairav Painting Service?</h2>
              <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Trusted by 500+ customers across Mumbai, Thane & Bhiwandi for 47+ years.</p>
              <ul className="mt-6 space-y-3">
                {[
                  "47+ Years of Painting Experience",
                  "Premium Paint Brands — Asian Paints, Berger, Nerolac, Dulux",
                  "Skilled & Trained Painters",
                  "Daily Site Supervision by Owner",
                  "Written Quotation — No Hidden Charges",
                  "Clean Work Process — Furniture Protected",
                  "Surface Preparation Included",
                  "On-Time Project Completion",
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm" style={{color:"#374151"}}>
                    <CheckCircle className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />{pt}
                  </li>
                ))}
              </ul>
            </div>

            {/* EMERGENCY SECTION */}
            <div className="rounded-2xl p-8" style={{backgroundColor:"#1B2B8A"}}>
              <span className="inline-block rounded-full border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">Urgent?</span>
              <h3 className="mt-3 text-2xl font-black text-white">Need Urgent Painting?</h3>
              <p className="mt-2 text-sm text-blue-200">We handle urgent requests for all these situations:</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Moving into a New Home",
                  "Builder Handover Deadline",
                  "Commercial Office Reopening",
                  "Pre-Wedding or Event Painting",
                  "Society Urgent Repainting",
                  "Roof Leakage — Emergency Waterproofing",
                ].map((pt, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white">
                    <CheckCircle className="h-4 w-4 text-orange-400 shrink-0" />{pt}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-3">
                <a href="tel:+919158800517"
                  className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                  <Phone className="h-4 w-4" /> Call Now for Urgent Help
                </a>
                <a href="https://wa.me/919158800517?text=Hi%2C%20I%20have%20an%20urgent%20painting%20requirement.%20Please%20contact%20me." target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white"
                  style={{backgroundColor:"#25D366"}}>
                  <MessageCircle className="h-4 w-4" /> WhatsApp for Urgent
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* LEFT - Contact Info */}
            <div>
              <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Reach Us</span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Contact Bhairav Painting Service</h2>
              <p className="mt-3 text-sm leading-relaxed" style={{color:"#6b7280"}}>We serve Mumbai, Thane, Bhiwandi, Kalyan, Navi Mumbai and Dombivli. Call or WhatsApp for fastest response.</p>

              <div className="mt-8 space-y-4">
                <a href="tel:+919158800517" className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{backgroundColor:"#f0f4ff"}}>
                    <Phone className="h-5 w-5" style={{color:"#1B2B8A"}} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{color:"#6b7280"}}>Call Us</p>
                    <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>+91 9158800517</p>
                  </div>
                </a>

                <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20painting%20quote." target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                  style={{backgroundColor:"#25D366"}}>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/80">WhatsApp</p>
                    <p className="font-bold text-sm text-white">+91 9158800517</p>
                  </div>
                </a>

                <a href="mailto:bhairavpaintingservice@gmail.com" className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{backgroundColor:"#f0f4ff"}}>
                    <Mail className="h-5 w-5" style={{color:"#1B2B8A"}} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{color:"#6b7280"}}>Email</p>
                    <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>bhairavpaintingservice@gmail.com</p>
                  </div>
                </a>



                <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{backgroundColor:"#f0f4ff"}}>
                    <MapPin className="h-5 w-5" style={{color:"#1B2B8A"}} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{color:"#6b7280"}}>Service Areas</p>
                    <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>Mumbai · Thane · Bhiwandi · Kalyan · Navi Mumbai · Dombivli · Kasheli · Kalher · Andheri · Vasai · Virar</p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp CTA by service */}
              <div className="mt-8 rounded-xl p-6" style={{backgroundColor:"#1B2B8A"}}>
                <h3 className="font-bold text-sm text-white">Quick WhatsApp by Service</h3>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {[
                    { label: "Residential", msg: "Hi, I need Residential Painting quote." },
                    { label: "Interior", msg: "Hi, I need Interior Painting quote." },
                    { label: "Exterior", msg: "Hi, I need Exterior Painting quote." },
                    { label: "Commercial", msg: "Hi, I need Commercial Painting quote." },
                    { label: "Building", msg: "Hi, I need Building Painting quote." },
                    { label: "Waterproofing", msg: "Hi, I need Waterproofing quote." },
                    { label: "Designer & Texture", msg: "Hi, I need Designer & Texture Painting quote." },
                    { label: "Wood & Metal", msg: "Hi, I need Wood & Metal Painting quote." },
                  ].map((item, i) => (
                    <a key={i} href={`https://wa.me/919158800517?text=${encodeURIComponent(item.msg)}`} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs font-semibold text-white"
                      style={{backgroundColor:"#25D366"}}>
                      <MessageCircle className="h-3 w-3" /> {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT - Form */}
            <div className="rounded-2xl bg-white border border-gray-200 p-8 shadow-sm">
              <h3 className="font-black text-xl" style={{color:"#1B2B8A"}}>Request a Free Quote</h3>
              <p className="mt-1 text-xs" style={{color:"#6b7280"}}>Fill the form — we will call or WhatsApp you within 30 minutes.</p>

              {isSubmitted ? (
                <div className="mt-8 text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                  <h4 className="mt-4 font-black text-xl" style={{color:"#1B2B8A"}}>Thank You!</h4>
                  <p className="mt-2 text-sm" style={{color:"#6b7280"}}>We have received your enquiry. Our team will contact you within 30 minutes.</p>
                  <a href="https://wa.me/919158800517?text=Hi%2C%20I%20just%20submitted%20a%20quote%20request." target="_blank" rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white"
                    style={{backgroundColor:"#25D366"}}>
                    <MessageCircle className="h-4 w-4" /> Also WhatsApp Us
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold" style={{color:"#374151"}}>Full Name *</label>
                      <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                    </div>
                    <div>
                      <label className="text-xs font-semibold" style={{color:"#374151"}}>Phone Number *</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" type="tel"
                        className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold" style={{color:"#374151"}}>Email (Optional)</label>
                    <input name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" type="email"
                      className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="text-xs font-semibold" style={{color:"#374151"}}>Service Required *</label>
                    <select name="service" value={formData.service} onChange={handleChange} required
                      className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                      <option value="">Select a service</option>
                      {services.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold" style={{color:"#374151"}}>Your Area</label>
                    <select name="area" value={formData.area} onChange={handleChange}
                      className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                      <option value="">Select your area</option>
                      {serviceAreas.map((a) => <option key={a} value={a}>{a}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold" style={{color:"#374151"}}>Share Your Location (Optional)</label>
                    <button type="button" onClick={getLocation}
                      className="mt-1 w-full flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 text-sm font-semibold transition-colors hover:bg-gray-50"
                      style={{color: location ? "#15803d" : "#1B2B8A"}}>
                      <MapPin className="h-4 w-4" />
                      {locationLoading ? "Getting location..." : location ? `📍 Location captured (${location.lat.toFixed(4)}, ${location.lng.toFixed(4)})` : "📍 Click to share my location"}
                    </button>
                    {location && (
                      <p className="mt-1 text-xs" style={{color:"#15803d"}}>✅ Your location will be sent with the enquiry so we can reach you easily.</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs font-semibold" style={{color:"#374151"}}>Message / Additional Details</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder="Tell us about your project — area size, type of painting, timeline..."
                      className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none" />
                  </div>
                  <button type="submit" disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold text-white disabled:opacity-70 transition-colors"
                    style={{backgroundColor:"#1B2B8A"}}>
                    {isSubmitting ? "Sending..." : <><Send className="h-4 w-4" /> Send Enquiry</>}
                  </button>
                  <p className="text-center text-xs" style={{color:"#9ca3af"}}>Or WhatsApp directly: <a href="https://wa.me/919158800517" target="_blank" rel="noopener noreferrer" className="font-semibold" style={{color:"#25D366"}}>+91 9158800517</a></p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>How It Works</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>From First Call to Final Handover</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-5 gap-4">
            {[
              { step: "01", title: "Contact Us", desc: "Call, WhatsApp or fill the form. We respond within 30 minutes." },
              { step: "02", title: "Free Site Visit", desc: "Our team visits your property at no charge to assess the scope." },
              { step: "03", title: "Written Quotation", desc: "Detailed quote with scope, materials, timeline — no hidden costs." },
              { step: "04", title: "Painting Starts", desc: "Surface preparation, primer, and premium paint applied correctly." },
              { step: "05", title: "Final Inspection", desc: "Owner walkthrough, snag fixing and project handover." },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-white font-black text-sm" style={{backgroundColor:"#1B2B8A"}}>{item.step}</div>
                <h3 className="mt-3 font-bold text-sm" style={{color:"#1B2B8A"}}>{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed" style={{color:"#6b7280"}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>FAQ</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            {[
              { q: "How much does painting cost?", a: "Cost depends on area size, surface condition, paint brand and number of coats. We provide a free site visit and written quotation — no hidden charges." },
              { q: "How long does painting take?", a: "A standard 2BHK takes 5–7 days including surface preparation, putty, primer and two finish coats. Larger projects are discussed during site visit." },
              { q: "Which paint brands do you use?", a: "We use Asian Paints, Berger, Nerolac and Dulux — premium branded paints only. No local or unbranded products." },
              { q: "Do you provide materials or only labour?", a: "Both options available — Material + Labour (we arrange everything) or Labour Only (you supply paint). Discussed during quotation." },
              { q: "Do you offer waterproofing?", a: "Yes — terrace waterproofing, wall seepage treatment, bathroom waterproofing and basement waterproofing using Dr Fixit and Asian Paints SmartCare products." },
              { q: "Is the site visit really free?", a: "Yes — 100% free. No charges for site visit or quotation. No obligation to proceed." },
              { q: "Do you work on Sundays?", a: "Yes — we work all days including Sundays for residential projects. Commercial projects can also be scheduled on weekends." },
              { q: "Which areas do you serve?", a: "Mumbai, Thane, Bhiwandi, Kalyan, Navi Mumbai, Dombivli, Kasheli, Kalher, Andheri, Vasai and Virar." },
              { q: "Do you provide warranty?", a: "Yes — any defect due to our workmanship is rectified at no extra cost. Paint manufacturer warranty applies separately." },
              { q: "How do I book a site visit?", a: "Call +91 9158800517, WhatsApp us, or fill the form on this page. We will confirm your site visit within 30 minutes." },
            ].map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-5">
                <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>Q: {faq.q}</p>
                <p className="mt-2 text-sm leading-relaxed" style={{color:"#6b7280"}}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK WHATSAPP BY SERVICE - CARDS */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Quick Contact</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>WhatsApp by Service</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>Click any service to directly WhatsApp us with a pre-filled message.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: "🏠", label: "Residential", msg: "Hi, I need Residential Painting quote. Please contact me." },
              { icon: "🎨", label: "Interior", msg: "Hi, I need Interior Painting quote. Please contact me." },
              { icon: "🏗️", label: "Exterior", msg: "Hi, I need Exterior Painting quote. Please contact me." },
              { icon: "🏢", label: "Commercial", msg: "Hi, I need Commercial Painting quote. Please contact me." },
              { icon: "🏘️", label: "Building", msg: "Hi, I need Building & Society Painting quote. Please contact me." },
              { icon: "💧", label: "Waterproofing", msg: "Hi, I need Waterproofing quote. Please contact me." },
              { icon: "✨", label: "Designer & Texture", msg: "Hi, I need Designer & Texture Painting quote. Please contact me." },
              { icon: "🪵", label: "Wood & Metal", msg: "Hi, I need Wood & Metal Painting quote. Please contact me." },
            ].map((item, i) => (
              <a key={i} href={`https://wa.me/919158800517?text=${encodeURIComponent(item.msg)}`} target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow text-center">
                <span className="text-3xl">{item.icon}</span>
                <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>{item.label}</p>
                <span className="flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{backgroundColor:"#25D366"}}>
                  <MessageCircle className="h-3 w-3" /> WhatsApp
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS SEO */}
      <section className="py-20" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">Service Areas</span>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Painting Contractor Across Mumbai Region</h2>
          <p className="mt-3 text-sm text-blue-200 max-w-2xl">Bhairav Painting Service operates as a professional painting contractor across the Mumbai metropolitan region — serving residential, commercial and industrial clients.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { city: "Painting Services in Mumbai", desc: "Residential, commercial and building painting across all Mumbai areas including Andheri, Borivali, Dadar, Chembur and Mulund." },
              { city: "Painting Services in Navi Mumbai", desc: "Professional painting in Vashi, Kharghar, Nerul, Panvel and surrounding Navi Mumbai areas." },
              { city: "Painting Services in Thane", desc: "Complete painting services for homes, offices, societies and commercial spaces across Thane." },
              { city: "Painting Services in Bhiwandi", desc: "Warehouse, factory and commercial painting specialists in Bhiwandi industrial zone." },
              { city: "Painting Services in Kalyan", desc: "Residential and society painting across Kalyan and Dombivli areas." },
              { city: "Painting Services in Vasai & Virar", desc: "Residential and exterior painting services in Vasai, Virar and surrounding areas." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-5" style={{backgroundColor:"rgba(255,255,255,0.08)"}}>
                <h3 className="font-bold text-sm text-white">{item.city}</h3>
                <p className="mt-2 text-xs leading-relaxed text-blue-200">{item.desc}</p>
                <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20painting%20services.%20Please%20contact%20me." target="_blank" rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-orange-400">
                  <MessageCircle className="h-3 w-3" /> Get Free Quote →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-black mb-6" style={{color:"#1B2B8A"}}>Our Service Areas</h2>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.5!2d73.0643!3d19.2967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bef4f3a3b3b3%3A0x1234567890abcdef!2sBhiwandi%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
              width="100%" height="350" style={{border:0}} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Bhairav Painting Service Area Map">
            </iframe>
          </div>
        </div>
      </section>
    </main>
  )
}
