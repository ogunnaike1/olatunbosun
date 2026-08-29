import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Multiple lockfiles live above this directory; pin the workspace root.
  turbopack: { root: __dirname },

  images: {
    // The hero carousel's opening slide is hosted on Cloudinary. Scoped to
    // this one account's delivery path rather than the whole host, so a
    // stray URL from anywhere else cannot be proxied through our optimizer.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dhmqhless/**",
      },
    ],
  },
};

export default nextConfig;
