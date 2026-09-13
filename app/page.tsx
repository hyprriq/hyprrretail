import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BrandMark from "@/components/BrandMark";
import CtaBand from "@/components/CtaBand";
import FaqAccordion, { type Faq } from "@/components/FaqAccordion";
import HowItWorksSteps from "@/components/HowItWorksSteps";
import JsonLd from "@/components/JsonLd";
import TrustChips from "@/components/TrustChips";
import RequestCatalogButton from "@/components/catalog/RequestCatalogButton";
import {
  ArrowRightIcon,
  BoxesIcon,
  ClockIcon,
  ContainerIcon,
  DocumentIcon,
  GlobeIcon,
  PlaneIcon,
  ShieldCheckIcon,
  ShipIcon,
  TagIcon,
} from "@/components/icons";
import { featuredBrands } from "@/lib/brands";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Branded Wholesale Supplier & Distributor | Hyprr Retail",
    description: SITE_DESCRIPTION,
  },
};

const HOME_FAQS: Faq[] = [
  {
    question: "What is the minimum order quantity?",
    answer:
      "Minimum order quantities vary by brand, product and order. There is no single universal MOQ — we confirm the applicable MOQ for your selected models before any purchase order is issued, so you always know the commitment before you decide.",
  },
  {
    question: "Do you sell wholesale to Amazon sellers?",
    answer:
      "Yes. E-commerce sellers, including Amazon sellers, are our primary customers. We supply genuine branded products in wholesale quantities and provide the commercial documentation that accompanies a legitimate wholesale transaction, such as commercial invoices and packing lists.",
  },
  {
    question: "Do you supply wholesale products to Walmart sellers?",
    answer:
      "Yes. Walmart Marketplace sellers can request our catalog, select brands and models, and purchase through the same wholesale process. Where applicable, we can also provide documentation support related to marketplace requirements — conditions apply.",
  },
  {
    question: "Can retailers purchase from Hyprr Retail?",
    answer:
      "Yes. Alongside e-commerce sellers, we supply retail stores, online retailers and wholesale buyers. If you run a physical or online retail business and want access to branded tools, hardware or outdoor products at wholesale terms, request our catalog.",
  },
  {
    question: "Do you supply genuine branded products?",
    answer:
      "Yes. Every product we supply is a genuine branded product obtained through established commercial supply channels and brand-authorized distributors. We do not deal in replicas, grey-market fakes or unbranded substitutes.",
  },
  {
    question: "How do I request a catalog?",
    answer:
      "Click any Request a Catalog button on this site, tell us about your business and the brands you're interested in, and submit the form. We'll reply by email with the relevant catalog and availability information.",
  },
  {
    question: "How does the wholesale ordering process work?",
    answer:
      "Request the catalog, select the models and quantities you want, and we confirm availability, MOQ and pricing. Once you approve, a purchase order is issued, payment is arranged, and the order is fulfilled and shipped with the appropriate commercial documentation.",
  },
  {
    question: "Can I request a specific model number?",
    answer:
      "Yes. If you already know the exact models you want — for example a specific Milwaukee or Makita tool — include the model numbers in your catalog request and we'll check availability and pricing for those items directly.",
  },
  {
    question: "What shipping options are available?",
    answer:
      "Depending on the order, options can include air freight, express shipping, sea freight and full or partial containers. The right method depends on order size, destination, timing and product. Shipping costs and timing are confirmed with you before the order is finalized.",
  },
  {
    question: "Can you provide commercial invoices and shipping documentation?",
    answer:
      "Yes. Wholesale orders are supported by the appropriate commercial documentation, which can include commercial invoices, packing lists, shipping documentation and product or model information, as applicable to the transaction.",
  },
  {
    question: "Can you help with marketplace brand documentation?",
    answer:
      "If you're concerned about permission or documentation requirements for selling a brand on Amazon, Walmart or another marketplace, we can provide documentation support and guidance before a purchase order for a small service fee, where applicable. Conditions apply — see our policies for details.",
  },
  {
    question: "Does documentation guarantee marketplace approval?",
    answer:
      "No. Approval decisions always belong to the marketplace, and requirements vary by seller account, marketplace and brand. We provide legitimate commercial documentation and support, but no supplier can guarantee that any marketplace will approve a listing or application.",
  },
  {
    question: "Can you supply products not shown on the website?",
    answer:
      "Often, yes. The brands on this site reflect our current focus, but our supply channels extend further. If you're looking for a brand or product that isn't listed, mention it in your catalog request and we'll tell you honestly whether we can supply it.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQS.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }}
      />

      {/* Hero */}
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-10 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:pt-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
              Genuine brands. Global supply.
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
              Wholesale products for e-commerce sellers and retailers.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-body sm:text-lg">
              Genuine branded tools, hardware and outdoor products supplied
              through established commercial distribution channels — with clear
              MOQ, documentation and shipping options for wholesale buyers.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <RequestCatalogButton variant="primary-lg" />
              <Link
                href="/brands"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:border-ink"
              >
                View Our Brands
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-card lg:aspect-[5/4]">
            <Image
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80&auto=format&fit=crop"
              alt="Hikers with backpacks and trekking gear crossing a mountain trail"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <p className="absolute bottom-4 right-4 rounded-md bg-white/90 px-3 py-2 text-xs font-semibold italic text-ink">
              Tools for today. Adventures for tomorrow.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
          <TrustChips
            chips={[
              { icon: ShieldCheckIcon, label: "Genuine Products" },
              { icon: BoxesIcon, label: "Wholesale Quantities" },
              { icon: DocumentIcon, label: "Commercial Documentation" },
              { icon: GlobeIcon, label: "Global Shipping" },
            ]}
          />
        </div>
      </section>

      {/* Featured brands */}
      <section aria-labelledby="featured-brands" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <h2
              id="featured-brands"
              className="text-lg font-bold tracking-tight text-ink"
            >
              Featured brands
            </h2>
            <Link
              href="/brands"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline-offset-4 hover:underline"
            >
              View all brands
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-body">
            We supply genuine products from established tool, hardware and
            outdoor brands, including Milwaukee, Makita, Knipex, Thule, LEKI
            and KASK — with the full brand directory on our{" "}
            <Link href="/brands" className="font-medium underline underline-offset-4">
              Brands page
            </Link>
            .
          </p>
          <ul className="mt-7 grid grid-cols-2 items-center gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {featuredBrands().map((brand) => (
              <li key={brand.slug} className="flex justify-center">
                <BrandMark name={brand.name} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Category cards */}
      <section aria-label="Product categories" className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 pb-16 sm:px-6 md:grid-cols-2 lg:px-8">
          {[
            {
              href: "/tools-hardware",
              title: "Tools & Hardware",
              copy: "Professional power tools, hand tools, accessories and hardware from leading brands.",
              image:
                "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=1000&q=80&auto=format&fit=crop",
              alt: "Professional cordless drill resting on a workbench",
            },
            {
              href: "/sports-outdoor",
              title: "Sports & Outdoor",
              copy: "Climbing, hiking, outdoor equipment and footwear for retailers and e-commerce sellers.",
              image:
                "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?w=1000&q=80&auto=format&fit=crop",
              alt: "Hiker with a backpack walking along a mountain ridge",
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative block aspect-[16/9] overflow-hidden rounded-card"
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-white/85">
                    {card.copy}
                  </p>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-white/15 text-white backdrop-blur transition-colors group-hover:bg-amber group-hover:text-ink">
                  <ArrowRightIcon className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Wholesale proposition */}
      <section aria-labelledby="proposition" className="border-y border-line bg-surface">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="border-l-[3px] border-brand-red pl-6">
            <h2
              id="proposition"
              className="text-3xl font-extrabold leading-tight tracking-tight text-ink"
            >
              Trusted distribution.
              <br />
              Real opportunities.
            </h2>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-body">
              We work with established commercial distribution channels and
              brand-authorized distributors to supply genuine branded products
              to e-commerce sellers, retailers and wholesale buyers. Orders are
              supported with the appropriate commercial documentation where
              applicable.
            </p>
            <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-body">
              That combination — genuine products, competitive wholesale
              economics and a clear, documented process — is what makes a
              wholesale relationship worth building on.
            </p>
            <Link
              href="/how-it-works"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Learn more
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <ul className="space-y-6">
            {[
              {
                icon: ShieldCheckIcon,
                title: "Authentic products",
                copy: "Genuine branded products from authorized distribution channels — never replicas or grey-market substitutes.",
              },
              {
                icon: DocumentIcon,
                title: "Commercial documentation",
                copy: "Invoices, packing lists and certificates of origin where applicable, supporting legitimate commercial transactions.",
              },
              {
                icon: TagIcon,
                title: "Competitive wholesale pricing",
                copy: "Access to wholesale quantities and favorable pricing through manufacturer-source markets and established channels.",
              },
              {
                icon: GlobeIcon,
                title: "Global fulfillment",
                copy: "Flexible shipping options to the US, UK and international markets, matched to your order size and timing.",
              },
            ].map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-line bg-white text-ink">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[0.95rem] font-bold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-body">
                    {item.copy}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section aria-labelledby="how-it-works" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <h2
              id="how-it-works"
              className="text-2xl font-bold tracking-tight text-ink"
            >
              How it works
            </h2>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline-offset-4 hover:underline"
            >
              View full process
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-body">
            From first catalog request to delivered order, the process is
            simple and transparent: you always see availability, MOQ, pricing
            and shipping terms before you commit to anything.
          </p>
          <div className="mt-9">
            <HowItWorksSteps />
          </div>
        </div>
      </section>

      {/* Seller support + shipping */}
      <section
        aria-label="Seller support and shipping"
        className="border-y border-line bg-white"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-line px-4 sm:px-6 lg:grid-cols-2 lg:divide-x lg:divide-y-0 lg:px-8">
          <div className="py-12 lg:pr-12">
            <h2 className="text-xl font-bold tracking-tight text-ink">
              Support for e-commerce sellers
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-body">
              We help sellers with brand and model selection, catalog access,
              MOQ information, wholesale pricing enquiries and order
              coordination. For Amazon, Walmart and other marketplace sellers
              who need brand or product permission documentation, we can
              provide documentation support before a purchase order for a small
              service fee, where applicable. Conditions apply — and no
              supplier can guarantee marketplace approval.
            </p>
            <Link
              href="/how-it-works#documentation"
              className="mt-5 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
            >
              Learn more
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-faint">
              Supporting sellers on
            </p>
            <p className="mt-2 flex items-center gap-6 text-lg font-bold text-muted">
              <span>amazon</span>
              <span>Walmart</span>
              <span className="text-sm font-semibold">
                + other marketplaces
              </span>
            </p>
          </div>
          <div className="py-12 lg:pl-12">
            <h2 className="text-xl font-bold tracking-tight text-ink">
              Shipping that fits your order
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-body">
              Shipping options vary by order size, destination, timing and
              product. Costs and timing are always confirmed with you before
              the order is finalized, and documentation accompanies the
              shipment as applicable.
            </p>
            <ul className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { icon: PlaneIcon, title: "Air Freight", copy: "Fast delivery" },
                { icon: ShipIcon, title: "Sea Freight", copy: "Cost-effective" },
                { icon: ClockIcon, title: "Express", copy: "Time-sensitive" },
                {
                  icon: ContainerIcon,
                  title: "Full / Partial Containers",
                  copy: "Larger orders",
                },
              ].map((method) => (
                <li key={method.title} className="text-center">
                  <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-md bg-surface text-ink">
                    <method.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-2.5 text-xs font-bold text-ink">
                    {method.title}
                  </h3>
                  <p className="mt-1 text-[0.7rem] text-muted">{method.copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SEO editorial + wide image */}
      <section aria-labelledby="wholesale-editorial" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-14">
            <div className="lg:col-span-3">
              <h2
                id="wholesale-editorial"
                className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
              >
                Wholesale branded products for e-commerce sellers and retailers
              </h2>
              <div className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-body">
                <p>
                  Hyprr Retail is a B2B wholesale supplier and distributor
                  serving the United States first, with the United Kingdom and
                  other international markets also supported. We supply genuine
                  branded products — professional tools, hardware, and sports
                  and outdoor equipment — in wholesale quantities to e-commerce
                  sellers, online retailers, retail stores and wholesale
                  buyers.
                </p>
                <p>
                  For Amazon sellers and Walmart sellers, working with a
                  wholesale distributor that supplies genuine branded inventory
                  and proper commercial documentation matters. Marketplace
                  sellers need real invoices, traceable supply and clear
                  commercial terms. That is exactly how we operate: every order
                  runs through a purchase-order process with confirmed
                  availability, MOQ and pricing, and is supported by the
                  documentation that accompanies a legitimate wholesale
                  transaction.
                </p>
                <p>
                  Our range covers{" "}
                  <Link
                    href="/tools-hardware"
                    className="font-medium underline underline-offset-4"
                  >
                    wholesale tools and hardware
                  </Link>{" "}
                  — including power tools, hand tools and accessories from
                  brands like Milwaukee, Makita, Stanley and Knipex — and{" "}
                  <Link
                    href="/sports-outdoor"
                    className="font-medium underline underline-offset-4"
                  >
                    wholesale sports and outdoor products
                  </Link>{" "}
                  such as climbing equipment, hiking gear, backpacks and
                  outdoor footwear from brands like Petzl, Thule, LEKI and
                  KASK.
                </p>
                <p>
                  Whether you&apos;re building a branded wholesale assortment for an
                  online store, expanding a retail range, or looking for a
                  reliable wholesale supplier for your marketplace business,
                  the starting point is the same:{" "}
                  <Link
                    href="/contact"
                    className="font-medium underline underline-offset-4"
                  >
                    request our catalog
                  </Link>{" "}
                  and tell us which brands and models interest you.
                </p>
              </div>
            </div>
            <div className="relative min-h-64 overflow-hidden rounded-card lg:col-span-2">
              <Image
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1000&q=80&auto=format&fit=crop"
                alt="Forklift moving freight between stacked shipping containers"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" aria-labelledby="faq-heading" className="border-t border-line bg-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2
            id="faq-heading"
            className="text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-body">
            Straight answers about wholesale ordering, MOQ, documentation and
            shipping. Anything else —{" "}
            <Link href="/contact" className="font-medium underline underline-offset-4">
              contact us
            </Link>
            .
          </p>
          <div className="mt-8">
            <FaqAccordion faqs={HOME_FAQS} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
