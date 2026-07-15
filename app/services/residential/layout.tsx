import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Residential Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Professional residential painting for homes, apartments and societies. 47+ years experience, premium paints, owner supervised. Free site visit across Mumbai, Thane & Bhiwandi.",
  openGraph: {
    title: "Residential Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
    description: "Professional residential painting for homes, apartments and societies. 47+ years experience, premium paints, owner supervised. Free site visit across Mumbai, Thane & Bhiwandi.",
    url: "https://bhairavpaintingservice.vercel.app/services/residential",
    siteName: "Bhairav Painting Service",
    images: [{ url: "https://bhairavpaintingservice.vercel.app/images/residential.webp", width: 900, height: 600 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
    description: "Professional residential painting for homes, apartments and societies. 47+ years experience, premium paints, owner supervised. Free site visit across Mumbai, Thane & Bhiwandi.",
    images: ["https://bhairavpaintingservice.vercel.app/images/residential.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
