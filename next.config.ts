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
    // The leftover WordPress demo post is served by a route handler that
    // answers 410 Gone. Rewriting to an ordinary page answers 200, which keeps
    // the address alive in the index however the meta tags are set.
    return { beforeFiles: goneUrls.map((url) => ({ source: url, destination: '/gone' })) }
  },
}

export default nextConfig
