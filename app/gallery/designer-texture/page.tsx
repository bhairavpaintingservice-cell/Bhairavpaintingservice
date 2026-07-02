import Image from "next/image"
import Link from "next/link"
import { MessageCircle, Phone, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Designer & Texture Painting Gallery | Bhairav Painting Service",
  description: "View our Designer & Texture painting project photos — accent walls, metallic finish, stencil, rustic texture across Mumbai, Thane & Bhiwandi.",
}

const images = [
  { src: "/images/designer/accent-wall.jpg", alt: "Accent Wall" },
  { src: "/images/designer/accent-project.jpg", alt: "Accent Wall Project" },
  { src: "/images/designer/feature-wall.jpg", alt: "Feature Wall" },
  { src: "/images/designer/feature-project.jpg", alt: "Feature Wall Project" },
  { src: "/images/designer/metallic-wall.jpg", alt: "Metallic Finish" },
  { src: "/images/designer/metallic-project.jpg", alt: "Metallic Finish Project" },
  { src: "/images/designer/stencil-wall.jpg", alt: "Stencil Painting" },
  { src: "/images/designer/stencil-project.jpg", alt: "Stencil Project" },
  { src: "/images/designer/texture-metallic.jpg", alt: "Metallic Texture" },
  { src: "/images/designer/texture-rustic.jpg", alt: "Rustic Texture" },
  { src: "/images/designer/texture-sand.jpg", alt: "Sand Texture" },
  { src: "/images/designer/texture-sponge.jpg", alt: "Sponge Texture" },
  { src: "/images/designer/texture-project.jpg", alt: "Texture Project" },
  { src: "/images/designer/combination-finish.jpg", alt: "Combination Finish" },
  { src: "/images/designer/combination-project.jpg", alt: "Combination Project" },
  { src: "/images/designer/area-hall.jpg", alt: "Hall Designer Painting" },
  { src: "/images/designer/area-bedroom.jpg", alt: "Bedroom Designer Painting" },
  { src: "/images/designer/area-living-room.jpg", alt: "Living Room Designer" },
  { src: "/images/designer/area-kids-room.jpg", alt: "Kids Room Designer" },
  { src: "/images/designer/area-tv-wall.jpg", alt: "TV Wall Designer" },
  { src: "/images/designer/area-office.jpg", alt: "Office Designer Painting" },
  { src: "/images/designer/area-shop.jpg", alt: "Shop Designer Painting" },
]

export default function DesignerTextureGalleryPage() {
  return (
    <main>
      <section className="pt-32 pb-12" style={{ backgroundColor: "#1B2B8A" }}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link href="/gallery" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-200 hover:text-white transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Gallery
          </Link>
          <h1 className="mt-4 text-3xl font-black text-white sm:text-4xl">Designer & Texture Painting Gallery</h1>
          <p className="mt-2 text-blue-200 text-sm">Accent walls, metallic finish, stencil, rustic & sand texture projects across Mumbai, Thane & Bhiwandi.</p>
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
            <p className="text-sm text-gray-500">More photos coming soon. Want to see designer painting examples in person?</p>
            <div className="mt-4">
              <Link href="/services/designer-texture" className="text-sm font-semibold" style={{ color: "#1B2B8A" }}>View Designer & Texture Service Details →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#1B2B8A" }}>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-black text-white sm:text-3xl">Want Designer Painting for Your Space?</h2>
          <p className="mt-3 text-blue-200 text-sm">Get a free site visit and written quotation today.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20quote%20for%20Designer%20Texture%20Painting." target="_blank" rel="noopener noreferrer"
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
