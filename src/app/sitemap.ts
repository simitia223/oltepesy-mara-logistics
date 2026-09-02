import type { MetadataRoute } from "next";
import { site, nav, primaryCta } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [...nav, primaryCta];
  return routes.map((r) => ({
    url: `${site.url}${r.href === "/" ? "" : r.href}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: r.href === "/" ? 1 : r.href === primaryCta.href ? 0.9 : 0.7,
  }));
}
