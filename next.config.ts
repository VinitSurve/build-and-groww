/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['rcmsiziewjaxxwhssnvl.supabase.co'],
    unoptimized: true,
  },
}

export default nextConfig
