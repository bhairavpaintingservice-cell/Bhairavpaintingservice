"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, MessageCircle, ChevronDown, CheckCircle } from "lucide-react"

const services = [
  { icon: "🏠", title: "Terrace Waterproofing", desc: "Complete terrace waterproofing with membrane coating. Monsoon-ready solution.", area: "Starts ₹45/sq ft" },
  { icon: "🔧", title: "Roof Leakage Repair", desc: "Permanent roof leakage fix. Crack sealing + protective coating.", area: "Free inspection" },
  { icon: "🚿", title: "Bathroom Waterproofing", desc: "Stop seepage to flat below. Floor + wall waterproofing treatment.", area: "1 Day Work" },
  { icon: "💧", title: "Damp Wall Treatment", desc: "Anti-damp coating + crack filling for wet walls. Mould removal.", area: "Permanent Fix" },
  { icon: "🏢", title: "Exterior Waterproofing", desc: "Weather-resistant coating for exterior walls. Rain + UV protection.", area: "Long lasting" },
  { icon: "🏗️", title: "Basement Waterproofing", desc: "Groundwater protection for basement. Moisture barrier treatment.", area: "Expert team" },
  { icon: "🏘️", title: "Society & Building", desc: "Large scale waterproofing for societies, buildings & commercial properties.", area: "Special rates" },
]

const signs = [
  { icon: "💧", title: "Damp Patches on Walls", desc: "Wet ya dark patches jo moisture indicate karte hain." },
  { icon: "🎨", title: "Peeling Paint", desc: "Paint jo wall se uth rahi hai — seepage ka sign." },
  { icon: "🟤", title: "Ceiling Stains", desc: "Brown ya yellow ceiling stains — upar se water seepage." },
  { icon: "🦠", title: "Fungus & Mould", desc: "Black ya green mould — chronic moisture problem." },
  { icon: "🧱", title: "Wall Cracks", desc: "Cracks jisme paani andar ja raha ho monsoon me." },
  { icon: "🌧️", title: "Roof Leakage", desc: "Monsoon me roof ya terrace se direct water entry." },
  { icon: "🧂", title: "Salt Deposits", desc: "White powdery deposits — rising dampness ka sign." },
  { icon: "🚿", title: "Bathroom Seepage", desc: "Neeche wale flat me paani jaana — floor waterproofing failure." },
]

const faqs = [
  { q: "Waterproofing kya hoti hai?", a: "Waterproofing ek process hai jisme special chemicals aur coatings use karke terrace, roof, bathroom, walls aur basement ko water leakage aur seepage se protect kiya jata hai." },
  { q: "Waterproofing kitne saal tak chalti hai?", a: "Quality materials aur proper application ke saath waterproofing 5–10 saal ya usse zyada chal sakti hai." },
  { q: "Terrace waterproofing kyu zaruri hai?", a: "Terrace sabse zyada rainwater face karta hai. Waterproofing seepage, cracks aur structural damage ko rokne me madad karti hai." },
  { q: "Roof leakage ka permanent solution kya hai?", a: "Professional inspection ke baad cracks sealing, waterproof membrane aur protective coating lagakar leakage permanently control ki ja sakti hai." },
  { q: "Bathroom waterproofing bina tiles tode ho sakti hai?", a: "Kuch cases me tile joints treatment aur chemical injection se repair ho sakti hai. Severe leakage me tiles remove karna pad sakta hai." },
  { q: "Damp walls ka permanent treatment kya hai?", a: "Source identify karke waterproofing treatment, crack filling aur anti-damp coating apply ki jati hai." },
  { q: "Waterproofing ka best time kab hota hai?", a: "Monsoon ke pehle — March se May — waterproofing karwana sabse beneficial hota hai. Dry weather me coating properly cure hoti hai." },
  { q: "Waterproofing work complete hone me kitna time lagta hai?", a: "Project size ke hisab se 1–7 din lag sakte hain. Bathroom 1 din, terrace 2–3 din, badi roof 3–5 din." },
  { q: "Kya waterproofing ke baad painting kar sakte hain?", a: "Haan, surface completely dry aur cured hone ke baad painting ki ja sakti hai. Hum dono ek saath karte hain — pehle waterproofing, phir painting." },
  { q: "Dr Fixit waterproofing better hai?", a: "Dr Fixit (Pidilite) industry me trusted brand hai aur terrace, roof, bathroom aur wall waterproofing ke liye widely used hota hai." },
  { q: "Kya waterproofing warranty ke saath milti hai?", a: "Haan, warranty project aur material type ke according vary karti hai. Written warranty confirm karte hain kaam shuru hone se pehle." },
  { q: "Kya aap free site visit provide karte hain?", a: "Haan, Bhairav Painting Service free site inspection aur quotation provide karta hai — koi charge nahi, koi obligation nahi." },
]

const areas = ["Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai", "Dombivli", "Kasheli", "Kalher", "Andheri", "Vasai", "Virar", "Ulhasnagar"]

