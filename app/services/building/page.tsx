"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Phone, MessageCircle, CheckCircle, MapPin, ChevronDown } from "lucide-react"

const servicesIncluded = [
  { title: "Exterior Building Painting", img: "/images/building/service-exterior-building.jpg" },
  { title: "Society Repainting", img: "/images/building/service-society-repainting.jpg" },
  { title: "Waterproofing", img: "/images/building/service-waterproofing.jpg" },
  { title: "Crack Filling", img: "/images/building/service-crack-filling.jpg" },
  { title: "Terrace Coating", img: "/images/building/service-terrace-coating.jpg" },
  { title: "Staircase Painting", img: "/images/building/service-staircase-painting.jpg" },
  { title: "Parking Area Painting", img: "/images/building/service-parking-area.jpg" },
  { title: "Common Area Painting", img: "/images/building/service-common-area.jpg" },
  { title: "Compound Wall Painting", img: "/images/building/service-compound-wall.jpg" },
  { title: "Metal Railing Painting", img: "/images/building/service-metal-railing.jpg" },
]

const whoFor = [
  { img: "/images/building/clients/housing-societies.jpg", title: "Housing Societies", desc: "Society repainting and maintenance services for residential complexes.", bullets: ["Society Repainting", "Waterproofing", "Common Area Painting"] },
  { img: "/images/building/clients/apartment-complexes.jpg", title: "Apartment Complexes", desc: "Painting solutions for multi-tower residential projects.", bullets: ["Exterior Painting", "Staircase Painting", "Terrace Coating"] },
  { img: "/images/building/clients/builders-developers.jpg", title: "Builders & Developers", desc: "Project handover and new construction painting services.", bullets: ["New Building Painting", "Exterior Finishes", "Waterproofing"] },
  { img: "/images/building/clients/commercial-buildings.jpg", title: "Commercial Buildings", desc: "Professional painting for commercial properties.", bullets: ["Office Painting", "Exterior Painting", "Maintenance Painting"] },
  { img: "/images/building/clients/schools-hospitals.jpg", title: "Schools & Hospitals", desc: "Painting for institutional buildings.", bullets: ["Interior Painting", "Exterior Painting", "Maintenance Work"] },
  { img: "/images/building/clients/industrial-premises.jpg", title: "Industrial Premises", desc: "Large-scale industrial painting solutions.", bullets: ["Warehouse Painting", "Factory Painting", "Protective Coatings"] },
]

const problems = [
  { img: "/images/building/problems/paint-peeling.jpg", title: "Exterior Paint Peeling", desc: "Old paint chipping & flaking off walls", bullets: ["Surface Preparation", "Crack Filling", "Premium Repaint"] },
  { img: "/images/building/problems/water-seepage.jpg", title: "Water Seepage", desc: "Moisture entering through walls or terrace", bullets: ["Waterproof Treatment", "Damp Proofing", "Anti-Seepage Coating"] },
  { img: "/images/building/problems/wall-cracks.jpg", title: "Wall Cracks", desc: "Structural & surface cracks needing filling", bullets: ["Crack Filling", "Surface Leveling", "Weather-Proof Finish"] },
  { img: "/images/building/problems/faded-paint.jpg", title: "Faded Paint", desc: "Sun & weather worn-out exterior color", bullets: ["UV Resistant Paint", "Exterior Repainting", "Long-Lasting Finish"] },
  { img: "/images/building/problems/damp-patches.jpg", title: "Damp Patches", desc: "Dark patches from moisture build-up", bullets: ["Anti-Fungal Treatment", "Damp Wall Repair", "Moisture Barrier"] },
  { img: "/images/building/problems/terrace-leakage.jpg", title: "Terrace Leakage", desc: "Water leaking through terrace into flats below", bullets: ["Terrace Waterproofing", "Terrace Coating", "Leakage Repair"] },
]

const whyUs = [
  { icon: "📦", title: "Material + Labour Both", desc: "We handle everything — paint sourcing, materials & manpower. You don't run around." },
  { icon: "💧", title: "Waterproofing Available", desc: "Terrace, external walls & seepage treatment done before painting. One vendor, full solution." },
  { icon: "👁️", title: "Owner Supervised", desc: "No subcontracting. Owner personally on-site throughout the project. Full accountability." },
  { icon: "🤫", title: "Minimal Resident Disturbance", desc: "Planned schedule, scaffolding managed properly. Residents' daily life not affected." },
  { icon: "📋", title: "Detailed Quotation", desc: "Itemized quote for society AGM approval. No hidden costs, no surprises after work starts." },
  { icon: "📅", title: "Timeline Commitment", desc: "We give a written timeline & stick to it. Society gets project done before monsoon." },
]

