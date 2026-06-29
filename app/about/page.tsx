import Image from "next/image"
import Link from "next/link"
import { CheckCircle, MessageCircle, Phone, Award, Users, Star, Heart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Bhairav Painting Service — 47+ Years of Painting Excellence",
  description: "Bhairav Painting Service — trusted painting contractor since 1977. 47+ years experience, 500+ projects completed across Mumbai, Thane & Bhiwandi. Owner supervised, premium paint brands.",
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
              <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl leading-tight">Trusted Painting Contractors Since 1977</h1>
              <p className="mt-4 text-lg text-blue-200">47+ years of painting excellence across Mumbai, Thane & Bhiwandi. Built on trust, quality and owner-supervised execution.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {["47+ Years Experience","500+ Projects","Owner Supervised","Premium Paint Brands","Free Site Visit"].map((b, i) => (
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
              <Image src="/images/founder.jpg" alt="Bhairav Painting Service Founder" fill className="object-cover" />
            </div>
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
            <div className="px-4 py-2"><p className="text-2xl font-black">1977</p><p className="text-xs font-semibold mt-1">Established</p></div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Our Story</span>
              <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Our Story</h2>
              <p className="mt-4 text-sm leading-relaxed" style={{color:"#6b7280"}}>
                [Your story content here — replace this with your actual story about how Bhairav Painting Service started, your journey, and your mission.]
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{color:"#6b7280"}}>
                [Add more details about your experience, values, and what makes you different from others.]
              </p>
            </div>
            <div className="space-y-4">
              {[
                { icon: Award, title: "47+ Years of Excellence", desc: "Decades of experience in residential, commercial and industrial painting across Mumbai region." },
                { icon: Users, title: "Skilled & Trained Team", desc: "Our painters are experienced, trained and personally supervised by the owner on every project." },
                { icon: Star, title: "Premium Quality Always", desc: "Only branded paints — Asian Paints, Berger, Nerolac, Dulux. No compromises on quality." },
                { icon: Heart, title: "Customer First", desc: "Every project is treated with care. We listen, plan and deliver to your satisfaction." },
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

      {/* MILESTONES */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Our Journey</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Our Journey</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { year: "1977", title: "Established", desc: "[Your founding story here]" },
              { year: "1990s", title: "[Milestone]", desc: "[Description of milestone]" },
              { year: "2000s", title: "[Milestone]", desc: "[Description of milestone]" },
              { year: "2024", title: "500+ Projects", desc: "Serving happy customers across Mumbai, Thane & Bhiwandi." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl p-6" style={{backgroundColor:"#1B2B8A"}}>
                <p className="text-3xl font-black text-orange-400">{item.year}</p>
                <p className="mt-2 font-bold text-white">{item.title}</p>
                <p className="mt-1 text-xs text-blue-200">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Why Choose Us</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>What Makes Us Different</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Owner Supervised Every Project", desc: "The owner personally visits and supervises every project — not just labour management." },
              { title: "Surface Preparation Always Included", desc: "Crack filling, putty and primer are always included — no shortcuts to save cost." },
              { title: "Premium Paint Brands Only", desc: "Asian Paints, Berger, Nerolac and Dulux — no unbranded or low-grade paint on any project." },
              { title: "Written Quotation", desc: "Every project starts with a detailed written quote — scope, materials, timeline and cost all agreed upfront." },
              { title: "Clean Work Process", desc: "Furniture covered, dust minimised and daily site cleanup — your home or office is respected throughout." },
              { title: "GST Registered Business", desc: "Proper GST invoice provided for every project — transparent and accountable." },
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

      {/* SERVICES */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>What We Do</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Our Services</h2>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { label: "Residential Painting", href: "/services/residential" },
              { label: "Interior Painting", href: "/services/interior" },
              { label: "Exterior Painting", href: "/services/exterior" },
              { label: "Commercial Painting", href: "/services/commercial" },
              { label: "Building & Society", href: "/services/building" },
              { label: "Waterproofing", href: "/services/waterproofing" },
              { label: "Designer & Texture", href: "/services/designer/texture" },
              { label: "Wood & Metal Painting", href: "/services/residential" },
            ].map((item, i) => (
              <Link key={i} href={item.href}
                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow"
                style={{color:"#1B2B8A"}}>
                <CheckCircle className="h-4 w-4 text-orange-500 shrink-0" />{item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-black text-white sm:text-4xl">Ready to Start Your Project?</h2>
          <p className="mt-4 text-blue-200 text-sm max-w-xl mx-auto">Get a free site visit and written quotation. We serve Mumbai, Thane, Bhiwandi, Kalyan & Navi Mumbai.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20want%20a%20free%20site%20visit." target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg px-8 py-4 text-base font-bold text-white"
              style={{backgroundColor:"#25D366"}}>
              <MessageCircle className="h-5 w-5" /> WhatsApp Us
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
