import type { Metadata } from 'next'
import { ProjectsPage } from '@/components/pages/projects-page'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata({
  locale: 'en',
  title: 'Projects | 46 aluminium framing and facade jobs',
  description:
    'Regnum Sky Tower, Hilton Garden Inn, the METU research centre, Şişli Municipality and more. Forty six aluminium framing and facade jobs in seven cities.',
  path: '/en/projects',
  altPath: '/referanslar',
})

export default function Page() {
  return <ProjectsPage locale="en" />
}