const projects = [
  { before: "/images/building/projects/p1-before.jpg", after: "/images/building/projects/p1-after.jpg", title: "Society Repainting & Waterproofing — Bhiwandi", type: "Residential Society", scope: "Exterior Painting + Waterproofing", brand: "Asian Paints Apex", duration: "18 Days" },
  { before: "/images/building/projects/p2-before.jpg", after: "/images/building/projects/p2-after.jpg", title: "Luxury Villa Exterior Painting — Thane", type: "Independent Villa", scope: "Full Exterior Repainting", brand: "Berger WeatherCoat", duration: "22 Days" },
  { before: "/images/building/projects/p3-before.jpg", after: "/images/building/projects/p3-after.jpg", title: "Apartment Exterior Renovation — Kalyan", type: "Residential Apartment", scope: "Exterior + Common Area Painting", brand: "Nerolac Excel", duration: "12 Days" },
  { before: "/images/building/projects/p4-before.jpg", after: "/images/building/projects/p4-after.jpg", title: "Commercial Building Painting — Navi Mumbai", type: "Commercial Building", scope: "Exterior + Terrace Coating", brand: "Dulux Weathershield", duration: "15 Days" },
  { before: "/images/building/projects/p5-before.jpg", after: "/images/building/projects/p5-after.jpg", title: "Society Crack Repair & Repainting — Dombivli", type: "Residential Society", scope: "Exterior Painting + Crack Filling", brand: "Asian Paints Apex", duration: "20 Days" },
  { before: "/images/building/projects/p6-before.jpg", after: "/images/building/projects/p6-after.jpg", title: "High-Rise Building Exterior — Mumbai", type: "Commercial Complex", scope: "Exterior + Staircase + Common Areas", brand: "Berger WeatherCoat", duration: "30 Days" },
]

const areas = ["Bhiwandi", "Thane", "Kalyan", "Dombivli", "Navi Mumbai", "Mumbai", "Kasheli"]

const processSteps = [
  { num: "1", title: "Free Site Visit", desc: "We assess building condition & give honest scope advice" },
  { num: "2", title: "AGM-Ready Quote", desc: "Itemized quotation for society approval — no hidden costs" },
  { num: "3", title: "Surface Prep", desc: "Crack filling, cleaning, waterproofing & primer" },
  { num: "4", title: "Painting", desc: "Owner supervised execution with minimal disruption" },
  { num: "5", title: "Final Handover", desc: "Inspection, cleanup & warranty documentation" },
]

const faqs = [
  { q: "How do we get a quotation for our society?", a: "Call or WhatsApp us — we'll schedule a free site visit within 48 hours. After assessing the building, we provide a detailed itemized quotation suitable for society AGM presentation. No obligation." },
  { q: "How long does a G+7 society building painting take?", a: "Typically 15 to 25 days depending on building size, surface condition & weather. We provide a written project timeline before starting work and stick to it." },
  { q: "Do you do waterproofing also or only painting?", a: "Yes — we offer complete waterproofing for terrace, external walls & seepage-prone areas as part of the same project. One vendor, full solution." },
  { q: "Will residents be disturbed during the work?", a: "We plan scaffolding & work schedule to minimize resident disruption. External work is done during daytime hours only. We coordinate with the society secretary for any specific requirements." },
  { q: "What is the approximate cost for building painting?", a: "Cost depends on building size, surface condition, paint brand chosen & scope of work. After a free site visit, we provide an accurate itemized quote. We offer both budget & premium paint options." },
  { q: "Do you provide a warranty on building painting?", a: "Yes — we provide a quality guarantee on all work. Warranty period depends on paint brand & type selected. Premium exterior paints come with manufacturer warranty of 7 to 10 years." },
  { q: "How many years experience do you have?", a: "Bhairav Painting Service has 47+ years of combined experience in residential, society & commercial painting projects across Mumbai, Thane, Kalyan & Bhiwandi." },
  { q: "Do you handle painting for builders during construction handover?", a: "Yes, we work with builders & developers for new construction painting before handover to residents. We can coordinate with construction timelines." },
  { q: "What paint brands do you use?", a: "We use only branded premium paints — Asian Paints, Berger, Nerolac, Dulux & Indigo. Society can choose based on budget & preference." },
  { q: "Can you fix water seepage before painting?", a: "Yes, we identify seepage sources and apply waterproofing treatment before painting to ensure the new paint job lasts longer without damp patches reappearing." },
  { q: "Do you provide material or do we need to arrange paint?", a: "We provide both material and labour as part of our service. The society doesn't need to separately arrange or purchase paint." },
  { q: "Which areas do you serve for building painting?", a: "We serve Bhiwandi, Thane, Kalyan, Dombivli, Navi Mumbai, Mumbai & Kasheli for building & society painting projects." },
  { q: "How do you ensure minimal disruption to residents?", a: "We plan work zone-by-zone, use proper scaffolding safety measures, and communicate the schedule in advance through the society secretary so residents know what to expect." },
]

