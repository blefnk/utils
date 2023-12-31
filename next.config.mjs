await import("./src/utils/server/appts/env.mjs");

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // typedRoutes: process.env.NODE_ENV === "development",
  },
  // @ts-ignore
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
};

export default config;
