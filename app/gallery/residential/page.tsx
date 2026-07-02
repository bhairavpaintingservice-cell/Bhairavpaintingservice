import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Phone, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Residential Painting Gallery | Bhairav Painting Service",
  description: "View our Residential Painting project photos across Mumbai, Thane & Bhiwandi. 1BHK, 2BHK, 3BHK, Villa, Society painting experts.",
}

const images = [
  { src: "/images/residential/res-gallery.jpg", alt: "Residential Flat Painting" },
  { src: "/images/residential/res-1bhk.jpg", alt: "1BHK Flat Painting" },
  { src: "/images/residential/res-2bhk.jpg", alt: "2BHK Flat Painting" },
  { src: "/images/residential/res-3bhk.jpg", alt: "3BHK Flat Painting" },
  { src: "/images/residential/res-flat.jpg", alt: "Flat Repainting" },
  { src: "/images/residential/res-villa.jpg", alt: "Villa Painting" },
  { src: "/images/residential/res-society.jpg", alt: "Society Painting" },
  { src: "/images/residential/res-rental.jpg", alt: "Rental Flat Painting" },
  { src: "/images/residential/res-new-flat.jpg", alt: "New Flat Painting" },
  { src: "/images/residential/res-interior.jpg", alt: "Interior Painting" },
  { src: "/images/residential/res-collage.jpg", alt: "Residential Projects" },
  { src: "/images/residential/res-before-after-1.jpg", alt: "Before After 1" },
  { src: "/images/residential/res-before-after-2.jpg", alt: "Before After 2" },
  { src: "/images/residential/res-before-after-3.jpg", alt: "Before After 3" },
]

export default function ResidentialGalleryPage() {
  return (
    <main>
      <section className="pt-32 pb-12" style={{ backgroundColor: "#1B2B8A" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/gallery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-200 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Gallery
          </Link>
          <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">Residential Painting Gallery</h1>
          <p className="mt-2 text-blue-200 text-sm">1BHK, 2BHK, 3BHK, Villa & Society painting projects across Mumbai, Thane & Bhiwandi.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-sm group">
                <div className="relative h-64">
                  <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl bg-white border border-gray-200 p-6 text-center">
            <p className="text-sm text-gray-500">More photos coming soon. Want to see residential painting examples in person?</p>
            <div className="mt-4">
              <Link href="/services/residential" className="text-sm font-semibold" style={{ color: "#1B2B8A" }}>View Residential Painting Service Details →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#1B2B8A" }}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-white sm:text-3xl">Want Residential Painting for Your Home?</h2>
          <p className="mt-3 text-blue-200 text-sm">Get a free site visit and written quotation today.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20quote%20for%20Residential%20Painting." target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white"
              style={{ backgroundColor: "#25D366" }}>
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