const relatedServices = [
  { title: "Residential Painting", href: "/services/residential", image: "/images/residential.webp" },
  { title: "Exterior Painting", href: "/services/exterior", image: "/images/exterior-new.jpg" },
  { title: "Commercial Painting", href: "/services/commercial", image: "/images/portfolio-office.webp" },
  { title: "Interior Painting", href: "/services/interior", image: "/images/portfolio-bedroom.webp" },
]

const serviceOptions = ["Society Exterior Painting", "Building Repainting", "Waterproofing", "Common Area Painting", "New Construction Painting", "Other"]

export default function BuildingPaintingPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", area: "", message: "" })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = () => {
    if (!form.name || !form.phone) { alert("Please enter your name and phone number."); return }
    const msg = `Hi, I need a Building/Society Painting quote.%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService: ${encodeURIComponent(form.service || "Not specified")}%0AArea: ${encodeURIComponent(form.area || "Not specified")}%0AMessage: ${encodeURIComponent(form.message || "-")}`
    window.open(`https://wa.me/919158800517?text=${msg}`, "_blank")
  }

  return (
    <div className="flex flex-col">

      {/* HERO */}
      <section className="relative bg-[#1B2B8A] pt-20 pb-16 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-400 mb-6">★ SOCIETY & BUILDING SPECIALISTS</div>
          <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl leading-tight" style={{color:"#f97316"}}>Building & Society Painting</h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">Society Painting, Exterior Painting, Waterproofing & Common Area Painting Services — from G+4 societies to large apartment complexes. Owner supervised. Zero resident disruption.</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-bold text-white hover:bg-orange-600 transition-colors"><MessageCircle className="h-5 w-5" /> Get Free Site Visit</a>
            <a href="tel:+919158800517" className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors"><Phone className="h-5 w-5" /> Call Now: 9158800517</a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-orange-500 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30 text-center text-white">
            <div className="px-4 py-2"><p className="text-2xl font-black">47+</p><p className="text-xs font-semibold mt-1">Years Experience</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">500+</p><p className="text-xs font-semibold mt-1">Projects Done</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">100%</p><p className="text-xs font-semibold mt-1">Owner Supervised</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">FREE</p><p className="text-xs font-semibold mt-1">Site Visit</p></div>
          </div>
        </div>
      </section>

      {/* SERVICES INCLUDED */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>What's Included</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Building Painting Services Include</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>Complete end-to-end service — everything a building or society needs in one project.</p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {servicesIncluded.map((s, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl shadow-sm border border-gray-100">
                <img src={s.img} alt={`${s.title} Mumbai Thane Bhiwandi`} loading="lazy" className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3 flex items-end gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-400 shrink-0 mb-0.5" />
                  <span className="text-white text-xs font-bold leading-tight">{s.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-blue-50 border border-blue-100 p-6">
            <p className="text-sm leading-relaxed text-gray-600">
              Bhairav Painting Service provides a complete range of building painting and maintenance services for housing societies, apartment complexes and commercial buildings across Mumbai, Thane, Bhiwandi and Kalyan. Our building painting services include <strong className="text-gray-900">exterior building painting, society repainting, waterproofing, crack filling, terrace coating, staircase painting, parking area painting, common area painting, compound wall painting and metal railing painting</strong> — all managed by our experienced team under direct owner supervision. We handle projects of all sizes, from G+4 societies to large multi-tower complexes with hundreds of flats.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Who We Work With</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>We Specialize in Large-Scale Projects</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>Not just homes — we handle the big jobs that need proper planning, coordination & experience.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whoFor.map((w, i) => (
              <div key={i} className="group rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="overflow-hidden h-44">
                  <img src={w.img} alt={`${w.title} painting service Mumbai Thane Bhiwandi`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-black text-base mb-1" style={{color:"#1B2B8A"}}>{w.title}</h3>
                  <p className="text-xs mb-3" style={{color:"#6b7280"}}>{w.desc}</p>
                  <div className="flex flex-col gap-1">
                    {w.bullets.map((b, j) => (
                      <span key={j} className="text-xs text-gray-700 flex items-center gap-1.5">
                        <span className="text-orange-500 font-bold">✓</span> {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Common Issues</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Common Building Problems We Solve</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>If your building shows any of these signs, it's time for professional attention.</p>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((p, i) => (
              <div key={i} className="group rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="overflow-hidden h-44">
                  <img src={p.img} alt={`${p.title} - Building problem Mumbai Thane Bhiwandi`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-black text-base mb-1" style={{color:"#1B2B8A"}}>{p.title}</h3>
                  <p className="text-xs mb-3" style={{color:"#6b7280"}}>{p.desc}</p>
                  <div className="flex flex-col gap-1">
                    {p.bullets.map((b, j) => (
                      <span key={j} className="text-xs text-gray-700 flex items-center gap-1.5">
                        <span className="text-orange-500 font-bold">✓</span> {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Explanatory Paragraph */}
          <div className="mt-12 rounded-2xl bg-orange-50 border border-orange-100 p-8">
            <p className="text-sm leading-relaxed" style={{color:"#4b5563"}}>
              Building exteriors in Mumbai, Thane, Bhiwandi and surrounding areas face constant exposure to sun, rain, humidity and pollution. Over time, issues such as paint peeling, wall cracks, water seepage, damp patches and terrace leakage can damage both the appearance and structural integrity of the property. Bhairav Painting Service provides professional building painting, waterproofing, crack filling and exterior maintenance solutions for housing societies, apartment complexes, commercial buildings and industrial premises across Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai. Our experienced team inspects each property thoroughly, identifies the root cause of the damage, and recommends the most suitable long-lasting repair, waterproofing and repainting solution. Whether it is a single building or a large residential complex, we ensure proper surface preparation, quality materials and a durable finish that protects the structure for years.
            </p>
          </div>

          {/* Problem → Solution Table */}
          <div className="mt-10">
            <h3 className="text-lg font-black mb-4" style={{color:"#1B2B8A"}}>Problem → Solution at a Glance</h3>
            <div className="overflow-x-auto rounded-xl border border-gray-100">
              <table className="w-full text-sm">
                <thead className="bg-[#1B2B8A] text-white">
                  <tr>
                    <th className="px-6 py-3 text-left font-bold">Problem</th>
                    <th className="px-6 py-3 text-left font-bold">Our Solution</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Paint Peeling", "Surface Preparation + Exterior Repainting"],
                    ["Water Seepage", "Waterproofing Treatment + Anti-Seepage Coating"],
                    ["Wall Cracks", "Crack Filling + Surface Leveling + Repaint"],
                    ["Faded Paint", "UV Resistant Exterior Repaint"],
                    ["Damp Patches", "Anti-Fungal Treatment + Damp Proofing"],
                    ["Terrace Leakage", "Terrace Waterproofing + Protective Coating"],
                  ].map(([prob, sol], i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-6 py-3 font-semibold" style={{color:"#1B2B8A"}}>{prob}</td>
                      <td className="px-6 py-3" style={{color:"#4b5563"}}>{sol}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Problems FAQs */}
          <div className="mt-10">
            <h3 className="text-lg font-black mb-4" style={{color:"#1B2B8A"}}>Frequently Asked Questions</h3>
            <div className="space-y-3 max-w-3xl">
              {[
                { q: "Why is exterior paint peeling from my building?", a: "Exterior paint peeling is caused by moisture trapped behind the paint surface, poor surface preparation before painting, low-quality paint, or age. In Mumbai and surrounding areas, the combination of heavy monsoon rain and summer heat accelerates this process. Proper surface preparation, waterproof primer and quality exterior paint can prevent peeling for 5–7 years." },
                { q: "How do I know if my building needs waterproofing?", a: "Signs that your building needs waterproofing include damp patches on interior walls or ceilings, water stains, mold or fungal growth, terrace water pooling, and cracks that allow water entry. If you notice any of these, a free site inspection by our team will help identify the extent of the problem and the best solution." },
                { q: "Can wall cracks cause water seepage?", a: "Yes — even hairline cracks in exterior walls can allow water to penetrate during rain, leading to internal damp patches, paint bubbling and structural damage over time. Early crack filling with appropriate compounds followed by exterior repainting prevents water seepage from worsening." },
                { q: "How often should a housing society repaint its building?", a: "For housing societies in Mumbai, Thane and Bhiwandi, exterior repainting every 4–6 years is recommended. High-rise buildings or those near the coast may need repainting every 3–4 years due to higher moisture and salt exposure. Regular maintenance painting extends the life of the structure." },
                { q: "What is the best waterproofing solution for terraces?", a: "For terraces in Mumbai and surrounding areas, a combination of crack filling, waterproof membrane application and protective terrace coating provides the best long-term protection. Bhairav Painting Service recommends and applies proven waterproofing systems suited to local climate conditions, with a free site visit and written quotation before work begins." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                  <p className="font-bold text-sm mb-2" style={{color:"#1B2B8A"}}>Q: {faq.q}</p>
                  <p className="text-sm" style={{color:"#4b5563"}}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Geo Paragraph */}
          <div className="mt-8 rounded-xl border-l-4 border-orange-500 bg-white p-6">
            <p className="text-sm leading-relaxed" style={{color:"#4b5563"}}>
              <strong style={{color:"#111827"}}>Bhairav Painting Service</strong> provides building painting, waterproofing, crack filling and exterior maintenance services across <strong style={{color:"#111827"}}>Mumbai, Thane, Bhiwandi, Kalyan, Dombivli, Navi Mumbai, Vasai, Virar, Andheri and Kasheli</strong>. Contact us for a free site visit and written quotation — no obligation.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#1B2B8A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-orange-400 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">Why Societies Choose Us</span>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Why Housing Societies Choose Bhairav</h2>
          <p className="mt-3 text-sm text-white/70 max-w-xl">Society secretaries & committees trust us because we solve the real problems they face.</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w, i) => (
              <div key={i} className="rounded-xl bg-white/10 p-5">
                <div className="text-xl mb-2">{w.icon}</div>
                <h3 className="font-bold text-sm text-white">{w.title}</h3>
                <p className="text-xs mt-1 text-white/70">{w.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 rounded-2xl bg-white/10 p-6">
            {[["47+","Years Experience"],["500+","Projects Done"],["Free","Site Visit"],["100%","Owner Supervised"],["M+L","Material + Labour"],["✓","Warranty Available"]].map(([num,lbl],i)=>(
              <div key={i} className="text-center min-w-[100px]"><p className="text-xl font-black text-orange-400">{num}</p><p className="text-xs text-white/70 mt-1">{lbl}</p></div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-white/10 p-6">
            <p className="text-sm leading-relaxed text-white/80">
              Choosing the right contractor for building or society painting in Mumbai, Thane and Bhiwandi is critical — a poorly executed project means peeling paint, recurring leakage and wasted money within 2–3 years. Bhairav Painting Service has been trusted by housing societies, apartment complexes, builders and commercial property owners for over <strong className="text-white">47 years</strong> because we combine proper surface preparation, quality branded paints, experienced workmanship and complete accountability. Every project is personally supervised by the owner — not outsourced or delegated — ensuring consistent quality from the first coat to the final cleanup.
            </p>
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Transformation</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Before & After — Real Projects</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>Real building painting projects by Bhairav Painting Service across Mumbai, Thane & Bhiwandi.</p>
          <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"20px"}} className="mt-10">
            {projects.map((p, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl" style={{height:"220px"}}>
                <Image src={p.after} alt={`${p.title} - Building painting by Bhairav Painting Service Mumbai Thane Bhiwandi`} fill className="object-cover group-hover:scale-105 transition-transform duration-300"/>
                <div className="absolute inset-0 bg-[#1B2B8A]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold">View More →</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-white text-sm font-bold">{p.title}</p>
                  <p className="text-gray-300 text-xs mt-0.5">{p.scope}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Service Area</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Areas We Serve</h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Building & society painting services across these locations.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {areas.map((a) => <span key={a} className="flex items-center gap-2 rounded-full bg-[#1B2B8A] px-5 py-2.5 text-sm font-semibold text-white"><MapPin className="h-4 w-4"/>{a}</span>)}
          </div>
          <div className="mt-8 rounded-xl border-l-4 border-orange-500 bg-white p-6">
            <p className="text-sm leading-relaxed" style={{color:"#4b5563"}}><strong style={{color:"#111827"}}>Bhairav Painting Service</strong> provides building painting, society painting, exterior painting, waterproofing and common area painting services in <strong style={{color:"#111827"}}>Mumbai, Thane, Bhiwandi, Kalyan, Dombivli, Navi Mumbai</strong> and nearby areas. With <strong style={{color:"#111827"}}>47+ years of experience</strong>, we help housing societies, apartment complexes, builders and commercial properties maintain attractive and long-lasting exteriors.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-[#1B2B8A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-orange-400 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">Our Process</span>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">How Society Projects Work</h2>
          <p className="mt-3 text-sm text-white/70">From first call to final handover — transparent, on-time, no surprises.</p>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
            {processSteps.map((s) => (
              <div key={s.num} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl font-black text-white">{s.num}</div>
                <h3 className="mt-3 font-bold text-white text-xs">{s.title}</h3>
                <p className="mt-1 text-xs text-white/60">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl bg-white/10 p-6">
            <p className="text-sm leading-relaxed text-white/80">
              Our building painting process begins with a <strong className="text-white">free site visit and inspection</strong> where we assess the surface condition, identify problem areas such as cracks, seepage or peeling, and measure the area accurately. We then provide a detailed written quotation suitable for society AGM presentation. Once approved, we begin with thorough <strong className="text-white">surface preparation</strong> — cleaning, crack filling, waterproofing where needed, and applying primer — before the actual painting begins. We use only branded premium exterior paints and apply the required number of coats for a durable, long-lasting finish. The project is completed with full cleanup, and we do a joint inspection with the society representative before handing over.
            </p>
          </div>
        </div>
      </section>

      {/* PAINT BRANDS */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Paint Brands</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Only Branded Paints Used</h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>We use premium weather-resistant exterior paints for long-lasting results. Your choice of brand.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {["Asian Paints Apex","Berger WeatherCoat","Nerolac Excel","Dulux Weathershield","Indigo Paints"].map((b)=>(
              <span key={b} className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-semibold" style={{color:"#1B2B8A"}}>🎨 {b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>FAQ</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Society Secretary? We Have Answers.</h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Common questions from CHS committees & building managers.</p>
          <div className="mt-8 space-y-3 max-w-3xl">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-100 overflow-hidden">
                <button className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white bg-white" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-bold text-sm pr-4" style={{color:"#1B2B8A"}}>{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-orange-500 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <div className="px-5 pb-4 bg-white"><p className="text-sm" style={{color:"#4b5563"}}>{faq.a}</p></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Related Services</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Other Painting Services</h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {relatedServices.map((s, i) => (
              <Link key={i} href={s.href} className="overflow-hidden rounded-xl bg-white border-2 border-gray-100 hover:border-orange-400 transition-colors text-center">
                <div className="relative h-24"><Image src={s.image} alt={s.title} fill className="object-cover"/></div>
                <div className="p-3"><span className="text-xs font-bold" style={{color:"#1B2B8A"}}>{s.title}</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-20 bg-orange-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white sm:text-4xl">Society Secretary? Let's Talk.</h2>
            <p className="mt-3 text-white/85 text-sm">Free site visit. AGM-ready quotation. No obligation. We serve Mumbai, Thane, Kalyan, Bhiwandi & surrounding areas.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+919158800517" className="flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white px-6 py-3 text-sm font-bold text-orange-500"><Phone className="h-5 w-5"/>Call Now</a>
              <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20quotation%20for%20society%20building%20painting" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white"><MessageCircle className="h-5 w-5"/>WhatsApp for Quote</a>
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
