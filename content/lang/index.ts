import { de } from './de.ts'
import { en } from './en.ts'
import { es } from './es.ts'
import { fr } from './fr.ts'
import { it } from './it.ts'
import { ru } from './ru.ts'
import { tr } from './tr.ts'
import type { Lang } from './types.ts'
import { zh } from './zh.ts'

export type { Lang } from './types.ts'

/** Turkish first: it is the source language and the one served at the root. */
export const LANGS = { tr, en, de, fr, it, es, ru, zh } satisfies Record<string, Lang>

export type Locale = keyof typeof LANGS

export const LOCALES = Object.keys(LANGS) as Locale[]
export const DEFAULT_LOCALE: Locale = 'tr'

/** Everything except Turkish lives under a locale prefix and shares one route tree. */
export const INTL_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE)

export const isLocale = (value: string): value is Locale => (LOCALES as string[]).includes(value)

/** The name each language calls itself, for the language menu. */
export const LOCALE_NAMES: Record<Locale, string> = {
  tr: 'Türkçe',
  en: 'English',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano',
  es: 'Español',
  ru: 'Русский',
  zh: '简体中文',
}

export const htmlLang: Record<Locale, string> = {
  tr: 'tr',
  en: 'en',
  de: 'de',
  fr: 'fr',
  it: 'it',
  es: 'es',
  ru: 'ru',
  zh: 'zh-Hans',
}

export const ogLocale: Record<Locale, string> = {
  tr: 'tr_TR',
  en: 'en_US',
  de: 'de_DE',
  fr: 'fr_FR',
  it: 'it_IT',
  es: 'es_ES',
  ru: 'ru_RU',
  zh: 'zh_CN',
}

export const lang = (locale: Locale): Lang => LANGS[locale]
