/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
    ],
  },
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
  experimental: {
    // Any experimental features you want to enable
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
