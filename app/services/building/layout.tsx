import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Building & Society Painting in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Complete building and housing society painting services. Scaffolding, waterproofing and common area painting included. Free site visit across Mumbai region.",
  openGraph: {
    title: "Building & Society Painting in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
    description: "Complete building and housing society painting services. Scaffolding, waterproofing and common area painting included. Free site visit across Mumbai region.",
    url: "https://bhairavpaintingservice.vercel.app/services/building",
    siteName: "Bhairav Painting Service",
    images: [{ url: "https://bhairavpaintingservice.vercel.app/images/portfolio-building.webp", width: 900, height: 600 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Building & Society Painting in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
    description: "Complete building and housing society painting services. Scaffolding, waterproofing and common area painting included. Free site visit across Mumbai region.",
    images: ["https://bhairavpaintingservice.vercel.app/images/portfolio-building.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
