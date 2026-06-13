import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Exterior Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Professional exterior painting for homes, buildings & societies in Mumbai, Thane, Bhiwandi & Kalyan. Weather-resistant, durable finish. 47+ years experience. Free site visit.",
  keywords: [
    "exterior painting mumbai","exterior painting bhiwandi","exterior painting thane",
    "house exterior painting kalyan","building painting mumbai","society painting thane",
    "weather resistant paint mumbai","exterior painter bhiwandi","bhairav painting service"
  ],
  openGraph: {
    title: "Exterior Painting Services | Bhairav Painting Service",
    description: "Professional exterior painting for homes, buildings & societies. 47+ years experience. Free site visit.",
    url: "https://bhairavpainting.vercel.app/services/exterior",
    siteName: "Bhairav Painting Service",
    locale: "en_IN",
    type: "website",
  },
}

export default function ExteriorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
