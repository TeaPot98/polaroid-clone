/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    API_TOKEN: process.env.NEXT_PUBLIC_API_TOKEN,
  }
}

module.exports = {
  images: {
    loader: 'akamai',
    path: '',
  },
  nextConfig
}
