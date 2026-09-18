export type ImageRef = {
  src: string
  width: number
  height: number
  blurDataURL: string
  source: string
  alt: string
}

export type Project = {
  slug: string
  name: string
  city: string
  cover: string
  /** filled from content/site.ts once the client confirms them */
  year?: string
  scope?: string
  systems?: string[]
  description?: string
  gallery?: string[]
}

export type Faq = { q: string; a: string }
export type Spec = { label: string; value: string }

export type SiteData = {
  images: Record<string, ImageRef>
  projects: Project[]
  about: string[]
  legacyMeta: Record<string, { title: string; description: string }>
}
