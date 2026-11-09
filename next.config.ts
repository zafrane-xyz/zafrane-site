import type { NextConfig } from "next";

const OLD_HOSTS = ["zafrane.xyz", "www.zafrane.xyz"];

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Il vecchio dominio porta al nuovo sito, in modo permanente.
      ...OLD_HOSTS.map((host) => ({
        source: "/:path*",
        has: [{ type: "host" as const, value: host }],
        destination: "https://www.zafrane.it/:path*",
        permanent: true,
      })),
      // Pagine delle versioni precedenti.
      { source: "/caviale", destination: "/", permanent: false },
      { source: "/carrello", destination: "/shop", permanent: true },
      { source: "/storia", destination: "/origine", permanent: true },
      { source: "/professionisti", destination: "/ristorazione", permanent: true },
    ];
  },
};

export default nextConfig;
