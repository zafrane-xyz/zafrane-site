import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Il vecchio dominio zafrane.xyz porta al nuovo sito, in modo permanente.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "zafrane.xyz" }],
        destination: "https://www.zafrane.it/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.zafrane.xyz" }],
        destination: "https://www.zafrane.it/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
