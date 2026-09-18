/**
 * Everything the site says, in one shape, once per language.
 *
 * Turkish is the source. The other seven files restate the same words and
 * nothing else: no figure, phone number, address, slug or image key lives
 * here, so the languages cannot drift on a fact.
 *
 * The old site offered eight languages through a gtranslate widget, which
 * produced machine translation that Google never indexed. These are written
 * by hand and each one is a real, statically rendered, hreflang-paired site.
 */

export type MetaKey =
  | 'home'
  | 'about'
  | 'systems'
  | 'products'
  | 'services'
  | 'projects'
  | 'partners'
  | 'catalogues'
  | 'commerce'
  | 'contact'
  | 'quote'

export type Ui = {
  nav: {
    about: string
    systems: string
    products: string
    services: string
    projects: string
    partners: string
    catalogues: string
    contact: string
    quote: string
    menu: string
    openMenu: string
    closeMenu: string
    home: string
    language: string
  }
  common: {
    homeCrumb: string
    breadcrumb: string
    view: string
    explore: string
    all: string
    allProjects: string
    projectCount: (n: number) => string
    since: string
    scrollHint: string
    locations: string
    navigation: string
    rights: string
    strapline: string
    city: string
    year: string
    scope: string
    system: string
  }
  catalogue: {
    open: string
    prev: string
    next: string
    first: string
    last: string
    page: string
    pageCount: (n: number) => string
    of: (a: number, b: number) => string
    thumbnails: string
    hideThumbnails: string
    zoom: string
    close: string
    download: string
    goToPage: string
    keyboardHint: string
    cover: string
  }
  sections: {
    about: string
    history: string
    specs: string
    faq: string
    gallery: string
    relatedProjects: string
    ctaTitle: string
  }
  form: {
    name: string
    email: string
    phone: string
    company: string
    subject: string
    message: string
    submit: string
    sending: string
    honeypot: string
    workingHours: string
  }
  notFound: { title: string; body: string; home: string }
}

export type Pages = {
  home: { timelineTitle: string; heroAlt: string; heroCaption: string; commerceAlt: string }
  about: { title: string; lead: string; story: string; timelineTitle: string; imageAlt: string }
  systems: { title: string; lead: string }
  products: { title: string; lead: string }
  services: { title: string; lead: string }
  projects: { title: string; lead: string }
  partners: { title: string; lead: string }
  commerce: { title: string; lead: string; body: string; imageAlt: string }
  contact: { title: string; lead: string; formTitle: string; fax: string }
  quote: { title: string; lead: string }
  catalogues: { title: string; lead: string; ours: string; brands: string; others: string }
  brandWall: { title: string; body: string }
  cta: { body: string }
  navPanel: { commerce: string; partners: string; catalogues: (n: number) => string }
  /** shown on system pages in place of a spec table */
  docs: { title: string; body: string; cta: string; ask: string }
}

export type Patterns = {
  /** `HM 55 T ... | Has Metal` */
  entryTitle: (title: string) => string
  projectTitle: (name: string) => string
  projectDescription: (name: string, where: string) => string
  /** "Ankara'da" / "in Ankara" / "in Ankara" ... */
  inCity: (city: string) => string
  noCity: string
  catalogueTitle: (title: string, pages: number) => string
}

export type Content = {
  tagline: string
  locations: Record<string, { label: string; name: string }>
  systems: Record<string, { title: string; summary: string; intro: string }>
  products: Record<string, { title: string; summary: string; intro: string }>
  services: Record<string, { title: string; summary: string; intro: string }>
  partners: Record<string, string>
  home: {
    hero: { eyebrow: string; title: string[]; subtitle: string }
    intro: { kicker: string; body: string }
    timeline: { title: string; body: string; metricUnit: string }[]
    projectsIntro: { kicker: string; title: string; body: string }
    commerce: { kicker: string; title: string; body: string; statLabels: string[] }
  }
  about: string[]
  catalogues: Record<string, { title: string; summary: string }>
}

export type Lang = {
  ui: Ui
  pages: Pages
  meta: Record<MetaKey, { title: string; description: string }>
  patterns: Patterns
  content: Content
}
