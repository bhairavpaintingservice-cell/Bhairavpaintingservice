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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Bhairav Painting Service",
  "image": "https://bhairavpaintingservice.vercel.app/images/logo.png",
  "url": "https://bhairavpaintingservice.vercel.app",
  "telephone": "+919158800517",
  "email": "bhairavpaintingservice@gmail.com",
  "description": "Professional commercial painting contractor with 47+ years experience serving Mumbai, Thane, Bhiwandi and Kalyan.",
  "foundingDate": "1977",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bhiwandi",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 19.3002,
    "longitude": 73.0595
  },
  "areaServed": [
    { "@type": "City", "name": "Mumbai" },
    { "@type": "City", "name": "Thane" },
    { "@type": "City", "name": "Bhiwandi" },
    { "@type": "City", "name": "Kalyan" },
    { "@type": "City", "name": "Navi Mumbai" }
  ],
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "08:00",
    "closes": "19:00"
  },
  "priceRange": "₹₹",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Commercial Painting Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Office Painting" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shop & Showroom Painting" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehouse & Factory Painting" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Restaurant & Hotel Painting" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Retail Chain Painting" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Co-working & Business Centers" }}
    ]
  }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://bhairavpaintingservice.vercel.app" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://bhairavpaintingservice.vercel.app/services" },
    { "@type": "ListItem", "position": 3, "name": "Commercial Painting", "item": "https://bhairavpaintingservice.vercel.app/services/commercial" }
  ]
}

export default function CommercialLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {children}
    </>
  )
}
