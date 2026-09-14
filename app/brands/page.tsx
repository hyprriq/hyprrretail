import type { Metadata } from "next";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import RequestCatalogButton from "@/components/catalog/RequestCatalogButton";
import { ArrowRightIcon } from "@/components/icons";
import { CATEGORIES, brandsByCategory } from "@/lib/brands";

export const metadata: Metadata = {
  title: "Wholesale Brands Directory",
  description:
    "Browse the branded wholesale range available through Hyprr Retail: Milwaukee, Makita, Stanley, Knipex, Petzl, Thule, LEKI, KASK and more — genuine products for e-commerce sellers and retailers.",
  alternates: { canonical: "/brands" },
  openGraph: {
    title: "Wholesale Brands Directory | Hyprr Retail",
    description:
      "Genuine branded tools, hardware and outdoor products available in wholesale quantities.",
  },
};

export default function BrandsPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Brands" }]} />
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Brands
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
            The genuine branded products currently available through Hyprr
            Retail, supplied in wholesale quantities through established
            commercial distribution channels. Brands are added as our supply
            relationships grow — if you need one that isn&apos;t listed,
            mention it in your catalog request.
          </p>
        </div>
      </section>

      {CATEGORIES.map((category, index) => (
        <section
          key={category.slug}
          aria-labelledby={`brands-${category.slug}`}
          className={index % 2 === 0 ? "bg-white" : "border-t border-line bg-surface"}
        >
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2
                  id={`brands-${category.slug}`}
                  className="text-2xl font-bold tracking-tight text-ink"
                >
                  {category.name}
                </h2>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-body">
                  {category.shortDescription}
                </p>
              </div>
              <Link
                href={category.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline-offset-4 hover:underline"
              >
                Explore {category.name}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {brandsByCategory(category.slug).map((brand) => (
                <li
                  key={brand.slug}
                  className="flex flex-col rounded-card border border-line bg-white p-6"
                >
                  <div className="flex h-10 items-center">
                    <BrandMark brand={brand} />
                  </div>
                  <p className="mt-2 text-[0.7rem] font-semibold uppercase tracking-wider text-faint">
                    {category.name}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
                    {brand.description}
                  </p>
                  <div className="mt-5">
                    <RequestCatalogButton variant="ghost" withArrow>
                      Request catalog
                    </RequestCatalogButton>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section aria-label="Brand availability note" className="border-t border-line bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold tracking-tight text-ink">
            Looking for a brand that isn&apos;t listed?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-body">
            Our supply channels extend beyond the brands shown here. Tell us
            which brand or specific model numbers you&apos;re interested in and
            we&apos;ll let you know honestly whether we can supply them, along
            with availability, MOQ and pricing.
          </p>
          <div className="mt-6 flex justify-center">
            <RequestCatalogButton />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
