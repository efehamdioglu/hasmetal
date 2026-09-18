import type { MetadataRoute } from 'next'
import { abs } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  return {
    // /gone answers 410 on its own; it is listed so a crawler does not spend
    // a request discovering that
    rules: [{ userAgent: '*', allow: '/', disallow: ['/gone'] }],
    sitemap: abs('/sitemap.xml'),
  }
}
