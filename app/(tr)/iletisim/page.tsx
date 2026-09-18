import type { Metadata } from 'next'
import { ContactPage } from '@/components/pages/simple-pages'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'tr',
  title: 'İletişim | Siteler, İvedik OSB ve HM Commerce Center',
  description:
    'Has Metal’e ulaşın: Siteler merkez, İvedik OSB lojistik ve proje birimi, HM Commerce Center. Adres, telefon ve proje teklif formu.',
  path: '/iletisim',
  altPath: '/en/contact',
})

export default function Page() {
  return <ContactPage locale="tr" />
}
