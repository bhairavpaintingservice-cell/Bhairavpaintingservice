"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Phone, MessageCircle, CheckCircle, MapPin } from "lucide-react"

const services = [
  { title: "Residential Painting", description: "Quality painting for homes, societies & housing complexes. Clean, professional finish.", image: "/images/residential.webp", href: "/services/residential" },
  { title: "Interior Painting", description: "Modern wall painting for rooms, halls & flats. Best quality paints with perfect finish.", image: "/images/portfolio-bedroom.webp", href: "/services/interior" },
  { title: "Building Painting", description: "Complete building painting for societies & commercial complexes. Long-lasting results.", image: "/images/portfolio-building.webp", href: "/services/building" },
  { title: "Exterior Painting", description: "Weather-resistant exterior painting solutions. Durable, fade-resistant finish.", image: "/images/exterior-new.jpg", href: "/services/exterior" },
  { title: "Commercial Painting", description: "Office, showroom & commercial space painting. Minimal disruption, fast completion.", image: "/images/portfolio-office.webp", href: "/services/commercial" },
  { title: "Designer Wall & Texture Painting", description: "Custom designer wall art & premium texture finishes — stencil work, accent walls & decorative painting for luxury interiors.", image: "/images/texture.webp", href: "/services/designer/texture" },
  { title: "Waterproofing", description: "Complete waterproofing for terrace, bathroom & exterior walls. Permanent solution.", image: "/images/waterproofing.jpg", href: "/services/waterproofing" },
]

const features = [
  { icon: "🏆", title: "47+ Years Experience", description: "Trusted name in Mumbai painting industry since decades." },
  { icon: "👷", title: "Trained Professionals", description: "Skilled & experienced painters for every type of work." },
  { icon: "🆓", title: "Free Site Visit", description: "Get a free site visit & quotation before any commitment." },
  { icon: "💰", title: "Budget & Premium Packages", description: "Options for every budget — no compromise on quality." },
  { icon: "📦", title: "Material + Labour", description: "We handle everything — material supply & painting work." },
  { icon: "⚡", title: "Fast Completion", description: "On-time project delivery with minimal disruption." },
  { icon: "🖌️", title: "Clean & Professional", description: "We clean up completely after the work is done." },
  { icon: "👁️", title: "Owner Supervised", description: "Every project personally supervised by the owner." },
]

const steps = [
  { number: "1", title: "Free Site Visit", description: "We visit your site for free assessment" },
  { number: "2", title: "Quotation", description: "Detailed quote & consultation provided" },
  { number: "3", title: "Surface Prep", description: "Thorough surface preparation done" },
  { number: "4", title: "Painting", description: "Professional painting execution" },
  { number: "5", title: "Final Cleanup", description: "Inspection & complete site cleanup" },
]

const projects = [
  { title: "Interior Painting", image: "/images/portfolio-bedroom.webp" },
  { title: "Texture Wall", image: "/images/texture.webp" },
  { title: "Building Exterior", image: "/images/portfolio-building.webp" },
  { title: "Commercial Space", image: "/images/portfolio-office.webp" },
  { title: "Designer Wall", image: "/images/portfolio-accent.webp" },
  { title: "Waterproofing", image: "/images/waterproofing.jpg" },
]

const reviews = [
  { name: "Anita Kanwar", text: "Good work, and I have done single coat of paint to my house the single coat finishing was so good, no need to do double coat." },
  { name: "Pradeep Rajpurohit", text: "Fast kaam aur perfect finishing, highly satisfied." },
  { name: "Narendra Singh", text: "Excellent painting work, neat finishing and on time service. Highly recommended." },
  { name: "Om Prakash", text: "Professional and reliable painting services. From site visit to final finishing, everything was smooth. Used branded paints and delivered quality results. Strongly recommend." },
  { name: "Kamlesh Vishwakarma", text: "One of the best painting services in the area. Honest person, hardworking team and excellent finishing. Completed my house painting without any complaints. 100% satisfied." },
  { name: "Dhrmesh Kamble", text: "Ghar ke renovation mein sabse achha experience inke saath raha. Communication clear, price fair aur kaam beyond expectations." },
  { name: "Rakesh Gupta", text: "Very professional and clean work. Thoroughly impressed with the results. Always on time. Highly recommended." },
  { name: "Avadhut Mestry", text: "Bhairav Painting Service ne ek chhota kaam tha, lekin usse bhi bahut hi dhyan se, time se aur clean tarike se complete kiya." },
  { name: "Laxmi Kapse", text: "Main affordable rate mein quality kaam dhoond raha tha, aur Bhairav Painting Service perfect nikla. Budget-friendly aur quality work." },
]

