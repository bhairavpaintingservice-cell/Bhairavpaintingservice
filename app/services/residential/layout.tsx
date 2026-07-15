import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Residential Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Professional residential painting for homes, apartments and societies. 47+ years experience, premium paints, owner supervised. Free site visit across Mumbai, Thane & Bhiwandi.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
