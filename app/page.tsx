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

      {/* Hero — approved board composition: copy left, commercial scene right */}
      <section className="relative overflow-hidden bg-surface">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden lg:block">
          <Image
            src="/images/hero-home.jpg"
            alt="Hiker with a Thule backpack beside a Milwaukee tool case, KASK helmet, La Sportiva footwear and trekking poles in the mountains"
            width={635}
            height={616}
            priority
            className="h-full w-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent lg:w-40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl py-10 lg:max-w-xl lg:py-14 xl:max-w-2xl">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted">
              Genuine brands. Global supply.
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-[1.04] tracking-[-0.025em] sm:text-5xl">
              <span className="text-soft">Wholesale products</span>
              <br />
              for e-commerce
              <br />
              sellers and retailers.
            </h1>
            <p className="mt-4 max-w-lg text-[0.95rem] font-medium leading-relaxed text-body">
              Genuine branded tools, hardware and outdoor products supplied
              through established commercial distribution channels.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <RequestCatalogButton variant="primary-lg" />
              <Link
                href="/brands"
                className="inline-flex items-center justify-center gap-2 rounded-md border-[1.5px] border-ink bg-white px-6 py-3 text-sm font-extrabold text-ink transition-colors hover:bg-surface"
              >
                View Our Brands
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
          {/* Mobile hero image — dedicated portrait crop keeping hiker + products */}
          <div className="relative -mx-4 aspect-[390/616] max-h-[70vh] w-auto sm:-mx-6 lg:hidden">
            <Image
              src="/images/hero-home-mobile.jpg"
              alt="Hiker with a Thule backpack beside a Milwaukee tool case, KASK helmet and La Sportiva footwear"
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
          <TrustChips
            chips={[
              { icon: ShieldCheckIcon, label: "Genuine Products" },
              { icon: BoxesIcon, label: "Wholesale Quantities" },
              { icon: DocumentIcon, label: "Commercial Documentation" },
              { icon: GlobeIcon, label: "Global Shipping" },
            ]}
          />
        </div>
      </div>

      {/* Featured brands */}
      <section
        aria-labelledby="featured-brands"
        className="border-b border-line bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h2
            id="featured-brands"
            className="text-xl font-semibold text-soft"
          >
            Featured brands
          </h2>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-6">
            <ul className="flex flex-wrap items-center gap-x-10 gap-y-5">
              {featuredBrands().map((brand) => (
                <li key={brand.slug}>
                  <BrandMark brand={brand} />
                </li>
              ))}
            </ul>
            <Link
              href="/brands"
              className="text-xs font-bold text-ink underline-offset-4 hover:underline"
            >
              View all brands&nbsp;&nbsp;→
            </Link>
          </div>
          <p className="sr-only">
            We supply genuine products from established tool, hardware and
            outdoor brands, including Milwaukee, Makita, Knipex, Thule, LEKI
            and Stanley, with the full brand directory on our Brands page.
          </p>
        </div>
      </section>

      {/* Category cards */}
      <section aria-label="Product categories" className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-6 sm:px-6 md:grid-cols-2 lg:px-8">
          {[
            {
              href: "/tools-hardware",
              title: "Tools & Hardware",
              copy: "Professional power tools, hand tools, accessories and hardware from leading brands.",
              image: "/images/card-tools.png",
              alt: "Milwaukee professional power tool close-up",
            },
            {
              href: "/sports-outdoor",
              title: "Sports & Outdoor",
              copy: "Climbing, hiking, outdoor equipment and footwear for retailers and e-commerce sellers.",
              image: "/images/card-sports.png",
              alt: "Hiker in a yellow jacket looking across snowy mountains",
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group relative block h-[230px] overflow-hidden rounded bg-dark sm:h-[250px]"
            >
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#14141a]/85 via-[#14141a]/40 to-transparent px-6 pb-4 pt-10 text-white">
                <p className="text-[1.35rem] font-bold">
                  {card.title}&nbsp;&nbsp;→
                </p>
                <p className="mt-1 max-w-sm text-xs leading-relaxed opacity-90">
                  {card.copy}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trusted distribution */}
      <section
        aria-labelledby="proposition"
        className="border-b border-line bg-white"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 px-4 py-8 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative pb-10 pr-0 lg:border-r lg:border-line lg:pb-0 lg:pr-12">
            <span className="absolute left-0 top-1.5 hidden h-14 w-[3px] bg-brand-red lg:block" />
            <div className="lg:pl-6">
              <h2
                id="proposition"
                className="text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-soft"
              >
                Trusted distribution.
                <br />
                Real opportunities.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-body">
                We work with established commercial distribution channels to
                supply genuine branded products to e-commerce sellers,
                retailers and wholesale buyers. All orders are supported with
                the appropriate commercial documentation where applicable.
              </p>
              <Link
                href="/how-it-works"
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-dark px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-black"
              >
                Learn more&nbsp;&nbsp;→
              </Link>
            </div>
          </div>
          <ul className="grid gap-5 pt-2 lg:pl-10">
            {[
              {
                icon: ShieldCheckIcon,
                title: "Authentic products",
                copy: "Genuine branded products from authorized distribution channels.",
              },
              {
                icon: DocumentIcon,
                title: "Commercial documentation",
                copy: "Invoices, packing lists and certificates (where applicable).",
              },
              {
                icon: TagIcon,
                title: "Competitive wholesale pricing",
                copy: "Access to wholesale quantities and favorable pricing.",
              },
              {
                icon: GlobeIcon,
                title: "Global fulfillment",
                copy: "Flexible shipping options to the US, UK and international markets.",
              },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <item.icon className="h-7 w-7 shrink-0 text-ink" />
                <div>
                  <h3 className="text-sm font-bold text-ink">{item.title}</h3>
                  <p className="mt-0.5 text-[0.8rem] leading-relaxed text-body">
                    {item.copy}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section
        aria-labelledby="how-it-works"
        className="border-b border-line bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            <h2 id="how-it-works" className="text-xl font-semibold text-soft">
              How it works
            </h2>
            <Link
              href="/how-it-works"
              className="text-xs font-bold text-ink underline-offset-4 hover:underline"
            >
              View full process&nbsp;&nbsp;→
            </Link>
          </div>
          <div className="mt-5">
            <HowItWorksSteps />
          </div>
        </div>
      </section>

      {/* Seller support + shipping */}
      <section
        aria-label="Seller support and shipping"
        className="bg-white"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 px-4 py-7 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="pb-10 lg:border-r lg:border-line lg:pb-0 lg:pr-12">
            <h2 className="text-lg font-bold text-ink">
              Support for e-commerce sellers
            </h2>
            <p className="mt-3 max-w-lg text-[0.82rem] leading-relaxed text-body">
              We can provide documentation support for Amazon, Walmart and
              other marketplace sellers who need brand or product permission
              documentation. Conditions apply — and no supplier can guarantee
              marketplace approval.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-7">
              <Link
                href="/how-it-works#documentation"
                className="inline-flex items-center gap-2 rounded-md bg-dark px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-black"
              >
                Learn more&nbsp;&nbsp;→
              </Link>
              <span className="text-lg font-bold text-muted">amazon</span>
              <span className="text-lg font-bold text-muted">Walmart</span>
            </div>
          </div>
          <div className="lg:pl-10">
            <h2 className="text-lg font-bold text-ink">
              Shipping that fits your order
            </h2>
            <ul className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {[
                { icon: PlaneIcon, title: "Air Freight", copy: "Fast delivery" },
                { icon: ShipIcon, title: "Sea Freight", copy: "Cost-effective" },
                { icon: ClockIcon, title: "Express", copy: "Time-sensitive" },
                {
                  icon: ContainerIcon,
                  title: "Full / Partial",
                  copy: "Containers",
                },
              ].map((method) => (
                <li key={method.title} className="text-center">
                  <method.icon
                    className="mx-auto h-9 w-9"
                    style={{ color: "#6b5cff" }}
                  />
                  <h3 className="mt-2.5 text-[0.8rem] font-bold text-ink">
                    {method.title}
                  </h3>
                  <p className="mt-0.5 text-xs text-body">{method.copy}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Wholesale editorial band with container imagery */}
      <section aria-labelledby="wholesale-band" className="bg-surface-2">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,480px)]">
          <div className="px-4 py-8 sm:px-6 lg:px-8">
            <h2
              id="wholesale-band"
              className="max-w-xl text-3xl font-semibold leading-[1.1] tracking-[-0.02em] text-soft"
            >
              Wholesale branded products for e-commerce sellers and retailers.
            </h2>
            <p className="mt-3 max-w-xl text-[0.82rem] leading-relaxed text-body">
              Hyprr Retail is a wholesale distributor in the USA, supplying
              genuine branded tools, hardware and outdoor products to
              e-commerce sellers, retailers and other wholesale buyers.
            </p>
            <Link
              href="/about"
              className="mt-5 inline-flex items-center gap-2 rounded-md border-[1.5px] border-ink bg-white px-5 py-3 text-xs font-extrabold text-ink transition-colors hover:bg-surface"
            >
              Learn more about Hyprr Retail&nbsp;&nbsp;→
            </Link>
          </div>
          <div className="relative hidden md:block">
            <Image
              src="/images/containers.png"
              alt="Forklift moving freight between stacked shipping containers"
              fill
              sizes="480px"
              className="object-cover"
            />
            <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-surface-2 to-transparent" />
          </div>
        </div>
      </section>

      {/* SEO editorial */}
      <section aria-labelledby="wholesale-editorial" className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h2
            id="wholesale-editorial"
            className="text-2xl font-semibold tracking-[-0.02em] text-soft"
          >
            A wholesale supplier built for commercial buyers
          </h2>
          <div className="mt-5 space-y-4 text-[0.9rem] leading-relaxed text-body">
            <p>
              Hyprr Retail is a B2B wholesale supplier and distributor serving
              the United States first, with the United Kingdom and other
              international markets also supported. We supply genuine branded
              products — professional tools, hardware, and sports and outdoor
              equipment — in wholesale quantities to e-commerce sellers, online
              retailers, retail stores and wholesale buyers.
            </p>
            <p>
              For Amazon sellers and Walmart sellers, working with a wholesale
              distributor that supplies genuine branded inventory and proper
              commercial documentation matters. Marketplace sellers need real
              invoices, traceable supply and clear commercial terms. That is
              exactly how we operate: every order runs through a purchase-order
              process with confirmed availability, MOQ and pricing, and is
              supported by the documentation that accompanies a legitimate
              wholesale transaction.
            </p>
            <p>
              Our range covers{" "}
              <Link
                href="/tools-hardware"
                className="font-medium underline underline-offset-4"
              >
                wholesale tools and hardware
              </Link>{" "}
              — including power tools, hand tools and accessories from brands
              like Milwaukee, Makita, Stanley and Knipex — and{" "}
              <Link
                href="/sports-outdoor"
                className="font-medium underline underline-offset-4"
              >
                wholesale sports and outdoor products
              </Link>{" "}
              such as climbing equipment, hiking gear, backpacks and outdoor
              footwear from brands like Petzl, Thule, LEKI and KASK.
            </p>
            <p>
              Whether you&apos;re building a branded wholesale assortment for
              an online store, expanding a retail range, or looking for a
              reliable wholesale supplier for your marketplace business, the
              starting point is the same:{" "}
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
      </section>

      {/* FAQs */}
      <section
        id="faqs"
        aria-labelledby="faq-heading"
        className="border-t border-line bg-surface"
      >
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <h2
            id="faq-heading"
            className="text-2xl font-semibold tracking-[-0.02em] text-soft"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-body">
            Straight answers about wholesale ordering, MOQ, documentation and
            shipping. Anything else —{" "}
            <Link
              href="/contact"
              className="font-medium underline underline-offset-4"
            >
              contact us
            </Link>
            .
          </p>
          <div className="mt-7">
            <FaqAccordion faqs={HOME_FAQS} />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
