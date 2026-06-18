import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Building & Society Painting Services in Mumbai, Thane & Bhiwandi | Bhairav Painting Service",
  description: "Professional building and housing society painting services. Exterior painting, waterproofing, common areas. AGM-ready quotes. 47+ years experience. Free site visit.",
  keywords: [
    "building painting mumbai","society painting thane","housing society painting bhiwandi",
    "CHS painting contractor","apartment complex painting","building exterior painting kalyan",
    "society waterproofing","bhairav painting service"
  ],
  openGraph: {
    title: "Building & Society Painting Services | Bhairav Painting Service",
    description: "Professional building and housing society painting. Exterior, waterproofing & common areas. 47+ years experience.",
    url: "https://bhairavpaintingservice.vercel.app/services/building",
    siteName: "Bhairav Painting Service",
    locale: "en_IN",
    type: "website",
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Building painting ka kharcha kitna hota hai?", "acceptedAnswer": { "@type": "Answer", "text": "Building painting ka kharcha size, floors, condition aur paint brand ke hisab se vary karta hai. Bhairav Painting Service free site visit aur detailed quotation provide karta hai." }},
    { "@type": "Question", "name": "Society painting ke liye AGM approval zaroori hai?", "acceptedAnswer": { "@type": "Answer", "text": "Haan, majority societies mein AGM approval required hoti hai. Hum AGM-ready quotes aur presentations bhi provide karte hain." }},
    { "@type": "Question", "name": "Building painting kitne din mein hoti hai?", "acceptedAnswer": { "@type": "Answer", "text": "G+4 building mein 10-15 din, G+7 mein 18-25 din aur bade complexes mein 30+ din lag sakte hain. Timeline project pe depend karta hai." }},
    { "@type": "Question", "name": "Kya aap residents ke saath coordinate karte hain?", "acceptedAnswer": { "@type": "Answer", "text": "Haan, hum zero disruption approach follow karte hain. Work scheduling, safety nets aur resident communication sab hum handle karte hain." }},
    { "@type": "Question", "name": "Kaunsa paint brand best hai building ke liye?", "acceptedAnswer": { "@type": "Answer", "text": "Asian Paints Apex aur Nerolac Excel exterior ke liye best hain. Brand recommendation site inspection ke baad dete hain." }},
    { "@type": "Question", "name": "Kya waterproofing bhi saath mein hoti hai?", "acceptedAnswer": { "@type": "Answer", "text": "Haan, hum painting ke saath terrace waterproofing, crack filling aur external wall treatment bhi karte hain — ek hi vendor se." }}
  ]
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Building & Society Painting Services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Bhairav Painting Service",
    "telephone": "+919158800517",
    "areaServed": ["Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai"]
  },
  "serviceType": "Building Painting",
  "description": "Professional building and housing society painting services including exterior painting, waterproofing, common area painting, staircase, parking area and compound wall painting.",
  "areaServed": ["Mumbai", "Thane", "Bhiwandi", "Kalyan", "Navi Mumbai"]
}

export default function BuildingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      {children}
    </>
  )
}
