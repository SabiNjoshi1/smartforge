import type { MetadataRoute } from 'next'
import { allRoutes } from '@/lib/site'
export default function sitemap(): MetadataRoute.Sitemap { return allRoutes.map(path => ({ url: `https://smartforge.dev${path}`, lastModified: new Date('2026-01-01'), changeFrequency: path === '/' ? 'weekly' : 'monthly', priority: path === '/' ? 1 : 0.6 })) }
