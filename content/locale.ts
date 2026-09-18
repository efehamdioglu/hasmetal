/**
 * Turkish is the base, English is an overlay. Every accessor here takes the
 * Turkish record and replaces only the words, so a figure, a phone number or
 * a slug can never differ between the two languages: there is one copy of it.
 */
import type { Locale } from './i18n'
import { about as aboutTr } from './index'
import {
  brand,
  home,
  locations,
  partners,
  products,
  services,
  specsPending,
  systems,
} from './site'
import {
  aboutEn,
  brandEn,
  homeEn,
  locationsEn,
  partnersEn,
  productsEn,
  servicesEn,
  systemsEn,
} from './en/site'

const isEn = (l: Locale) => l === 'en'

export function brandFor(l: Locale) {
  return isEn(l) ? { ...brand, tagline: brandEn.tagline } : brand
}

export function locationsFor(l: Locale) {
  if (!isEn(l)) return locations
  return locations.map((loc) => ({ ...loc, ...(locationsEn[loc.id] ?? {}) }))
}

export function systemsFor(l: Locale) {
  if (!isEn(l)) return systems
  return systems.map((s) => ({ ...s, ...(systemsEn[s.slug] ?? {}) }))
}

export function productsFor(l: Locale) {
  if (!isEn(l)) return products
  return products.map((p) => ({ ...p, ...(productsEn[p.slug] ?? {}) }))
}

export function servicesFor(l: Locale) {
  if (!isEn(l)) return services
  return services.map((s) => ({ ...s, ...(servicesEn[s.slug] ?? {}) }))
}

export function partnersFor(l: Locale) {
  if (!isEn(l)) return partners
  return partners.map((p) => ({ ...p, note: partnersEn[p.name] ?? p.note }))
}

export function aboutFor(l: Locale) {
  return isEn(l) ? aboutEn : aboutTr
}

export function specsFor(l: Locale) {
  return specsPending[l]
}

export function homeFor(l: Locale) {
  if (!isEn(l)) return home
  return {
    hero: homeEn.hero,
    intro: homeEn.intro,
    timeline: home.timeline.map((step, i) => ({ ...step, ...homeEn.timeline[i] })),
    projectsIntro: homeEn.projectsIntro,
    commerce: {
      ...homeEn.commerce,
      stats: home.commerce.stats.map((stat, i) => ({
        ...stat,
        label: homeEn.commerce.statLabels[i] ?? stat.label,
      })),
    },
  }
}
