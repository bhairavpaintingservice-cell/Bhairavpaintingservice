import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Waterproofing Services Mumbai & Bhiwandi | Bhairav Painting',
  description: 'Professional waterproofing in Mumbai, Thane & Bhiwandi. Terrace, roof, bathroom & damp wall treatment. Dr Fixit & Asian Paints. Free site visit!',
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Waterproofing kya hoti hai?", "acceptedAnswer": { "@type": "Answer", "text": "Waterproofing ek process hai jisme special chemicals aur coatings use karke terrace, roof, bathroom, walls aur basement ko water leakage aur seepage se protect kiya jata hai." }},
    { "@type": "Question", "name": "Waterproofing kitne saal tak chalti hai?", "acceptedAnswer": { "@type": "Answer", "text": "Quality materials aur proper application ke saath waterproofing 5–10 saal ya usse zyada chal sakti hai." }},
    { "@type": "Question", "name": "Terrace waterproofing kyu zaruri hai?", "acceptedAnswer": { "@type": "Answer", "text": "Terrace sabse zyada rainwater face karta hai. Waterproofing seepage, cracks aur structural damage ko rokne me madad karti hai." }},
    { "@type": "Question", "name": "Roof leakage ka permanent solution kya hai?", "acceptedAnswer": { "@type": "Answer", "text": "Professional inspection ke baad cracks sealing, waterproof membrane aur protective coating lagakar leakage permanently control ki ja sakti hai." }},
    { "@type": "Question", "name": "Bathroom waterproofing bina tiles tode ho sakti hai?", "acceptedAnswer": { "@type": "Answer", "text": "Kuch cases me tile joints treatment aur chemical injection se repair ho sakti hai. Severe leakage me tiles remove karna pad sakta hai." }},
    { "@type": "Question", "name": "Damp walls ka permanent treatment kya hai?", "acceptedAnswer": { "@type": "Answer", "text": "Source identify karke waterproofing treatment, crack filling aur anti-damp coating apply ki jati hai." }},
    { "@type": "Question", "name": "Waterproofing ka best time kab hota hai?", "acceptedAnswer": { "@type": "Answer", "text": "Monsoon ke pehle — March se May — waterproofing karwana sabse beneficial hota hai." }},
    { "@type": "Question", "name": "Dr Fixit waterproofing better hai?", "acceptedAnswer": { "@type": "Answer", "text": "Dr Fixit (Pidilite) industry me trusted brand hai aur terrace, roof, bathroom aur wall waterproofing ke liye widely used hota hai." }},
    { "@type": "Question", "name": "Kya waterproofing warranty ke saath milti hai?", "acceptedAnswer": { "@type": "Answer", "text": "Haan, warranty project aur material type ke according vary karti hai. Written warranty confirm karte hain kaam shuru hone se pehle." }},
    { "@type": "Question", "name": "Kya aap free site visit provide karte hain?", "acceptedAnswer": { "@type": "Answer", "text": "Haan, Bhairav Painting Service free site inspection aur quotation provide karta hai — koi charge nahi, koi obligation nahi." }}
  ]
}

export default function WaterproofingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
