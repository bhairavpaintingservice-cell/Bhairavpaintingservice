import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Designer & Texture Painting in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Premium designer wall and texture painting finishes — stencil, metallic, sand texture. Custom finishes for homes and offices across Mumbai & Thane.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
