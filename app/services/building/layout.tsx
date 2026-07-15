import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Building & Society Painting in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Complete building and housing society painting services. Scaffolding, waterproofing and common area painting included. Free site visit across Mumbai region.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
