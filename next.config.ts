import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, // Enforces React best practices during development

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io", // Allow images from Sanity.io CDN
        pathname: "/images/**", // Match all image paths under /images/
      },
    ],
  },
};

export default nextConfig;
