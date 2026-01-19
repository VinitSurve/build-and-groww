/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['rcmsiziewjaxxwhssnvl.supabase.co'],
    unoptimized: true,
  },
  async headers() {
    return [
      {
        // Cache static assets (images, videos, fonts)
        source: '/:all*(webp|jpg|jpeg|png|gif|svg|mp4|webm|mov|woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache HTML with revalidation
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ];
  },
}

export default nextConfig
