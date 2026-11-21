import type { Metadata } from "next"

// Utility page for the Google Business Profile WhatsApp button.
// Not for search results, so it is kept out of the index.
export const metadata: Metadata = {
  title: "Opening WhatsApp | Bhairav Painting Service",
  robots: { index: false, follow: false },
}

export default function GbpWhatsAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
