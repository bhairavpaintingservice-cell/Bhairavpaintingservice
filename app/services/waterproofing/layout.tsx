import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Waterproofing Services Mumbai & Bhiwandi | Bhairav Painting',
  description: 'Professional waterproofing in Mumbai, Thane & Bhiwandi. Terrace, roof, bathroom & damp wall treatment. Dr Fixit & Asian Paints. Free site visit!',
}

export default function WaterproofingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
