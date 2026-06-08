import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bhairavpainting.vercel.app'),
  title: 'Bhairav Painting Service | Mumbai & Bhiwandi',
  description: 'Trusted painting contractors in Mumbai & Bhiwandi. Residential, Commercial & Texture painting. 47+ years experience. Free site visit!',
  keywords: [
    'painting service mumbai',
    'painting contractor bhiwandi',
    'house painting virar vasai',
    'exterior painting mumbai',
    'texture paint contractor mumbai',
    'commercial painting borivali',
    'interior painting mira road',
    'building painting nalasopara',
    'painter near me mumbai',
    'bhairav painting service'
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Bhairav Painting Service | Mumbai & Bhiwandi',
    description: 'Professional painting services — Residential, Commercial, Exterior & Designer finishes. 47+ years experience.',
    url: 'https://bhairavpainting.vercel.app',
    siteName: 'Bhairav Painting Service',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bhairav Painting Service - Professional Painters in Mumbai',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhairav Painting Service | Mumbai & Bhiwandi',
    description: 'Professional painting services — Residential, Commercial, Exterior & Designer finishes. 47+ years experience.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}


const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Bhairav Painting Service",
  "description": "Professional painting services in Mumbai & Bhiwandi — Residential, Commercial, Exterior & Texture painting.",
  "url": "https://bhairavpainting.vercel.app",
  "telephone": "+919158800517",
  "email": "bhairavpaintingservice@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Shop No. 03, H. No. 167/4, Gr. floor, Near Devji Nagar Bus Stop, Opp. Muthoot Finance, Narpoli",
    "addressLocality": "Bhiwandi",
    "addressRegion": "Maharashtra",
    "postalCode": "421302",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.3024",
    "longitude": "73.0596"
  },
  "areaServed": ["Mumbai", "Bhiwandi", "Thane", "Virar", "Vasai", "Mira Road", "Borivali", "Nalasopara"],
  "serviceType": [
    "Interior Painting",
    "Exterior Painting",
    "Texture Painting",
    "Commercial Painting",
    "Waterproofing",
    "False Ceiling",
    "Designer Painting"
  ],
  "image": "https://bhairavpainting.vercel.app/og-image.jpg",
  "priceRange": "₹₹",
  "openingHours": "Mo-Su 08:00-20:00"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </body>
    </html>
  )
}
