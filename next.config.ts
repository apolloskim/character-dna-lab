import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    // This helps with hydration issues
    optimizeFonts: true,
    // Improved CSS handling
    optimizeCss: true,
  },
};

export default nextConfig;
