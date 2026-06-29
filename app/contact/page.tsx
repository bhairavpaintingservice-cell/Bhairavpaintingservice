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
  "Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai", "Dombivli"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", service: "", area: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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
          <div className="max-w-2xl">
            <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">Contact Us</span>
            <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Get a Free Quote Today</h1>
            <p className="mt-4 text-lg text-blue-200">Call, WhatsApp or fill the form below — we respond within 30 minutes during business hours. Free site visit for all enquiries.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Free Site Visit","Written Quotation","No Hidden Charges","Owner Supervised"].map((b, i) => (
                <span key={i} className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
                  <CheckCircle className="h-3.5 w-3.5 text-orange-400" />{b}
                </span>
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

                <a href="mailto:Bhairavpaintingservice@gmail.com" className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{backgroundColor:"#f0f4ff"}}>
                    <Mail className="h-5 w-5" style={{color:"#1B2B8A"}} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{color:"#6b7280"}}>Email</p>
                    <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>Bhairavpaintingservice@gmail.com</p>
                  </div>
                </a>



                <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full" style={{backgroundColor:"#f0f4ff"}}>
                    <MapPin className="h-5 w-5" style={{color:"#1B2B8A"}} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide" style={{color:"#6b7280"}}>Service Areas</p>
                    <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>{serviceAreas.join(" · ")}</p>
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

      {/* MAP PLACEHOLDER */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-2xl font-black mb-6" style={{color:"#1B2B8A"}}>Our Service Areas</h2>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin"
              width="100%" height="350" style={{border:0}} allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade" title="Bhairav Painting Service Area Map">
            </iframe>
          </div>
        </div>
      </section>
    </main>
  )
}
