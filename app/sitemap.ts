import type { MetadataRoute } from "next";
import { getInsightSlugs } from "@/lib/insights";
import { SITE_URL } from "@/lib/site";

// Update when core page content meaningfully changes — a stable date is more
// truthful to crawlers than stamping every build as "just modified".
const LAST_CONTENT_UPDATE = new Date("2026-09-14");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/brands", priority: 0.9 },
    { path: "/tools-hardware", priority: 0.9 },
    { path: "/sports-outdoor", priority: 0.9 },
    { path: "/how-it-works", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
    { path: "/insights", priority: 0.7 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
    { path: "/shipping-policy", priority: 0.2 },
    { path: "/refund-policy", priority: 0.2 },
    { path: "/pricing-policy", priority: 0.2 },
  ];

  const core: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: "monthly",
    priority: route.priority,
  }));

  const insights: MetadataRoute.Sitemap = (await getInsightSlugs()).map(
    ({ slug, publishedAt, updatedAt }) => ({
      url: `${SITE_URL}/insights/${slug}`,
      lastModified: new Date(updatedAt ?? publishedAt),
      changeFrequency: "monthly",
      priority: 0.6,
    })
  );

  return [...core, ...insights];
}
