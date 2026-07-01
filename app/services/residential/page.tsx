"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Phone, MessageCircle, CheckCircle, MapPin, ChevronDown } from "lucide-react"

const serviceCards = [
  { title: "1 BHK Painting", desc: "Complete 1BHK flat painting — walls, ceiling, doors & windows. Quick completion.", icon: "🏠", image: "/images/residential/res-1bhk.jpg", wa: "Hi%2C%20I%20need%20quote%20for%201%20BHK%20Flat%20Painting.%20Please%20share%20your%20availability%20for%20a%20free%20site%20visit.%20%F0%9F%93%8D%20My%20location%3A" },
  { title: "2 BHK Painting", desc: "Professional 2BHK painting with quality finish. Interior + ceiling included.", icon: "🏠", image: "/images/residential/res-2bhk.jpg", wa: "Hi%2C%20I%20need%20quote%20for%202%20BHK%20Flat%20Painting.%20Please%20share%20your%20availability%20for%20a%20free%20site%20visit.%20%F0%9F%93%8D%20My%20location%3A" },
  { title: "3 BHK Painting", desc: "Full 3BHK flat painting. Surface prep, putty, primer & final coat.", icon: "🏠", image: "/images/residential/res-3bhk.jpg", wa: "Hi%2C%20I%20need%20quote%20for%203%20BHK%20Flat%20Painting.%20Please%20share%20your%20availability%20for%20a%20free%20site%20visit.%20%F0%9F%93%8D%20My%20location%3A" },
  { title: "Flat Repainting", desc: "Refresh your old flat with new colours. Crack filling & putty included.", icon: "🖌️", image: "/images/residential/res-flat.jpg", wa: "Hi%2C%20I%20need%20quote%20for%20Flat%20Repainting.%20Please%20share%20your%20availability%20for%20a%20free%20site%20visit.%20%F0%9F%93%8D%20My%20location%3A" },
  { title: "New Flat Painting", desc: "First-time painting for newly constructed flats. Premium finish guaranteed.", icon: "✨", image: "/images/residential/res-new-flat.jpg", wa: "Hi%2C%20I%20need%20quote%20for%20New%20Flat%20Painting.%20Please%20share%20your%20availability%20for%20a%20free%20site%20visit.%20%F0%9F%93%8D%20My%20location%3A" },
  { title: "Villa Painting", desc: "Complete interior & exterior painting for villas & bungalows.", icon: "🏡", image: "/images/residential/res-villa.jpg", wa: "Hi%2C%20I%20need%20quote%20for%20Villa%20Painting.%20Please%20share%20your%20availability%20for%20a%20free%20site%20visit.%20%F0%9F%93%8D%20My%20location%3A" },
  { title: "Society Painting", desc: "Large-scale society & housing complex painting. Minimal resident disruption.", icon: "🏢", image: "/images/residential/res-society.jpg", wa: "Hi%2C%20I%20need%20quote%20for%20Society%20Painting.%20Please%20share%20your%20availability%20for%20a%20free%20site%20visit.%20%F0%9F%93%8D%20My%20location%3A" },
  { title: "Rental Flat Painting", desc: "Quick, clean painting for rental flats. Ready for new tenants fast.", icon: "🔑", image: "/images/residential/res-rental.jpg", wa: "Hi%2C%20I%20need%20quote%20for%20Rental%20Flat%20Painting.%20Please%20share%20your%20availability%20for%20a%20free%20site%20visit.%20%F0%9F%93%8D%20My%20location%3A" },
]

const whyUs = [
  { icon: "🏆", title: "47+ Years Experience", desc: "Trusted residential painting contractor in Mumbai & Bhiwandi since decades." },
  { icon: "👁️", title: "Owner Supervision", desc: "Every project personally supervised by the owner — no shortcuts." },
  { icon: "🧹", title: "Clean Workmanship", desc: "We protect your furniture & clean up completely after work is done." },
  { icon: "⚡", title: "Timely Completion", desc: "We commit to deadlines — 1BHK in 2 days, 2BHK in 3–4 days." },
  { icon: "💰", title: "Budget & Premium Options", desc: "Options for every budget — no compromise on quality." },
  { icon: "🆓", title: "Free Site Inspection", desc: "Free site visit & detailed written quotation before any commitment." },
]

const processSteps = [
  { num: "1", title: "Free Site Visit", desc: "We visit your home for free assessment & measurements." },
  { num: "2", title: "Surface Inspection", desc: "Walls checked for cracks, dampness & peeling paint." },
  { num: "3", title: "Crack Repair & Putty", desc: "All cracks filled, putty applied for smooth surface." },
  { num: "4", title: "Primer Application", desc: "Quality primer applied for better paint adhesion." },
  { num: "5", title: "Paint Application", desc: "Professional painting — 2 coats for perfect finish." },
  { num: "6", title: "Final Cleanup & Handover", desc: "Complete cleanup, inspection & project handover." },
]

