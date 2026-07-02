import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Phone, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Waterproofing Gallery | Bhairav Painting Service",
  description: "View our Waterproofing project photos across Mumbai, Thane & Bhiwandi. 47+ years experience, premium paint brands, owner supervised.",
}

const images = [
  "/images/waterproofing.jpg",
]

export default function GalleryPage() {
  return (
    <main>
      <section className="pt-32 pb-12" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/gallery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-200 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Gallery
          </Link>
          <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">Waterproofing Gallery</h1>
          <p className="mt-2 text-blue-200 text-sm">Photos from our waterproofing projects across Mumbai, Thane & Bhiwandi.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-sm">
                <div className="relative h-64">
                  <Image src={img} alt={`Waterproofing project ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl bg-white border border-gray-200 p-6 text-center">
            <p className="text-sm" style={{color:"#6b7280"}}>More photos coming soon.</p>
            <Link href="/services/waterproofing" className="mt-2 inline-block text-sm font-semibold" style={{color:"#1B2B8A"}}>View Waterproofing Service Details →</Link>
          </div>
        </div>
      </section>

      <section className="py-16" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-white">Need Waterproofing?</h2>
          <p className="mt-3 text-blue-200 text-sm">Get a free site visit and written quotation today.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20quote%20for%20Waterproofing." target="_blank" rel="noopener noreferrer"
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
