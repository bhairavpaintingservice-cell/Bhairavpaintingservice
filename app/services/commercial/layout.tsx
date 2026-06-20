import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Commercial Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Professional commercial painting for offices, shops, showrooms, warehouses & restaurants. Off-hours scheduling, owner supervised, 47+ years experience. Free site visit.",
  keywords: [
    "commercial painting contractor mumbai","office painting thane","shop painting bhiwandi",
    "showroom painting kalyan","warehouse painting mumbai","restaurant painting thane",
    "retail painting contractor","bhairav painting service"
  ],
  openGraph: {
    title: "Commercial Painting Services | Bhairav Painting Service",
    description: "Professional commercial painting for offices, shops, showrooms, warehouses & restaurants. 47+ years experience.",
    url: "https://bhairavpaintingservice.vercel.app/services/commercial",
    siteName: "Bhairav Painting Service",
    locale: "en_IN",
    type: "website",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Can you work outside business hours?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we offer evening, night and weekend scheduling so your business operations are not disrupted." }},
    { "@type": "Question", "name": "Do you handle multi-location/branch projects?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we manage consistent painting standards across multiple branches of the same business." }},
    { "@type": "Question", "name": "Do you provide material, or only labour?", "acceptedAnswer": { "@type": "Answer", "text": "Both options — Material + Labour (we arrange everything) or Labour Only (you supply paint)." }},
    { "@type": "Question", "name": "Which paint brands do you use?", "acceptedAnswer": { "@type": "Answer", "text": "Asian Paints, Berger, Nerolac and Dulux — branded paints only, no shortcuts." }},
    { "@type": "Question", "name": "Do you offer a workmanship warranty?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — any defect due to our work is rectified at no extra cost." }},
    { "@type": "Question", "name": "Do you offer free site visits for commercial properties?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — 100% free, with a detailed written quotation, no obligation." }}
  ]
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Painting Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Bhairav Painting Service",
    "telephone": "+919158800517",
    "areaServed": ["Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai"]
  },
  "serviceType": "Commercial Painting",
  "description": "Professional commercial painting services including office painting, shop and showroom painting, warehouse and factory painting, restaurant and hotel painting, and retail chain painting.",
  "areaServed": ["Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai"]
}

export default function CommercialLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  )
}
