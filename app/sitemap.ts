import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Update when page content meaningfully changes — a stable date is more
// truthful to crawlers than stamping every build as "just modified".
const LAST_CONTENT_UPDATE = new Date("2026-09-14");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: { path: string; priority: number }[] = [
    { path: "/", priority: 1 },
    { path: "/brands", priority: 0.9 },
    { path: "/tools-hardware", priority: 0.9 },
    { path: "/sports-outdoor", priority: 0.9 },
    { path: "/how-it-works", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.2 },
    { path: "/terms", priority: 0.2 },
    { path: "/shipping-policy", priority: 0.2 },
    { path: "/refund-policy", priority: 0.2 },
    { path: "/pricing-policy", priority: 0.2 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path === "/" ? "" : route.path}`,
    lastModified: LAST_CONTENT_UPDATE,
    changeFrequency: "monthly",
    priority: route.priority,
  }));
}
