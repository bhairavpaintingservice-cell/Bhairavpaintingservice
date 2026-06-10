import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Painting Mumbai & Bhiwandi | Bhairav Painting",
  description: "Interior painting for homes & flats in Mumbai, Thane & Bhiwandi. Bedroom, living room, kitchen. Free site visit. Call +91 9158800517.",
  keywords: [
    "interior painting mumbai",
    "interior painting bhiwandi",
    "interior painting thane",
    "bedroom painting mumbai",
    "living room painting thane",
    "home interior painting kalyan",
    "flat interior painting bhiwandi",
    "interior painter near me",
    "bhairav painting service"
  ],
  openGraph: {
    title: "Interior Painting Services | Bhairav Painting Service",
    description: "Professional interior painting for homes & flats. Bedroom, living room, kitchen. 47+ years experience. Free site visit.",
    url: "https://bhairavpainting.vercel.app/services/interior",
    siteName: "Bhairav Painting Service",
    locale: "en_IN",
    type: "website",
  },
}

export default function InteriorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
