"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, MessageCircle, ChevronDown, CheckCircle, Star, Clock, Award, Shield } from "lucide-react"
import type { Metadata } from "next"

const designerServices = [
  { icon: "🎨", title: "Stencil Wall Design", desc: "Custom stencil patterns on feature walls. Geometric, floral, abstract — any design.", tag: "Most Popular", location: "Thane", img: "/images/designer/stencil-wall.jpg" },
  { icon: "🖌️", title: "Accent Wall", desc: "Bold single-wall colour or finish to create a focal point in any room.", tag: "Trending", location: "Bhiwandi", img: "/images/designer/accent-wall.jpg" },
  { icon: "✨", title: "Feature Wall", desc: "Full feature wall treatment — combination of colour, texture & design.", tag: "Premium", location: "Mumbai", img: "" },
  { icon: "🥇", title: "Metallic Designer Wall", desc: "Gold, silver & copper metallic finishes for a luxury statement wall.", tag: "Luxury", location: "Navi Mumbai", img: "" },
  { icon: "🎭", title: "Combination Finish", desc: "Mix of texture + stencil or designer print + solid colour. Custom-designed to your taste.", tag: "Custom", location: "Navi Mumbai", img: "" },
]

const textureTypes = [
  { icon: "🏖️", title: "Sand Texture", desc: "Grainy sand-effect finish that adds warmth & depth to walls. Popular for living rooms & bedrooms.", tag: "Most Popular" },
  { icon: "🧽", title: "Sponge Texture", desc: "Soft sponge-dabbed pattern giving walls a rich, layered look. Great for bedrooms & feature walls.", tag: "Budget-Friendly" },
  { icon: "🪨", title: "Rustic / Stone Texture", desc: "Earthy stone or brick-effect finish for a raw, natural look. Perfect for accent walls & TV walls.", tag: "Trending" },
  { icon: "✨", title: "Metallic Texture", desc: "Shiny metallic finish — gold, silver, copper tones. Adds glamour & elegance to living rooms.", tag: "Luxury" },
]

const whyUs = [
  { icon: <Award size={20} />, title: "47+ Years Experience", desc: "Decades of designer & texture painting experience across Mumbai, Thane & Bhiwandi." },
  { icon: <Shield size={20} />, title: "Premium Materials Only", desc: "Asian Paints, Berger & premium texture materials — no cheap alternatives." },
  { icon: <Star size={20} />, title: "Owner Supervised", desc: "Owner personally visits, supervises & inspects every designer/texture job." },
  { icon: <CheckCircle size={20} />, title: "Custom Designs", desc: "Every design is custom — stencil, colour, finish all chosen by you." },
  { icon: <CheckCircle size={20} />, title: "Material + Labour", desc: "Complete package — no need to arrange anything separately." },
  { icon: <Clock size={20} />, title: "On-Time Delivery", desc: "We give timeline before starting and deliver on time — always." },
]

const processSteps = [
  { n: "1", title: "Free Site Visit", desc: "We visit, understand your space & suggest suitable finishes." },
  { n: "2", title: "Design Consultation", desc: "Colour, pattern & finish options shown. Sample patches applied." },
  { n: "3", title: "Written Quote", desc: "Clear quote — area, material, finish, cost — all in writing." },
  { n: "4", title: "Surface Prep", desc: "Sanding, filling & priming for perfect base." },
  { n: "5", title: "Application", desc: "Designer / texture finish applied by expert team." },
  { n: "6", title: "Final Inspection", desc: "Owner inspects & you approve before we close the job." },
]

