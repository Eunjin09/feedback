/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false };
    return config;
  },
  images: {
    domains: ["cdn.pixabay.com", "localhost"],
  },
  reactStrictMode: true,
  swcMinify: true,
};
