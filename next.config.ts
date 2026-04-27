import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com"
      }
    ]
  },
  async redirects() {
    return [{ source: "/wisdom-blogs", destination: "/blog", permanent: true }];
  }
};

export default nextConfig;
