import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Residential Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Professional residential painting services for flats, apartments, villas & societies across Mumbai, Thane, Bhiwandi & Maharashtra. 47+ years experience. Free site visit.",
  keywords: [
    "residential painting mumbai",
    "house painting bhiwandi",
    "flat painting thane",
    "home painting service",
    "1bhk painting",
    "2bhk painting",
    "3bhk painting",
    "society painting contractor",
    "residential painter mumbai",
    "bhairav painting service",
    "home painters near me"
  ],
  openGraph: {
    title: "Residential Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
    description: "Professional residential painting for flats, apartments, villas & societies. 47+ years experience.",
    url: "https://bhairavpainting.vercel.app/services/residential",
    siteName: "Bhairav Painting Service",
    locale: "en_IN",
    type: "website",
  },
}

export default function ResidentialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
