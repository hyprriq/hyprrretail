import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import BrandMark from "./BrandMark";
import Breadcrumbs from "./Breadcrumbs";
import CtaBand from "./CtaBand";
import FaqAccordion, { type Faq } from "./FaqAccordion";
import TrustChips, { type TrustChip } from "./TrustChips";
import RequestCatalogButton from "./catalog/RequestCatalogButton";
import { ArrowRightIcon, CheckCircleIcon } from "./icons";
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
      {/* Breadcrumb + hero */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Categories" }, { label: props.name }]}
          />
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
              {props.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl">
              {props.heroTitle}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-body sm:text-lg">
              {props.heroCopy}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <RequestCatalogButton variant="primary-lg" />
              <Link
                href="/brands"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-ink"
              >
                View All Brands
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-card lg:aspect-[5/4]">
            <Image
              src={props.heroImage}
              alt={props.heroImageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <TrustChips chips={props.chips} />
        </div>
      </section>

      {/* Brands in this category */}
      <section aria-labelledby={`brands-${props.slug}`} className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <h2
              id={`brands-${props.slug}`}
              className="text-lg font-bold tracking-tight text-ink"
            >
              Featured brands in {props.name}
            </h2>
            <Link
              href="/brands"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline-offset-4 hover:underline"
            >
              View all brands
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <ul className="mt-7 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {brands.slice(0, 6).map((brand) => (
              <li key={brand.slug} className="flex justify-center">
                <BrandMark brand={brand} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Product categories */}
      <section aria-labelledby={`product-categories-${props.slug}`} className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <h2
            id={`product-categories-${props.slug}`}
            className="text-lg font-bold tracking-tight text-ink"
          >
            Product categories
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {props.productCategories.map((card) => (
              <li
                key={card.title}
                className="overflow-hidden rounded-card border border-line bg-white"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 px-4 py-3.5">
                  <h3 className="text-sm font-bold text-ink">{card.title}</h3>
                  <ArrowRightIcon className="h-4 w-4 text-muted" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Split proposition */}
      <section
        aria-labelledby={`split-${props.slug}`}
        className="border-y border-line bg-surface"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2
              id={`split-${props.slug}`}
              className="text-3xl font-extrabold leading-tight tracking-tight text-ink"
            >
              {props.splitTitle}
            </h2>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-body">
              {props.splitCopy}
            </p>
            <div className="mt-6">
              <RequestCatalogButton />
            </div>
          </div>
          <div className="grid grid-cols-1 items-center gap-8 sm:grid-cols-2">
            <ul className="space-y-4">
              {props.splitChecklist.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircleIcon className="h-5 w-5 shrink-0 text-ink" />
                  <span className="text-sm font-semibold text-ink">{item}</span>
                </li>
              ))}
            </ul>
            <div className="relative aspect-[4/5] overflow-hidden rounded-card">
              <Image
                src={props.splitImage}
                alt={props.splitImageAlt}
                fill
                sizes="(min-width: 640px) 25vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO content */}
      <section aria-labelledby={`seo-${props.slug}`} className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2
            id={`seo-${props.slug}`}
            className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            {props.seoTitle}
          </h2>
          <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-body">
            {props.seoContent}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section
        aria-labelledby={`faq-${props.slug}`}
        className="border-t border-line bg-surface"
      >
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2
            id={`faq-${props.slug}`}
            className="text-2xl font-bold tracking-tight text-ink"
          >
            {props.name} — frequently asked questions
          </h2>
          <div className="mt-8">
            <FaqAccordion faqs={props.faqs} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
