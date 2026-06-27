"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, MessageCircle, ChevronDown, CheckCircle, Shield, Star, Clock, Award } from "lucide-react"

const services = [
  { icon: "🏠", title: "Terrace Waterproofing", desc: "Complete terrace waterproofing with membrane coating. Monsoon-ready solution for flat & sloped terraces.", tag: "Starts ₹45/sq ft" },
  { icon: "🔧", title: "Roof Leakage Repair", desc: "Permanent roof leakage fix. Crack sealing + protective coating. Emergency same-day visits available.", tag: "Free Inspection" },
  { icon: "🚿", title: "Bathroom Waterproofing", desc: "Stop seepage to flat below. Floor + wall waterproofing treatment. Bina tiles tode bhi possible.", tag: "1 Day Work" },
  { icon: "💧", title: "Damp Wall Treatment", desc: "Anti-damp coating + crack filling for wet walls. Mould removal. Permanent source-level treatment.", tag: "Permanent Fix" },
  { icon: "🏢", title: "Exterior Waterproofing", desc: "Weather-resistant coating for exterior walls. Rain + UV protection. Building exterior protection.", tag: "Long Lasting" },
  { icon: "🏗️", title: "Basement Waterproofing", desc: "Groundwater protection for basement. Moisture barrier treatment. Underground parking bhi.", tag: "Expert Team" },
  { icon: "🏘️", title: "Society & Building", desc: "Large scale waterproofing for societies, buildings & commercial properties. Special bulk rates.", tag: "Special Rates" },
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

const processSteps = [
  { n: "1", title: "Free Site Visit", desc: "We visit & assess leakage — source, severity & area." },
  { n: "2", title: "Written Quote", desc: "Method, product, area & cost — all in writing." },
  { n: "3", title: "Surface Prep", desc: "Cleaning, crack filling & surface preparation." },
  { n: "4", title: "Primer Coat", desc: "Primer applied first to maximise waterproofing bond." },
  { n: "5", title: "Waterproofing", desc: "Dr Fixit or Asian Paints — 2 to 3 coats applied." },
  { n: "6", title: "Curing Time", desc: "Proper curing for maximum durability." },
  { n: "7", title: "Final Inspection", desc: "Owner inspects, water test done & warranty given." },
]

const methods = [
  { icon: "🧱", title: "Cementitious Waterproofing", desc: "Easy to apply on concrete. Best for bathrooms & basements. Rigid protection.", tag: "Most Common" },
  { icon: "💧", title: "Liquid Membrane", desc: "Flexible coating by roller or spray. Excellent for terraces, roofs & wet areas.", tag: "Flexible" },
  { icon: "🖤", title: "Bituminous Membrane", desc: "Self-adhesive sheets. Very strong protection for roofs & underground structures.", tag: "Heavy Duty" },
  { icon: "🔵", title: "Polyurethane (PU)", desc: "High-flexibility, resistant to water & chemicals. Ideal for terraces & exposed areas.", tag: "Premium" },
]

const expertGuide = [
  { title: "Identify Exact Leakage Source First", desc: "A good contractor always identifies root cause before repairing. Random treatment fails." },
  { title: "Ask Which Brand Will Be Used", desc: "Insist on Dr Fixit, Asian Paints SmartCare or Berger. Cheap local chemicals fail quickly." },
  { title: "Insist on Written Quotation", desc: "Get written quote: area in sq ft, product name, number of coats, and total cost." },
  { title: "Confirm Surface Preparation Included", desc: "Waterproofing fails on dirty or cracked surfaces. Confirm crack filling is included." },
  { title: "Ask for Warranty in Writing", desc: "Professional waterproofing should come with minimum 2–5 year written warranty." },
]

const faqs = [
  { q: "Waterproofing kya hoti hai?", a: "Waterproofing ek process hai jisme special chemicals aur coatings use karke terrace, roof, bathroom, walls aur basement ko water leakage aur seepage se protect kiya jata hai." },
  { q: "Waterproofing kitne saal tak chalti hai?", a: "Quality materials aur proper application ke saath waterproofing 5–10 saal ya usse zyada chal sakti hai." },
  { q: "Terrace waterproofing kyu zaruri hai?", a: "Terrace sabse zyada rainwater face karta hai. Waterproofing seepage, cracks aur structural damage ko rokne me madad karti hai." },
  { q: "Roof leakage ka permanent solution kya hai?", a: "Professional inspection ke baad cracks sealing, waterproof membrane aur protective coating lagakar leakage permanently control ki ja sakti hai." },
  { q: "Bathroom waterproofing bina tiles tode ho sakti hai?", a: "Kuch cases me tile joints treatment aur chemical injection se repair ho sakti hai. Severe leakage me tiles remove karna pad sakta hai." },
  { q: "Wall seepage aur leakage me kya difference hai?", a: "Leakage direct water entry hoti hai, jabki seepage moisture slowly walls ke through pass hota hai aur damp patches create karta hai." },
  { q: "Damp walls ka permanent treatment kya hai?", a: "Source identify karke waterproofing treatment, crack filling aur anti-damp coating apply ki jati hai." },
  { q: "Waterproofing ka best time kab hota hai?", a: "Monsoon ke pehle — March se May — waterproofing karwana sabse beneficial hota hai. Dry weather me coating properly cure hoti hai." },
  { q: "Waterproofing work complete hone me kitna time lagta hai?", a: "Project size ke hisab se 1–7 din lag sakte hain. Bathroom 1 din, terrace 2–3 din, badi roof 3–5 din. Timeline pehle confirm karte hain." },
  { q: "Kya waterproofing ke baad painting kar sakte hain?", a: "Haan, surface completely dry aur cured hone ke baad painting ki ja sakti hai. Hum dono ek saath karte hain — pehle waterproofing, phir painting." },
  { q: "Waterproofing cost kaise calculate hoti hai?", a: "Area size, leakage condition, surface type aur material selection ke basis par cost calculate hoti hai. Free site visit ke baad exact written quote milta hai." },
  { q: "Kya terrace cracks se leakage ho sakti hai?", a: "Haan, even choti cracks bhi rainwater seepage ka reason ban sakti hain. Cracks ko pehle properly fill karna waterproofing ka essential step hai." },
  { q: "Dr Fixit waterproofing better hai?", a: "Dr Fixit (Pidilite) industry me trusted brand hai aur terrace, roof, bathroom aur wall waterproofing ke liye widely used hota hai. Hum regularly Dr Fixit products use karte hain." },
  { q: "Asian Paints SmartCare waterproofing effective hai?", a: "Haan, Asian Paints SmartCare bhi waterproofing aur damp protection ke liye popular solution hai. Surface aur requirement ke hisab se best product recommend karte hain." },
  { q: "Kya waterproofing se fungus aur mould ruk sakte hain?", a: "Haan, moisture control hone par fungus aur mould growth significantly reduce ho jati hai. Damp wall treatment especially iske liye effective hai." },
  { q: "Basement waterproofing kyu zaruri hoti hai?", a: "Basement groundwater pressure aur moisture ke constant contact me rehta hai. Waterproofing ke bina structural damage, damp floors aur mould aam problem hain." },
  { q: "Exterior wall waterproofing kya hoti hai?", a: "Exterior walls par special waterproof coatings apply karke rainwater penetration roka jata hai. Building ki outer surface ko weather aur rain se protect karta hai." },
  { q: "Kya waterproofing se ceiling seepage band ho sakti hai?", a: "Haan, leakage source identify karke proper waterproofing treatment karne se ceiling seepage control ho sakti hai." },
  { q: "Kya waterproofing warranty ke saath milti hai?", a: "Haan, warranty project aur material type ke according vary karti hai. Written warranty confirm karte hain kaam shuru hone se pehle." },
  { q: "Kya aap free site visit provide karte hain?", a: "Haan, Bhairav Painting Service free site inspection aur quotation provide karta hai — koi charge nahi, koi obligation nahi." },
  { q: "Kya aap material aur labour dono provide karte hain?", a: "Haan, hum material aur labour dono provide karte hain. Ek hi team sab kuch handle karti hai — koi confusion nahi." },
  { q: "Kya aap residential aur commercial waterproofing karte hain?", a: "Haan, homes, societies, offices, shops aur commercial properties ke projects handle kiye jate hain — Mumbai, Thane, Bhiwandi aur Kalyan me." },
  { q: "Mumbai me waterproofing service available hai?", a: "Haan, Mumbai ke multiple areas me waterproofing services available hain — Andheri, Navi Mumbai, Thane, Bhiwandi aur surrounding areas." },
  { q: "Thane, Bhiwandi aur Kalyan me waterproofing service milti hai?", a: "Haan, hum Thane, Bhiwandi, Kalyan, Navi Mumbai, Dombivli, Vasai aur nearby locations me services provide karte hain. Free site visit available hai." },
  { q: "Waterproofing quotation kaise milega?", a: "Phone, WhatsApp (+91 9158800517) ya website enquiry form ke through free quotation request kar sakte hain. Same day response guaranteed." },
]

const areas = ["Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai", "Dombivli", "Kasheli", "Kalher", "Andheri", "Vasai", "Virar", "Ulhasnagar"]

const projects = [
  { before: "/images/waterproofing/p1-before.jpg", after: "/images/waterproofing/p1-after.jpg", title: "Terrace Waterproofing — Bhiwandi", scope: "450 sq ft • Dr Fixit Membrane • 3 Days", problem: "Terrace leakage during monsoon — water dripping into flat below.", solution: "Dr Fixit liquid membrane waterproofing + crack filling." },
  { before: "/images/waterproofing/p2-before.jpg", after: "/images/waterproofing/p2-after.jpg", title: "Roof Leakage Repair — Thane", scope: "280 sq ft • Liquid Membrane • 2 Days", problem: "Ceiling stains and water dripping from roof during rain.", solution: "Roof crack repair + Pidilite liquid membrane application." },
  { before: "/images/waterproofing/p3-before.jpg", after: "/images/waterproofing/p3-after.jpg", title: "Bathroom Waterproofing — Thane", scope: "80 sq ft • Dr Fixit Pidifin 2K • 1 Day", problem: "Bathroom floor seepage causing damp ceiling in flat below.", solution: "Dr Fixit Pidifin 2K waterproofing on floor and walls." },
  { before: "/images/waterproofing/p4-before.jpg", after: "/images/waterproofing/p4-after.jpg", title: "Damp Wall Treatment — Bhiwandi", scope: "3 Rooms • Anti-damp Coating • 2 Days", problem: "Paint peeling and damp patches on interior walls due to moisture.", solution: "Anti-damp primer + waterproof putty + anti-fungal paint." },
  { before: "/images/waterproofing/p5-before.jpg", after: "/images/waterproofing/p5-after.jpg", title: "Exterior Waterproofing — Mumbai", scope: "Building Exterior • Weather Coat • 4 Days", problem: "Exterior wall cracks allowing water seepage during monsoon.", solution: "Crack filling + Berger WeatherCoat exterior waterproofing." },
  { before: "/images/waterproofing/p6-before.jpg", after: "/images/waterproofing/p6-after.jpg", title: "Basement Waterproofing — Kalyan", scope: "Basement • Crystalline Coating • 3 Days", problem: "Basement walls wet due to high water table and rain seepage.", solution: "Crystalline waterproofing compound + injection grouting." },
  { before: "/images/waterproofing/p7-before.jpg", after: "/images/waterproofing/p7-after.jpg", title: "Seepage Repair — Navi Mumbai", scope: "Interior Walls • Anti-Seepage • 2 Days", problem: "Corner and floor junction seepage causing mold growth.", solution: "Anti-seepage treatment + tile joint sealing + anti-fungal coat." },
]

export default function WaterproofingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main className="font-sans">

      {/* HERO */}
      <section className="bg-gray-900 py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-orange-500/20 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-widest px-4 py-1 rounded-full uppercase mb-5">
            Waterproofing Experts — Mumbai & Bhiwandi
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
            Stop Roof Leaks, Wall Seepage &<br />
            <span className="text-orange-500">Damp Problems</span> Before They Get Worse
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-4 text-base leading-relaxed">
            Terrace, Roof, Bathroom & Damp Wall Waterproofing. Dr Fixit & Asian Paints. 47+ years experience.
          </p>
          {/* Emergency CTA */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500/40 text-red-400 text-sm font-bold px-4 py-2 rounded-full mb-6">
            🚨 Roof Leaking During Rain? Same-Day Site Visit Available
          </div>
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {["Terrace Waterproofing", "Roof Leakage", "Bathroom Waterproofing", "Damp Walls", "Free Site Visit"].map(p => (
              <span key={p} className="bg-white/10 border border-white/20 text-gray-300 text-xs font-semibold px-3 py-1 rounded-full">{p}</span>
            ))}
          </div>
          <div className="flex gap-3 justify-center flex-wrap mb-6">
            <a href="tel:+919158800517" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-lg flex items-center gap-2 transition">
              <Phone size={16} /> Call Now
            </a>
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20Waterproofing%20quote" className="bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3 rounded-lg flex items-center gap-2 transition">
              <MessageCircle size={16} /> WhatsApp
            </a>
          </div>
          <a href="tel:+919158800517" className="inline-block text-orange-400 font-black text-2xl mb-8 hover:text-orange-300 transition">+91 91588 00517</a>
          <div className="flex justify-center gap-10 flex-wrap">
            {[["47+", "Years Experience"], ["500+", "Projects Done"], ["Free", "Site Visit"], ["Same Day", "Response"]].map(([val, label]) => (
              <div key={label} className="text-center">
                <span className="block text-2xl font-black text-orange-500">{val}</span>
                <span className="text-xs text-gray-400 uppercase tracking-widest">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-3">
          <span className="flex items-center gap-2 bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-bold px-4 py-2 rounded-full">⭐ 4.8★ Google Rating — 200+ Reviews</span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mr-2">Trusted Brands:</span>
          {["✅ Dr Fixit (Pidilite)", "✅ Asian Paints SmartCare", "✅ Berger WeatherCoat", "✅ Nerolac", "✅ Pidilite STP"].map(b => (
            <span key={b} className="bg-gray-50 border rounded-lg px-3 py-1.5 text-sm font-bold text-gray-700">{b}</span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gray-500">Transformation</span>
          <h2 className="mt-3 text-3xl font-black text-gray-900">Before & After — Real Projects</h2>
          <p className="mt-2 text-sm text-gray-500 max-w-2xl">Explore waterproofing projects completed by Bhairav Painting Service across Mumbai, Thane, Bhiwandi & Kalyan.</p>
          <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"20px"}} className="mt-8">
            {projects.map((p, i) => (
              <div key={i} className="group rounded-xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition relative">
                <div className="absolute inset-0 bg-[#1B2B8A]/0 group-hover:bg-[#1B2B8A]/10 transition-all z-10 flex items-center justify-center pointer-events-none">
                  <span className="bg-orange-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity" style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", zIndex:20, whiteSpace:"nowrap"}}>View More →</span>
                </div>
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
                  <div style={{position:"relative", height:"160px"}}>
                    <img src={p.before} alt={`Before waterproofing - ${p.title} Mumbai Thane Bhiwandi`} style={{width:"100%", height:"100%", objectFit:"cover"}} loading="lazy"/>
                    <span style={{position:"absolute", top:"6px", left:"6px", background:"rgba(0,0,0,0.75)", color:"#fff", fontSize:"9px", fontWeight:"700", padding:"2px 6px", borderRadius:"4px", zIndex:5}}>BEFORE</span>
                  </div>
                  <div style={{position:"relative", height:"160px"}}>
                    <img src={p.after} alt={`After waterproofing - ${p.title} by Bhairav Painting Service Mumbai Thane Bhiwandi`} style={{width:"100%", height:"100%", objectFit:"cover"}} loading="lazy"/>
                    <span style={{position:"absolute", top:"6px", left:"6px", background:"#f97316", color:"#fff", fontSize:"9px", fontWeight:"700", padding:"2px 6px", borderRadius:"4px", zIndex:5}}>AFTER</span>
                  </div>
                </div>
                <div style={{padding:"12px 14px"}}>
                  <p style={{fontSize:"12px", fontWeight:"700", color:"#1B2B8A"}}>📍 {p.title}</p>
                  <p style={{fontSize:"11px", color:"#6b7280", marginTop:"2px", marginBottom:"8px"}}>{p.scope}</p>
                  <p style={{fontSize:"11px", color:"#dc2626"}}><strong>Problem:</strong> {p.problem}</p>
                  <p style={{fontSize:"11px", color:"#16a34a", marginTop:"4px"}}><strong>Solution:</strong> {p.solution}</p>
                </div>
              </div>
            ))}
          </div>
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
              <div key={s.title} className="bg-white border rounded-xl p-6 hover:border-orange-400 hover:-translate-y-1 transition-all shadow-sm flex flex-col">
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="font-bold text-base text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{s.desc}</p>
                <span className="inline-block bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-4">{s.tag}</span>
                <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20Waterproofing%20quote" className="mt-auto block text-center bg-[#1B2B8A] hover:bg-blue-900 text-white text-xs font-bold px-4 py-2 rounded-lg transition">Get Quote for This →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE DESCRIPTIONS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-12">

          <div id="terrace-waterproofing">
            <h2 className="text-2xl font-black text-gray-900 mb-3">Terrace Waterproofing Services in Mumbai, Thane & Bhiwandi</h2>
            <p className="text-sm leading-relaxed text-gray-600">Terrace waterproofing is the most critical waterproofing service for any flat or building in Mumbai, Thane and Bhiwandi. During monsoon, an unprotected terrace allows rainwater to seep through cracks and joints, damaging the roof slab, ceiling of the floor below, and interior walls. Bhairav Painting Service uses <strong className="text-gray-900">Dr Fixit liquid membrane and Asian Paints SmartCare</strong> waterproofing systems for terrace treatment. Our process includes crack filling, application of waterproof membrane, and a protective coating. A well-waterproofed terrace lasts 8–10 years with proper maintenance. We serve housing societies, individual homes, villas and commercial buildings for terrace waterproofing across Mumbai, Thane, Bhiwandi and Kalyan. Free site visit available — we inspect, measure and quote on the same day.</p>
          </div>

          <div id="roof-leakage-repair">
            <h2 className="text-2xl font-black text-gray-900 mb-3">Roof Leakage Repair — Mumbai, Thane & Bhiwandi</h2>
            <p className="text-sm leading-relaxed text-gray-600">Roof leakage is an emergency — water dripping through your ceiling during rain can damage furniture, electrical fittings and flooring within hours. Bhairav Painting Service provides same-day emergency roof leakage repair across Mumbai, Thane and Bhiwandi. We identify the exact point of leakage — whether it is a crack in the roof slab, failed waterproofing membrane, or damaged parapet joint — and apply the appropriate repair. We use <strong className="text-gray-900">Pidilite Dr Fixit and Berger WeatherCoat</strong> products for roof leakage repair. Our waterproofing solution is not a temporary patch — it is a long-lasting repair that addresses the root cause. Emergency visits are available — call or WhatsApp and we will respond same day.</p>
          </div>

          <div id="bathroom-waterproofing">
            <h2 className="text-2xl font-black text-gray-900 mb-3">Bathroom Waterproofing Services — Thane, Bhiwandi & Kalyan</h2>
            <p className="text-sm leading-relaxed text-gray-600">Bathroom leakage is one of the most common problems in flats and apartments across Mumbai and Thane. Water seeping through bathroom floors and walls damages the ceiling of the flat below, causes mold growth, and weakens the structure over time. Bhairav Painting Service provides complete bathroom waterproofing using <strong className="text-gray-900">Dr Fixit Pidifin 2K</strong> — a professional-grade waterproofing compound that bonds with the surface and creates a permanent water barrier. We waterproof bathroom floors, walls, and the joints between floor and wall — which is where most leakage originates. The work is typically completed in 1–2 days and requires 24 hours curing before tiling or use.</p>
          </div>

          <div id="damp-wall-treatment">
            <h2 className="text-2xl font-black text-gray-900 mb-3">Damp Wall Treatment — Anti-Damp Waterproofing in Mumbai & Thane</h2>
            <p className="text-sm leading-relaxed text-gray-600">Damp walls — characterized by dark patches, peeling paint, white salt deposits and musty smell — are caused by moisture entering the wall from outside, rising damp from the ground, or plumbing leakage. Bhairav Painting Service provides professional damp wall diagnosis and treatment across Mumbai, Thane, Bhiwandi and Kalyan. We first identify the source of dampness — exterior seepage, rising damp, or internal plumbing — and then apply the appropriate treatment including <strong className="text-gray-900">anti-damp primer, waterproof putty and anti-fungal paint</strong>. Simply repainting a damp wall without treating the root cause will not solve the problem — the damp patches will return within months. Our treatment provides a long-lasting solution.</p>
          </div>

          <div id="exterior-waterproofing">
            <h2 className="text-2xl font-black text-gray-900 mb-3">Exterior Wall Waterproofing — Buildings & Societies in Mumbai & Thane</h2>
            <p className="text-sm leading-relaxed text-gray-600">Exterior walls of buildings in Mumbai, Thane and Bhiwandi face constant exposure to monsoon rain, humidity and sun. Over time, exterior walls develop cracks, the paint peels and water begins to penetrate — causing dampness on interior walls and structural damage. Bhairav Painting Service provides exterior wall waterproofing for individual homes, villas, housing societies and commercial buildings. We use <strong className="text-gray-900">Berger WeatherCoat and Asian Paints Apex Weatherproof</strong> — premium weather-resistant coatings that protect the exterior wall surface for 5–7 years. Our process includes crack filling, waterproof primer and two coats of weather-resistant exterior paint. Free site visit and quotation available across Mumbai, Thane, Bhiwandi and Kalyan.</p>
          </div>

          <div id="basement-waterproofing">
            <h2 className="text-2xl font-black text-gray-900 mb-3">Basement Waterproofing & Commercial Waterproofing — Mumbai & Thane</h2>
            <p className="text-sm leading-relaxed text-gray-600">Basements in Mumbai and Thane are highly vulnerable to water seepage due to the high water table and heavy monsoon rainfall. A wet basement damages stored goods, creates health hazards from mold, and weakens the foundation of the building. Bhairav Painting Service provides professional basement waterproofing using <strong className="text-gray-900">crystalline waterproofing compounds and injection grouting</strong> — techniques that penetrate the concrete and create a permanent water barrier from within. We also handle commercial waterproofing for offices, warehouses, factories and industrial premises. Higher-ticket commercial projects receive dedicated project management — site visit, written scope of work, phased execution and written warranty on completion.</p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Why Choose Us</p>
          <h2 className="text-3xl font-black text-gray-900 mb-8">Why Homeowners Choose Bhairav for Waterproofing</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              ["47+ Years Experience", "Decades of waterproofing experience — every type of leakage problem handled.", <Award size={20} />],
              ["Dr Fixit & Asian Paints", "Only trusted brands — Dr Fixit, Asian Paints SmartCare — no cheap alternatives.", <Shield size={20} />],
              ["Owner on Every Job", "Owner personally visits, supervises & does final inspection before handover.", <Star size={20} />],
              ["Written Warranty", "We provide warranty on waterproofing work — confirmed in writing before starting.", <CheckCircle size={20} />],
              ["Material + Labour Both", "Complete package — alag alag arrange karne ki zaroorat nahi.", <CheckCircle size={20} />],
              ["Same Day Response", "Call ya WhatsApp — hum turant respond karte hain. Emergency visits available.", <Clock size={20} />],
            ].map(([title, desc, icon], i) => (
              <div key={i} className="flex gap-3 items-start bg-gray-50 rounded-xl p-5">
                <div className="text-orange-500 mt-1 flex-shrink-0">{icon}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">{title as string}</h3>
                  <p className="text-gray-500 text-xs mt-1">{desc as string}</p>
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
          <h2 className="text-3xl font-black text-gray-900 mb-3">Our Waterproofing Process — Step by Step</h2>
          <p className="text-gray-500 mb-8">Transparent process from first call to final handover.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

      {/* WATERPROOFING METHODS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Waterproofing Methods</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">Types of Waterproofing We Use</h2>
          <p className="text-gray-500 mb-8">Surface aur requirement ke hisab se best method select kiya jata hai.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {methods.map(m => (
              <div key={m.title} className="bg-white border rounded-xl p-5 shadow-sm hover:border-orange-400 transition">
                <span className="text-3xl mb-3 block">{m.icon}</span>
                <span className="text-xs bg-orange-50 text-orange-600 font-bold px-2 py-0.5 rounded-full mb-2 inline-block">{m.tag}</span>
                <h3 className="font-bold text-sm text-gray-900 mb-2">{m.title}</h3>
                <p className="text-xs text-gray-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERT GUIDE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Expert Guide</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">Before Hiring Any Waterproofing Contractor — Read This</h2>
          <p className="text-gray-500 mb-8">5 important things jo har homeowner ko pata hone chahiye.</p>
          <div className="space-y-4">
            {expertGuide.map((g, i) => (
              <div key={i} className="flex gap-4 bg-gray-50 border rounded-xl p-5">
                <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{g.title}</h3>
                  <p className="text-xs text-gray-500">{g.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-orange-500 text-xs font-bold uppercase tracking-widest">Customer Reviews</span>
            <span className="bg-yellow-50 border border-yellow-200 text-yellow-700 text-xs font-bold px-3 py-1 rounded-full">⭐ 4.8★ Google Rating</span>
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-8">What Our Customers Say</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { name: "Rajesh Sharma", area: "Bhiwandi", text: "Terrace waterproofing bahut achha kiya. Pichle 2 saal se koi leakage nahi aayi. Owner khud aake supervise karta hai — bahut trustworthy service hai.", stars: 5 },
              { name: "Priya Mehta", area: "Thane", text: "Bathroom mein seepage problem thi — Dr Fixit use karke permanent solution diya. Price bhi reasonable tha aur kaam ek din mein ho gaya.", stars: 5 },
              { name: "Suresh Patil", area: "Kalyan", text: "Society ki terrace waterproofing karwai — 450 sq ft ka kaam 3 din mein complete. Committee members sab khush hain. Highly recommend!", stars: 5 },
              { name: "Anita Desai", area: "Navi Mumbai", text: "Damp wall problem 3 saal se thi — kisi ne solve nahi kiya. Bhairav ne root cause identify karke permanent treatment diya. Excellent work!", stars: 5 },
              { name: "Mohammad Shaikh", area: "Mumbai", text: "Basement waterproofing ke liye contact kiya — same day site visit mili. Quotation clear tha, koi hidden charges nahi. Kaam excellent hai.", stars: 5 },
              { name: "Kavita Joshi", area: "Dombivli", text: "Monsoon se pehle roof leakage fix karwai — bilkul sahi decision tha. Is baar baarish mein ghar ke andar ek bhi drop nahi aayi!", stars: 5 },
            ].map((r, i) => (
              <div key={i} className="bg-gray-50 border rounded-xl p-5">
                <div className="flex gap-0.5 mb-3">{"★★★★★".split("").map((s, j) => <span key={j} className="text-yellow-400 text-sm">{s}</span>)}</div>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">"{r.text}"</p>
                <div>
                  <p className="text-sm font-bold text-gray-900">{r.name}</p>
                  <p className="text-xs text-gray-400">📍 {r.area}</p>
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
          <p className="text-gray-500 text-center mb-8">25 common waterproofing questions — expert answers ke saath.</p>
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

      {/* RELATED SERVICES */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Related Services</p>
          <h2 className="text-2xl font-black text-gray-900 mb-6">Other Services We Offer</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              ["Residential Painting", "/services/residential", "/images/residential.webp"],
              ["Interior Painting", "/services/interior", "/images/portfolio-bedroom.webp"],
              ["Exterior Painting", "/services/exterior", "/images/exterior-new.jpg"],
              ["Designer Painting", "/services/designer", "/images/designer/accent-wall.jpg"],
              ["Texture Painting", "/services/designer/texture", "/images/texture.webp"],
              ["Commercial Painting", "/services/commercial", "/images/commercial.webp"],
            ].map(([label, href, img]) => (
              <Link key={href} href={href} className="group block bg-gray-50 border rounded-xl overflow-hidden hover:border-orange-400 transition shadow-sm">
                <img src={img} alt={`${label} Mumbai Thane Bhiwandi`} loading="lazy" className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="p-2 text-center">
                  <span className="text-xs font-bold text-gray-700 group-hover:text-orange-600 transition">{label}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Service Areas</p>
          <h2 className="text-3xl font-black text-gray-900 mb-8">Waterproofing Services Near You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { city: "Waterproofing in Mumbai", desc: "Bhairav Painting Service provides terrace waterproofing, roof leakage repair, bathroom waterproofing and damp wall treatment across all areas of Mumbai including Andheri, Borivali, Dadar, Bandra, Kurla, Chembur and Mulund. Same-day emergency site visits available for active roof leakage during monsoon. Free inspection and written quotation for all Mumbai locations." },
              { city: "Waterproofing in Thane", desc: "We provide complete waterproofing solutions for homes, housing societies and commercial buildings across Thane city and surrounding areas including Ghodbunder Road, Majiwada, Manpada, Pokhran Road and Kolshet. Terrace waterproofing, bathroom waterproofing and exterior wall treatment available with free site visit and same-day response." },
              { city: "Waterproofing in Bhiwandi", desc: "Bhiwandi is our primary service base — we have completed 200+ waterproofing projects across Bhiwandi including residential societies, industrial premises and commercial buildings. Terrace waterproofing, roof leakage repair, damp wall treatment and basement waterproofing available. Free site visit with same-day quotation for all Bhiwandi locations." },
              { city: "Waterproofing in Kalyan", desc: "We provide waterproofing services across Kalyan and Dombivli for residential flats, bungalows and housing societies. Terrace waterproofing, bathroom seepage repair and exterior wall waterproofing are our most requested services in Kalyan. Free site visit available — call or WhatsApp to schedule an inspection at your Kalyan property." },
              { city: "Waterproofing in Navi Mumbai", desc: "Bhairav Painting Service covers all sectors of Navi Mumbai including Vashi, Kharghar, Belapur, Panvel, Airoli and Nerul for waterproofing services. Whether it is a terrace leakage, damp wall or bathroom seepage in your Navi Mumbai flat or society, our team provides free site inspection and long-lasting waterproofing solutions using Dr Fixit and Asian Paints products." },
              { city: "Waterproofing in Dombivli & Ambarnath", desc: "We serve Dombivli East, Dombivli West and Ambarnath for residential and commercial waterproofing. Roof leakage repair, terrace waterproofing and bathroom waterproofing are available with free site visit. Our team covers all areas of Dombivli and Ambarnath — call or WhatsApp for a same-day site inspection." },
            ].map((a, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <h3 className="font-black text-base text-gray-900 mb-2">📍 {a.city}</h3>
                <p className="text-xs leading-relaxed text-gray-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM + CTA - Combined Orange Section */}
      <section className="bg-orange-500 py-16 px-4 text-center" id="contact">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-3">Get A Free Waterproofing Quote</h2>
        <p className="text-orange-100 mb-8">Serving Mumbai, Thane, Bhiwandi, Kalyan & Navi Mumbai. Free site visit — no obligation.</p>
        <div className="flex gap-4 justify-center flex-wrap mb-10">
          <a href="tel:+919158800517" className="bg-white text-orange-600 font-bold px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-orange-50 transition">
            <Phone size={18} /> Call Now
          </a>
          <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20Waterproofing%20quote" className="border-2 border-white text-white font-bold px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-white hover:text-orange-600 transition">
            <MessageCircle size={18} /> WhatsApp Now
          </a>
        </div>
        <div className="max-w-2xl mx-auto bg-orange-600 rounded-2xl p-8 shadow-lg text-left">
          <h3 className="text-white font-bold text-lg text-center mb-6">📋 Free Quote — Fill Form Below</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-orange-200 uppercase tracking-widest mb-1">Your Name *</label>
              <input type="text" placeholder="Enter your name" className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none bg-white text-gray-800" />
            </div>
            <div>
              <label className="block text-xs font-bold text-orange-200 uppercase tracking-widest mb-1">Phone Number *</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none bg-white text-gray-800" />
            </div>
            <div>
              <label className="block text-xs font-bold text-orange-200 uppercase tracking-widest mb-1">Waterproofing Type</label>
              <select className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none bg-white text-gray-800">
                <option>Select Type</option>
                <option>Terrace Waterproofing</option>
                <option>Roof Leakage Repair</option>
                <option>Bathroom Waterproofing</option>
                <option>Damp Wall Treatment</option>
                <option>Exterior Waterproofing</option>
                <option>Basement Waterproofing</option>
                <option>Not Sure / Multiple Areas</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-orange-200 uppercase tracking-widest mb-1">Your Area / Location</label>
              <input type="text" placeholder="e.g. Bhiwandi, Thane, Kalyan..." className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none bg-white text-gray-800" />
            </div>
            <div>
              <label className="block text-xs font-bold text-orange-200 uppercase tracking-widest mb-1">When Do You Need Work?</label>
              <select className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none bg-white text-gray-800">
                <option>Select Urgency</option>
                <option>🚨 Urgent — Leaking Now</option>
                <option>Within This Week</option>
                <option>Within This Month</option>
                <option>Just Enquiring / Planning</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-orange-200 uppercase tracking-widest mb-1">Describe the Problem (Optional)</label>
              <textarea placeholder="e.g. Terrace leakage, bathroom seepage, damp walls..." rows={3} className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none bg-white text-gray-800 resize-none" />
            </div>
            <div className="md:col-span-2">
              <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20Waterproofing%20quote" className="block w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 rounded-lg text-center transition text-lg">
                🚀 Send Enquiry on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Buttons */}
      <a href="https://wa.me/919158800517" target="_blank" rel="noopener noreferrer" className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg"><MessageCircle className="h-7 w-7"/></a>
      <a href="tel:+919158800517" className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg"><Phone className="h-7 w-7"/></a>
    </main>
  )
}
