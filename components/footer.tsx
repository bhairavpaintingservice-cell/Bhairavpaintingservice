import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, MessageCircle, Clock, Facebook, Instagram, Youtube, Linkedin } from "lucide-react"
import ProtectedEmailLink from "@/components/protected-email-link"

const services = [
  { name: "Residential Painting", href: "/services/residential" },
  { name: "Interior Painting", href: "/services/interior" },
  { name: "Building Painting", href: "/services/building" },
  { name: "Exterior Painting", href: "/services/exterior" },
  { name: "Commercial Painting", href: "/services/commercial" },
  { name: "Texture & Designer Finishes", href: "/services/designer/texture" },
  { name: "Waterproofing", href: "/services/waterproofing" },
]

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy-policy" },
  { name: "Terms & Conditions", href: "/terms-and-conditions" },
  { name: "Sitemap", href: "/sitemap.xml" },
]

const serviceAreas = [
  "Bhiwandi", "Thane", "Kalyan", "Mumbai", "Navi Mumbai",
  "Vasai", "Virar", "Andheri", "Dombivli", "Kasheli", "Kalher",
]

export function Footer() {
  return (
    <footer className="bg-[#1B2B8A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-white rounded-lg p-1 shrink-0">
                <Image src="/images/logo-icon.png" alt="Bhairav Painting Services" width={36} height={36} className="h-9 w-9 object-contain" />
              </div>
              <span className="text-sm font-black text-white leading-tight">BHAIRAV PAINTING SERVICES</span>
            </Link>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Professional painting contractor based in Bhiwandi, serving Mumbai, Thane, Kalyan & surrounding areas with 47+ years of experience.
            </p>
            <div className="mt-6 space-y-3">
              <a href="tel:+919158800517" className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-orange-400 shrink-0" />+91 9158800517
              </a>
              <a href="https://wa.me/919158800517" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors">
                <MessageCircle className="h-4 w-4 text-orange-400 shrink-0" />WhatsApp: 9158800517
              </a>
              <div className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-orange-400 shrink-0" /><ProtectedEmailLink />
              </div>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="h-4 w-4 text-orange-400 shrink-0 mt-0.5" />
                <span>Shop No. 03, H. No. 167/4, Gr. Floor, Near Devji Nagar Bus Stop, Opp Muthoot Finance, Narpoli, Bhiwandi - 421302, Maharashtra</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Clock className="h-4 w-4 text-orange-400 shrink-0" />All Days
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              <a href="https://www.facebook.com/profile.php?id=61589093235759" target="_blank" rel="noopener noreferrer"
                aria-label="Bhairav Painting Service on Facebook"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 text-white hover:bg-orange-500 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/bhairavpaintingservice/" target="_blank" rel="noopener noreferrer"
                aria-label="Bhairav Painting Service on Instagram"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 text-white hover:bg-orange-500 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.youtube.com/@BhaviravEnterprise" target="_blank" rel="noopener noreferrer"
                aria-label="Bhairav Painting Service on YouTube"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 text-white hover:bg-orange-500 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
              <a href="https://www.linkedin.com/in/bhavirav-enterprise-918a36369/" target="_blank" rel="noopener noreferrer"
                aria-label="Bhairav Painting Service on LinkedIn"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 text-white hover:bg-orange-500 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="https://x.com/bhairavpainting" target="_blank" rel="noopener noreferrer"
                aria-label="Bhairav Painting Service on X"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 text-white hover:bg-orange-500 transition-colors">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400">Our Services</h3>
            <ul className="mt-4 space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-orange-400">Service Areas</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <span key={area} className="rounded-full border border-white/30 px-3 py-1 text-xs text-white/80">{area}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">© 2026 Bhairav Painting Service. All rights reserved. | Bhiwandi, Maharashtra</p>
        </div>
      </div>
    </footer>
  )
}
