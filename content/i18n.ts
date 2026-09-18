export type Locale = 'tr' | 'en'

export const LOCALES: Locale[] = ['tr', 'en']
export const DEFAULT_LOCALE: Locale = 'tr'

/* --------------------------------------------------------------- routing */

/** Turkish lives at the root so every legacy URL can be redirected into it. */
const SEGMENTS = {
  tr: {
    about: 'kurumsal',
    systems: 'sistemler',
    products: 'urunler',
    services: 'hizmetler',
    projects: 'referanslar',
    partners: 'bayiliklerimiz',
    commerce: 'hm-commerce-center',
    contact: 'iletisim',
    quote: 'teklif',
  },
  en: {
    about: 'about',
    systems: 'systems',
    products: 'products',
    services: 'services',
    projects: 'projects',
    partners: 'partners',
    commerce: 'hm-commerce-center',
    contact: 'contact',
    quote: 'quote',
  },
} as const

type Section = keyof (typeof SEGMENTS)['tr']

/** Series are product codes, so only the descriptive slugs need translating. */
export const PRODUCT_SLUGS: Record<string, string> = {
  'standart-profiller': 'standard-profiles',
  'aksesuar-ve-mekanizma': 'hardware-and-mechanisms',
  'fitil-ve-conta': 'gaskets-and-seals',
}

export const SERVICE_SLUGS: Record<string, string> = {
  'ahsap-kaplama-ve-elektrostatik-toz-boyama': 'wood-effect-and-powder-coating',
  'insaat-ve-taahhut': 'construction-and-contracting',
}

const invert = (map: Record<string, string>) =>
  Object.fromEntries(Object.entries(map).map(([tr, en]) => [en, tr]))

const PRODUCT_TR = invert(PRODUCT_SLUGS)
const SERVICE_TR = invert(SERVICE_SLUGS)

export const productSlugTr = (slug: string) => PRODUCT_TR[slug] ?? slug
export const serviceSlugTr = (slug: string) => SERVICE_TR[slug] ?? slug

const localise = (map: Record<string, string>, slug: string, locale: Locale) =>
  locale === 'en' ? (map[slug] ?? slug) : slug

const prefix = (locale: Locale) => (locale === 'en' ? '/en' : '')

export const routes = {
  home: (l: Locale) => prefix(l) || '/',
  about: (l: Locale) => `${prefix(l)}/${SEGMENTS[l].about}`,
  systems: (l: Locale) => `${prefix(l)}/${SEGMENTS[l].systems}`,
  system: (l: Locale, slug: string) => `${prefix(l)}/${SEGMENTS[l].systems}/${slug}`,
  products: (l: Locale) => `${prefix(l)}/${SEGMENTS[l].products}`,
  product: (l: Locale, slug: string) =>
    `${prefix(l)}/${SEGMENTS[l].products}/${localise(PRODUCT_SLUGS, slug, l)}`,
  services: (l: Locale) => `${prefix(l)}/${SEGMENTS[l].services}`,
  service: (l: Locale, slug: string) =>
    `${prefix(l)}/${SEGMENTS[l].services}/${localise(SERVICE_SLUGS, slug, l)}`,
  projects: (l: Locale) => `${prefix(l)}/${SEGMENTS[l].projects}`,
  project: (l: Locale, slug: string) => `${prefix(l)}/${SEGMENTS[l].projects}/${slug}`,
  partners: (l: Locale) => `${prefix(l)}/${SEGMENTS[l].partners}`,
  commerce: (l: Locale) => `${prefix(l)}/${SEGMENTS[l].commerce}`,
  contact: (l: Locale) => `${prefix(l)}/${SEGMENTS[l].contact}`,
  quote: (l: Locale) => `${prefix(l)}/${SEGMENTS[l].quote}`,
}

/**
 * The same page in the other language. The two trees use different path
 * segments, so this walks the route table rather than gluing on a prefix,
 * which would produce URLs like /en/referanslar that do not exist.
 */
export function counterpartPath(pathname: string, from: Locale): string {
  const to: Locale = from === 'tr' ? 'en' : 'tr'
  const parts = pathname.replace(/^\/+|\/+$/g, '').split('/').filter(Boolean)
  const segments = from === 'en' ? parts.slice(1) : parts

  if (segments.length === 0) return routes.home(to)

  const [head, ...rest] = segments
  const section = (Object.keys(SEGMENTS[from]) as Section[]).find(
    (key) => SEGMENTS[from][key] === head,
  )

  switch (section) {
    case 'systems':
      return rest.length ? routes.system(to, rest[0]) : routes.systems(to)
    case 'products':
      return rest.length
        ? routes.product(to, from === 'en' ? productSlugTr(rest[0]) : rest[0])
        : routes.products(to)
    case 'services':
      return rest.length
        ? routes.service(to, from === 'en' ? serviceSlugTr(rest[0]) : rest[0])
        : routes.services(to)
    case 'projects':
      return rest.length ? routes.project(to, rest[0]) : routes.projects(to)
    case 'about':
      return routes.about(to)
    case 'partners':
      return routes.partners(to)
    case 'commerce':
      return routes.commerce(to)
    case 'contact':
      return routes.contact(to)
    case 'quote':
      return routes.quote(to)
    default:
      return routes.home(to)
  }
}