const areas = ["Bhiwandi", "Thane", "Kalyan", "Dombivli", "Navi Mumbai", "Mumbai", "Kasheli", "Kalher", "Andheri", "Vasai", "Virar"]

const serviceOptions = [
  "Residential Painting", "Interior Painting", "Building Painting", "Exterior Painting",
  "Commercial Painting", "Texture Painting", "Waterproofing", "Designer Wall Painting", "Other (Please Specify)",
]

const heroPills = ["Free Site Visit", "Material + Labour", "Labour Only Available", "Trained Painters", "Owner Supervised", "Budget & Premium Packages"]


const faqs = [
  { q: "Bhairav Painting Service ko choose kyu karein?", a: "47+ saal ke experience, trained painters, quality paint brands, transparent pricing aur time pe kaam complete karna — yahi hamaari pehchaan hai Mumbai, Thane aur Bhiwandi mein." },
  { q: "Kitne saal ka experience hai?", a: "Bhairav Painting Service ko 47+ saal ka experience hai. Hazaron residential aur commercial projects successfully complete kiye hain." },
  { q: "Kya free site visit aur quotation available hai?", a: "Haan! Hum free site visit aur quotation provide karte hain. Call ya WhatsApp karein aur hum aapke ghar aakar estimate denge." },
  { q: "Kya hidden charges hote hain?", a: "Bilkul nahi. Humara quotation 100% transparent hai — jo quote diya wahi final price. Koi hidden charges nahi." },
  { q: "WhatsApp par quotation mil sakta hai?", a: "Haan! +91 9158800517 par WhatsApp karein — photos bhejein aur hum estimate de denge." },
  { q: "Same-day site visit available hai?", a: "Haan, availability ke hisaab se same-day site visit possible hai. Jaldi contact karein!" },
  { q: "Material + labour package provide karte hain?", a: "Haan! Complete package available hai — paint material aur labour dono saath. Alag alag arrange karne ki zaroorat nahi." },
  { q: "House painting ki cost kaise calculate hoti hai?", a: "Cost calculate hoti hai — total area (sq ft), paint brand, finish type aur surface condition ke hisaab se. Free site visit mein hum exact estimate dete hain." },
  { q: "Final quotation mein kya-kya include hota hai?", a: "Labour charges, paint material, surface preparation, primer, putty aur cleaning — sab include hota hai. Koi hidden charges nahi." },
  { q: "Society painting ke liye special rates available hain?", a: "Haan! Society aur bulk projects ke liye special rates available hain. Contact karein aur hum best deal denge." },
  { q: "Painting work start karne se pehle kya process hota hai?", a: "Pehle free site visit, phir quotation, approval ke baad surface preparation — wall cleaning, putty, primer — phir painting shuru hoti hai." },
  { q: "Site inspection kyu zaroori hai?", a: "Site inspection se wall condition, area measurement aur paint requirement accurately pata chalta hai — taaki koi surprise na aaye baad mein." },
  { q: "Painting ke baad free cleaning bhi karte hain?", a: "Haan! Kaam complete hone ke baad hum free poori cleaning karte hain — furniture covers hatana, floor cleaning — sab hamaari responsibility hai." },
  { q: "Painting ke baad maintenance kaise karein?", a: "Painted walls ko direct paani se bachayein, dry cloth se saaf karein aur 2-3 saal baad touch-up karwayein taaki paint fresh rahe." },
  { q: "Kya quality paint brands use karte hain?", a: "Haan! Hum Asian Paints, Berger, Nerolac aur Dulux jaise trusted brands use karte hain. Customer ki choice ke hisaab se brand select hoti hai." },
  { q: "Kya previous projects ke photos dekh sakte hain?", a: "Haan! Hamare portfolio mein previous projects ki photos hain. Website par dekh sakte hain ya WhatsApp par bhi bhej sakte hain." },
  { q: "Aapke painters trained aur experienced hain?", a: "Haan! Hamare saare painters trained aur experienced hain. Quality aur safety dono ka dhyan rakha jata hai har project mein." },
  { q: "Residential aur commercial dono projects handle karte hain?", a: "Haan! Hum ghar, office, shop, society aur commercial buildings — sab handle karte hain." },
  { q: "Kin areas mein service available hai?", a: "Bhiwandi, Thane, Kalyan, Dombivli, Navi Mumbai, Mumbai, Kasheli, Kalher, Andheri, Vasai aur Virar mein professional painting services available hain." },
  { q: "Kya societies aur builder projects bhi lete hain?", a: "Haan! Societies, builder projects aur large commercial projects ke liye special teams available hain." },
  { q: "Emergency painting service available hai?", a: "Haan! Emergency situations mein jaldi service provide karne ki koshish karte hain. Call ya WhatsApp karein — hum response denge." },
]

