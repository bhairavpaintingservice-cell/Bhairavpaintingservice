import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: "Contact Us | Bhairav Painting Service - Mumbai, Thane & Bhiwandi",
  description: "Get in touch with Bhairav Painting Service for a free site visit and written quotation. Call, WhatsApp or fill our contact form. 47+ years experience.",
  openGraph: {
    title: "Contact Us | Bhairav Painting Service - Mumbai, Thane & Bhiwandi",
    description: "Get in touch with Bhairav Painting Service for a free site visit and written quotation. Call, WhatsApp or fill our contact form. 47+ years experience.",
    url: "https://bhairavpaintingservice.vercel.app/contact",
    siteName: "Bhairav Painting Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Bhairav Painting Service - Mumbai, Thane & Bhiwandi",
    description: "Get in touch with Bhairav Painting Service for a free site visit and written quotation. Call, WhatsApp or fill our contact form. 47+ years experience.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
