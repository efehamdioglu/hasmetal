import type { Metadata } from 'next'
import { HomePage } from '@/components/pages/home-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  title: 'Has Metal | Mimari Alüminyum Sistemler, Ankara',
  description:
    '1974’ten bu yana mimari alüminyum. Kapı ve pencere sistemleri, giydirme cephe, standart profil ve donanım tedariği. Ankara merkezli, yedi şehirde 46 referans.',
  path: '/',
  altPath: '/en',
  image: '/images/holiday-inn-ankara-3815075007-2x1-1-scaled.webp',
})

export default function Page() {
  return <HomePage locale="tr" />
}
