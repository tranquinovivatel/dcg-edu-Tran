import { MetadataRoute } from 'next'
import { PROJECTS } from '@/lib/project-data'
 
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const brands = PROJECTS.map((project) => ({
    url: `https://dcgedu.com/marcas/${project.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: 'https://dcgedu.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://dcgedu.com/marcas',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    ...brands,
  ]
}
