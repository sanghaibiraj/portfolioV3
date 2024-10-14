// const withPWA = require('next-pwa');

module.exports = {
  images: {
    domains: ['i.ibb.co', 'drive.google.com', 'ik.imagekit.io'],
  },
  output: 'standalone',
  reactStrictMode: false,
  swcMinify: true,
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
};
