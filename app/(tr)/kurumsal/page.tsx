import type { Metadata } from 'next'
import { AboutPage } from '@/components/pages/simple-pages'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  title: 'Kurumsal | 1974’ten bu yana Has Metal',
  description:
    '1974’te Halis Bekar kurdu. Demir doğramadan mimari alüminyuma uzanan 51 yıl, Ankara’da iki tesis ve yedi şehre yayılan bir referans listesi.',
  path: '/kurumsal',
})

export default function Page() {
  return <AboutPage locale="tr" />
}
