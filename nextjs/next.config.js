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
      }
    ]
  },
}

module.exports = nextConfig