export default function WaterproofingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="font-sans">

      {/* HERO */}
      <section className="bg-gray-900 py-20 px-4 text-center">
        <span className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest px-4 py-1 rounded-full uppercase mb-5">
          Waterproofing Experts
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
          Waterproofing Services in <span className="text-orange-500">Mumbai & Bhiwandi</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto mb-6 text-base leading-relaxed">
          Terrace, Roof, Bathroom & Damp Wall Waterproofing. Dr Fixit & Asian Paints. 47+ years experience. Free site visit.
        </p>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {["Terrace Waterproofing", "Roof Leakage", "Bathroom Waterproofing", "Damp Walls", "Free Site Visit"].map(p => (
            <span key={p} className="bg-white/10 border border-white/20 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">{p}</span>
          ))}
        </div>
        <div className="flex gap-3 justify-center flex-wrap mb-10">
          <a href="tel:+919158800517" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition">
            <Phone size={16} /> Call Now
          </a>
          <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20Waterproofing%20quote" className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition">
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
        <div className="flex justify-center gap-10 flex-wrap">
          {[["47+", "Years Experience"], ["500+", "Projects Done"], ["Free", "Site Visit"], ["Same Day", "Response"]].map(([val, label]) => (
            <div key={label} className="text-center">
              <span className="block text-2xl font-black text-orange-500">{val}</span>
              <span className="text-xs text-gray-400 uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Trusted Brands:</span>
          {["Dr Fixit (Pidilite)", "Asian Paints SmartCare", "Berger WeatherCoat", "STP Waterproofing"].map(b => (
            <span key={b} className="bg-gray-50 border rounded-lg px-4 py-2 text-sm font-bold text-gray-700">{b}</span>
          ))}
        </div>
      </section>

      {/* SIGNS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Warning Signs</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">Signs You Need Waterproofing — Right Now</h2>
          <p className="text-gray-500 mb-8">Agar ye problems dikh rahe hain to waterproofing delay mat karo.</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {signs.map(s => (
              <div key={s.title} className="bg-white border rounded-xl p-5 text-center hover:border-orange-400 hover:-translate-y-1 transition-all shadow-sm">
                <span className="text-3xl mb-3 block">{s.icon}</span>
                <h3 className="font-bold text-sm text-gray-900 mb-1">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Waterproofing Services</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">7 Waterproofing Services We Provide</h2>
          <p className="text-gray-500 mb-8">Most demanded services — terrace, roof, bathroom aur damp wall treatment.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map(s => (
              <div key={s.title} className="bg-white border rounded-xl p-6 hover:border-orange-400 hover:-translate-y-1 transition-all shadow-sm">
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="font-bold text-base text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{s.desc}</p>
                <span className="inline-block bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">{s.area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Why Choose Us</p>
          <h2 className="text-3xl font-black text-gray-900 mb-8">Why Bhairav Painting for Waterproofing?</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["47+ Years Experience", "Mumbai & Bhiwandi mein decades ka proven track record"],
              ["Free Site Inspection", "Koi charge nahi — hum aate hain, dekhte hain, quote dete hain"],
              ["Trusted Brands Only", "Dr Fixit, Asian Paints SmartCare — no cheap alternatives"],
              ["Written Warranty", "Har project pe written warranty — peace of mind guaranteed"],
              ["Material + Labour", "Complete package — alag alag arrange karne ki zaroorat nahi"],
              ["Same Day Response", "Call ya WhatsApp — hum turant respond karte hain"],
            ].map(([title, desc]) => (
              <div key={title} className="flex gap-3 items-start bg-gray-50 rounded-xl p-5">
                <CheckCircle className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2 text-center">Common Questions</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3 text-center">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-center mb-8">Waterproofing ke baare mein common questions — expert answers ke saath.</p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition"
                >
                  {faq.q}
                  <ChevronDown size={18} className={`text-orange-500 transition-transform flex-shrink-0 ml-3 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Service Areas</p>
          <h2 className="text-3xl font-black text-gray-900 mb-6">Areas We Serve</h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {areas.map(a => (
              <span key={a} className="bg-orange-50 border border-orange-200 text-orange-700 font-semibold text-sm px-4 py-2 rounded-full">{a}</span>
            ))}
          </div>
          <p className="text-gray-500 text-sm leading-relaxed">We provide terrace, roof, bathroom, interior, exterior, basement and damp wall waterproofing services for homes, flats, villas, offices and commercial buildings across Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai. Free site visit available — call or WhatsApp to book.</p>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Related Services</p>
          <h2 className="text-2xl font-black text-gray-900 mb-6">Other Services We Offer</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ["🏠", "Residential Painting", "/services/residential"],
              ["🖌️", "Interior Painting", "/services/interior"],
              ["🏢", "Exterior Painting", "/services/exterior"],
              ["🎨", "Texture Painting", "/services/texture"],
              ["✨", "Designer Painting", "/services/designer"],
              ["💼", "Commercial Painting", "/services/commercial"],
            ].map(([icon, label, href]) => (
              <Link key={href} href={href} className="bg-white border rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-orange-400 hover:text-orange-600 transition">
                {icon} {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-16 px-4 text-center">
        <h2 className="text-3xl font-black text-white mb-3">Leakage Problem Hai? Free Site Visit Book Karo!</h2>
        <p className="text-orange-100 mb-8">Mumbai, Thane, Bhiwandi, Kalyan & Navi Mumbai. We assess, suggest & quote on the spot.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:+919158800517" className="bg-white text-orange-600 font-bold px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-50 transition">
            <Phone size={18} /> Call Now
          </a>
          <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20Waterproofing%20quote" className="bg-green-500 text-white font-bold px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-green-600 transition">
            <MessageCircle size={18} /> WhatsApp Now
          </a>
        </div>
      </section>

    </main>
  )
}
