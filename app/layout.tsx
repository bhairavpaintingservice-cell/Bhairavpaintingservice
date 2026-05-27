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
  title: 'Bhairav Painting Service | Professional Painters in Mumbai & Bhiwandi',
  description: 'Bhairav Painting Service — Mumbai & Bhiwandi ke trusted painting contractors. Residential, Commercial, Exterior & Texture painting. 47+ years experience. Call +91 9158800517',
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
  openGraph: {
    title: 'Bhairav Painting Service | Mumbai & Bhiwandi',
    description: 'Professional painting services — Residential, Commercial, Exterior & Designer finishes. 47+ years experience.',
    url: 'https://bhairavpainting.vercel.app',
    siteName: 'Bhairav Painting Service',
    locale: 'en_IN',
    type: 'website',
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
      </body>
    </html>
  )
}
