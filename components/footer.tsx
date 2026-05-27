import Link from "next/link"
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react"

const services = [
  { name: "Residential Painting", href: "/services/residential" },
  { name: "Interior Painting", href: "/services/interior" },
  { name: "Building & Exterior Painting", href: "/services/building" },
  { name: "Commercial Painting", href: "/services/commercial" },
  { name: "Texture & Designer Finishes", href: "/services/texture" },
  { name: "Waterproofing", href: "/services/waterproofing" },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
]

const serviceAreas = [
  "Bhiwandi", "Thane", "Kalyan", "Mumbai", "Navi Mumbai", "Vasai", "Virar", "Andheri",
]

export function Footer() {
  return (
    <footer className="bg-[#1B2B8A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/">
              <span className="text-xl font-black text-black bg-white px-2 py-1 rounded">BHAIRAV PAINTING SERVICES</span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Professional painting contractor based in Bhiwandi, serving Mumbai, Thane, Kalyan & surrounding areas with 50+ years of experience.
            </p>
            <div className="mt-6 space-y-3">
              <a href="tel:+919158800517" className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-orange-400 shrink-0" />
                +91 9158800517
              </a>
              <a href="https://wa.me/919158800517" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors">
                <MessageCircle className="h-4 w-4 text-orange-400 shrink-0" />
                WhatsApp: 9158800517
              </a>
              <a href="mailto:bhairavpaintingservice@gmail.com" className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-orange-400 shrink-0" />
                bhairavpaintingservice@gmail.com
              </a>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <MapPin className="h-4 w-4 text-orange-400 shrink-0" />
                Bhiwandi, Maharashtra
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Clock className="h-4 w-4 text-orange-400 shrink-0" />
                All Days
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400">Our Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400">Service Areas</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-full border border-white/30 px-3 py-1 text-xs text-white/80">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">
            © 2026 Bhairav Painting Service. All rights reserved. | Bhiwandi, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  )
}
