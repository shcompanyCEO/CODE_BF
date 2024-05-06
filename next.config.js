const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  i18n: {
    locales: ['en', 'ko', 'th'],
    defaultLocale: 'ko',
  },
};

module.exports = nextConfig;
