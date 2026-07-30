import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Bhairav Painting Service",
  description: "Privacy Policy for Bhairav Painting Service — how we collect, use and protect your information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-32 pb-20">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-3xl font-black" style={{color:"#1B2B8A"}}>Privacy Policy</h1>
        <p className="mt-2 text-sm" style={{color:"#6b7280"}}>Last updated: July 2026</p>

        <div className="mt-8 space-y-8 text-sm leading-relaxed" style={{color:"#374151"}}>

          <div>
            <p>Bhairav Painting Service ("we", "us", or "our") operates the website <a href="https://bhairavpaintingservice.vercel.app" className="underline" style={{color:"#1B2B8A"}}>bhairavpaintingservice.vercel.app</a>.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{color:"#1B2B8A"}}>Information We Collect</h2>
            <p className="mb-2">We collect information you provide when you fill out our contact form or lead form, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Service requirements</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{color:"#1B2B8A"}}>How We Use Your Information</h2>
            <p className="mb-2">We use collected information to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Contact you regarding your painting service inquiry</li>
              <li>Schedule site visits and provide quotes</li>
              <li>Improve our services</li>
            </ul>
            <p className="mt-3">We do not sell or share your personal information with third parties.</p>
          </div>

          <div>
            <h2 className="text-lg font-bold mb-3" style={{color:"#1B2B8A"}}>Contact Us</h2>
            <p>Bhairav Painting Service</p>
            <p>Bhiwandi, Maharashtra, India</p>
            <p>Phone: <a href="tel:+919158800517" className="underline" style={{color:"#1B2B8A"}}>+91 9158800517</a></p>
            <p>Email: <a href="mailto:bhairavpaintingservice@gmail.com" className="underline" style={{color:"#1B2B8A"}}>bhairavpaintingservice@gmail.com</a></p>
          </div>

        </div>

        <div className="mt-10">
          <Link href="/" className="text-sm font-semibold" style={{color:"#1B2B8A"}}>← Back to Home</Link>
        </div>
      </div>
    </main>
  )
}
