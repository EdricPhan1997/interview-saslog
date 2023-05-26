/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ipfs.watorflow.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.watorflow.com',
        port: '',
        pathname: '/ipfs/**',
      },
    ],
  },
};

module.exports = nextConfig;
