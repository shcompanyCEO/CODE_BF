/** @type {import('next').NextConfig} */
const { i18n } = require('next-i18next');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  images: {
    domains: ['via.placeholder.com'],
  },
};

module.exports = nextConfig;
