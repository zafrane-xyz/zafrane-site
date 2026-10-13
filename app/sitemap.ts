import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/zafferano", "/shop", "/professionisti", "/storia", "/contatti", "/privacy"];
  return paths.map((p) => ({
    url: `${SITE.url}${p}`,
    lastModified: new Date(),
    priority: p === "" ? 1 : 0.7,
  }));
}
