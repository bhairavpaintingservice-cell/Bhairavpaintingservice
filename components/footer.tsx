import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const navigation = {
  services: [
    { name: "Residential Painting", href: "/services#residential" },
    { name: "Commercial Painting", href: "/services#commercial" },
    { name: "Building Painting", href: "/services#building" },
    { name: "Designer & Textured", href: "/services#designer" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-tight">
                Bhavirav
              </span>
              <span className="block text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
                Painting Service
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Professional painting services in Mumbai with 10+ years of experience. 
              Transforming homes and offices into beautiful spaces.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-primary-foreground/70">5.0 Google Rating</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a href="tel:+919158800517" className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  +91 9158800517
                </a>
              </li>
              <li>
                <a href="mailto:Bhairavpaintingservice@gmail.com" className="flex items-start gap-3 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                  Bhairavpaintingservice@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                Mumbai, Maharashtra, India
              </li>
              <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                Mon-Sat: 8AM - 7PM
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Bhavirav Painting Service. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">
            500+ Happy Customers | 100% Quality Guarantee
          </p>
        </div>
      </div>
    </footer>
  )
}
