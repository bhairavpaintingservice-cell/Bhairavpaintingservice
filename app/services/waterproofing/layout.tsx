import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Waterproofing Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Stop roof leaks, wall seepage and damp problems. Dr Fixit, Asian Paints SmartCare products used. Same day site visit available across Mumbai, Thane & Bhiwandi.",
  openGraph: {
    title: "Waterproofing Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
    description: "Stop roof leaks, wall seepage and damp problems. Dr Fixit, Asian Paints SmartCare products used. Same day site visit available across Mumbai, Thane & Bhiwandi.",
    url: "https://bhairavpaintingservice.vercel.app/services/waterproofing",
    siteName: "Bhairav Painting Service",
    images: [{ url: "https://bhairavpaintingservice.vercel.app/images/waterproofing.jpg", width: 900, height: 600 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Waterproofing Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
    description: "Stop roof leaks, wall seepage and damp problems. Dr Fixit, Asian Paints SmartCare products used. Same day site visit available across Mumbai, Thane & Bhiwandi.",
    images: ["https://bhairavpaintingservice.vercel.app/images/waterproofing.jpg"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
