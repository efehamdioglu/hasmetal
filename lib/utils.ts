import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function pad2(n: number) {
  return String(n).padStart(2, '0')
}

/** 50710 → "50.710" (Turkish) / "50,710" (English) */
export function groupDigits(value: number, locale: 'tr' | 'en') {
  return value.toLocaleString(locale === 'tr' ? 'tr-TR' : 'en-GB')
}
