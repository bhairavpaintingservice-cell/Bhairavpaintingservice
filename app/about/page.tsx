import Image from "next/image"
import Link from "next/link"
import { CheckCircle, MessageCircle, Phone, Award, Users, Star, Heart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Bhairav Painting Service — Trusted Painting Experts Since 1979",
  description: "Bhairav Painting Service — a family legacy since 1979. 47+ years of trusted painting experience across Mumbai, Thane & Bhiwandi. Three generations of quality, honesty and craftsmanship.",
}

export default function AboutPage() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-32 pb-16" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">About Us</span>
              <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl leading-tight">Trusted Painting Experts Since 1979</h1>
              <p className="mt-4 text-lg text-blue-200">We Don&apos;t Just Paint Walls. We Protect Properties, Build Trust, and Create Spaces That Last.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["47+ Years Experience","3 Generations","500+ Projects","Owner Supervised","Premium Paint Brands"].map((b, i) => (
                  <span key={i} className="flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white">
                    <CheckCircle className="h-3.5 w-3.5 text-orange-400" />{b}
                  </span>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20painting%20quote." target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white"
                  style={{backgroundColor:"#25D366"}}>
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
                <a href="tel:+919158800517"
                  className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                  <Phone className="h-4 w-4" /> Call: +91 9158800517
                </a>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image src="/images/founder.jpg" alt="Bhairav Painting Service" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-orange-500 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30 text-center text-white">
            <div className="px-4 py-2"><p className="text-2xl font-black">1979</p><p className="text-xs font-semibold mt-1">Established</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">47+</p><p className="text-xs font-semibold mt-1">Years Experience</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">500+</p><p className="text-xs font-semibold mt-1">Projects Completed</p></div>
            <div className="px-4 py-2"><p className="text-2xl font-black">3</p><p className="text-xs font-semibold mt-1">Generations</p></div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Our Story</span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>A Family Legacy Built on Trust</h2>
              <p className="mt-4 text-sm leading-relaxed" style={{color:"#6b7280"}}>
                Every family business has a story. Ours began in 1979, when our grandfather founded Bhairav Painting Service with one simple belief: customers deserve honest workmanship and genuine quality.
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{color:"#6b7280"}}>
                At that time, traditional chuna (lime wash) was widely used for painting homes and buildings. While many painters delivered good work, some contractors reduced costs by mixing low-quality materials, resulting in finishes that faded quickly and didn&apos;t last. Our grandfather believed there was a better way — use the right materials, prepare every surface properly, and never compromise on quality.
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{color:"#6b7280"}}>
                After our grandfather&apos;s passing, our father carried his vision forward. With the same dedication and honesty, he expanded the business from traditional chuna work into putty and primer application, waterproofing, residential painting, commercial painting, and complete building painting solutions.
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{color:"#6b7280"}}>
                Today, we proudly work alongside him, continuing the family legacy into the next generation. While techniques, materials, and technology have evolved, the values established in 1979 continue to guide every decision we make. Because for us, this isn&apos;t simply a business — it&apos;s our family&apos;s legacy.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Award, title: "Founded in 1979", desc: "Our grandfather started with traditional chuna work, building trust through honest workmanship one project at a time." },
                { icon: Users, title: "Three Generations", desc: "Each generation has added something new while keeping one promise unchanged — treat every customer's property as our own." },
                { icon: Star, title: "Traditional Values, Modern Techniques", desc: "47+ years of experience combined with modern techniques — airless spray painting, advanced putty systems, waterproofing and texture finishes." },
                { icon: Heart, title: "Long-Term Relationships", desc: "Many customers first hired us years ago and continue to choose us. Builders, societies and businesses return — that trust means everything to us." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 rounded-xl border border-gray-200 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full shrink-0" style={{backgroundColor:"#f0f4ff"}}>
                    <item.icon className="h-5 w-5" style={{color:"#1B2B8A"}} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{color:"#1B2B8A"}}>{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed" style={{color:"#6b7280"}}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY / MILESTONES */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Our Journey</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>How We Grew — One Project at a Time</h2>
          <p className="mt-3 text-sm max-w-2xl" style={{color:"#6b7280"}}>We didn&apos;t grow overnight. We grew one satisfied customer at a time. Every new opportunity was earned through quality work, trust and recommendations.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { year: "1979", title: "Traditional Chuna Work", desc: "Founded by our grandfather. Started with lime wash work, earning trust through honest workmanship." },
              { year: "1980s–90s", title: "Expanding Services", desc: "Moved into putty & primer application, professional waterproofing, and individual room painting." },
              { year: "2000s", title: "Residential & Commercial", desc: "Expanded to apartments, independent homes, offices, cafés, retail stores and housing societies." },
              { year: "Today", title: "Complete Solutions", desc: "Residential, commercial, building painting, waterproofing, texture finishes — serving Mumbai, Thane & Bhiwandi." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-6" style={{backgroundColor:"#1B2B8A"}}>
                <p className="text-2xl font-black text-orange-400">{item.year}</p>
                <p className="mt-2 font-bold text-sm text-white">{item.title}</p>
                <p className="mt-1 text-xs text-blue-200 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Why Choose Bhairav Painting Service?</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Since 1979 — 47+ Years", desc: "Over 47 years of trusted family experience. A legacy built on honest workmanship across three generations." },
              { title: "Proper Surface Preparation", desc: "Great painting starts with proper preparation — crack repairs, putty, sanding, primer and waterproofing where required." },
              { title: "Premium Paint Brands", desc: "Asian Paints, Berger, Nerolac, Dulux, JSW Paints, Indigo Paints and Nippon Paint — right product for every property." },
              { title: "Honest Advice", desc: "Recommendations based on your property's actual needs — not upselling. Transparent quotation with no hidden charges." },
              { title: "Clean & Professional Work", desc: "PPE usage, furniture & floor protection, organised work areas, daily site cleaning and final project cleanup." },
              { title: "Long-Term Relationships", desc: "Many customers return years later for repainting, waterproofing and new projects. That trust means everything to us." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-gray-200 p-5 shadow-sm">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <h3 className="mt-3 font-bold text-sm" style={{color:"#1B2B8A"}}>{item.title}</h3>
                <p className="mt-1 text-xs leading-relaxed" style={{color:"#6b7280"}}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Our Values</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>What Guides Every Project</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>Everything we do is guided by the same principles that started our journey in 1979.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Quality Before Shortcuts",
              "Honest Recommendations",
              "Proper Surface Preparation",
              "Skilled Workmanship",
              "Transparent Pricing",
              "Clean Work Environment",
              "Respect for Every Property",
              "Long-Term Relationships",
              "Continuous Learning & Improvement",
            ].map((val, i) => (
              <div key={i} className="flex items-start gap-2 rounded-xl bg-white border border-gray-200 p-4 shadow-sm">
                <CheckCircle className="h-4 w-4 text-orange-500 shrink-0 mt-0.5" />
                <p className="text-xs font-semibold" style={{color:"#1B2B8A"}}>{val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>What We Do</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Our Services</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: "Residential Painting", href: "/services/residential", img: "/images/residential.webp" },
              { label: "Interior Painting", href: "/services/interior", img: "/images/interior-painting.jpg" },
              { label: "Exterior Painting", href: "/services/exterior", img: "/images/exterior-new.jpg" },
              { label: "Commercial Painting", href: "/services/commercial", img: "/images/commercial.webp" },
              { label: "Building & Society", href: "/services/building", img: "/images/portfolio-building.webp" },
              { label: "Waterproofing", href: "/services/waterproofing", img: "/images/waterproofing.jpg" },
              { label: "Designer & Texture", href: "/services/designer/texture", img: "/images/texture.webp" },
              { label: "Wood & Metal Painting", href: "/services/residential", img: "/images/wood-metal-painting.jpg" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="overflow-hidden rounded-xl shadow-sm group">
                <div className="relative h-32">
                  <Image src={item.img} alt={item.label} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-end p-3">
                    <p className="font-bold text-xs text-white">{item.label}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Let&apos;s Transform More Than Just Your Walls</h2>
          <p className="mt-4 text-blue-200 text-sm max-w-2xl mx-auto">When you choose Bhairav Painting Service, you&apos;re choosing a family legacy built on trust, strengthened through generations, and committed to delivering craftsmanship that lasts.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20want%20a%20free%20site%20inspection." target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-bold text-white"
              style={{backgroundColor:"#25D366"}}>
              <MessageCircle className="h-5 w-5" /> Get Free Site Inspection
            </a>
            <a href="tel:+919158800517"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-base font-bold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-5 w-5" /> Call: +91 9158800517
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
