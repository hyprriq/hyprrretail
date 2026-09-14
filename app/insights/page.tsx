import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import {
  CATEGORY_LABELS,
  formatInsightDate,
  getInsights,
} from "@/lib/insights";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Insights — Wholesale Buying Guides for Sellers & Retailers",
  description:
    "Practical guides on wholesale buying for e-commerce sellers and retailers: sourcing through established distribution channels, MOQ, commercial documentation and marketplace selling.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Hyprr Retail Insights",
    description:
      "Practical wholesale buying guides for e-commerce sellers and retailers.",
  },
};

export default async function InsightsPage() {
  const posts = await getInsights();

  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Insights" }]} />
          <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] text-soft sm:text-5xl">
            Insights
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
            Practical guides on wholesale buying for e-commerce sellers and
            retailers — how sourcing through established distribution channels
            works, what documentation matters, and how to order at commercial
            scale.
          </p>
        </div>
      </section>

      <section aria-label="Articles" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-base leading-relaxed text-body">
              Articles are on their way. In the meantime, see{" "}
              <Link
                href="/how-it-works"
                className="font-medium underline underline-offset-4"
              >
                how ordering works
              </Link>{" "}
              or browse the{" "}
              <Link
                href="/brands"
                className="font-medium underline underline-offset-4"
              >
                brands we supply
              </Link>
              .
            </p>
          ) : (
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li
                  key={post.slug}
                  className="flex flex-col overflow-hidden rounded-card border border-line bg-white transition-colors hover:border-faint"
                >
                  <Link href={`/insights/${post.slug}`} className="flex flex-1 flex-col">
                    {post.heroImage?.url ? (
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={post.heroImage.url}
                          alt={post.heroImage.alt ?? ""}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex aspect-[16/9] items-end bg-surface-2 p-5">
                        <span className="text-5xl font-extrabold tracking-tight text-line">
                          hyprr<span className="text-brand-red/40">r</span>etail
                        </span>
                      </div>
                    )}
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                        {CATEGORY_LABELS[post.category] ?? post.category}
                      </p>
                      <h2 className="mt-2 text-lg font-bold leading-snug text-ink">
                        {post.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                        {post.excerpt}
                      </p>
                      <p className="mt-4 text-xs text-muted">
                        {formatInsightDate(post.publishedAt)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
