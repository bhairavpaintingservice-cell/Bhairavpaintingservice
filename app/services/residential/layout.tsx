import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residential Painting Mumbai & Bhiwandi | Bhairav Painting',
  description: 'Residential painting in Mumbai, Thane & Bhiwandi. 1BHK to Villa. Free site visit. Call +91 9158800517.',
}

export default function ResidentialLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
