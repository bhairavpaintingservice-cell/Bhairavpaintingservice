import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Phone, ImageIcon } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Gallery | Bhairav Painting Service",
  description: "Browse our commercial painting project gallery — Office, Showroom, Warehouse, Restaurant, Retail Chain & Co-working space photos across Mumbai, Thane & Bhiwandi.",
}

const galleries = [
  { title: "Office Painting", img: "/images/commercial/commercial-office.jpg", href: "/gallery/office-painting", count: "6 Photos" },
  { title: "Shop & Showroom Painting", img: "/images/commercial/commercial-showroom.jpg", href: "/gallery/showroom-painting", count: "6 Photos" },
  { title: "Warehouse & Factory Painting", img: "/images/commercial/commercial-warehouse.jpg", href: "/gallery/warehouse-painting", count: "6 Photos" },
  { title: "Restaurant & Hotel Painting", img: "/images/commercial/commercial-restaurant.jpg", href: "/gallery/restaurant-painting", count: "6 Photos" },
  { title: "Retail Chain Painting", img: "/images/commercial/commercial-retail.jpg", href: "/gallery/retail-painting", count: "6 Photos" },
  { title: "Co-working & Business Centers", img: "/images/commercial/commercial-coworking.jpg", href: "/gallery/coworking-painting", count: "6 Photos" },
]

export default function GalleryPage() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-32 pb-16" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-blue-200">Project Gallery</span>
          <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">Our Project Gallery</h1>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">Browse photos from our completed commercial painting projects across Mumbai, Thane & Bhiwandi.</p>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-orange-500 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/30 text-center text-white">
            <div className="px-4 py-2"><p className="text-xl font-black">47+</p><p className="text-xs font-semibold mt-0.5">Years Experience</p></div>
            <div className="px-4 py-2"><p className="text-xl font-black">500+</p><p className="text-xs font-semibold mt-0.5">Projects Completed</p></div>
            <div className="px-4 py-2"><p className="text-xl font-black">100%</p><p className="text-xs font-semibold mt-0.5">Owner Supervised</p></div>
            <div className="px-4 py-2"><p className="text-xl font-black">Free</p><p className="text-xs font-semibold mt-0.5">Site Inspection</p></div>
          </div>
        </div>
      </section>

      {/* GALLERY FOLDERS */}
      <section className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>Browse by Category</span>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl" style={{color:"#1B2B8A"}}>Commercial Project Galleries</h2>
          <p className="mt-3 text-sm max-w-xl" style={{color:"#6b7280"}}>Click any category to view photos from that type of project.</p>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleries.map((g, i) => (
              <Link key={i} href={g.href} className="overflow-hidden rounded-xl shadow-sm group block">
                <div className="relative h-56">
                  <Image src={g.img} alt={g.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <span className="rounded-full bg-white px-5 py-2.5 text-sm font-bold flex items-center gap-2" style={{color:"#1B2B8A"}}>
                      <ImageIcon className="h-4 w-4" /> View Gallery
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4" style={{backgroundColor:"rgba(27,43,138,0.9)"}}>
                    <h3 className="font-bold text-sm text-white">{g.title}</h3>
                    <p className="text-xs text-blue-200 mt-0.5">{g.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-white sm:text-3xl">Want Your Project Featured Here?</h2>
          <p className="mt-3 text-blue-200 text-sm">Get a free site visit and start your painting project today.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20want%20a%20painting%20quote." target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white"
              style={{backgroundColor:"#25D366"}}>
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a href="tel:+919158800517"
              className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
