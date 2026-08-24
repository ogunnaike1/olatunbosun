import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Multiple lockfiles live above this directory; pin the workspace root.
  turbopack: { root: __dirname },
};

export default nextConfig;
