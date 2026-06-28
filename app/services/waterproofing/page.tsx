"use client"

import { useState } from "react"
import Link from "next/link"
import { Phone, MessageCircle, ChevronDown, CheckCircle, Shield, Star, Clock, Award } from "lucide-react"

const services = [
  {
    icon: "🏠", title: "Terrace Waterproofing", desc: "Complete terrace waterproofing with membrane coating. Monsoon-ready solution.", tag: "Starts ₹45/sq ft",
    what: "Terrace leakage Mumbai, Thane aur Bhiwandi mein sabse common problem hai. Monsoon mein terrace slab ke cracks aur aged waterproof layer se paani andar seep karta hai — top floor ceiling stains, damp walls aur structural damage hota hai. Timely waterproofing se yeh sab roka ja sakta hai.",
    signs: ["Ceiling stains in top floor flat", "Damp walls after rain", "Paint peeling from ceiling", "Moss or algae on terrace"],
    process: ["Surface inspection & crack mapping", "Crack filling with polymer compound", "Waterproof membrane application (Dr Fixit)", "Protective coating", "Water ponding test"],
    bestFor: "Residential flats, villas, housing societies, commercial buildings"
  },
  {
    icon: "🔧", title: "Roof Leakage Repair", desc: "Permanent roof leakage fix. Emergency same-day visits available.", tag: "Free Inspection",
    what: "Roof leakage ek emergency hai — baarish mein ceiling se paani tapakna furniture, electrical aur flooring ko hours mein damage karta hai. Hum leakage ka exact source identify karte hain — slab crack, failed membrane ya parapet joint — aur permanent fix karte hain, temporary patch nahi.",
    signs: ["Water dripping from ceiling during rain", "Brown stains on ceiling", "Wet ceiling or walls", "Leakage from light fittings"],
    process: ["Emergency site visit", "Leakage source identification", "Crack sealing & joint repair", "Liquid membrane application", "Flood test to confirm repair"],
    bestFor: "Top floor flats, bungalows, old buildings, terraces with pooling water"
  },
  {
    icon: "🚿", title: "Bathroom Waterproofing", desc: "Stop seepage to flat below. Floor + wall waterproofing treatment.", tag: "1 Day Work",
    what: "Bathroom leakage Mumbai aur Thane ke flats ki common problem hai. Bathroom floor se paani seep karke neeche wale flat ki ceiling damage karta hai aur mold grow karta hai. Dr Fixit Pidifin 2K se floor, walls aur floor-wall junction waterproof kiya jata hai — jahan se seepage sabse zyada hoti hai.",
    signs: ["Damp ceiling in flat below", "Loose or hollow floor tiles", "Fungal smell in bathroom", "Water marks on adjacent walls"],
    process: ["Inspection of floor & wall joints", "Surface preparation", "Dr Fixit Pidifin 2K — 2 coats", "Junction sealing", "24 hrs curing before use"],
    bestFor: "Apartments, flats, bathrooms, kitchens, wet areas under renovation"
  },
  {
    icon: "💧", title: "Damp Wall Treatment", desc: "Anti-damp coating + crack filling. Permanent source-level treatment.", tag: "Permanent Fix",
    what: "Damp walls — dark patches, peeling paint, white salt deposits aur musty smell — sirf repaint karne se theek nahi hote. Source treat karna zaroori hai. Hum pehle dampness ka source identify karte hain — exterior seepage, rising damp ya plumbing leakage — phir root cause treatment karte hain.",
    signs: ["Dark damp patches on walls", "Paint bubbling or peeling repeatedly", "White powdery salt deposits", "Musty smell in room"],
    process: ["Damp source identification", "Exterior crack sealing if needed", "Anti-damp primer application", "Waterproof putty on affected area", "Anti-fungal paint — 2 coats"],
    bestFor: "Ground floor flats, old buildings, walls adjacent to bathrooms, exterior-facing walls"
  },
  {
    icon: "🏢", title: "Exterior Waterproofing", desc: "Weather-resistant coating. Rain + UV protection for building exterior.", tag: "Long Lasting",
    what: "Mumbai, Thane aur Bhiwandi ki buildings ke exterior walls monsoon rain, humidity aur sun ke constant exposure mein rehte hain. Time ke saath cracks develop hote hain aur paani penetrate karta hai — interior dampness aur structural damage hota hai. Berger WeatherCoat aur Asian Paints Apex 5-7 saal tak protection dete hain.",
    signs: ["Exterior paint peeling or fading", "Damp interior walls after rain", "Visible cracks on exterior walls", "Efflorescence on outer surface"],
    process: ["Exterior crack filling", "Waterproof primer application", "2 coats weather-resistant paint", "Joint sealing at windows & edges"],
    bestFor: "Individual homes, villas, housing societies, commercial buildings"
  },
  {
    icon: "🏗️", title: "Basement Waterproofing", desc: "Groundwater protection. Moisture barrier treatment for basement.", tag: "Expert Team",
    what: "Mumbai aur Thane ke basements high water table aur heavy monsoon ki wajah se water seepage ke zyada exposed hain. Wet basement stored goods damage karta hai, mold health hazard create karta hai aur building foundation weaken karta hai. Crystalline compounds aur injection grouting concrete ke andar penetrate karke permanent barrier banate hain.",
    signs: ["Wet basement walls or floor", "Water pooling in basement", "Mold or fungal growth", "Damp smell in basement area"],
    process: ["Water entry point mapping", "Crack injection grouting", "Crystalline waterproofing compound", "Drainage layer if needed", "Final inspection & warranty"],
    bestFor: "Basement parking, storage areas, underground structures, commercial basements"
  },
  {
    icon: "🏘️", title: "Society & Building Waterproofing", desc: "Large scale waterproofing for societies & commercial properties.", tag: "Special Rates",
    what: "Housing societies aur large buildings ke liye waterproofing complex project hota hai — multiple floors, common areas, terraces, external walls aur parking — sab ek saath coordinate karna padta hai. Bhairav Painting Service society committees ke saath kaam karta hai — AGM-ready quotation, phased execution aur minimum resident disruption ke saath.",
    signs: ["Multiple flats with leakage complaints", "Society terrace needing treatment", "External wall dampness across floors", "Common area waterproofing needed"],
    process: ["Full building inspection & assessment", "AGM-ready written quotation", "Phased execution — floor by floor", "Minimum resident disruption", "Final inspection & written warranty"],
    bestFor: "Housing societies, CHS committees, apartment complexes, commercial buildings"
  },
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
              <div key={i} className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition" style={{background:"#1B2B8A"}}>
                <div style={{display:"grid", gridTemplateColumns:"1fr 1fr"}}>
                  <div style={{position:"relative", height:"160px"}}>
                    <img src={p.before} alt={`Before waterproofing - ${p.title} Mumbai Thane Bhiwandi`} style={{width:"100%", height:"100%", objectFit:"cover"}} loading="lazy"/>
                    <span style={{position:"absolute", top:"6px", left:"6px", background:"rgba(0,0,0,0.75)", color:"#fff", fontSize:"9px", fontWeight:"700", padding:"2px 6px", borderRadius:"4px"}}>BEFORE</span>
                  </div>
                  <div style={{position:"relative", height:"160px"}}>
                    <img src={p.after} alt={`After waterproofing - ${p.title} by Bhairav Painting Service`} style={{width:"100%", height:"100%", objectFit:"cover"}} loading="lazy"/>
                    <span style={{position:"absolute", top:"6px", left:"6px", background:"#f97316", color:"#fff", fontSize:"9px", fontWeight:"700", padding:"2px 6px", borderRadius:"4px"}}>AFTER</span>
                  </div>
                </div>
                <div style={{padding:"14px 16px"}}>
                  <p style={{fontSize:"13px", fontWeight:"700", color:"#fff", marginBottom:"6px"}}>📍 {p.title}</p>
                  <p style={{fontSize:"11px", color:"rgba(255,255,255,0.7)", marginBottom:"4px"}}>{p.scope}</p>
                  <p style={{fontSize:"11px", color:"#fca5a5", marginBottom:"2px"}}><strong>Problem:</strong> {p.problem}</p>
                  <p style={{fontSize:"11px", color:"#86efac", marginBottom:"12px"}}><strong>Solution:</strong> {p.solution}</p>
                  <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"8px"}}>
                    <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20Waterproofing%20quote" style={{display:"flex", alignItems:"center", justifyContent:"center", gap:"6px", background:"#25D366", color:"#fff", fontSize:"11px", fontWeight:"700", padding:"8px", borderRadius:"8px", textDecoration:"none"}}>
                      💬 WhatsApp
                    </a>
                    <a href="#contact" style={{display:"flex", alignItems:"center", justifyContent:"center", background:"#fff", color:"#1B2B8A", fontSize:"11px", fontWeight:"700", padding:"8px", borderRadius:"8px", textDecoration:"none"}}>
                      Free Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIGNS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Common Problems</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">Common Waterproofing Problems in Mumbai Homes</h2>
          <p className="text-gray-500 mb-10">Agar ye problems dikh rahe hain to waterproofing delay mat karo — jitna zyada time lagega, utna zyada damage hoga.</p>
          <div className="space-y-8">
            {[
              {
                title: "Ceiling Water Leakage",
                icon: "💧",
                signs: ["Brown stains on ceiling", "Paint peeling from ceiling", "Damp or wet ceiling during rain", "Water dripping inside room"],
                causes: ["Terrace slab cracks", "Failed waterproof membrane", "Blocked drainage on terrace", "Pipe leakage above"],
                solution: "Terrace inspection + crack filling + waterproof membrane application + water ponding test"
              },
              {
                title: "Damp Wall Patches",
                icon: "🧱",
                signs: ["Dark damp patches on walls", "Paint bubbling or peeling", "White salt deposits (efflorescence)", "Musty smell in room"],
                causes: ["Exterior wall cracks", "Rising damp from ground", "Plumbing leakage inside wall", "Poor waterproofing on adjacent terrace"],
                solution: "Damp source identification + anti-damp primer + waterproof putty + anti-fungal paint"
              },
              {
                title: "Bathroom Floor Seepage",
                icon: "🚿",
                signs: ["Damp ceiling in flat below", "Water stains on downstairs neighbour's ceiling", "Wet walls around bathroom", "Mold or fungal growth"],
                causes: ["Worn out bathroom waterproofing", "Cracked floor tiles", "Failed grout between tiles", "Pipe joint leakage"],
                solution: "Bathroom waterproofing with Dr Fixit Pidifin 2K + tile joint sealing"
              },
              {
                title: "Terrace Leakage During Monsoon",
                icon: "🌧️",
                signs: ["Water dripping from top-floor ceiling", "Damp top-floor walls", "Stains appearing after rain", "Moss or algae growth on terrace"],
                causes: ["Aged or cracked waterproof layer", "Cracks in terrace slab", "Poor slope causing water pooling", "Damaged parapet joints"],
                solution: "Full terrace waterproofing — crack filling + membrane + protective coat + water test"
              },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <h3 className="text-lg font-black text-gray-900 mb-4">{p.icon} {p.title}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Signs</p>
                    <ul className="space-y-1">
                      {p.signs.map((s, j) => <li key={j} className="text-xs text-gray-600 flex gap-2"><span className="text-red-400">•</span>{s}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2">Causes</p>
                    <ul className="space-y-1">
                      {p.causes.map((c, j) => <li key={j} className="text-xs text-gray-600 flex gap-2"><span className="text-orange-400">•</span>{c}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2">Solution</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{p.solution}</p>
                  </div>
                </div>
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
          <p className="text-gray-500 mb-10">Terrace, roof, bathroom, damp wall, exterior, basement aur society waterproofing — complete solutions.</p>
          <div className="space-y-8">
            {services.map(s => (
              <div key={s.title} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
                {/* Header */}
                <div className="flex items-start justify-between mb-4 flex-wrap gap-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{s.icon}</span>
                    <h3 className="font-black text-lg text-gray-900">{s.title}</h3>
                  </div>
                  <span className="bg-orange-50 border border-orange-200 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">{s.tag}</span>
                </div>
                {/* What is it */}
                <p className="text-sm text-gray-600 leading-relaxed mb-5">{s.what}</p>
                {/* 3 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                  <div className="bg-red-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-red-600 uppercase tracking-widest mb-2">Common Signs</p>
                    <ul className="space-y-1">
                      {s.signs.map((sign, i) => <li key={i} className="text-xs text-gray-600 flex gap-2"><span className="text-red-400">•</span>{sign}</li>)}
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-2">Our Process</p>
                    <ul className="space-y-1">
                      {s.process.map((step, i) => <li key={i} className="text-xs text-gray-600 flex gap-2"><span className="text-blue-400">✓</span>{step}</li>)}
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2">Best For</p>
                    <p className="text-xs text-gray-600 leading-relaxed">{s.bestFor}</p>
                  </div>
                </div>
                {/* CTA */}
                <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20Waterproofing%20quote" className="inline-block bg-[#1B2B8A] hover:bg-blue-900 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition">Get Quote for This →</a>
              </div>
            ))}
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

      {/* TIMELINE GUIDE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Planning Guide</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">Waterproofing Timeline Guide</h2>
          <p className="text-gray-500 mb-8">Har waterproofing service kitne din mein complete hoti hai — realistic timeline with preparation and curing time.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
            <table className="w-full text-sm">
              <thead style={{background:"#1B2B8A"}} className="text-white">
                <tr>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase">Service</th>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase">Work Duration</th>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase">Curing Time</th>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase">Total Timeline</th>
                  <th className="px-5 py-4 text-left text-xs font-bold uppercase">Best Season</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Bathroom Waterproofing", "1 Day", "24–48 hrs", "2–3 Days", "Any season"],
                  ["Roof Leakage Repair", "1–2 Days", "24 hrs", "2–3 Days", "Dry weather"],
                  ["Terrace Waterproofing", "2–4 Days", "48–72 hrs", "5–7 Days", "Oct–May (pre-monsoon ideal)"],
                  ["Damp Wall Treatment", "1–2 Days", "24 hrs", "2–3 Days", "Any season"],
                  ["Exterior Waterproofing", "3–5 Days", "48 hrs", "5–7 Days", "Oct–May"],
                  ["Basement Waterproofing", "3–5 Days", "72 hrs", "7–10 Days", "Post-monsoon"],
                  ["Society Waterproofing", "7–30 Days", "48–72 hrs", "Depends on size", "Oct–May ideal"],
                ].map(([service, work, cure, total, season], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-5 py-3 font-semibold text-gray-900 text-xs">{service}</td>
                    <td className="px-5 py-3 text-gray-600 text-xs">{work}</td>
                    <td className="px-5 py-3 text-gray-600 text-xs">{cure}</td>
                    <td className="px-5 py-3 font-bold text-orange-600 text-xs">{total}</td>
                    <td className="px-5 py-3 text-gray-600 text-xs">{season}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 rounded-xl bg-orange-50 border border-orange-100 p-5">
            <p className="text-sm text-gray-600 leading-relaxed"><strong className="text-gray-900">Pro Tip:</strong> October se May tak ka time waterproofing ke liye best hai Mumbai, Thane aur Bhiwandi mein. Pre-monsoon waterproofing (March–May) se aap monsoon ki tension se free rehte hain. Emergency repairs monsoon mein bhi ho sakti hain — hum same-day visit karte hain active leakage ke liye.</p>
          </div>
        </div>
      </section>

      {/* COMPARISON GUIDE */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Choosing the Right System</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">Which Waterproofing System is Right for You?</h2>
          <p className="text-gray-500 mb-8 text-sm">PU, Cementitious aur Liquid Membrane — teenon mein kya fark hai aur kaunsa system kahan use hota hai.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-8">
            <table className="w-full text-xs">
              <thead style={{background:"#1B2B8A"}} className="text-white">
                <tr>
                  <th className="px-4 py-4 text-left font-bold">System</th>
                  <th className="px-4 py-4 text-left font-bold">Best For</th>
                  <th className="px-4 py-4 text-left font-bold">Lifespan</th>
                  <th className="px-4 py-4 text-left font-bold">Flexibility</th>
                  <th className="px-4 py-4 text-left font-bold">Cost Level</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Liquid Membrane", "Terrace, Roof, Exterior Walls", "8–12 years", "High", "Medium"],
                  ["Cementitious Waterproofing", "Bathroom, Water Tank, Basement", "5–10 years", "Low", "Low–Medium"],
                  ["Polyurethane (PU)", "Terrace, Roof, Expansion Joints", "10–15 years", "Very High", "High"],
                  ["Bituminous Coating", "Foundation, Underground, Basement", "8–12 years", "Medium", "Medium"],
                  ["Crystalline Waterproofing", "Concrete Structures, Basement", "Permanent", "N/A", "Medium–High"],
                  ["Acrylic Waterproof Coat", "Exterior Walls, Light Duty", "3–5 years", "Medium", "Low"],
                ].map(([system, bestFor, life, flex, cost], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-bold text-gray-900">{system}</td>
                    <td className="px-4 py-3 text-gray-600">{bestFor}</td>
                    <td className="px-4 py-3 text-orange-600 font-semibold">{life}</td>
                    <td className="px-4 py-3 text-gray-600">{flex}</td>
                    <td className="px-4 py-3 text-gray-600">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: "Terrace & Roof", rec: "Liquid Membrane or PU Waterproofing", why: "High flexibility handle karta hai thermal expansion aur contraction. Mumbai monsoon ke liye ideal — ponding water bhi withstand karta hai.", icon: "🏠" },
              { title: "Bathroom & Wet Areas", rec: "Cementitious Waterproofing (Dr Fixit Pidifin)", why: "Tile bonding ke saath compatible. Bathroom floor aur wall ke liye industry standard — affordable aur durable.", icon: "🚿" },
              { title: "Basement & Foundation", rec: "Crystalline or Bituminous Waterproofing", why: "Hydrostatic pressure withstand karta hai. Concrete ke andar crystallize hokar permanent barrier banata hai — groundwater ke liye best.", icon: "🏗️" },
            ].map((r, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
                <span className="text-3xl mb-3 block">{r.icon}</span>
                <h3 className="font-black text-sm text-gray-900 mb-1">{r.title}</h3>
                <p className="text-xs font-bold text-orange-600 mb-2">Recommended: {r.rec}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{r.why}</p>
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

      {/* MONSOON PLANNING */}
      <section className="py-16 px-4 bg-blue-950 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Seasonal Guide</p>
          <h2 className="text-3xl font-black text-white mb-3">Monsoon Waterproofing Planning — Mumbai & Thane</h2>
          <p className="text-blue-200 mb-10 text-sm">Mumbai mein monsoon June se September tak rehta hai. Pre-monsoon preparation se aap ₹50,000+ ki repair cost bachaa sakte hain.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              {
                period: "Pre-Monsoon (March–May)",
                color: "bg-green-500",
                icon: "☀️",
                tasks: [
                  "Terrace inspection — cracks, joints check",
                  "Old waterproof layer condition assess",
                  "Drainage aur gutters clean karo",
                  "Parapet walls aur joints check",
                  "Terrace waterproofing apply karo",
                  "Bathroom aur wet area check karo",
                  "Exterior wall cracks fill karo",
                ]
              },
              {
                period: "During Monsoon (June–Sept)",
                color: "bg-orange-500",
                icon: "🌧️",
                tasks: [
                  "Active leakage ke liye emergency repair available",
                  "Temporary sealants for urgent leaks",
                  "Drainage blockage clear karo",
                  "Damp wall areas monitor karo",
                  "Leakage source document karo",
                  "Permanent repair post-monsoon plan karo",
                  "Society ko informed rakho",
                ]
              },
              {
                period: "Post-Monsoon (Oct–Nov)",
                color: "bg-blue-500",
                icon: "🍂",
                tasks: [
                  "Full building inspection karo",
                  "Monsoon damage assess karo",
                  "Permanent waterproofing repairs plan karo",
                  "New cracks identify aur fill karo",
                  "Exterior repainting schedule karo",
                  "Society waterproofing project plan karo",
                  "Next monsoon ke liye prepare karo",
                ]
              }
            ].map((s, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-5 border border-white/20">
                <span className="text-3xl mb-2 block">{s.icon}</span>
                <div className={`inline-block ${s.color} text-white text-xs font-bold px-3 py-1 rounded-full mb-3`}>{s.period}</div>
                <ul className="space-y-2">
                  {s.tasks.map((t, j) => (
                    <li key={j} className="text-xs text-blue-100 flex gap-2">
                      <span className="text-orange-400 shrink-0">✓</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
            <h3 className="font-black text-white text-base mb-3">🚨 Emergency Leakage During Monsoon?</h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">Agar monsoon mein active leakage hai — paani tap kar raha hai — toh hum same-day emergency site visit karte hain Mumbai, Thane aur Bhiwandi mein. Temporary seal laga ke aage permanent repair schedule karte hain.</p>
            <a href="tel:+919158800517" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-lg text-sm transition">📞 Call Now — Emergency Visit</a>
          </div>
        </div>
      </section>

      {/* HIDDEN COST */}
      <section className="py-16 px-4 bg-red-950 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-2">Important</p>
          <h2 className="text-3xl font-black text-white mb-3">The Hidden Cost of Ignoring Waterproofing</h2>
          <p className="text-red-200 mb-10 text-sm">Waterproofing delay karna short-term mein paisa bachata hai — lekin long-term mein bohot zyada expensive ho jaata hai.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🏗️", title: "Structural Damage", desc: "Water seepage steel reinforcement ko rust karta hai. Rusty steel expands karke concrete crack karta hai — structural integrity compromise hoti hai. Repair cost: ₹50,000 – ₹5,00,000+" },
              { icon: "🎨", title: "Repeated Paint Damage", desc: "Damp walls pe paint 6-12 months mein peel hoti hai. Baar baar repaint karne ka kharcha waterproofing se kahin zyada ho jaata hai over 5 years." },
              { icon: "🦠", title: "Mold & Health Hazard", desc: "Damp walls mold aur fungus grow karte hain jo respiratory problems, allergies aur skin issues cause karta hai — especially children ke liye dangerous." },
              { icon: "💡", title: "Electrical Hazard", desc: "Ceiling leakage electrical fittings, wiring aur switchboards ko wet kar sakti hai — short circuit aur fire risk create hota hai." },
              { icon: "🏘️", title: "Neighbor Disputes", desc: "Bathroom ya terrace leakage neeche wale flat ko damage karti hai — legal disputes, compensation claims aur society committee complaints." },
              { icon: "📉", title: "Property Value Drop", desc: "Damp walls, stained ceilings aur peeling paint property ki resale value 10-20% tak reduce kar sakte hain. Buyers ye dekh ke offer down karte hain." },
            ].map((c, i) => (
              <div key={i} className="bg-white/10 rounded-2xl p-5 border border-red-800">
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h3 className="font-black text-white text-sm mb-2">{c.title}</h3>
                <p className="text-red-200 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white/10 rounded-2xl p-6 border border-red-800">
            <p className="text-sm text-white leading-relaxed"><strong className="text-orange-400">Bottom line:</strong> Mumbai, Thane aur Bhiwandi mein ek terrace waterproofing ka kharcha ₹20,000–₹80,000 tak ho sakta hai. Lekin agar ignore kiya toh ceiling repair, paint, structural damage aur neighbor compensation mila ke ₹2,00,000–₹10,00,000+ tak ja sakta hai. <strong className="text-orange-400">Prevention hamesha cure se sasta hai.</strong></p>
          </div>
        </div>
      </section>

      {/* MONSOON PLANNING */}
      <section className="py-16 px-4 bg-blue-950 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Seasonal Guide</p>
          <h2 className="text-3xl font-black text-white mb-3">Monsoon Waterproofing Planning — Mumbai, Thane & Bhiwandi</h2>
          <p className="text-blue-200 mb-10 text-sm">Mumbai mein monsoon June se September tak rehta hai. Sahi planning se aap leakage aur damage se bach sakte hain.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/10 rounded-2xl p-6 border border-blue-800">
              <p className="text-orange-400 font-black text-sm mb-1">🌤️ Pre-Monsoon</p>
              <p className="text-blue-200 text-xs mb-4">March — May</p>
              <ul className="space-y-2">
                {["Full terrace inspection","Crack identification & mapping","Drain & pipe cleaning","Waterproofing treatment","Parapet joint sealing","Terrace water ponding test"].map((s,i) => <li key={i} className="text-xs text-white/80 flex gap-2"><span className="text-orange-400">✓</span>{s}</li>)}
              </ul>
              <div className="mt-4 bg-orange-500/20 rounded-lg p-3">
                <p className="text-xs text-orange-300 font-bold">Best Time to Waterproof</p>
                <p className="text-xs text-white/70 mt-1">Surface dry rehta hai — membrane properly cure hoti hai. Monsoon se pehle 4-6 weeks ka time ideal hai.</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-blue-800">
              <p className="text-blue-300 font-black text-sm mb-1">🌧️ During Monsoon</p>
              <p className="text-blue-200 text-xs mb-4">June — September</p>
              <ul className="space-y-2">
                {["Monitor terrace drainage","Check for new leakage points","Emergency leak repair available","Temporary waterproofing possible","Document damage for post-monsoon repair","Same-day emergency visits"].map((s,i) => <li key={i} className="text-xs text-white/80 flex gap-2"><span className="text-blue-400">•</span>{s}</li>)}
              </ul>
              <div className="mt-4 bg-blue-500/20 rounded-lg p-3">
                <p className="text-xs text-blue-300 font-bold">Emergency Available</p>
                <p className="text-xs text-white/70 mt-1">Active leakage ke liye same-day emergency visit available hai — call +91 91588 00517.</p>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-blue-800">
              <p className="text-green-400 font-black text-sm mb-1">☀️ Post-Monsoon</p>
              <p className="text-blue-200 text-xs mb-4">October — November</p>
              <ul className="space-y-2">
                {["Full damage assessment","Permanent crack repair","Waterproofing treatment","Damp wall treatment","Exterior repainting","Annual maintenance check"].map((s,i) => <li key={i} className="text-xs text-white/80 flex gap-2"><span className="text-green-400">✓</span>{s}</li>)}
              </ul>
              <div className="mt-4 bg-green-500/20 rounded-lg p-3">
                <p className="text-xs text-green-300 font-bold">Post-Monsoon Priority</p>
                <p className="text-xs text-white/70 mt-1">Monsoon ke baad surface dry hone ke baad permanent treatment karna sabse effective hota hai.</p>
              </div>
            </div>
          </div>
          <div className="bg-white/10 rounded-2xl p-6 border border-blue-800">
            <h3 className="text-white font-black text-base mb-4">Mumbai Climate & Waterproofing — What You Need to Know</h3>
            <div className="grid sm:grid-cols-2 gap-4 text-xs text-white/80">
              <p>Mumbai mein annual rainfall 2,400mm+ hoti hai — India ke wettest cities mein se ek. Is wajah se Mumbai, Thane aur Bhiwandi ki buildings ko high-grade waterproofing ki zaroorat hoti hai jo standard cities se zyada durable ho.</p>
              <p>Coastal proximity ki wajah se salt-laden air bhi building materials ko corrode karta hai. Premium waterproofing systems jo UV resistance aur salt resistance dono provide karte hain woh Mumbai ke liye best hain — Dr Fixit, Asian Paints SmartCare aur PU-based systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDY */}
      <section className="py-16 px-4 bg-blue-950 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Real Case Study</p>
          <h2 className="text-3xl font-black text-white mb-10">How We Solved a 3-Year Terrace Leakage Problem</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">🔴 Problem</p>
              <h3 className="text-white font-black text-base mb-3">Terrace Waterproofing — Bhiwandi Society</h3>
              <p className="text-white/70 text-sm leading-relaxed">G+5 housing society in Bhiwandi — top floor flats had severe ceiling leakage every monsoon for 3 years. Multiple contractors had applied temporary patches but leakage returned every year. Brown stains on ceilings, damp walls and damaged paint in 6 flats on top floor.</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">🔧 Solution</p>
              <h3 className="text-white font-black text-base mb-3">Root Cause Treatment</h3>
              <ul className="space-y-2 text-sm text-white/70">
                {["Full terrace surface inspection & crack mapping","Removed old failed waterproof layer","Filled all cracks with polymer compound","Applied Dr Fixit liquid membrane (2 coats)","Installed protective screed coat","Water ponding test — 48 hours — zero leakage confirmed"].map((s,i) => <li key={i} className="flex gap-2"><span className="text-orange-400">✓</span>{s}</li>)}
              </ul>
            </div>
            <div className="bg-white/10 rounded-2xl p-6">
              <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-3">✅ Result</p>
              <h3 className="text-white font-black text-base mb-3">Zero Leakage — 2 Monsoons</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">Society has now completed 2 monsoons with zero leakage in all top-floor flats. Interior repainting of affected flats also done by Bhairav Painting Service. Society secretary gave written appreciation.</p>
              <div className="grid grid-cols-2 gap-3">
                {[["450 sq ft","Terrace Area"],["4 Days","Completion"],["Dr Fixit","Product Used"],["5 Years","Warranty"]].map(([v,l],i) => (
                  <div key={i} className="bg-white/10 rounded-lg p-2 text-center">
                    <p className="text-orange-400 font-black text-sm">{v}</p>
                    <p className="text-white/60 text-xs">{l}</p>
                  </div>
                ))}
              </div>
            </div>
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
              { city: "Waterproofing in Bhiwandi", desc: "Bhiwandi is Bhairav Painting Service ka primary service area hai. Hum ne Bhiwandi mein 200+ waterproofing projects complete kiye hain — residential societies, industrial premises aur commercial buildings ke liye. Bhiwandi ki high-rise societies mein terrace waterproofing aur damp wall treatment humari sabse zyada demanded services hain. MIDC area ke warehouses aur factories ke liye bhi commercial waterproofing available hai. Free site visit — same day response guaranteed Bhiwandi ke liye." },
              { city: "Waterproofing in Thane", desc: "Thane city aur uske surrounding areas mein — Ghodbunder Road, Majiwada, Manpada, Kolshet, Pokhran Road — hum complete waterproofing solutions provide karte hain. Thane ke high-rise apartments mein bathroom waterproofing aur terrace waterproofing sabse common requirements hain. Hum Thane Municipal Corporation area ke saare wards cover karte hain. Free site visit with same-day quotation available — call ya WhatsApp karo." },
              { city: "Waterproofing in Mumbai", desc: "Mumbai ke saare major areas mein waterproofing services available hain — Andheri, Borivali, Dadar, Bandra, Kurla, Chembur, Mulund, Vikhroli aur Wadala. Monsoon emergency roof leakage repair ke liye same-day site visit available hai. Mumbai ke old buildings mein terrace waterproofing, damp wall treatment aur exterior wall waterproofing sabse common requirements hain. Free inspection aur written quotation sab Mumbai locations ke liye." },
              { city: "Waterproofing in Kalyan & Dombivli", desc: "Kalyan East, Kalyan West, Dombivli East, Dombivli West aur Ambarnath mein residential aur commercial waterproofing available hai. Kalyan-Dombivli region mein new construction se lekar 30+ saal purani societies tak sab ke liye waterproofing solutions available hain. Terrace waterproofing, bathroom seepage repair aur exterior wall treatment ke liye free site visit available. WhatsApp ya call karo — hum same day respond karte hain." },
              { city: "Waterproofing in Navi Mumbai", desc: "Navi Mumbai ke saare sectors cover kiye jaate hain — Vashi, Kharghar, Belapur, CBD, Airoli, Nerul, Sanpada aur Panvel. Navi Mumbai ke planned housing societies mein terrace waterproofing aur bathroom waterproofing sabse common requirements hain. Dr Fixit aur Asian Paints SmartCare products use karte hain — 5-year workmanship warranty ke saath. Free site visit available har Navi Mumbai location ke liye." },
              { city: "Waterproofing in Kasheli, Bhiwandi & Surrounding Areas", desc: "Kasheli, Nimbavli, Kalher, Kongaon aur Bhiwandi ke outer areas mein bhi waterproofing services available hain. Industrial estates aur residential pockets dono cover kiye jaate hain. Terrace waterproofing, roof leakage repair aur damp wall treatment ke liye same-day site visit possible hai in areas mein. Call ya WhatsApp karo — Bhairav Painting Service ka team aapke nearest area mein available hai." },
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