const faqs = [
  { q: "Designer wall painting kya hoti hai?", a: "Designer wall painting mein stencils, accent colours, feature panels & metallic finishes use karke bold statement wall create ki jaati hai — usually ek wall pe." },
  { q: "Texture painting kya hoti hai?", a: "Texture painting mein sand, sponge, rustic ya metallic finish apply karke wall ko depth aur premium tactile look diya jaata hai." },
  { q: "Designer wall aur texture painting mein kya difference hai?", a: "Designer wall usually ek accent/feature wall pe hoti hai — patterns aur designs ke saath. Texture painting poore room ki walls pe texture finish deta hai." },
  { q: "Kaunsa better hai — designer wall ya texture painting?", a: "Dono different purposes ke liye hain. TV wall ya bedroom accent ke liye designer wall better hai. Poore room ke liye texture painting zyada suitable hai." },
  { q: "Sand texture kya hota hai?", a: "Sand texture ek grainy finish hai jo wall ko natural sand jaisi feel deta hai. Living rooms aur bedrooms ke liye bahut popular hai." },
  { q: "Metallic finish kya hoti hai?", a: "Metallic finish mein gold, silver ya copper tones use hote hain — walls ko glamorous aur luxurious look milta hai." },
  { q: "Designer wall painting kitne din mein hoti hai?", a: "Ek feature/accent wall 1–2 din mein complete ho jaati hai. Poora room 2–4 din le sakta hai depending on design complexity." },
  { q: "Texture painting kitne din mein hoti hai?", a: "Ek room ki texture painting 1–3 din mein complete hoti hai. Multiple rooms ke liye 3–7 din lag sakte hain." },
  { q: "Kya aap sample patch pehle dikhate hain?", a: "Haan, hum design consultation mein sample patches apply karte hain taaki aap final look pehle dekh sakein." },
  { q: "Texture painting ka cost kitna hota hai?", a: "Texture painting ka cost finish type, area aur material ke hisab se vary karta hai. Free site visit ke baad exact written quote milta hai." },
  { q: "Designer wall painting ka cost kitna hai?", a: "Design complexity, stencil type aur area ke hisab se cost vary karti hai. Free consultation ke baad quote confirm hota hai." },
  { q: "Kya aap Asian Paints texture use karte hain?", a: "Haan, Asian Paints, Berger aur premium texture brands use karte hain — quality materials se hi kaam karte hain." },
]

const areas = ["Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai", "Dombivli", "Vasai", "Andheri", "Kasheli", "Kalher"]

