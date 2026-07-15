import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Waterproofing Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Stop roof leaks, wall seepage and damp problems. Dr Fixit, Asian Paints SmartCare products used. Same day site visit available across Mumbai, Thane & Bhiwandi.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
