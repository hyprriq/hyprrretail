import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import BrandMark from "./BrandMark";
import Breadcrumbs from "./Breadcrumbs";
import CtaBand from "./CtaBand";
import FaqAccordion, { type Faq } from "./FaqAccordion";
import TrustChips, { type TrustChip } from "./TrustChips";
import RequestCatalogButton from "./catalog/RequestCatalogButton";
import { ArrowRightIcon, CheckIcon } from "./icons";
import { brandsByCategory, type CategorySlug } from "@/lib/brands";

export interface ProductCategoryCard {
  title: string;
  image: string;
  alt: string;
}

export interface CategoryPageProps {
  slug: CategorySlug;
  name: string;
  eyebrow: string;
  heroTitle: string;
  heroTagline: string;
  heroCopy: string;
  heroImage: string;
  heroImageAlt: string;
  chips: TrustChip[];
  productCategories: ProductCategoryCard[];
  splitTitle: string;
  splitCopy: string;
  splitChecklist: string[];
  splitImage: string;
  splitImageAlt: string;
  seoTitle: string;
  seoContent: ReactNode;
  faqs: Faq[];
}

export default function CategoryPage(props: CategoryPageProps) {
  const brands = brandsByCategory(props.slug);

  return (
    <>
      {/* Hero band — board composition: breadcrumb + copy left, imagery right */}
      <section className="relative overflow-hidden bg-surface-2">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block">
          <Image
            src={props.heroImage}
            alt={props.heroImageAlt}
            width={680}
            height={398}
            priority
            className="h-full w-auto object-cover"
          />
          <div className="absolute inset-0 w-40 bg-gradient-to-r from-surface-2 via-surface-2/60 to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 pt-5 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Categories" }, { label: props.name }]}
          />
          <div className="max-w-2xl pb-8 pt-6 lg:max-w-lg lg:pb-10 xl:max-w-2xl">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-body">
              {props.eyebrow}
            </p>
            <h1 className="mt-1.5 text-4xl font-bold leading-[1.05] tracking-[-0.02em] text-soft">
              {props.heroTitle}
            </h1>
            <p className="mt-1.5 text-lg font-extrabold text-ink">
              {props.heroTagline}
            </p>
            <p className="mt-2.5 max-w-lg text-[0.82rem] font-medium leading-relaxed text-body">
              {props.heroCopy}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <RequestCatalogButton />
              <Link
                href="/brands"
                className="inline-flex items-center justify-center gap-2 rounded-md border-[1.5px] border-ink bg-white px-5 py-2.5 text-xs font-extrabold text-ink transition-colors hover:bg-surface"
              >
                View All Brands&nbsp;&nbsp;→
              </Link>
            </div>
          </div>
          <div className="relative -mx-4 aspect-[16/9] sm:-mx-6 lg:hidden">
            <Image
              src={props.heroImage}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-b border-line bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <TrustChips chips={props.chips} />
        </div>
      </div>

      {/* Brands in this category */}
      <section
        aria-labelledby={`brands-${props.slug}`}
        className="bg-surface"
      >
        <div className="mx-auto max-w-7xl px-4 pb-2 pt-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <h2
              id={`brands-${props.slug}`}
              className="text-xl font-bold text-soft"
            >
              Featured brands in {props.name}
            </h2>
            <Link
              href="/brands"
              className="text-xs font-bold text-ink underline-offset-4 hover:underline"
            >
              View all brands&nbsp;&nbsp;→
            </Link>
          </div>
          <ul className="mt-4 flex flex-wrap items-center gap-x-12 gap-y-5">
            {brands.slice(0, 6).map((brand) => (
              <li key={brand.slug}>
                <BrandMark brand={brand} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product categories */}
      <section
        aria-labelledby={`product-categories-${props.slug}`}
        className="bg-surface"
      >
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <h2
            id={`product-categories-${props.slug}`}
            className="text-xl font-bold text-soft"
          >
            Product categories
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {props.productCategories.map((card) => (
              <li
                key={card.title}
                className="overflow-hidden rounded border border-line bg-white transition-colors hover:border-faint"
              >
                <div className="relative h-[150px]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 px-4 py-3.5">
                  <h3 className="text-[0.82rem] font-extrabold text-ink">
                    {card.title}
                  </h3>
                  <ArrowRightIcon className="h-4 w-4 text-ink" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Commercial value section — three panels per the board */}
      <section
        aria-labelledby={`split-${props.slug}`}
        className="bg-surface"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3.5 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_1fr_350px] lg:px-8">
          <div className="rounded bg-white p-7">
            <h2
              id={`split-${props.slug}`}
              className="text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-soft"
            >
              {props.splitTitle}
            </h2>
            <p className="mt-4 text-[0.82rem] leading-relaxed text-body">
              {props.splitCopy}
            </p>
            <div className="mt-5">
              <RequestCatalogButton variant="dark" />
            </div>
          </div>
          <ul className="grid content-center gap-5 rounded bg-white p-7">
            {props.splitChecklist.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3.5 text-[0.82rem] font-semibold text-body"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-dark">
                  <CheckIcon className="h-3 w-3 text-white" strokeWidth={3.5} />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <div className="relative min-h-[280px] overflow-hidden rounded">
            <Image
              src={props.splitImage}
              alt={props.splitImageAlt}
              fill
              sizes="(min-width: 1024px) 350px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section aria-labelledby={`seo-${props.slug}`} className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h2
            id={`seo-${props.slug}`}
            className="text-2xl font-bold tracking-[-0.02em] text-soft"
          >
            {props.seoTitle}
          </h2>
          <div className="mt-5 space-y-4 text-[0.9rem] leading-relaxed text-body">
            {props.seoContent}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        aria-labelledby={`faq-${props.slug}`}
        className="border-t border-line bg-surface"
      >
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h2
            id={`faq-${props.slug}`}
            className="text-2xl font-bold tracking-[-0.02em] text-soft"
          >
            {props.name} — frequently asked questions
          </h2>
          <div className="mt-7">
            <FaqAccordion faqs={props.faqs} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
