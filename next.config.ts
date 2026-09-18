import type { NextConfig } from 'next'
import { activeRedirects, goneUrls } from './content/redirects'

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 82, 86],
    formats: ['image/avif', 'image/webp'],
  },

  async redirects() {
    return activeRedirects.map((r) => ({
      source: r.from,
      destination: r.to,
      permanent: true,
    }))
  },

  async rewrites() {
    // the leftover WordPress demo post should not resolve at all
    return { beforeFiles: goneUrls.map((url) => ({ source: url, destination: '/410' })) }
  },
}

export default nextConfig