export const htmlLang: Record<Locale, string> = { tr: 'tr', en: 'en' }
export const ogLocale: Record<Locale, string> = { tr: 'tr_TR', en: 'en_US' }

/* ------------------------------------------------------------ ui strings */

const tr = {
  nav: {
    about: 'Kurumsal',
    systems: 'Sistemler',
    products: 'Ürünler',
    services: 'Hizmetler',
    projects: 'Referanslar',
    partners: 'Bayiliklerimiz',
    contact: 'İletişim',
    quote: 'Teklif Al',
    menu: 'Ana menü',
    openMenu: 'Menüyü aç',
    closeMenu: 'Menüyü kapat',
    home: 'Has Metal, ana sayfa',
  },
  common: {
    homeCrumb: 'Ana sayfa',
    breadcrumb: 'Sayfa yolu',
    view: 'Görüntüle',
    explore: 'Keşfet',
    all: 'Tümü',
    allProjects: 'Tüm referanslar',
    projectCount: (n: number) => `${n} proje`,
    since: '1974’ten beri',
    scrollHint: 'Kaydır',
    locations: 'Lokasyonlar',
    navigation: 'Navigasyon',
    rights: 'Tüm hakları saklıdır.',
    strapline: 'Mimari Alüminyum Sistemler',
    city: 'Şehir',
    year: 'Yıl',
    scope: 'Kapsam',
    system: 'Sistem',
  },
  sections: {
    about: 'Hakkımızda',
    history: 'Tarihçe',
    specs: 'Teknik özellikler',
    faq: 'Sık sorulanlar',
    gallery: 'Galeri',
    relatedProjects: 'Diğer referanslar',
    ctaTitle: 'Projeniz için teklif alın',
  },
  form: {
    name: 'Ad Soyad',
    email: 'E-posta',
    phone: 'Telefon',
    company: 'Firma',
    subject: 'Konu',
    message: 'Mesajınız',
    submit: 'Gönder',
    sending: 'Gönderiliyor…',
    honeypot: 'Web Sitesi (boş bırakın)',
    workingHours: 'Çalışma saatleri',
  },
  notFound: {
    title: 'Aradığınız sayfa bulunamadı.',
    body: 'Bağlantı değişmiş olabilir. Referanslardan devam edebilir ya da bize ulaşabilirsiniz.',
    home: 'Ana sayfa',
  },
}

export type Dictionary = typeof tr

const en: Dictionary = {
  nav: {
    about: 'Company',
    systems: 'Systems',
    products: 'Products',
    services: 'Services',
    projects: 'Projects',
    partners: 'Partners',
    contact: 'Contact',
    quote: 'Request a quote',
    menu: 'Main menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    home: 'Has Metal, home',
  },
  common: {
    homeCrumb: 'Home',
    breadcrumb: 'Breadcrumb',
    view: 'View',
    explore: 'Explore',
    all: 'All',
    allProjects: 'All projects',
    projectCount: (n: number) => (n === 1 ? '1 project' : `${n} projects`),
    since: 'Since 1974',
    scrollHint: 'Scroll',
    locations: 'Locations',
    navigation: 'Navigation',
    rights: 'All rights reserved.',
    strapline: 'Architectural Aluminium Systems',
    city: 'City',
    year: 'Year',
    scope: 'Scope',
    system: 'System',
  },
  sections: {
    about: 'About us',
    history: 'History',
    specs: 'Technical data',
    faq: 'Frequently asked',
    gallery: 'Gallery',
    relatedProjects: 'More projects',
    ctaTitle: 'Get a quote for your project',
  },
  form: {
    name: 'Full name',
    email: 'Email',
    phone: 'Phone',
    company: 'Company',
    subject: 'Subject',
    message: 'Your message',
    submit: 'Send',
    sending: 'Sending…',
    honeypot: 'Website (leave empty)',
    workingHours: 'Opening hours',
  },
  notFound: {
    title: 'We could not find that page.',
    body: 'The link may have changed. Carry on from the projects, or get in touch.',
    home: 'Home',
  },
}

const DICTIONARIES: Record<Locale, Dictionary> = { tr, en }

export function t(locale: Locale): Dictionary {
  return DICTIONARIES[locale]
}
