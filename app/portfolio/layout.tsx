import type { Metadata } from "next"

export const metadata: Metadata = {
  alternates: { canonical: '/portfolio' },
  title: "Our Portfolio | Bhairav Painting Service",
  description: "Browse our portfolio of completed residential, commercial, exterior and designer painting projects across Mumbai, Thane & Bhiwandi.",
  openGraph: {
    title: "Our Portfolio | Bhairav Painting Service",
    description: "Browse our portfolio of completed residential, commercial, exterior and designer painting projects across Mumbai, Thane & Bhiwandi.",
    url: "https://bhairavpaintingservice.vercel.app/portfolio",
    siteName: "Bhairav Painting Service",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Portfolio | Bhairav Painting Service",
    description: "Browse our portfolio of completed residential, commercial, exterior and designer painting projects across Mumbai, Thane & Bhiwandi.",
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
