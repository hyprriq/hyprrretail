import type { PortableTextBlock } from "@portabletext/react";
import { SITE_URL } from "@/lib/site";

/** Sanity "Hyprr Retail" project — public dataset, read via the API CDN. */
const PROJECT_ID = "1o0ajwrq";
const DATASET = "production";
const API_VERSION = "2024-01-01";

export interface InsightCard {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  heroImage?: { url?: string; alt?: string };
}

export interface Insight extends InsightCard {
  seoTitle?: string;
  body: PortableTextBlock[];
}

export const CATEGORY_LABELS: Record<string, string> = {
  "wholesale-amazon": "Wholesale & Amazon",
  tools: "Tools & Hardware",
  outdoor: "Sports & Outdoor",
  process: "Commercial Process",
};

async function sanityFetch<T>(
  query: string,
  params: Record<string, string> = {},
  revalidate = 3600
): Promise<T> {
  const url = new URL(
    `https://${PROJECT_ID}.apicdn.sanity.io/v${API_VERSION}/data/query/${DATASET}`
  );
  url.searchParams.set("query", query);
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(`$${key}`, JSON.stringify(value));
  }
  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) {
    throw new Error(`Sanity query failed: ${res.status}`);
  }
  const { result } = (await res.json()) as { result: T };
  return result;
}

const CARD_PROJECTION = `{
  title,
  "slug": slug.current,
  excerpt,
  category,
  author,
  publishedAt,
  updatedAt,
  "heroImage": {
    "url": coalesce(heroImage.asset->url, heroUrl),
    "alt": coalesce(heroImage.alt, heroAlt)
  }
}`;

/**
 * Hero images may be Sanity-hosted uploads or fallback URLs pointing at our
 * own /images assets. Serve the latter as relative paths so next/image treats
 * them as local files instead of remote fetches against our own origin.
 */
function normalizeHero<T extends InsightCard>(item: T): T {
  const url = item.heroImage?.url;
  if (url?.startsWith(`${SITE_URL}/`)) {
    return {
      ...item,
      heroImage: { ...item.heroImage, url: url.slice(SITE_URL.length) },
    };
  }
  return item;
}

export async function getInsights(): Promise<InsightCard[]> {
  try {
    const items = await sanityFetch<InsightCard[]>(
      `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) ${CARD_PROJECTION}`
    );
    return items.map(normalizeHero);
  } catch {
    return [];
  }
}

export async function getInsight(slug: string): Promise<Insight | null> {
  try {
    const item = await sanityFetch<Insight | null>(
      `*[_type == "post" && slug.current == $slug][0] {
        ...${CARD_PROJECTION},
        seoTitle,
        body[] {
          ...,
          _type == "image" => {..., "url": asset->url}
        }
      }`,
      { slug }
    );
    return item ? normalizeHero(item) : null;
  } catch {
    return null;
  }
}

export async function getInsightSlugs(): Promise<
  { slug: string; publishedAt: string; updatedAt?: string }[]
> {
  try {
    return await sanityFetch<
      { slug: string; publishedAt: string; updatedAt?: string }[]
    >(
      `*[_type == "post" && defined(slug.current)]{"slug": slug.current, publishedAt, updatedAt}`
    );
  } catch {
    return [];
  }
}

export function formatInsightDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