export default function HomePage() {
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
    <div className="flex flex-col">

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-[#1B2B8A] flex items-center pt-20 overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 rounded-full bg-[#2238a8] opacity-40 translate-x-1/2 -translate-y-1/4" />
        <div className="absolute right-32 bottom-20 w-64 h-64 rounded-full bg-[#2238a8] opacity-25" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:px-8 text-center w-full">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400 px-5 py-2 text-xs font-bold uppercase tracking-widest text-orange-400 mb-8">
            ★ 47+ YEARS EXPERIENCE | TRUSTED PAINTING SERVICE
          </div>
          <h1 className="text-4xl font-black text-white sm:text-5xl lg:text-6xl leading-tight">
            Trusted Painting Services In
          </h1>
          <h1 className="text-4xl font-black text-orange-500 sm:text-5xl lg:text-6xl mt-2 leading-tight">
            Mumbai, Thane & Bhiwandi
          </h1>
          <p className="mt-6 text-lg text-white/75 max-w-2xl mx-auto">
            Interior, Exterior, Texture & Designer Painting — Professional work with Owner Supervision. Free Site Visit Available!
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20free%20painting%20quote"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-8 py-4 text-base font-bold text-white hover:bg-orange-600 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Get Free Quote on WhatsApp
            </a>
            <a
              href="tel:+919158800517"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call Now: 9158800517
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {heroPills.map((item) => (
              <span key={item} className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white">
                <CheckCircle className="h-4 w-4 text-orange-400 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-orange-500 py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 divide-x divide-white/30 text-center text-white">
            <div className="px-4">
              <p className="text-4xl font-black">47+</p>
              <p className="mt-1 text-sm font-semibold">Years Experience</p>
            </div>
            <div className="px-4">
              <p className="text-4xl font-black">500+</p>
              <p className="mt-1 text-sm font-semibold">Projects Completed</p>
            </div>
            <div className="px-4">
              <p className="text-4xl font-black">8</p>
              <p className="mt-1 text-sm font-semibold">Service Types</p>
            </div>
            <div className="px-4">
              <p className="text-4xl font-black">FREE</p>
              <p className="mt-1 text-sm font-semibold">Site Visit</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gray-500">About Us</span>
          <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
            About <span className="text-orange-500">Bhairav Painting Service</span>
          </h2>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-4 text-sm leading-relaxed text-gray-600">
              <p>Bhairav Painting Service is a trusted painting contractor based in Bhiwandi, serving Mumbai, Thane, Kalyan, Dombivli, Navi Mumbai and surrounding areas for over <strong className="text-gray-900">47 years</strong>. We specialize in residential painting, interior painting, exterior painting, building and society painting, commercial painting, waterproofing, texture painting and designer wall painting.</p>
              <p>Every project — whether a single room or a large housing society — is personally supervised by the owner to ensure quality, cleanliness and on-time delivery. We use only branded paints including <strong className="text-gray-900">Asian Paints, Berger, Nerolac and Dulux</strong>, and offer both material + labour and labour-only packages to suit every budget.</p>
              <p>Our process is simple and transparent: free site visit, honest quotation, thorough surface preparation, professional painting, and complete cleanup. No hidden charges, no surprises — just quality work you can trust.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { num: "47+", label: "Years in Business" },
                { num: "500+", label: "Projects Completed" },
                { num: "11+", label: "Areas Covered" },
                { num: "100%", label: "Owner Supervised" },
              ].map((s, i) => (
                <div key={i} className="rounded-xl bg-orange-50 border border-orange-100 p-6 text-center">
                  <p className="text-3xl font-black text-orange-500">{s.num}</p>
                  <p className="mt-1 text-xs font-semibold text-gray-600">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gray-500">Our Services</span>
          <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
            Professional <span className="text-orange-500">Painting Services</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl">Complete painting solutions for homes, flats, offices and buildings across Mumbai region.</p>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="overflow-hidden rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-52">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#1B2B8A]">{service.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{service.description}</p>
                  <Link href={service.href} className="mt-4 inline-flex items-center rounded-lg bg-[#1B2B8A] px-4 py-2 text-sm font-semibold text-white hover:bg-[#152270] transition-colors">
                    View Service →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gray-500">Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
            Why <span className="text-orange-500">Bhairav Painting Service?</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl">47+ years of trust, quality and professional painting services in Mumbai region.</p>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4 rounded-xl border border-gray-100 bg-gray-50 p-5 hover:shadow-sm transition-shadow">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-xl">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm">{feature.title}</h3>
                  <p className="mt-1 text-xs text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OUR PROCESS ── */}
      <section className="py-20 bg-[#1B2B8A]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-orange-400 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-orange-400">Our Process</span>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
            Our Painting <span className="text-orange-500">Process</span>
          </h2>
          <p className="mt-3 text-white/70">Simple, transparent process from first call to final result.</p>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-5">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-black text-white">
                  {step.number}
                  {index < steps.length - 1 && (
                    <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-white/40 text-lg hidden md:block">→</span>
                  )}
                </div>
                <h3 className="mt-4 font-bold text-white text-sm">{step.title}</h3>
                <p className="mt-1 text-xs text-white/60">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT PROJECTS ── */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gray-500">Our Work</span>
          <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
            Our Recent <span className="text-orange-500">Projects</span>
          </h2>
          <p className="mt-3 text-gray-500">Real painting projects completed by our team across Mumbai region.</p>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="group relative h-60 overflow-hidden rounded-xl">
                <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-lg font-bold text-white">{project.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gray-500">Customer Reviews</span>
          <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
            What Our <span className="text-orange-500">Customers Say</span>
          </h2>
          <p className="mt-3 text-gray-500">Real Google reviews from our happy customers.</p>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div key={review.name} className="rounded-xl bg-gray-50 p-6 border-l-4 border-orange-500">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-orange-500 text-lg">★</span>)}
                </div>
                <p className="mt-3 text-sm italic text-gray-600">"{review.text}"</p>
                <p className="mt-4 font-bold text-gray-900 text-sm">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEMS WE SOLVE ── */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gray-500">Common Issues</span>
          <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
            Common Painting <span className="text-orange-500">Problems We Solve</span>
          </h2>
          <p className="mt-3 text-gray-500 max-w-xl">If your home or building has any of these issues, we have the right solution.</p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🎨", title: "Paint Peeling & Flaking", desc: "Old or poor-quality paint chipping off walls — we strip, prepare and repaint for a long-lasting finish." },
              { icon: "💧", title: "Water Seepage & Damp Walls", desc: "Moisture entering through walls or terrace — treated with waterproofing and anti-seepage coatings." },
              { icon: "🧱", title: "Wall Cracks", desc: "Surface or structural cracks filled professionally before repainting to prevent further damage." },
              { icon: "🌫️", title: "Faded & Dull Exterior", desc: "Sun and rain-worn exterior walls — repainted with UV-resistant weather-proof exterior paint." },
              { icon: "⚫", title: "Damp Patches & Mold", desc: "Dark patches from moisture build-up treated with anti-fungal solution and damp-proof paint." },
              { icon: "🌧️", title: "Terrace Leakage", desc: "Water leaking through terrace into flats below — resolved with terrace waterproofing and protective coating." },
            ].map((p, i) => (
              <div key={i} className="flex gap-4 rounded-xl bg-white border border-gray-100 p-5 shadow-sm">
                <span className="text-2xl shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-bold text-sm text-gray-900">{p.title}</h3>
                  <p className="mt-1 text-xs text-gray-500">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl border-l-4 border-orange-500 bg-white p-6">
            <p className="text-sm leading-relaxed text-gray-600">
              Homes and buildings across <strong className="text-gray-900">Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai</strong> face constant wear from monsoon rain, humidity, heat and pollution. Bhairav Painting Service provides professional solutions for all common painting and waterproofing problems — with proper surface preparation, quality materials and owner-supervised execution.
            </p>
          </div>
        </div>
      </section>

      {/* ── AREAS ── */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gray-500">Service Areas</span>
          <h2 className="mt-3 text-3xl font-black text-gray-900 sm:text-4xl">
            Areas <span className="text-orange-500">We Serve</span>
          </h2>
          <p className="mt-3 text-gray-500">Professional painting services across Mumbai Metropolitan Region.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            {areas.map((area) => (
              <span key={area} className="flex items-center gap-2 rounded-full bg-[#1B2B8A] px-5 py-2.5 text-sm font-semibold text-white">
                <MapPin className="h-4 w-4" />
                {area}
              </span>
            ))}
          </div>
          <div className="mt-8 rounded-xl border-l-4 border-orange-500 bg-white p-6">
            <p className="text-sm leading-relaxed text-gray-600">
              Bhairav Painting Service provides residential painting, interior painting, exterior painting, building and society painting, commercial painting, waterproofing, texture painting and designer wall painting across <strong className="text-gray-900">Bhiwandi, Thane, Kalyan, Dombivli, Navi Mumbai, Mumbai, Kasheli, Kalher, Andheri, Vasai and Virar</strong>. We offer free site visits across all these areas — call or WhatsApp us to schedule your visit today.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA + FORM ── */}
      <section className="py-20 bg-orange-500">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-black text-white sm:text-4xl">Book Your Free Painting Site Visit Today!</h2>
            <p className="mt-3 text-white/85">Get a free consultation & quote. No obligation. Call or WhatsApp us now!</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20free%20site%20visit" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-white bg-white px-6 py-3 text-sm font-bold text-orange-500 hover:bg-white/90 transition-colors">
                <MessageCircle className="h-5 w-5" /> WhatsApp Now
              </a>
              <a href="tel:+919158800517"
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                <Phone className="h-5 w-5" /> Call: 9158800517
              </a>
              <a href="mailto:bhairavpaintingservice@gmail.com"
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                📧 Email Us
              </a>
            </div>
          </div>

          {/* Form */}
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
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}
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
        </div>
      </section>

      {/* ── FLOATING BUTTONS ── */}
      <a href="https://wa.me/919158800517" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-24 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors"
        aria-label="WhatsApp">
        <MessageCircle className="h-7 w-7" />
      </a>
      <a href="tel:+919158800517"
        className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-colors"
        aria-label="Call">
        <Phone className="h-7 w-7" />
      </a>

    </div>
  )
}
