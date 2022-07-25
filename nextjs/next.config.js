/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: false
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/post',
        permanent: true
      },
      {
        source: '/api/:path*',
        destination: 'http://localhost:4080/:path*',
      },
    ]
  },
}

module.exports = nextConfig
