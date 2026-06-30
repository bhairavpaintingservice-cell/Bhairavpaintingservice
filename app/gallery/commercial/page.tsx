import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Phone, ImageIcon, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commercial Painting Gallery | Bhairav Painting Service",
  description: "Browse our commercial painting project gallery — Office, Showroom, Warehouse, Restaurant, Retail Chain & Co-working space photos.",
}

const galleries = [
  { title: "Office Painting", img: "/images/commercial/commercial-office.jpg", href: "/gallery/office-painting" },
  { title: "Shop & Showroom Painting", img: "/images/commercial/commercial-showroom.jpg", href: "/gallery/showroom-painting" },
  { title: "Warehouse & Factory Painting", img: "/images/commercial/commercial-warehouse.jpg", href: "/gallery/warehouse-painting" },
  { title: "Restaurant & Hotel Painting", img: "/images/commercial/commercial-restaurant.jpg", href: "/gallery/restaurant-painting" },
  { title: "Retail Chain Painting", img: "/images/commercial/commercial-retail.jpg", href: "/gallery/retail-painting" },
  { title: "Co-working & Business Centers", img: "/images/commercial/commercial-coworking.jpg", href: "/gallery/coworking-painting" },
]

export default function CommercialGalleryPage() {
  return (
    <main>
      {/* HERO */}
      <section className="pt-32 pb-12" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/gallery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-200 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Gallery
          </Link>
          <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">Commercial Painting Gallery</h1>
          <p className="mt-2 text-blue-200 text-sm">Choose a commercial category to view project photos.</p>
        </div>
      </section>

      {/* GALLERY FOLDERS */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <h2 className="text-2xl font-black text-white sm:text-3xl">Need Commercial Painting?</h2>
          <p className="mt-3 text-blue-200 text-sm">Get a free site visit and written quotation today.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20quote%20for%20Commercial%20Painting." target="_blank" rel="noopener noreferrer"
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
