import Image from "next/image"
import Link from "next/link"
import { CheckCircle, MessageCircle, Phone } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Professional Painting Services in Mumbai, Thane & Navi Mumbai | Bhairav Painting Service",
  description: "Complete painting services — residential, interior, exterior, commercial, building, waterproofing, texture and wood painting. 47+ years experience. Free site visit across Mumbai, Thane, Bhiwandi & Kalyan.",,
  openGraph: {
    title: "Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
    description: "Complete painting services — residential, interior, exterior, commercial, building, waterproofing and designer finishes. 47+ years experience. Free site visit.",
    url: "https://bhairavpaintingservice.vercel.app/services",
    siteName: "Bhairav Painting Service",
    images: [{ url: "https://bhairavpaintingservice.vercel.app/images/hero-painting.jpg", width: 900, height: 600 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
    description: "Complete painting services — residential, interior, exterior, commercial, building, waterproofing and designer finishes. 47+ years experience. Free site visit.",
    images: ["https://bhairavpaintingservice.vercel.app/images/hero-painting.jpg"],
  },

}

const services = [
  { title: "Residential Painting", subtitle: "Homes & Apartments", img: "/images/residential.webp", href: "/services/residential", points: ["Interior & Exterior", "All Room Types", "Surface Preparation", "Premium Paints"] },
  { title: "Interior Painting", subtitle: "Rooms & Living Spaces", img: "/images/interior-painting.jpg", href: "/services/interior", points: ["Bedrooms & Living Rooms", "Kitchen & Bathrooms", "Ceiling & Trim", "Designer Finishes"] },
  { title: "Exterior Painting", subtitle: "Weather Protection", img: "/images/exterior-new.jpg", href: "/services/exterior", points: ["Weatherproof Systems", "Crack Repair", "Anti-Fungal Treatment", "Monsoon Ready"] },
  { title: "Commercial Painting", subtitle: "Offices & Businesses", img: "/images/commercial.webp", href: "/services/commercial", points: ["Offices & Showrooms", "Restaurants & Hotels", "Warehouses", "Weekend Scheduling"] },
  { title: "Building & Society Painting", subtitle: "Large Scale Projects", img: "/images/portfolio-building.webp", href: "/services/building", points: ["Society Repainting", "Common Areas", "Waterproofing", "Scaffolding"] },
  { title: "Waterproofing", subtitle: "Leakage & Seepage Solutions", img: "/images/waterproofing.jpg", href: "/services/waterproofing", points: ["Terrace Waterproofing", "Wall Seepage", "Bathroom", "Permanent Fix"] },
  { title: "Designer & Texture Painting", subtitle: "Premium Finishes", img: "/images/texture.webp", href: "/services/designer/texture", points: ["Texture Finishes", "Metallic & Venetian", "Accent Walls", "Custom Patterns"] },
  { title: "Wood & Metal Painting", subtitle: "Doors, Windows & Gates", img: "/images/wood-metal-painting.jpg", href: "/services/residential", points: ["Doors & Windows", "Grills & Gates", "Furniture Polish", "Anti-Rust Coating"] },
]

const whyUs = [
  { title: "47+ Years Experience", desc: "Trusted painting contractor since 1977 serving Mumbai region." },
  { title: "Skilled Painters", desc: "Trained, experienced team with attention to detail on every project." },
  { title: "Premium Paint Brands", desc: "Asian Paints, Berger, Nerolac & Dulux — branded paints only." },
  { title: "On-Time Completion", desc: "Projects delivered on schedule — timeline committed upfront." },
  { title: "Clean Work Process", desc: "Furniture protected, dust minimised, daily site cleanup." },
  { title: "Owner Supervised", desc: "Every project personally supervised by the owner for quality." },
]

const process = [
  { step: "01", title: "Free Site Visit", desc: "We visit your property at no charge to understand the scope of work." },
  { step: "02", title: "Surface Inspection", desc: "Walls, cracks, dampness and existing paint condition assessed." },
  { step: "03", title: "Written Quotation", desc: "Detailed written quote with scope, materials and timeline — no hidden costs." },
  { step: "04", title: "Colour Selection", desc: "We help you choose the right colours and finish for your space." },
  { step: "05", title: "Surface Preparation", desc: "Crack filling, putty application and primer coat before painting." },
  { step: "06", title: "Painting", desc: "Premium branded paint applied in correct coats per specifications." },
  { step: "07", title: "Final Inspection", desc: "Owner walkthrough to ensure every detail meets quality standards." },
  { step: "08", title: "Project Handover", desc: "Site cleaned, furniture restored, project handed over to your satisfaction." },
]

const problems = [
  { problem: "Damp Walls", solution: "Anti-fungal primer + moisture-resistant paint after treating the source of dampness." },
  { problem: "Water Leakage", solution: "Professional waterproofing with Dr Fixit or Asian Paints SmartCare before repainting." },
  { problem: "Peeling Paint", solution: "Complete removal of loose paint, surface preparation and fresh premium coat." },
  { problem: "Wall Cracks", solution: "Crack filling compound, mesh reinforcement if needed, then putty and paint." },
  { problem: "Faded Exterior", solution: "Weatherproof exterior paint system with UV and monsoon resistance." },
  { problem: "Fungus & Algae", solution: "Anti-fungal treatment, surface cleaning and moisture-resistant paint system." },
  { problem: "Ceiling Stains", solution: "Stain-blocking primer followed by premium ceiling paint for clean finish." },
  { problem: "Poor Old Finish", solution: "Surface levelling with putty, sanding and fresh branded paint for smooth result." },
]

const faqs = [
  { q: "How much does painting cost per sq ft in Mumbai?", a: "Painting cost depends on surface condition, paint brand, number of coats and scope. We provide a free site visit and written quotation — no hidden charges." },
  { q: "How long does residential painting take?", a: "A standard 2BHK apartment takes 5–7 days for complete interior painting including surface preparation, putty, primer and two finish coats." },
  { q: "Do you provide warranty on painting work?", a: "Yes — any defect due to our workmanship is rectified at no extra cost. Paint manufacturer warranty depends on the brand and product selected." },
  { q: "Which paint brands do you use?", a: "We use Asian Paints, Berger, Nerolac and Dulux — premium branded paints only. No local or unbranded products are used on our projects." },
  { q: "Can you do waterproofing along with painting?", a: "Yes — we handle waterproofing and painting together. Waterproofing is always done before exterior or terrace painting for best results." },
  { q: "Do you paint during monsoon?", a: "Interior painting can be done during monsoon. Exterior painting is best avoided during heavy rain — we advise the best timing after site inspection." },
  { q: "What is included in surface preparation?", a: "Surface preparation includes cleaning, crack filling, putty application and primer coat — all included before final paint coats." },
  { q: "Do you serve Navi Mumbai and Kalyan?", a: "Yes — we serve Mumbai, Thane, Bhiwandi, Kalyan, Navi Mumbai and Dombivli. Mira Road and Nalasopara are outside our service area." },
  { q: "Can you work on weekends for commercial projects?", a: "Yes — we offer evening, night and weekend scheduling for commercial projects to avoid business disruption." },
  { q: "Do you offer colour consultation?", a: "Yes — our team helps you select the right colours, finishes and paint systems based on your space and requirements." },
]

const serviceAreas = [
  { area: "Mumbai", types: "Residential, Commercial, Building" },
  { area: "Thane", types: "Residential, Commercial, Exterior" },
  { area: "Bhiwandi", types: "Warehouse, Factory, Commercial" },
  { area: "Kalyan", types: "Residential, Society, Exterior" },
  { area: "Navi Mumbai", types: "Residential, Commercial, Building" },
  { area: "Dombivli", types: "Residential, Society, Exterior" },
]


const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Painting Services",
  "description": "Complete painting services — residential, commercial, waterproofing and designer finishes.",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Bhairav Painting Service",
    "telephone": "+919158800517",
    "areaServed": ["Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai"]
  },
  "areaServed": ["Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai"]
}

