import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Allow next/image to load Appwrite storage files (any Cloud region).
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.cloud.appwrite.io",
      },
    ],
  },
};

export default nextConfig;
