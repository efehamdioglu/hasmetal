import { routes, t, type Locale } from './i18n'
import { productsFor, servicesFor, systemsFor } from './locale'

export type NavChild = { label: string; summary: string; href: string }
export type NavSection = { key: string; label: string; href: string; children?: NavChild[] }

const COPY = {
  tr: {
    commerce: 'Kendi yaptığımız otel ve iş merkezi',
    partners: 'Temsil ettiğimiz donanım markaları',
  },
  en: {
    commerce: 'The hotel and business centre we built',
    partners: 'The hardware brands we represent',
  },
}

/**
 * Built on the server and handed to the nav as plain data, so the content
 * modules never reach the client bundle.
 */
export function navSections(locale: Locale): NavSection[] {
  const d = t(locale)
  const copy = COPY[locale]

  return [
    {
      key: 'about',
      label: d.nav.about,
      href: routes.about(locale),
      children: [
        {
          label: 'HM Commerce Center',
          summary: copy.commerce,
          href: routes.commerce(locale),
        },
        {
          label: d.nav.partners,
          summary: copy.partners,
          href: routes.partners(locale),
        },
      ],
    },
    {
      key: 'systems',
      label: d.nav.systems,
      href: routes.systems(locale),
      children: systemsFor(locale).map((s) => ({
        label: s.code,
        summary: s.summary,
        href: routes.system(locale, s.slug),
      })),
    },
    {
      key: 'products',
      label: d.nav.products,
      href: routes.products(locale),
      children: productsFor(locale).map((p) => ({
        label: p.title,
        summary: p.summary,
        href: routes.product(locale, p.slug),
      })),
    },
    {
      key: 'services',
      label: d.nav.services,
      href: routes.services(locale),
      children: servicesFor(locale).map((s) => ({
        label: s.title,
        summary: s.summary,
        href: routes.service(locale, s.slug),
      })),
    },
    { key: 'projects', label: d.nav.projects, href: routes.projects(locale) },
    { key: 'contact', label: d.nav.contact, href: routes.contact(locale) },
  ]
}