export default function ServicesPage() {
  return (
    <main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      {/* HERO */}
      <section className="pt-32 pb-16" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">Bhairav Painting Service</span>
            <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl leading-tight">Professional Painting Services in Mumbai, Thane & Navi Mumbai</h1>
            <p className="mt-4 text-lg text-blue-200 max-w-2xl">Bhairav Painting Service provides residential, interior, exterior, commercial, building, waterproofing and designer texture painting across Mumbai, Thane, Bhiwandi, Kalyan and Navi Mumbai. Every project includes free site inspection, surface preparation, premium branded paints and owner-supervised execution.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20painting%20quote.%20Please%20contact%20me." target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-bold text-white"
                style={{backgroundColor:"#25D366"}}>
                <MessageCircle className="h-5 w-5" /> Get Free Quote on WhatsApp
              </a>
              <a href="tel:+919158800517"
                className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors">
                <Phone className="h-5 w-5" /> Call: +91 9158800517
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              {["47+ Years Experience","500+ Projects","Premium Paint Brands","Free Site Visit"].map((badge, i) => (
                <span key={i} className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
                  <CheckCircle className="h-3.5 w-3.5 text-orange-400" />{badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="py-3 bg-gray-900 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6 text-center">
            {[
              "✅ Trusted Since 1977",
              "✅ GST Registered Business",
              "✅ Owner Supervised Every Project",
              "✅ Premium Paint Brands Only",
              "✅ Written Quotation",
              "✅ No Hidden Charges",
            ].map((item, i) => (
              <span key={i} className="text-xs font-semibold text-gray-300">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-orange-500 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30 text-center text-white">
            <div className="px-4 py-2"><p className="text-2xl font-black">47+</p><p className="text-xs font-semibold mt-1">Years Experience</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">500+</p><p className="text-xs font-semibold mt-1">Projects Completed</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">100%</p><p className="text-xs font-semibold mt-1">Owner Supervised</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">Free</p><p className="text-xs font-semibold mt-1">Site Inspection</p></div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>What We Offer</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>All Painting Services</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>Click any service to learn more — or WhatsApp us directly for a free quote.</p>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => {
              const waUrl = `https://wa.me/919158800517?text=${encodeURIComponent("Hi, I need a quote for " + s.title + ". Please contact me.")}`
              const quoteUrl = `https://wa.me/919158800517?text=${encodeURIComponent("Hi, I want a free site visit for " + s.title + ". Please contact me.")}`
              return (
                <div key={i} className="overflow-hidden rounded-xl shadow-sm flex flex-col">
                  <Link href={s.href} className="relative h-44 block group">
                    <Image src={s.img} alt={s.title + " in Mumbai"} fill className="object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="rounded-full bg-white px-4 py-2 text-xs font-bold" style={{color:"#1B2B8A"}}>View Service →</span>
                    </div>
                  </Link>
                  <div className="p-4 flex items-start justify-between gap-3 flex-1" style={{backgroundColor:"#1B2B8A"}}>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-orange-400">{s.subtitle}</p>
                      <h3 className="font-bold text-sm text-white mt-0.5">{s.title}</h3>
                      <ul className="mt-2 space-y-0.5">
                        {s.points.map((pt) => (
                          <li key={pt} className="flex items-center gap-1.5 text-xs text-blue-200">
                            <CheckCircle className="h-3 w-3 text-orange-400 shrink-0" />{pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                      <a href={waUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold text-white"
                        style={{backgroundColor:"#25D366"}}>
                        <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                      </a>
                      <a href={quoteUrl} target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold bg-white"
                        style={{color:"#1B2B8A"}}>
                        Free Quote
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Why Bhairav Painting Service?</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-6 shadow-sm">
                <CheckCircle className="h-6 w-6 text-orange-500" />
                <h3 className="mt-3 font-bold text-base" style={{color:"#1B2B8A"}}>{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed" style={{color:"#6b7280"}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>How We Work</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Our Painting Process</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>A structured, transparent process from first call to final handover.</p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {process.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full text-white font-black text-sm" style={{backgroundColor:"#1B2B8A"}}>{item.step}</div>
                {i < process.length - 1 && <div className="hidden lg:block absolute" />}
                <h3 className="mt-3 font-bold text-xs" style={{color:"#1B2B8A"}}>{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed" style={{color:"#6b7280"}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Who We Serve</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Property Types We Paint</h2>
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              { category: "Residential", color: "#e0e7ff", items: ["Apartments & Flats", "Villas & Bungalows", "Independent Houses", "Housing Societies", "Penthouse & Duplex", "Studio Apartments"] },
              { category: "Commercial", color: "#fef3c7", items: ["Offices & Co-working", "Shops & Showrooms", "Hotels & Restaurants", "Warehouses & Factories", "Hospitals & Clinics", "Schools & Colleges"] },
              { category: "Builders & Developers", color: "#d1fae5", items: ["New Construction Painting", "Residential Projects", "Commercial Projects", "Society Repainting", "Handover Painting", "Mixed-Use Developments"] },
            ].map((cat, i) => (
              <div key={i} className="rounded-2xl p-6" style={{backgroundColor:cat.color}}>
                <h3 className="font-black text-lg" style={{color:"#1B2B8A"}}>{cat.category}</h3>
                <ul className="mt-4 space-y-2">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={{color:"#374151"}}>
                      <CheckCircle className="h-4 w-4 text-orange-500 shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMON PROBLEMS */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Common Problems</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Common Painting Problems & Solutions</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>Identifying the right problem leads to the right solution. Here is what we commonly fix across Mumbai properties.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {problems.map((item, i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-200 p-5 shadow-sm">
                <p className="font-black text-sm" style={{color:"#dc2626"}}>Problem: {item.problem}</p>
                <p className="mt-2 text-xs leading-relaxed" style={{color:"#6b7280"}}><span className="font-semibold" style={{color:"#1B2B8A"}}>Solution: </span>{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="py-20" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">Who We Work With</span>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Who We Work With</h2>
          <p className="mt-3 text-sm text-blue-200 max-w-xl">We work with homeowners, businesses and professionals across Mumbai, Thane & Bhiwandi.</p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { img: "/images/workwith-builders.jpg", label: "Builders & Developers", desc: "New construction & handover painting" },
              { img: "/images/workwith-architects.jpg", label: "Architects", desc: "Spec-based premium finish execution" },
              { img: "/images/workwith-interior.jpg", label: "Interior Designers", desc: "Custom colours & texture finishes" },
              { img: "/images/workwith-society.jpg", label: "Housing Societies", desc: "Complete exterior repainting projects" },
              { img: "/images/workwith-factory.jpg", label: "Factories & Warehouses", desc: "Industrial coatings & large areas" },
              { img: "/images/workwith-office.jpg", label: "Corporate Offices", desc: "Off-hours commercial painting" },
            ].map((item, i) => (
              <div key={i} className="overflow-hidden rounded-xl">
                <div className="relative h-28"><Image src={item.img} alt={item.label} fill className="object-cover" /></div>
                <div className="p-3 text-center" style={{backgroundColor:"rgba(255,255,255,0.1)"}}>
                  <p className="text-xs font-bold text-white">{item.label}</p>
                  <p className="mt-0.5 text-xs text-blue-200">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20want%20to%20discuss%20a%20painting%20project." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-3 text-sm font-bold text-white"
              style={{backgroundColor:"#25D366"}}>
              <MessageCircle className="h-4 w-4" /> Discuss Your Project
            </a>
          </div>
        </div>
      </section>

      {/* LOCAL CONTENT */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Local Expertise</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Painting Services Across Mumbai Region</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: "Painting Services in Mumbai", desc: "We provide residential, commercial and building painting services across all areas of Mumbai including Andheri, Borivali, Dadar, Kurla, Chembur, Mulund and surrounding areas. Exterior painting with weatherproof systems suited to Mumbai's coastal humidity and heavy monsoon." },
              { city: "Painting Services in Thane", desc: "Complete painting services in Thane — residential apartments, commercial offices, retail stores and housing society repainting. Surface preparation, premium branded paints and owner-supervised execution for all Thane projects." },
              { city: "Painting Services in Navi Mumbai", desc: "Professional painting contractor serving Navi Mumbai — Vashi, Kharghar, Nerul, Panvel and surrounding areas. Residential, commercial and waterproofing services with free site visit and written quotation." },
              { city: "Painting Services in Kalyan", desc: "Painting services in Kalyan and Dombivli — residential homes, apartments, commercial spaces and housing societies. Experienced team with knowledge of local building styles and climate conditions." },
              { city: "Painting Services in Bhiwandi", desc: "Specialised commercial and industrial painting in Bhiwandi — warehouses, factories, offices and commercial complexes. Durable industrial coatings and commercial paint systems for Bhiwandi's industrial zone properties." },
              { city: "Painting Services in Dombivli", desc: "Residential and commercial painting services in Dombivli — apartments, independent houses, offices and retail spaces. Free site visit, written quotation and premium branded paints for all Dombivli projects." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl bg-white border border-gray-200 p-6 shadow-sm">
                <h3 className="font-bold text-base" style={{color:"#1B2B8A"}}>{item.city}</h3>
                <p className="mt-2 text-xs leading-relaxed" style={{color:"#6b7280"}}>{item.desc}</p>
                <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20painting%20services.%20Please%20contact%20me." target="_blank" rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold" style={{color:"#f97316"}}>
                  <MessageCircle className="h-3.5 w-3.5" /> Get Free Quote →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">Service Areas</span>
          <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Areas We Serve</h2>
          <p className="mt-3 text-sm text-blue-200 max-w-xl">Professional painting services across the Mumbai metropolitan region.</p>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {serviceAreas.map((item, i) => (
              <div key={i} className="rounded-xl p-4 text-center" style={{backgroundColor:"rgba(255,255,255,0.1)"}}>
                <p className="font-black text-white text-base">{item.area}</p>
                <p className="mt-1 text-xs text-blue-200">{item.types}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WATERPROOFING HIGHLIGHT */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12" style={{backgroundColor:"#1B2B8A"}}>
                <span className="inline-block rounded-full border border-white/30 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">Most Urgent Service</span>
                <h2 className="mt-3 text-2xl font-black text-white sm:text-3xl">Roof Leaking? Wall Seepage? Damp Problems?</h2>
                <p className="mt-3 text-sm text-blue-200 leading-relaxed">Water damage gets worse every day it is left untreated. A small leak today can cause major structural damage within one monsoon season. Get it fixed before it costs more.</p>
                <ul className="mt-5 space-y-2">
                  {["Terrace & Roof Waterproofing", "Wall Seepage Treatment", "Bathroom Waterproofing", "Basement Waterproofing", "Dr Fixit & Asian Paints SmartCare Products", "Permanent Solutions — Not Temporary Fixes"].map((pt, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-white">
                      <CheckCircle className="h-3.5 w-3.5 text-orange-400 shrink-0" />{pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="https://wa.me/919158800517?text=Hi%2C%20I%20have%20a%20water%20leakage%20problem.%20I%20need%20waterproofing%20inspection." target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white"
                    style={{backgroundColor:"#25D366"}}>
                    <MessageCircle className="h-4 w-4" /> Book Free Inspection
                  </a>
                  <Link href="/services/waterproofing"
                    className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                    Learn More →
                  </Link>
                </div>
              </div>
              <div className="relative min-h-64">
                <Image src="/images/waterproofing.jpg" alt="Waterproofing services Mumbai" fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center" style={{backgroundColor:"rgba(0,0,0,0.3)"}}>
                  <div className="text-center p-6">
                    <p className="text-4xl font-black text-white">Same Day</p>
                    <p className="text-lg font-bold text-orange-400">Site Visit Available</p>
                    <p className="mt-2 text-xs text-white/80">Call or WhatsApp now for urgent waterproofing inspection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON SECTION */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Why Professional Painting?</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Professional Painter vs Local Painter</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>Understanding the difference helps you make the right decision for your property.</p>
          <div className="mt-10 overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold uppercase tracking-wider bg-gray-50" style={{color:"#6b7280"}}>Factor</th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider text-white" style={{backgroundColor:"#1B2B8A"}}>Bhairav Painting Service</th>
                  <th className="px-6 py-4 text-center text-xs font-bold uppercase tracking-wider bg-red-50" style={{color:"#dc2626"}}>Local / Unknown Painter</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: "Surface Preparation", pro: "✅ Full prep — crack filling, putty, primer", local: "❌ Often skipped to save time" },
                  { factor: "Paint Brands", pro: "✅ Asian Paints, Berger, Nerolac, Dulux", local: "❌ Unbranded or low-grade paint" },
                  { factor: "Written Quotation", pro: "✅ Detailed written quote before work", local: "❌ Verbal quote, hidden charges later" },
                  { factor: "Workmanship Warranty", pro: "✅ Defects rectified at no cost", local: "❌ No warranty on labour" },
                  { factor: "Paint Consumption", pro: "✅ Correct coats as per specification", local: "❌ Diluted paint, fewer coats" },
                  { factor: "Finish Quality", pro: "✅ Smooth, even, professional finish", local: "❌ Uneven texture, brush marks" },
                  { factor: "Durability", pro: "✅ 5–8 years with correct system", local: "❌ Peeling within 1–2 years" },
                  { factor: "Project Timeline", pro: "✅ Timeline committed and followed", local: "❌ Delays common, no accountability" },
                  { factor: "Owner Supervision", pro: "✅ Every project owner supervised", local: "❌ Labour only, no supervision" },
                  { factor: "GST Invoice", pro: "✅ GST registered, proper invoice", local: "❌ No GST, no accountability" },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-6 py-3 font-semibold text-xs" style={{color:"#374151"}}>{row.factor}</td>
                    <td className="px-6 py-3 text-xs text-center" style={{color:"#15803d"}}>{row.pro}</td>
                    <td className="px-6 py-3 text-xs text-center" style={{color:"#dc2626"}}>{row.local}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20want%20a%20free%20site%20visit%20from%20Bhairav%20Painting%20Service." target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-3 text-sm font-bold text-white"
              style={{backgroundColor:"#25D366"}}>
              <MessageCircle className="h-4 w-4" /> Book Free Site Visit
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>FAQ</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-5">
                <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>Q: {faq.q}</p>
                <p className="mt-2 text-sm leading-relaxed" style={{color:"#6b7280"}}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}
