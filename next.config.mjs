/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/gallery/staircase-painting',
        destination: '/gallery/ceiling-staircase-painting',
        permanent: true,
      },
      {
        source: '/gallery/building-exterior-painting',
        destination: '/gallery/exterior-building-painting',
        permanent: true,
      },
      {
        source: '/gallery/compound-wall-exterior',
        destination: '/gallery/compound-wall-painting',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
