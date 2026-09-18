import { Geist_Mono, Instrument_Serif, Inter_Tight } from 'next/font/google'

/**
 * An editorial serif for display, a tight grotesk for reading, a mono for data.
 * All three carry latin-ext, so Turkish ş/ğ/ı/İ are real glyphs rather than
 * synthesised ones.
 */
export const display = Instrument_Serif({
  variable: '--font-display',
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export const sans = Inter_Tight({
  variable: '--font-sans',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export const mono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
})

export const fontClass = `${display.variable} ${sans.variable} ${mono.variable}`