export default function DesignerTexturePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="font-sans">

      {/* HERO */}
      <section className="bg-gray-900 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest px-4 py-1 rounded-full uppercase mb-5">
            ✦ Designer Wall & Texture Finishes
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Designer Wall Painting &<br />
            <span className="text-orange-500">Texture Finishes</span><br />
            in Mumbai, Thane, Bhiwandi & Kalyan
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 text-base leading-relaxed">
            Stencil designs, accent walls, feature walls & premium texture finishes — Sand, Sponge, Rustic & Metallic. 47+ years experience. Free site visit!
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {["Free Site Visit", "Designer & Texture Finishes", "Genuine Materials", "Trained Team", "Owner Supervised"].map(p => (
              <span key={p} className="bg-white/10 border border-white/20 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">✓ {p}</span>
            ))}
          </div>
          <div className="flex gap-3 justify-center flex-wrap mb-10">
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20Designer%20Wall%20or%20Texture%20Painting%20quote" className="bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3 rounded-lg flex items-center gap-2 transition">
              <MessageCircle size={16} /> Get Free Quote on WhatsApp
            </a>
            <a href="tel:+919158800517" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-lg flex items-center gap-2 transition">
              <Phone size={16} /> Call: 9158800517
            </a>
          </div>
          <div className="flex justify-center gap-10 flex-wrap">
            {[["47+", "Years Experience"], ["FREE", "Site Visit"], ["500+", "Projects Done"], ["9+", "Finish Options"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <span className="block text-2xl font-black text-orange-500">{val}</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Quick Overview</p>
          <h2 className="text-3xl font-black text-gray-900 mb-4">What Are Designer Wall & Texture Finishes?</h2>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Designer wall painting uses stencils, accent colours, feature panels & metallic finishes to create a bold statement wall — usually on one wall of a room. Texture painting applies a textured material such as sand, sponge, rustic or metallic finish across an entire wall to add depth, grain & a premium tactile look. Both can be combined for a fully custom result, and we provide both services across Mumbai, Thane, Bhiwandi, Kalyan & Navi Mumbai with a free site visit.
          </p>
        </div>
      </section>

      {/* DESIGNER SERVICES */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Category 1</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">🎨 Designer Wall Painting Services</h2>
          <p className="text-gray-500 mb-8">Premium designer wall finishes for homes, flats & commercial spaces.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {designerServices.map(s => (
              <div key={s.title} className="bg-white border rounded-xl overflow-hidden hover:border-orange-400 hover:-translate-y-1 transition-all shadow-sm">
                {s.img ? (
                  <img src={s.img} alt={s.title} className="w-full h-44 object-cover" />
                ) : (
                  <div className="w-full h-44 bg-gray-100 flex items-center justify-center text-4xl">{s.icon}</div>
                )}
                <div className="p-5">
                  <h3 className="font-bold text-base text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-gray-500 mb-3">{s.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-block bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">{s.tag}</span>
                    <span className="text-xs text-gray-400">📍 {s.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEXTURE TYPES */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Category 2</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">🧱 Texture Painting Finishes</h2>
          <p className="text-gray-500 mb-8">Whole room texture finishes — budget to luxury options available.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {textureTypes.map(t => (
              <div key={t.title} className="bg-gray-50 border rounded-xl p-5 hover:border-orange-400 transition shadow-sm">
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <span className="text-xs bg-orange-50 text-orange-600 font-bold px-2 py-0.5 rounded-full mb-2 inline-block">{t.tag}</span>
                <h3 className="font-bold text-sm text-gray-900 mb-2">{t.title}</h3>
                <p className="text-xs text-gray-500">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2 text-center">Compare Options</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3 text-center">Designer Wall vs Texture Painting</h2>
          <p className="text-gray-500 text-center mb-8">Which is right for you?</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white border rounded-xl overflow-hidden shadow-sm">
              <thead className="bg-orange-500 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-bold">Feature</th>
                  <th className="px-4 py-3 text-left text-sm font-bold">Designer Wall Painting</th>
                  <th className="px-4 py-3 text-left text-sm font-bold">Texture Painting</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[
                  ["Style", "Decorative Design", "Surface Finish"],
                  ["Best For", "One feature / accent wall", "Whole room / all walls"],
                  ["Look", "Stencil Patterns, Feature Wall", "Sand, Rustic, Premium Texture"],
                  ["Budget Range", "Mid to Premium", "Budget to Premium"],
                  ["Time to Complete", "1–2 days per wall", "1–3 days per room"],
                  ["Custom Colours", "✅ Any colour / design", "✅ Any colour"],
                  ["Popular Rooms", "TV Wall, Bedroom Accent", "Bedrooms, Living Rooms"],
                ].map(([f, d, t], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 text-sm font-semibold text-gray-700">{f}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{d}</td>
                    <td className="px-4 py-3 text-sm text-gray-600">{t}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Why Choose Us</p>
          <h2 className="text-3xl font-black text-gray-900 mb-8">Why Choose Bhairav for Designer & Texture Work</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {whyUs.map((w, i) => (
              <div key={i} className="flex gap-3 items-start bg-gray-50 rounded-xl p-5">
                <div className="text-orange-500 mt-1 flex-shrink-0">{w.icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">{w.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Our Process</p>
          <h2 className="text-3xl font-black text-gray-900 mb-8">How We Work — Step by Step</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {processSteps.map(s => (
              <div key={s.n} className="bg-white border rounded-xl p-5 shadow-sm">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg mb-3">{s.n}</div>
                <h3 className="font-bold text-sm text-gray-900 mb-1">{s.title}</h3>
                <p className="text-xs text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2 text-center">FAQs</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3 text-center">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-center mb-8">Common questions about designer wall & texture painting.</p>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-900 hover:bg-gray-100 transition"
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
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Service Areas</p>
          <h2 className="text-3xl font-black text-gray-900 mb-6">Areas We Serve</h2>
          <div className="flex flex-wrap gap-3 mb-6">
            {areas.map(a => (
              <span key={a} className="bg-orange-50 border border-orange-200 text-orange-700 font-semibold text-sm px-4 py-2 rounded-full">{a}</span>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Related Services</p>
          <h2 className="text-2xl font-black text-gray-900 mb-6">Other Services We Offer</h2>
          <div className="flex flex-wrap gap-3">
            {[
              ["🏠", "Residential Painting", "/services/residential"],
              ["🖌️", "Interior Painting", "/services/interior"],
              ["🏢", "Exterior Painting", "/services/exterior"],
              ["💧", "Waterproofing", "/services/waterproofing"],
              ["💼", "Commercial Painting", "/services/commercial"],
            ].map(([icon, label, href]) => (
              <Link key={href} href={href} className="bg-gray-50 border rounded-full px-5 py-2 text-sm font-semibold text-gray-700 hover:border-orange-400 hover:text-orange-600 transition">
                {icon} {label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-16 px-4 text-center">
        <h2 className="text-3xl font-black text-white mb-3">Designer Ya Texture Painting Chahiye?</h2>
        <p className="text-orange-100 mb-8">Free site visit book karo — Mumbai, Thane, Bhiwandi & Kalyan mein available hain.</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="tel:+919158800517" className="bg-white text-orange-600 font-bold px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-50 transition">
            <Phone size={18} /> Call Now
          </a>
          <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20Designer%20Wall%20or%20Texture%20Painting%20quote" className="bg-green-500 text-white font-bold px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-green-600 transition">
            <MessageCircle size={18} /> WhatsApp Now
          </a>
        </div>
      </section>

    </main>
  )
}
