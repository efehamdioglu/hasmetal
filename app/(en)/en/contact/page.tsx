import type { Metadata } from 'next'
import { ContactPage } from '@/components/pages/simple-pages'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  title: 'Contact | Three facilities in Ankara',
  description:
    'Reach Has Metal: the Siteler head office, the İvedik OSB logistics and project unit, and HM Commerce Center. Addresses, phone numbers and the project enquiry form.',
  path: '/en/contact',
  altPath: '/iletisim',
})

export default function Page() {
  return <ContactPage locale="en" />
}
