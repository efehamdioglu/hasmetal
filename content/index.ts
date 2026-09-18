import raw from './data.json'
import { projectDetails } from './site'
import type { ImageRef, Project, SiteData } from './types'

export const data = raw as unknown as SiteData

export function image(key: string): ImageRef {
  const found = data.images[key]
  if (!found) throw new Error(`Unknown image key: ${key}`)
  return found
}

/** Projects with whatever detail the client has confirmed merged in. */
export const projects: Project[] = data.projects.map((p) => ({ ...p, ...projectDetails[p.slug] }))

export function project(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

/** Cities in descending project count, for the index filter. */
export const cities: { name: string; count: number }[] = Object.entries(
  projects.reduce<Record<string, number>>((acc, p) => {
    if (!p.city) return acc
    acc[p.city] = (acc[p.city] ?? 0) + 1
    return acc
  }, {}),
)
  .map(([name, count]) => ({ name, count }))
  .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, 'tr'))

export const about = data.about
