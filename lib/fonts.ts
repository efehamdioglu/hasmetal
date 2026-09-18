import { Instrument_Serif, Inter_Tight } from 'next/font/google'

/**
 * Two faces only: an editorial serif for display, a tight grotesk for
 * everything else. Both carry latin-ext, so Turkish ş/ğ/ı/İ are real glyphs
 * rather than synthesised ones.
 *
 * There is deliberately no monospace anywhere on the site. Labels and figures
 * take their character from case, tracking and tabular numerals instead.
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

export const fontClass = `${display.variable} ${sans.variable}`
