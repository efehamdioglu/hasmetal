import type { Metadata } from 'next'
import { AboutPage } from '@/components/pages/simple-pages'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  title: 'Kurumsal | 1974’ten bu yana Has Metal',
  description:
    '1974’te Halis Bekar tarafından kurulan Has Metal, demir doğramadan mimari alüminyuma uzanan 51 yılda Ankara’da iki tesise ve yedi şehre yayılan bir referans listesine ulaştı.',
  path: '/kurumsal',
  altPath: '/en/about',
})

export default function Page() {
  return <AboutPage locale="tr" />
}
