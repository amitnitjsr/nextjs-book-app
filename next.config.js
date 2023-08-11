/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    domains: ["api.slingacademy.com"],
  },
  // output: 'export',
  // assetPrefix: '/assignments/bookstore'
};

module.exports = nextConfig;
