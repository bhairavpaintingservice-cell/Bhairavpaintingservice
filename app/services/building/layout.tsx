import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Building & Society Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Professional building and housing society painting services. Exterior painting, waterproofing, common areas. AGM-ready quotes. 47+ years experience. Free site visit.",
  keywords: [
    "building painting mumbai","society painting thane","housing society painting bhiwandi",
    "CHS painting contractor","apartment complex painting","building exterior painting kalyan",
    "society waterproofing","bhairav painting service"
  ],
  openGraph: {
    title: "Building & Society Painting Services | Bhairav Painting Service",
    description: "Professional building and housing society painting. Exterior, waterproofing & common areas. 47+ years experience.",
    url: "https://bhairavpaintingservice.vercel.app/services/building",
    siteName: "Bhairav Painting Service",
    locale: "en_IN",
    type: "website",
  },
}

export default function BuildingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
