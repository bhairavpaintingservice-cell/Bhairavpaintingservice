import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Interior Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Expert interior painting for bedrooms, living rooms, kitchens and bathrooms. Premium branded paints, surface preparation included. Free site visit across Mumbai & Thane.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
