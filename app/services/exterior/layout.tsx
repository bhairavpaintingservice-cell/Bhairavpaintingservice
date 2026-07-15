import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Exterior Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Weatherproof exterior painting for homes and buildings. Monsoon-ready paint systems, crack repair included. Free site visit across Mumbai, Thane & Bhiwandi.",
  openGraph: {
    title: "Exterior Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
    description: "Weatherproof exterior painting for homes and buildings. Monsoon-ready paint systems, crack repair included. Free site visit across Mumbai, Thane & Bhiwandi.",
    url: "https://bhairavpaintingservice.vercel.app/services/exterior",
    siteName: "Bhairav Painting Service",
    images: [{ url: "https://bhairavpaintingservice.vercel.app/images/exterior-new.jpg", width: 900, height: 600 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exterior Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
    description: "Weatherproof exterior painting for homes and buildings. Monsoon-ready paint systems, crack repair included. Free site visit across Mumbai, Thane & Bhiwandi.",
    images: ["https://bhairavpaintingservice.vercel.app/images/exterior-new.jpg"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
