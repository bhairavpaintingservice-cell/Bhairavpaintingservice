import Link from "next/link"
import { Phone, MessageCircle, Home } from "lucide-react"

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center" style={{backgroundColor:"#f9fafb"}}>
      <span className="inline-block rounded-full border border-gray-300 px-4 py-1 text-xs font-semibold uppercase tracking-widest" style={{color:"#6b7280"}}>404 Error</span>
      <h1 className="mt-4 text-4xl font-black sm:text-5xl" style={{color:"#1B2B8A"}}>Page Not Found</h1>
      <p className="mt-4 max-w-md text-sm" style={{color:"#6b7280"}}>
        Sorry, the page you're looking for doesn't exist or has moved. Let's get you back on track.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors"
          style={{backgroundColor:"#1B2B8A"}}
        >
          <Home className="h-4 w-4" /> Back to Home
        </Link>
        <a
          href="https://wa.me/919158800517"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp Us
        </a>
        <a
          href="tel:+919158800517"
          className="flex items-center justify-center gap-2 rounded-full border-2 px-6 py-3 text-sm font-semibold shadow-sm transition-colors"
          style={{borderColor:"#1B2B8A", color:"#1B2B8A"}}
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs">
        <Link href="/services" className="underline" style={{color:"#1B2B8A"}}>Our Services</Link>
        <span style={{color:"#d1d5db"}}>|</span>
        <Link href="/gallery" className="underline" style={{color:"#1B2B8A"}}>Gallery</Link>
        <span style={{color:"#d1d5db"}}>|</span>
        <Link href="/contact" className="underline" style={{color:"#1B2B8A"}}>Contact Us</Link>
      </div>
    </main>
  )
}
