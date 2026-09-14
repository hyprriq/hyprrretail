import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import PortableBody from "@/components/PortableBody";
import {
  CATEGORY_LABELS,
  formatInsightDate,
  getInsight,
  getInsights,
  getInsightSlugs,
} from "@/lib/insights";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getInsightSlugs();
  return slugs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getInsight(slug);
  if (!post) return {};
  return {
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.seoTitle ?? post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      ...(post.heroImage?.url ? { images: [post.heroImage.url] } : {}),
    },
  };
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getInsight(slug);
  if (!post) notFound();

  const related = (await getInsights())
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt ?? post.publishedAt,
          author: { "@type": "Organization", name: post.author || SITE_NAME },
          publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          mainEntityOfPage: `${SITE_URL}/insights/${post.slug}`,
          ...(post.heroImage?.url ? { image: [post.heroImage.url] } : {}),
        }}
      />

      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-4xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Insights", href: "/insights" },
              { label: post.title },
            ]}
          />
          <p className="mt-6 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted">
            {CATEGORY_LABELS[post.category] ?? post.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight tracking-[-0.02em] text-ink sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-sm text-muted">
            {post.author} · {formatInsightDate(post.publishedAt)}
            {post.updatedAt && (
              <> · Updated {formatInsightDate(post.updatedAt)}</>
            )}
          </p>
        </div>
      </section>

      <article className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
          {post.heroImage?.url && (
            <figure className="mb-8 overflow-hidden rounded-card">
              <Image
                src={post.heroImage.url}
                alt={post.heroImage.alt ?? ""}
                width={1200}
                height={675}
                priority
                className="h-auto w-full"
              />
            </figure>
          )}
          <PortableBody value={post.body} />
        </div>
      </article>

      {related.length > 0 && (
        <section aria-label="Related articles" className="border-t border-line bg-surface">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-ink">More from Insights</h2>
            <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {related.map((p) => (
                <li
                  key={p.slug}
                  className="rounded-card border border-line bg-white p-5 transition-colors hover:border-faint"
                >
                  <Link href={`/insights/${p.slug}`}>
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-muted">
                      {CATEGORY_LABELS[p.category] ?? p.category}
                    </p>
                    <h3 className="mt-2 text-base font-bold leading-snug text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs text-muted">
                      {formatInsightDate(p.publishedAt)}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CtaBand
        title="Ready to put this into practice?"
        subtitle="Request our catalog and see what we can supply for your business."
      />
    </>
  );
}
