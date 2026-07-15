import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Exterior Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Weatherproof exterior painting for homes and buildings. Monsoon-ready paint systems, crack repair included. Free site visit across Mumbai, Thane & Bhiwandi.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
