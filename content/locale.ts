/**
 * Facts live in `content/site.ts`, words live in `content/lang/<locale>.ts`.
 * These accessors take the record of facts and swap in that language's words,
 * so a figure, a phone number, an address or a slug exists exactly once and
 * no two languages can disagree about one.
 */
import { lang, type Locale } from './lang/index.ts'
import {
  brand,
  home,
  locations,
  partners,
  products,
  services,
  systems,
  type Partner,
} from './site'
import { about as aboutTr } from './index'

export function brandFor(l: Locale) {
  return { ...brand, tagline: lang(l).content.tagline }
}

export function locationsFor(l: Locale) {
  const words = lang(l).content.locations
  return locations.map((loc) => ({ ...loc, ...(words[loc.id] ?? {}) }))
}

export function systemsFor(l: Locale) {
  const words = lang(l).content.systems
  return systems.map((s) => ({ ...s, ...(words[s.slug] ?? {}) }))
}

export function productsFor(l: Locale) {
  const words = lang(l).content.products
  return products.map((p) => ({ ...p, ...(words[p.slug] ?? {}) }))
}

export function servicesFor(l: Locale) {
  const words = lang(l).content.services
  return services.map((s) => ({ ...s, ...(words[s.slug] ?? {}) }))
}

export function partnersFor(l: Locale): Partner[] {
  const words = lang(l).content.partners
  return partners.map((p) => ({ ...p, note: words[p.name] ?? p.note }))
}

export function aboutFor(l: Locale) {
  return l === 'tr' ? aboutTr : lang(l).content.about
}

export function specsFor(l: Locale) {
  return lang(l).pages.docs
}

export function homeFor(l: Locale) {
  const words = lang(l).content.home
  return {
    hero: words.hero,
    intro: words.intro,
    timeline: home.timeline.map((step, i) => ({ ...step, ...words.timeline[i] })),
    projectsIntro: words.projectsIntro,
    commerce: {
      ...words.commerce,
      stats: home.commerce.stats.map((stat, i) => ({
        ...stat,
        label: words.commerce.statLabels[i] ?? stat.label,
      })),
    },
  }
}

export function cataloguesFor(l: Locale) {
  return lang(l).content.catalogues
}
