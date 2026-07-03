import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Phone, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dining Room Painting Gallery | Bhairav Painting Service",
  description: "View our Dining Room Painting project photos across Mumbai, Thane & Bhiwandi.",
}

const images = ["/images/interior-painting.jpg"]

export default function GalleryPage() {
  return (
    <main>
      <section className="pt-32 pb-12" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/gallery/interior" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-200 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>
          <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">Dining Room Painting Gallery</h1>
          <p className="mt-2 text-blue-200 text-sm">Photos from our dining room painting projects across Mumbai, Thane & Bhiwandi.</p>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, i) => (
              <div key={i} className="overflow-hidden rounded-xl shadow-sm">
                <div className="relative h-64">
                  <Image src={img} alt={`Dining Room Painting ${i+1}`} fill className="object-cover hover:scale-105 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-xl bg-white border border-gray-200 p-6 text-center">
            <p className="text-sm text-gray-500">More photos coming soon.</p>
            <Link href="/services/interior" className="mt-2 inline-block text-sm font-semibold" style={{color:"#1B2B8A"}}>View Service Details →</Link>
          </div>
        </div>
      </section>
      <section className="py-16" style={{backgroundColor:"#1B2B8A"}}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-white">Need Dining Room Painting?</h2>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20Dining%20Room%20Painting." target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-bold text-white" style={{backgroundColor:"#25D366"}}>
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a href="tel:+919158800517" className="flex items-center justify-center gap-2 rounded-lg border-2 border-white px-6 py-3 text-sm font-bold text-white">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