const beforeAfter = [
  { image: "/images/residential/res-before-after-1.jpg", location: "Bhiwandi", property: "2BHK Flat", work: "Interior Repainting + Putty Repair" },
  { image: "/images/residential/res-before-after-2.jpg", location: "Thane", property: "3BHK Apartment", work: "Full Interior Painting" },
  { image: "/images/residential/res-before-after-3.jpg", location: "Kalyan", property: "1BHK Flat", work: "Wall Colour Change + Putty" },
  { image: "/images/residential/res-interior.jpg", location: "Navi Mumbai", property: "New Flat", work: "First-time Painting" },
  { image: "/images/residential/res-villa.jpg", location: "Mumbai", property: "Villa", work: "Interior + Exterior Painting" },
  { image: "/images/residential/res-before-after-2.jpg", location: "Bhiwandi", property: "Rental Flat", work: "Quick Repainting — 2 Days" },
]

const recentProjects = [
  { image: "/images/residential/res-before-after-2.jpg", location: "Bhiwandi", property: "2BHK Flat", service: "Interior Repainting" },
  { image: "/images/residential/res-interior.jpg", location: "Thane", property: "3BHK Apartment", service: "Full Interior Painting" },
  { image: "/images/residential/res-before-after-3.jpg", location: "Kalyan", property: "Flat Repainting", service: "Interior + Putty Work" },
]

const reviews = [
  { name: "Anita Kanwar", location: "Bhiwandi", text: "Good work — single coat finishing was so good, no need to do double coat. Very satisfied." },
  { name: "Pradeep Rajpurohit", location: "Thane", text: "Fast kaam aur perfect finishing, highly satisfied." },
  { name: "Narendra Singh", location: "Mumbai", text: "Excellent painting work, neat finishing and on time service. Highly recommended." },
  { name: "Om Prakash", location: "Kalyan", text: "Professional and reliable. From site visit to final finishing, everything was smooth. Strongly recommend." },
  { name: "Kamlesh Vishwakarma", location: "Navi Mumbai", text: "One of the best painting services. Honest person, hardworking team, excellent finishing. 100% satisfied." },
  { name: "Rakesh Gupta", location: "Bhiwandi", text: "Very professional and clean work. Thoroughly impressed. Always on time. Highly recommended." },
]

const areas = ["Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai", "Dombivli", "Kasheli", "Kalher", "Andheri", "Vasai", "Virar"]

const faqs = [
  { q: "How much does 1BHK painting cost in Mumbai?", a: "1BHK painting cost in Mumbai & Bhiwandi depends on wall condition, paint brand & finish type. We provide a free site visit & detailed written quotation before any commitment. Contact us for an accurate estimate." },
  { q: "How long does residential painting take?", a: "1BHK typically takes 2 days, 2BHK takes 3–4 days, and 3BHK takes 4–5 days. Timelines depend on surface condition and work scope." },
  { q: "Do you provide material or only labour?", a: "We provide both options — Material + Labour (we arrange everything) or Labour Only (you provide the paint). Both options available at competitive rates." },
  { q: "Which paint brands do you use?", a: "We work with all leading brands — Asian Paints, Nerolac, Berger, and Dulux. Customers can choose their preferred brand and product range." },
  { q: "Do you protect furniture during painting?", a: "Yes. We cover all furniture, flooring & fixtures with protective sheets before starting work. Complete care is taken." },
  { q: "How many coats of paint are recommended?", a: "We recommend minimum 2 coats of paint after putty and primer for a long-lasting, even finish." },
  { q: "Do you offer waterproofing with painting?", a: "Yes, we offer waterproofing for terraces, bathrooms & exterior walls along with painting work." },
  { q: "Is a written quotation provided?", a: "Yes. After the free site visit, we provide a detailed written quotation covering labour, material & timeline." },
  { q: "Do you offer labour-only service?", a: "Yes. If you already have paint, we provide skilled painters for labour-only work at your flat or house." },
  { q: "Can I choose my own paint colour?", a: "Absolutely. You can choose any colour, shade or finish. We also help with colour consultation if needed." },
  { q: "What surface preparation do you do?", a: "Our process includes crack repair, putty application, sanding, primer coat and then final paint — for a smooth, durable finish." },
  { q: "Do you paint ceilings too?", a: "Yes. Ceiling painting is included in our standard flat painting service. White or colour — as per your preference." },
  { q: "Do you work on weekends?", a: "Yes. We work all days including weekends to suit your schedule and minimize disruption." },
  { q: "What areas do you cover for residential painting?", a: "We serve Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai for all residential painting work." },
  { q: "How do I book a free site visit?", a: "Simply call us on +91 9158800517 or WhatsApp us. We will schedule a free visit at your convenient time — no charges, no obligation." },
  { q: "Ghar khali karna padega painting ke liye?", a: "Nahi, ghar khali karna zaroori nahi. Hum ek ek room ka kaam karte hain aur furniture cover karke kaam karte hain taaki aap ghar mein rehte hue painting karwa sako. Agar aap chahein toh ghar khali karke bhi kaam karwa sakte hain — dono options available hain." },
  { q: "Paint finish options kaunse available hain?", a: "Hum multiple finish options provide karte hain — Matte, Silk, Semi-Gloss aur Gloss. Bedroom ke liye matte, living room ke liye silk aur kitchen/bathroom ke liye semi-gloss best rehta hai." },
  { q: "Interior paint kitne saal tak chalta hai?", a: "Achi quality paint aur proper application se interior paint 5-7 saal tak chalta hai. Asian Paints, Berger ya Nerolac ke premium range 8-10 saal tak bhi chal sakti hai." },
]

