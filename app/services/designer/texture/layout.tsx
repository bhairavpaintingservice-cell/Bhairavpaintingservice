import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Designer & Texture Painting in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Premium designer wall and texture painting finishes — stencil, metallic, sand texture. Custom finishes for homes and offices across Mumbai & Thane.",
  openGraph: {
    title: "Designer & Texture Painting in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
    description: "Premium designer wall and texture painting finishes — stencil, metallic, sand texture. Custom finishes for homes and offices across Mumbai & Thane.",
    url: "https://bhairavpaintingservice.vercel.app/services/designer/texture",
    siteName: "Bhairav Painting Service",
    images: [{ url: "https://bhairavpaintingservice.vercel.app/images/texture.webp", width: 900, height: 600 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Designer & Texture Painting in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
    description: "Premium designer wall and texture painting finishes — stencil, metallic, sand texture. Custom finishes for homes and offices across Mumbai & Thane.",
    images: ["https://bhairavpaintingservice.vercel.app/images/texture.webp"],
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
