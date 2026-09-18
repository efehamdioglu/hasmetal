import type { Metadata } from 'next'
import { QuotePage } from '@/components/pages/simple-pages'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  title: 'Teklif Alın | Has Metal',
  description:
    'Mimari alüminyum sistem, profil ve donanım ihtiyacınız için teklif alın. Ölçü, sistem tercihi ve takvim belli olduğunda net bir çalışma hazırlıyoruz.',
  path: '/teklif',
})

export default function Page() {
  return <QuotePage locale="tr" />
}
