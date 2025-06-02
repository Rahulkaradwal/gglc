import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  functions: {
    "api/**.js": {
      includeFiles: "lib/generated/prisma/**",
    },
  },
};

export default nextConfig;
