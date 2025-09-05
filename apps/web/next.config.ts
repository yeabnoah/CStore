import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  images: {
    domains: ["picsum.photos", "i.ibb.co"],
  },
};

export default nextConfig;
