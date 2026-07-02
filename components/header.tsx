"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react"

const services = [
  { name: "Residential Painting", href: "/services/residential" },
  { name: "Interior Painting", href: "/services/interior" },
  { name: "Building Painting", href: "/services/building" },
  { name: "Exterior Painting", href: "/services/exterior" },
  { name: "Commercial Painting", href: "/services/commercial" },
  { name: "Texture & Designer Finishes", href: "/services/designer/texture" },
  { name: "Waterproofing", href: "/services/waterproofing" },
]

const navigation = [
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Gallery", href: "/gallery" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image src="/images/logo-icon.png" alt="Bhairav Painting Services" width={40} height={40} className="h-10 w-10 object-contain" priority />
            <span className="text-base font-black text-black leading-tight">BHAIRAV PAINTING SERVICES</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 items-center">
          <Link href="/" className="text-sm font-medium text-gray-700 transition-colors hover:text-[#1B2B8A]">Home</Link>

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <Link href="/services" className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-[#1B2B8A]">
              Services <ChevronDown className="h-4 w-4" />
            </Link>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 rounded-xl bg-white shadow-lg border border-gray-100 py-2 z-50">
                <p className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest" style={{color:"#f97316"}}>OUR SERVICES</p>
                {services.map((s) => (
                  <Link key={s.name} href={s.href}
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-[#1B2B8A] transition-colors">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-gray-700 transition-colors hover:text-[#1B2B8A]">{item.name}</Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20painting%20quote" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition-colors">
            <MessageCircle className="h-4 w-4" /> WhatsApp Us
          </a>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/images/logo-icon.png" alt="Bhairav Painting Services" width={36} height={36} className="h-9 w-9 object-contain" />
                <span className="text-sm font-black text-black">BHAIRAV PAINTING SERVICES</span>
              </Link>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                <div className="space-y-1 py-6">
                  <Link href="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                  <div>
                    <p className="px-3 pt-3 pb-1 text-xs font-bold uppercase tracking-widest" style={{color:"#f97316"}}>Services</p>
                    {services.map((s) => (
                      <Link key={s.name} href={s.href} className="-mx-3 block rounded-lg px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>{s.name}</Link>
                    ))}
                  </div>
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50" onClick={() => setMobileMenuOpen(false)}>{item.name}</Link>
                  ))}
                </div>
                <div className="py-6">
                  <a href="https://wa.me/919158800517?text=Hi%2C%20I%20need%20a%20painting%20quote" target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-lg bg-orange-500 px-4 py-3 text-sm font-semibold text-white">
                    <MessageCircle className="h-4 w-4" /> WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
