import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Expert interior painting for bedrooms, living rooms, kitchens and bathrooms. Premium branded paints, surface preparation included. Free site visit across Mumbai & Thane.",
  openGraph: {
    title: "Interior Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
    description: "Expert interior painting for bedrooms, living rooms, kitchens and bathrooms. Premium branded paints, surface preparation included. Free site visit across Mumbai & Thane.",
    url: "https://bhairavpaintingservice.vercel.app/services/interior",
    siteName: "Bhairav Painting Service",
    images: [{ url: "https://bhairavpaintingservice.vercel.app/images/interior-painting.jpg", width: 900, height: 600 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Interior Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
    description: "Expert interior painting for bedrooms, living rooms, kitchens and bathrooms. Premium branded paints, surface preparation included. Free site visit across Mumbai & Thane.",
    images: ["https://bhairavpaintingservice.vercel.app/images/interior-painting.jpg"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
