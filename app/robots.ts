import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Named explicitly so the policy is auditable at a glance. Nothing is blocked:
// OAI-SearchBot, Claude-SearchBot and PerplexityBot are the retrieval crawlers
// behind ChatGPT, Claude and Perplexity — blocking any one of them removes the
// site from that assistant's answers. GPTBot and ClaudeBot are training-only.
// Google-Extended / Applebot-Extended are deliberately NOT disallowed.
const SEARCH_AGENTS = [
  "Googlebot",
  "Googlebot-Image",
  "bingbot",
  "Applebot",
  "DuckDuckBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "GPTBot",
  "Claude-SearchBot",
  "Claude-User",
  "ClaudeBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...SEARCH_AGENTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/api/"],
      })),
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
