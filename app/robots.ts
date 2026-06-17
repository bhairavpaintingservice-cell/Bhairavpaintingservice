import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [
      'https://bhairavpaintingservice.vercel.app/sitemap.xml',
      'https://bhairavpaintingservice.vercel.app/sitemap_index.xml',
    ],
  }
}