const serviceOptions = [
  "1BHK Painting", "2BHK Painting", "3BHK Painting",
  "Flat Repainting", "New Flat Painting", "Villa Painting",
  "Society Painting", "Rental Flat Painting", "Other"
]

export default function ResidentialPaintingPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", area: "", message: "" })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = () => {
    if (!form.name || !form.phone) { alert("Please enter your name and phone number."); return }
    const isCoords = form.area && form.area.match(/^-?\d+\.\d+,\s*-?\d+\.\d+$/)
    const locationText = isCoords
      ? `📍 My Location: https://maps.google.com/?q=${form.area.replace(" ","")}`
      : `Area: ${form.area || "Not specified"}`
    const msg = `Hi, I need a Residential Painting quote.%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0AService: ${encodeURIComponent(form.service || "Not specified")}%0A${encodeURIComponent(locationText)}%0AMessage: ${encodeURIComponent(form.message || "-")}`
    window.open(`https://wa.me/919158800517?text=${msg}`, "_blank")
  }

  return (
    <div className="flex flex-col">

      {/* 1. HERO */}
      <section className="relative bg-[#1B2B8A] pt-20 pb-16 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-[#2238a8] opacity-40 translate-x-1/2 -translate-y-1/4" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-400 mb-6">
            ★ RESIDENTIAL PAINTING SERVICES
          </div>
          <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl leading-tight">
            Residential Painting Services in
          </h1>
          <span className="text-4xl font-black text-orange-500 sm:text-5xl lg:text-6xl mt-2 leading-tight block">
            Mumbai, Thane & Bhiwandi
          </span>
          <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">
            47+ years of experience in flat, apartment, villa and society painting. Professional work with owner supervision. Free site visit available!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-bold text-white hover:bg-orange-600 transition-colors">
              <MessageCircle className="h-5 w-5" /> Get Free Quote
            </a>
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20Residential%20Painting%20quote" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors">
              <MessageCircle className="h-5 w-5" /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR */}
      <section className="bg-orange-500 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30 text-center text-white">
            <div className="px-4 py-2"><p className="text-2xl font-black">47+</p><p className="text-xs font-semibold mt-1">Years Experience</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">FREE</p><p className="text-xs font-semibold mt-1">Site Visit</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">500+</p><p className="text-xs font-semibold mt-1">Projects Done</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">✓</p><p className="text-xs font-semibold mt-1">Trained Painters</p></div>
          </div>
        </div>
      </section>

      {/* 3. SERVICE CARDS */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Residential Services</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            What We <span className="text-orange-500">Paint</span>
          </h2>
          <p className="mt-3 max-w-xl text-sm" style={{color:"#6b7280"}}>From 1BHK flats to large villas — we handle all types of residential painting across Mumbai & Bhiwandi.</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((s) => (
              <div key={s.title} className="group rounded-xl bg-white border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image src={s.image} alt={`${s.title} in Mumbai Thane Bhiwandi - Bhairav Painting Service`} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-[#1B2B8A]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-orange-500 text-white px-3 py-1.5 rounded-lg text-xs font-bold">View More →</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-2xl mb-2">{s.icon}</div>
                  <h3 className="font-bold text-sm mb-1" style={{color:"#1B2B8A"}}>{s.title}</h3>
                  <p className="text-xs mb-3" style={{color:"#6b7280"}}>{s.desc}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <a href={`https://wa.me/919158800517?text=${s.wa}`} className="flex items-center justify-center gap-1 bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-2 rounded-lg transition">
                      💬 WhatsApp
                    </a>
                    <a href={`https://wa.me/919158800517?text=${s.wa}`} className="flex items-center justify-center bg-white border border-gray-200 hover:border-orange-400 text-gray-700 text-xs font-bold py-2 rounded-lg transition">
                      Free Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON PROBLEMS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Common Problems</p>
          <h2 className="text-3xl font-black text-gray-900 mb-4">Common Problems Homeowners Face</h2>
          <p className="text-sm leading-relaxed text-gray-600 mb-8">Mumbai, Thane, Bhiwandi, Kalyan aur Navi Mumbai mein ghar ki walls sirf time ke saath purani nahi hoti, balki humidity, monsoon, seepage aur daily wear & tear ki wajah se bhi damage hone lagti hain. Paint peeling, damp patches, ceiling stains aur wall cracks gradually home ki appearance aur protection dono ko affect karte hain.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              { icon: "🎨", title: "Paint Peeling", desc: "Interior walls par paint peel hone lagta hai — poor surface prep ya moisture ki wajah se.", img: "/images/residential/problems/paint-peeling.jpg" },
              { icon: "💧", title: "Damp Patches & Fungus", desc: "Monsoon ke baad walls pe dark patches aur fungus develop ho jaate hain.", img: "/images/residential/problems/damp-patches.jpg" },
              { icon: "🟡", title: "Ceiling Water Stains", desc: "Ceiling par yellow water stains — terrace leakage ya bathroom seepage ki wajah se.", img: "/images/residential/problems/ceiling-stains.jpg" },
              { icon: "🧱", title: "Wall Cracks", desc: "Repainting ke baad bhi cracks wapas aa jaate hain — proper treatment zaroori hai.", img: "/images/residential/problems/wall-cracks.jpg" },
              { icon: "🏠", title: "Outdated Look", desc: "Ghar ka colour aur finish outdated lag raha hai — fresh look chahiye.", img: "/images/residential/problems/outdated-look.jpg" },
              { icon: "🔑", title: "New Flat / Rental Ready", desc: "Naya flat possession ke baad premium finish ya rental ke liye repaint karna.", img: "/images/residential/problems/new-flat-rental.jpg" },
            ].map((p, i) => (
              <div key={i} className="group overflow-hidden bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="relative h-40 overflow-hidden">
                  <img src={p.img} alt={`${p.title} - Residential painting problem Mumbai Thane Bhiwandi`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"/>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="text-xl">{p.icon}</span>
                    <h3 className="font-bold text-sm text-white">{p.title}</h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-500">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
            <p className="text-sm text-gray-600 leading-relaxed">Bhairav Painting Service proper surface preparation, crack repair, waterproofing (agar zarurat ho) aur premium painting systems ke through <strong className="text-gray-900">long-lasting residential painting solutions</strong> provide karta hai — Mumbai, Thane, Bhiwandi aur Kalyan mein.</p>
          </div>
        </div>
      </section>

      {/* PROPERTY TYPE SERVICES */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Property Types</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">Residential Painting for Every Home Type</h2>
          <p className="text-gray-500 mb-8 text-sm">Har ghar ka painting requirement alag hota hai — size, condition aur family needs ke hisaab se solution alag hoga.</p>
          <div className="divide-y divide-gray-100 border border-gray-100 rounded-2xl overflow-hidden bg-white">
            {[
              { title: "1 BHK Flat Painting", desc: "Compact flats ke liye fast execution, furniture protection aur minimum disruption ke saath complete interior repainting. 2-3 din mein complete. Living room + bedroom + kitchen + bathroom walls.", tag: "2–3 Days" },
              { title: "2 BHK Flat Painting", desc: "Mumbai aur Thane mein sabse common residential painting requirement. Living room, 2 bedrooms, kitchen aur ceiling ke liye complete painting solutions — putty, primer aur premium paint.", tag: "3–5 Days" },
              { title: "3 BHK Apartment Painting", desc: "Large apartments ke liye premium finishes, accent walls aur complete interior painting with proper surface preparation. Designer walls bhi available — accent walls, texture finishes.", tag: "5–7 Days" },
              { title: "Villa & Bungalow Painting", desc: "Luxury homes ke liye interior, exterior, balcony, compound wall aur premium weather-resistant coatings. Multiple floors, custom colour schemes aur premium paint brands.", tag: "7–15 Days" },
              { title: "Independent House Painting", desc: "Complete house repainting including interior rooms, exterior walls, gates, railings aur boundary walls. Old houses ke liye proper surface treatment aur crack repair bhi.", tag: "5–10 Days" },
              { title: "Rental Flat Repainting", desc: "Quick turnaround painting taaki property jaldi rent par ya resale ke liye ready ho sake. Economical paint options, fast drying aur minimum disruption.", tag: "1–3 Days" },
            ].map((s, i) => (
              <div key={i} className="flex items-start justify-between gap-4 px-5 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-gray-900 mb-1">{s.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
                <span className="shrink-0 bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROOM BY ROOM */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Room-by-Room Guide</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">Room-by-Room Painting Solutions</h2>
          <p className="text-gray-500 mb-8 text-sm">Har room ka environment alag hota hai — isliye same paint har jagah suitable nahi hota.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { room: "Living Room", paint: "Asian Paints Royale / Berger Silk", desc: "Elegant colours aur premium washable finishes jo guests par achha first impression create kare. Smooth finish, stain resistant.", img: "/images/residential/room-living.jpg" },
              { room: "Bedroom", paint: "Low-VOC Smooth Finish", desc: "Low-odour, smooth finish aur relaxing colour combinations for comfortable living. Primer + 2 coats premium paint.", img: "/images/residential/room-bedroom.jpg" },
              { room: "Kitchen", paint: "Stain-Resistant Enamel", desc: "Grease aur daily cleaning handle karne wala easy-to-clean paint system. Semi-gloss ya enamel finish recommended.", img: "/images/residential/room-kitchen.jpg" },
              { room: "Kids Room", paint: "Low VOC Washable Paint", desc: "Bright colours, low VOC paints aur washable finishes. Child-safe, easy to clean, durable against scribbles.", img: "/images/residential/room-kids.jpg" },
              { room: "Ceiling", paint: "White Ceiling Paint", desc: "Crack repair, stain blocking primer aur uniform matte finish for clean-looking ceilings. Yellow stains bhi cover hote hain.", img: "/images/residential/room-ceiling.jpg" },
              { room: "Bathroom & Wet Areas", paint: "Moisture-Resistant Paint", desc: "Moisture resistant, anti-fungal coating jo bathroom walls ko damp aur mold se protect kare.", img: "/images/residential/room-bathroom.jpg" },
            ].map((r, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden h-56 group">
                <img src={r.img} alt={r.room} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-black text-sm text-white mb-0.5">{r.room}</h3>
                  <p className="text-xs text-orange-300 font-semibold mb-1">Recommended: {r.paint}</p>
                  <p className="text-xs text-white/80 leading-relaxed">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERIOR PROBLEMS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Interior Solutions</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">Residential Painting Problems We Solve</h2>
          <p className="text-gray-500 mb-8 text-sm">Residential painting sirf colour change karna nahi hota — proper surface treatment zaroori hai.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
            {["Paint Peeling","Damp Walls","Ceiling Stains","Hairline Cracks","Uneven Old Paint","Nail Holes","Smoke Stains","Kitchen Grease Marks","Faded Colours","Poor Previous Finish"].map((p, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-3 text-center">
                <span className="text-orange-500 font-bold text-xs">✓</span>
                <p className="text-xs text-gray-700 font-semibold mt-1">{p}</p>
              </div>
            ))}
          </div>
          <div className="bg-blue-950 text-white rounded-2xl p-6">
            <p className="text-sm leading-relaxed">Har project <strong className="text-orange-400">proper inspection aur surface preparation</strong> ke baad start kiya jata hai. Cracks fill kiye jaate hain, damp walls treat ki jaati hain, aur proper primer lagaya jaata hai — tabhi painting shuru hoti hai. Isliye hamara finish long-lasting hota hai.</p>
          </div>
        </div>
      </section>



      {/* NEW FLAT VS REPAINT GUIDE */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Painting Guide</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">New Flat vs Repainting — What's Different?</h2>
          <p className="text-gray-500 mb-8 text-sm">Har painting project same nahi hota — requirement ke hisaab se process aur cost dono alag hote hain.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { type: "New Flat", color: "border-blue-200 bg-blue-50", tag: "bg-blue-100 text-blue-700", steps: ["Builder wall correction","Putty touch-up","Primer application","Premium 2-coat finish","Final inspection"] },
              { type: "Repainting", color: "border-orange-200 bg-orange-50", tag: "bg-orange-100 text-orange-700", steps: ["Old paint assessment","Surface cleaning","Crack & hole repair","Fresh putty + primer","New colour application"] },
              { type: "Rental Flat", color: "border-green-200 bg-green-50", tag: "bg-green-100 text-green-700", steps: ["Fast execution","Economical paints","Basic surface prep","Quick dry finish","Ready to rent in 2-3 days"] },
              { type: "Luxury Home", color: "border-purple-200 bg-purple-50", tag: "bg-purple-100 text-purple-700", steps: ["Premium paint brands","Designer accent walls","Texture finishes","Custom colour scheme","Extended warranty"] },
            ].map((g, i) => (
              <div key={i} className={`border ${g.color} rounded-2xl p-5`}>
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${g.tag}`}>{g.type}</span>
                <ul className="space-y-1.5">
                  {g.steps.map((s, j) => (
                    <li key={j} className="text-xs text-gray-700 flex gap-2"><span className="text-orange-400">✓</span>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            Why Homeowners Choose <span className="text-orange-500">Bhairav Painting Service</span>
          </h2>
          <p className="mt-3 max-w-2xl text-sm" style={{color:"#6b7280"}}>47+ years of painting experience. Free site visit and quotation. Material and labour available. Owner-supervised projects. Residential painting specialists serving Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai.</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyUs.map((w) => (
              <div key={w.title} className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5 hover:shadow-sm transition-shadow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-xl">{w.icon}</div>
                <div>
                  <h3 className="font-bold text-sm" style={{color:"#111827"}}>{w.title}</h3>
                  <p className="mt-1 text-xs" style={{color:"#6b7280"}}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PAINTING PROCESS */}
      <section className="py-20 bg-[#1B2B8A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-orange-400 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">Our Process</span>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Our Residential <span className="text-orange-500">Painting Process</span>
          </h2>
          <p className="mt-3 text-white/70 text-sm">Simple, transparent process from first call to final handover.</p>
          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {processSteps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl font-black text-white">{step.num}</div>
                <h3 className="mt-3 font-bold text-white text-xs">{step.title}</h3>
                <p className="mt-1 text-white/60 text-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BEFORE & AFTER */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Before & After</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            Before & <span className="text-orange-500">After Gallery</span>
          </h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Real residential painting projects completed across Mumbai, Thane & Bhiwandi.</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {beforeAfter.map((item, i) => (
              <div key={i} className="overflow-hidden rounded-xl bg-white shadow-sm">
                <div className="relative h-52">
                  <Image src={item.image} alt={`${item.property} painting ${item.location}`} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>{item.property} — {item.location}</p>
                  <p className="mt-1 text-xs" style={{color:"#6b7280"}}>{item.work}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* 8. REVIEWS */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Customer Reviews</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            What Our <span className="text-orange-500">Customers Say</span>
          </h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Real reviews from homeowners across Mumbai, Thane & Bhiwandi.</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r) => (
              <div key={r.name} className="rounded-xl bg-white p-6 border-l-4 border-orange-500 shadow-sm">
                <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <span key={i} className="text-orange-500 text-lg">★</span>)}</div>
                <p className="mt-3 text-sm italic" style={{color:"#4b5563"}}>"{r.text}"</p>
                <p className="mt-4 font-bold text-sm" style={{color:"#111827"}}>{r.name}</p>
                <p className="text-xs" style={{color:"#9ca3af"}}>{r.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. WHY HOMEOWNERS CHOOSE */}
      <section className="py-20 bg-[#1B2B8A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-orange-400 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">Trusted Choice</span>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Why Homeowners Choose <span className="text-orange-500">Bhairav</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {["47+ years of residential painting experience in Mumbai & Bhiwandi","Free site visit and written quotation — no hidden charges","Material and labour both available — as per your requirement","Every project personally supervised by the owner","Specialists in 1BHK, 2BHK, 3BHK, villa and society painting","Serving Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai"].map((point, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-white/10 px-4 py-3">
                <CheckCircle className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" />
                <p className="text-sm text-white/90">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. HOW TO CHOOSE A CONTRACTOR */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Expert Guide</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            How to Choose a <span className="text-orange-500">Residential Painting Contractor</span>
          </h2>
          <p className="mt-3 text-sm" style={{color:"#6b7280"}}>Before hiring a painter for your home, check these important points:</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: "1", title: "Check Experience", desc: "Always choose a contractor with proven residential painting experience. Ask how long they have been operating and for references." },
              { num: "2", title: "Ask for Recent Projects", desc: "A reliable contractor will show you recent before/after photos of completed residential projects." },
              { num: "3", title: "Get a Written Quotation", desc: "Always insist on a written quote covering labour, material, number of coats and timeline — before any work starts." },
              { num: "4", title: "Confirm Paint Brand & Coats", desc: "Ask which paint brand will be used and how many coats are included. Minimum 2 coats after primer is recommended." },
              { num: "5", title: "Verify Cleanup Process", desc: "A professional contractor will protect your furniture and clean up completely after the work is done." },
              { num: "6", title: "Check Customer Reviews", desc: "Read Google reviews or ask for customer references to verify the quality of work and reliability." },
            ].map((item) => (
              <div key={item.num} className="rounded-xl bg-gray-50 p-5 border border-gray-100">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-white mb-3">{item.num}</div>
                <h3 className="font-bold text-sm" style={{color:"#1B2B8A"}}>{item.title}</h3>
                <p className="mt-1 text-xs" style={{color:"#6b7280"}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. QUESTIONS HOMEOWNERS ASK */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Common Questions</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            Questions Homeowners Ask <span className="text-orange-500">Before Painting</span>
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { q: "How many coats of paint are recommended for a flat?", a: "Minimum 2 coats of paint after putty and primer are recommended for a smooth, long-lasting finish in any flat or apartment." },
              { q: "What should be included in a painting quotation?", a: "A good quotation should include: labour charges, material cost (if applicable), surface preparation, number of coats, timeline and cleanup." },
              { q: "How long does a 2BHK repainting project take?", a: "A standard 2BHK flat repainting project takes 3 to 4 days depending on the wall condition and scope of work." },
              { q: "Is surface preparation important before painting?", a: "Yes. Proper surface prep — crack filling, putty application and priming — is essential for a smooth, durable paint finish." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm">
                <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>Q: {item.q}</p>
                <p className="mt-2 text-xs" style={{color:"#4b5563"}}>A: {item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. AREAS WE SERVE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Service Areas</p>
          <h2 className="text-3xl font-black text-gray-900 mb-8">Residential Painting Services Near You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
            {[
              { city: "Residential Painting in Bhiwandi", desc: "Bhiwandi hamara primary service area hai — 200+ residential projects complete kiye hain. 1BHK, 2BHK, 3BHK flats, independent houses aur villas ke liye interior aur exterior painting available hai. Same-day site visit possible hai Bhiwandi ke liye. MIDC area ke residential quarters bhi cover kiye jaate hain." },
              { city: "Residential Painting in Thane", desc: "Thane city mein Ghodbunder Road, Majiwada, Manpada, Kolshet aur Pokhran Road areas mein residential painting available hai. High-rise apartments aur villas dono ke liye service available hai. Free site visit with same-day quotation — call ya WhatsApp karo." },
              { city: "Residential Painting in Mumbai", desc: "Mumbai ke saare areas mein residential painting — Andheri, Borivali, Dadar, Bandra, Chembur, Mulund aur Vikhroli. Old buildings mein surface preparation aur crack treatment ke saath repainting. Free site visit available — same-day response guaranteed." },
              { city: "Residential Painting in Kalyan & Dombivli", desc: "Kalyan East, Kalyan West, Dombivli East aur West mein residential painting services. 1BHK se 4BHK tak saare flat sizes cover kiye jaate hain. Rental flat repainting, new flat painting aur full home repainting — sab available hai free site visit ke saath." },
              { city: "Residential Painting in Navi Mumbai", desc: "Navi Mumbai ke saare sectors — Vashi, Kharghar, Belapur, Airoli, Nerul aur Panvel mein residential painting. Premium apartments, villas aur independent houses ke liye interior aur exterior painting. Free inspection available." },
              { city: "Residential Painting in Kasheli & Kalher", desc: "Kasheli, Kalher, Kongaon aur Bhiwandi ke outer residential areas mein bhi painting available hai. Independent homes aur society flats dono cover kiye jaate hain. Call ya WhatsApp karo — same-day response guaranteed." },
            ].map((a, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
                <h3 className="font-black text-sm text-gray-900 mb-2">📍 {a.city}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. GEO PARAGRAPH */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-black text-gray-900 mb-4">
            Residential Painting Contractor in <span className="text-orange-500">Mumbai, Thane & Bhiwandi</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-600">
            Bhairav Painting Service 47+ saal se Mumbai, Thane, Bhiwandi, Kalyan aur Navi Mumbai mein professional residential painting services provide kar raha hai. Hum flat painting, apartment repainting, villa painting aur society painting mein specialise karte hain. Har project owner-supervised hota hai — quality workmanship, timely completion aur complete site cleanup guaranteed. Chahe aapko Bhiwandi mein 1BHK ka fresh coat chahiye, Thane mein 3BHK ka full repaint, ya Kalyan mein villa ki interior painting — Bhairav Painting Service reliable aur professional results deliver karta hai competitive rates pe. Free site visit ke liye call ya WhatsApp karo.
          </p>
        </div>
      </section>



      {/* HOW OFTEN REPAINT */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Repainting Guide</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">How Often Should You Repaint Your Home?</h2>
          <p className="text-gray-500 mb-8 text-sm">Early repainting prevents expensive wall repairs in the future.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { type: "Interior Walls", freq: "Every 5–7 Years", desc: "Depending on wall condition and paint quality used." },
              { type: "Exterior Walls", freq: "Every 4–6 Years", desc: "Due to sun exposure, pollution and monsoon rain." },
              { type: "Rental Flats", freq: "After Every Tenant", desc: "Fresh paint increases rental value and attracts tenants faster." },
              { type: "Luxury Homes", freq: "Periodic Touch-ups", desc: "To maintain premium finishes and appearance." },
            ].map((r, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 text-center shadow-sm">
                <h3 className="font-black text-sm text-gray-900 mb-1">{r.type}</h3>
                <p className="text-orange-500 font-bold text-sm mb-2">{r.freq}</p>
                <p className="text-xs text-gray-500">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON MISTAKES */}
      <section className="py-16 px-4 bg-blue-950 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-400 text-xs font-bold uppercase tracking-widest mb-2">Avoid These</p>
          <h2 className="text-3xl font-black text-white mb-3">Common Mistakes Homeowners Make Before Painting</h2>
          <p className="text-blue-200 mb-8 text-sm">Many homeowners unknowingly reduce the life of their new paint by skipping proper preparation.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { mistake: "Painting Over Damp Walls", fix: "Treat moisture source first — then paint." },
              { mistake: "Ignoring Wall Cracks", fix: "Fill and seal all cracks before painting." },
              { mistake: "Choosing Paint Only by Price", fix: "Quality paint lasts 2x longer — saves money." },
              { mistake: "Skipping Primer", fix: "Primer improves adhesion and finish quality." },
              { mistake: "Hiring Untrained Painters", fix: "Experience matters — poor work means early peeling." },
              { mistake: "Wrong Finish for Kitchen/Bathroom", fix: "Use moisture-resistant paint in wet areas." },
            ].map((m, i) => (
              <div key={i} className="bg-white/10 border border-white/20 rounded-xl p-4">
                <p className="text-red-400 font-bold text-xs mb-1">❌ {m.mistake}</p>
                <p className="text-green-400 text-xs">✓ {m.fix}</p>
              </div>
            ))}
          </div>
          <div className="bg-white/10 rounded-xl p-5 border border-white/20">
            <p className="text-sm text-blue-100 leading-relaxed">Professional inspection before painting helps avoid these costly mistakes. Bhairav Painting Service provides <strong className="text-white">free site visit + surface assessment</strong> before every project — no charges, no obligation.</p>
          </div>
        </div>
      </section>

      {/* MAINTENANCE GUIDE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-orange-500 text-xs font-bold uppercase tracking-widest mb-2">Maintenance Guide</p>
          <h2 className="text-3xl font-black text-gray-900 mb-3">Residential Painting Maintenance Guide</h2>
          <p className="text-gray-500 mb-8 text-sm">After painting, proper maintenance helps keep walls looking fresh for years.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              { tip: "Clean stains with a soft damp cloth", icon: "🧽" },
              { tip: "Fix water leakage immediately", icon: "💧" },
              { tip: "Avoid drilling unnecessary holes", icon: "🔩" },
              { tip: "Repair cracks before repainting", icon: "🧱" },
              { tip: "Schedule periodic exterior wall inspection", icon: "🔍" },
              { tip: "Use mild cleaners — avoid harsh chemicals", icon: "🧴" },
            ].map((t, i) => (
              <div key={i} className="flex gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                <span className="text-2xl shrink-0">{t.icon}</span>
                <p className="text-sm text-gray-700 font-medium">{t.tip}</p>
              </div>
            ))}
          </div>
          <div className="bg-orange-50 border border-orange-100 rounded-xl p-5">
            <p className="text-sm text-gray-600 leading-relaxed">Regular maintenance extends paint life and reduces future repair costs. <strong className="text-gray-900">Bhairav Painting Service</strong> provides annual inspection and touch-up services for existing clients — call or WhatsApp to schedule.</p>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>FAQ</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#111827"}}>
            Frequently Asked <span className="text-orange-500">Questions</span>
          </h2>
          <div className="mt-8 space-y-3 max-w-3xl">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-100 overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-bold text-sm pr-4" style={{color:"#1B2B8A"}}>{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-orange-500 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm" style={{color:"#4b5563"}}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 15. FINAL CTA */}
      <section id="contact" className="py-20 bg-orange-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white sm:text-4xl">Get A Free Residential Painting Quote</h2>
            <p className="mt-3 text-white/85 text-sm">Serving Mumbai, Thane, Bhiwandi, Kalyan & Navi Mumbai. Free site visit — no obligation.</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:+919158800517" className="flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white px-6 py-3 text-sm font-bold text-orange-500 hover:bg-white/90 transition-colors">
                <Phone className="h-5 w-5" /> Call Now
              </a>
              <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20Residential%20Painting%20quote" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                <MessageCircle className="h-5 w-5" /> WhatsApp Now
              </a>
            </div>
          </div>
          <div className="mt-12 mx-auto max-w-2xl rounded-2xl bg-orange-600 p-8">
            <h3 className="text-center text-xl font-bold text-white mb-6">📋 Free Quote — Fill Form Below</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div><label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Your Name *</label>
                <input type="text" placeholder="Enter your name" value={form.name} onChange={(e) => setForm({...form,name:e.target.value})} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none" style={{color:"#111827"}} /></div>
              <div><label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Phone Number *</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" value={form.phone} onChange={(e) => setForm({...form,phone:e.target.value})} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none" style={{color:"#111827"}} /></div>
              <div><label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Service Type</label>
                <select value={form.service} onChange={(e) => setForm({...form,service:e.target.value})} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none" style={{color:"#111827"}}>
                  <option value="">Select Service</option>
                  {serviceOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
                </select></div>
              <div><label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Your Area / Location</label>
                <div className="flex gap-2">
                  <input type="text" placeholder="e.g. Bhiwandi, Thane" value={form.area} onChange={(e) => setForm({...form,area:e.target.value})} className="flex-1 rounded-lg bg-white px-4 py-3 text-sm outline-none" style={{color:"#111827"}} />
                  <button type="button" onClick={() => {
                    if(navigator.geolocation) {
                      navigator.geolocation.getCurrentPosition((pos) => {
                        const lat = pos.coords.latitude.toFixed(5)
                        const lng = pos.coords.longitude.toFixed(5)
                        setForm({...form, area: `${lat}, ${lng}`})
                      }, () => alert("Location access denied. Please type your area."))
                    } else {
                      alert("Location not supported on this browser.")
                    }
                  }} className="shrink-0 bg-white text-orange-600 font-bold text-xs px-3 py-2 rounded-lg hover:bg-orange-50 transition flex items-center gap-1" title="Share My Location">
                    📍 Location
                  </button>
                </div>
                <p className="text-white/60 text-xs mt-1">📍 button se apni exact location share karo</p>
              </div>
            </div>
            <div className="mt-4"><label className="block text-xs font-bold uppercase tracking-wide text-white/80 mb-1">Message (Optional)</label>
              <textarea rows={3} placeholder="Tell us about your project..." value={form.message} onChange={(e) => setForm({...form,message:e.target.value})} className="w-full rounded-lg bg-white px-4 py-3 text-sm outline-none resize-none" style={{color:"#111827"}} /></div>
            <button onClick={handleSubmit} className="mt-6 w-full rounded-lg bg-[#1B2B8A] py-4 text-base font-bold text-white hover:bg-[#152270] transition-colors">
              🚀 Send Enquiry on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* FLOATING BUTTONS */}
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
