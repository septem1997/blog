/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: false
  },
  images: {
    domains: ['septem1997-blog.oss-cn-hangzhou.aliyuncs.com'],
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
