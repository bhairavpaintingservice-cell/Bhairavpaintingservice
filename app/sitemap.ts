import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bhairavpaintingservice.vercel.app'

  const makeEntry = (path: string, priority: number, freq: string) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: freq as any,
    priority,
  })

  return [
    // Main pages
    makeEntry('/', 1.0, 'weekly'),
    makeEntry('/about', 0.8, 'monthly'),
    makeEntry('/contact', 0.9, 'monthly'),
    makeEntry('/gallery', 0.8, 'weekly'),
    makeEntry('/services', 0.9, 'monthly'),

    // Service pages
    makeEntry('/services/residential', 0.9, 'monthly'),
    makeEntry('/services/interior', 0.9, 'monthly'),
    makeEntry('/services/exterior', 0.9, 'monthly'),
    makeEntry('/services/building', 0.9, 'monthly'),
    makeEntry('/services/commercial', 0.9, 'monthly'),
    makeEntry('/services/waterproofing', 0.9, 'monthly'),
    makeEntry('/services/designer/texture', 0.9, 'monthly'),

    // Gallery main categories
    makeEntry('/gallery/residential', 0.7, 'weekly'),
    makeEntry('/gallery/interior', 0.7, 'weekly'),
    makeEntry('/gallery/exterior', 0.7, 'weekly'),
    makeEntry('/gallery/building', 0.7, 'weekly'),
    makeEntry('/gallery/commercial', 0.7, 'weekly'),
    makeEntry('/gallery/waterproofing', 0.7, 'weekly'),
    makeEntry('/gallery/designer-texture', 0.7, 'weekly'),

    // Residential gallery sub-pages
    makeEntry('/gallery/1bhk-painting', 0.6, 'weekly'),
    makeEntry('/gallery/2bhk-painting', 0.6, 'weekly'),
    makeEntry('/gallery/3bhk-painting', 0.6, 'weekly'),
    makeEntry('/gallery/flat-repainting', 0.6, 'weekly'),
    makeEntry('/gallery/new-flat-painting', 0.6, 'weekly'),
    makeEntry('/gallery/villa-painting', 0.6, 'weekly'),
    makeEntry('/gallery/society-painting', 0.6, 'weekly'),
    makeEntry('/gallery/rental-flat-painting', 0.6, 'weekly'),

    // Building gallery sub-pages
    makeEntry('/gallery/exterior-building-painting', 0.6, 'weekly'),
    makeEntry('/gallery/society-repainting', 0.6, 'weekly'),
    makeEntry('/gallery/waterproofing-building', 0.6, 'weekly'),
    makeEntry('/gallery/crack-filling', 0.6, 'weekly'),
    makeEntry('/gallery/terrace-coating', 0.6, 'weekly'),
    makeEntry('/gallery/staircase-painting', 0.6, 'weekly'),
    makeEntry('/gallery/parking-area-painting', 0.6, 'weekly'),
    makeEntry('/gallery/common-area-painting', 0.6, 'weekly'),
    makeEntry('/gallery/compound-wall-painting', 0.6, 'weekly'),
    makeEntry('/gallery/metal-railing-painting', 0.6, 'weekly'),

    // Interior gallery sub-pages
    makeEntry('/gallery/bedroom-painting', 0.6, 'weekly'),
    makeEntry('/gallery/living-room-painting', 0.6, 'weekly'),
    makeEntry('/gallery/kitchen-painting', 0.6, 'weekly'),
    makeEntry('/gallery/dining-room-painting', 0.6, 'weekly'),
    makeEntry('/gallery/study-room-painting', 0.6, 'weekly'),
    makeEntry('/gallery/kids-room-painting', 0.6, 'weekly'),
    makeEntry('/gallery/pooja-room-painting', 0.6, 'weekly'),
    makeEntry('/gallery/ceiling-staircase-painting', 0.6, 'weekly'),

    // Commercial gallery sub-pages
    makeEntry('/gallery/office-painting', 0.6, 'weekly'),
    makeEntry('/gallery/showroom-painting', 0.6, 'weekly'),
    makeEntry('/gallery/warehouse-painting', 0.6, 'weekly'),
    makeEntry('/gallery/restaurant-painting', 0.6, 'weekly'),
    makeEntry('/gallery/retail-painting', 0.6, 'weekly'),
    makeEntry('/gallery/coworking-painting', 0.6, 'weekly'),

    // Designer & Texture gallery sub-pages
    makeEntry('/gallery/stencil-wall', 0.6, 'weekly'),
    makeEntry('/gallery/accent-wall', 0.6, 'weekly'),
    makeEntry('/gallery/feature-wall', 0.6, 'weekly'),
    makeEntry('/gallery/metallic-wall', 0.6, 'weekly'),
    makeEntry('/gallery/combination-finish', 0.6, 'weekly'),
    makeEntry('/gallery/sand-texture', 0.6, 'weekly'),
    makeEntry('/gallery/sponge-texture', 0.6, 'weekly'),
    makeEntry('/gallery/rustic-stone-texture', 0.6, 'weekly'),
    makeEntry('/gallery/metallic-texture', 0.6, 'weekly'),
  ]
}
