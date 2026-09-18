import type { MetadataRoute } from 'next'
import { projects } from '@/content'
import { catalogues } from '@/content/catalogues'
import { LOCALES, routes, type Locale } from '@/content/i18n'
import { products, services, systems } from '@/content/site'
import { abs } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  /** every entry lists both languages so crawlers pair them up */
  const entry = (
    forLocale: (l: Locale) => string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
  ) =>
    LOCALES.map((locale) => ({
      url: abs(forLocale(locale)),
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(LOCALES.map((l) => [l, abs(forLocale(l))])),
      },
    }))

  return [
    ...entry((l) => routes.home(l), 1, 'monthly'),
    ...entry((l) => routes.projects(l), 0.9, 'monthly'),
    ...entry((l) => routes.systems(l), 0.9, 'monthly'),
    ...entry((l) => routes.about(l), 0.8, 'yearly'),
    ...entry((l) => routes.contact(l), 0.8, 'yearly'),
    ...entry((l) => routes.quote(l), 0.8, 'yearly'),
    ...entry((l) => routes.commerce(l), 0.7, 'yearly'),
    ...entry((l) => routes.products(l), 0.7, 'monthly'),
    ...entry((l) => routes.services(l), 0.7, 'monthly'),
    ...entry((l) => routes.partners(l), 0.6, 'yearly'),
    ...entry((l) => routes.catalogues(l), 0.8, 'monthly'),
    ...catalogues.flatMap((c) => entry((l) => routes.catalogue(l, c.slug), 0.7, 'yearly')),
    ...systems.flatMap((s) => entry((l) => routes.system(l, s.slug), 0.8, 'monthly')),
    ...products.flatMap((p) => entry((l) => routes.product(l, p.slug), 0.6, 'monthly')),
    ...services.flatMap((s) => entry((l) => routes.service(l, s.slug), 0.6, 'monthly')),
    ...projects.flatMap((p) => entry((l) => routes.project(l, p.slug), 0.7, 'yearly')),
  ]
}
