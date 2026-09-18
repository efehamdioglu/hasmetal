import { brand, contact, locations, partners } from '@/content/site'
import type { Faq, Project } from '@/content/types'
import { abs, SITE_URL } from './seo'

const ORG_ID = `${SITE_URL}/#organization`

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: brand.legalName,
    alternateName: brand.name,
    url: SITE_URL,
    logo: abs('/brand/has-metal-logo.png'),
    foundingDate: String(brand.founded),
    founder: { '@type': 'Person', name: brand.founder },
    email: contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: locations[0].lines.join(' '),
      postalCode: locations[0].postalCode,
      addressLocality: 'Ankara',
      addressCountry: 'TR',
    },
    contactPoint: locations.map((l) => ({
      '@type': 'ContactPoint',
      name: l.label,
      telephone: l.phone,
      email: contact.email,
      contactType: 'sales',
      areaServed: 'TR',
      availableLanguage: ['Turkish', 'English'],
    })),
    brand: partners.map((p) => ({ '@type': 'Brand', name: p.name })),
  }
}

/** One record per facility, so each address can rank in local search. */
export function localBusinessSchemas() {
  return locations.map((l) => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#${l.id}`,
    name: l.name,
    parentOrganization: { '@id': ORG_ID },
    url: SITE_URL,
    telephone: l.phone,
    email: contact.email,
    ...(l.fax ? { faxNumber: l.fax } : {}),
    address: {
      '@type': 'PostalAddress',
      streetAddress: l.lines.join(' '),
      postalCode: l.postalCode,
      addressLocality: 'Ankara',
      addressCountry: 'TR',
    },
  }))
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  }
}

export function projectSchema(p: Project, imageUrl: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: p.name,
    url: abs(path),
    image: abs(imageUrl),
    ...(p.description ? { description: p.description } : {}),
    ...(p.year ? { dateCreated: p.year } : {}),
    creator: { '@id': ORG_ID },
    ...(p.city
      ? { contentLocation: { '@type': 'Place', name: p.city, address: { '@type': 'PostalAddress', addressLocality: p.city, addressCountry: 'TR' } } }
      : {}),
  }
}

export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: abs(item.path),
    })),
  }
}

export function productSchema(args: {
  name: string
  description: string
  image: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: args.name,
    description: args.description,
    image: abs(args.image),
    url: abs(args.path),
    brand: { '@type': 'Brand', name: brand.name },
    manufacturer: { '@id': ORG_ID },
  }
}

export function faqSchema(faq: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }
}
