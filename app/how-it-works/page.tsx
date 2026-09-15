import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import HowItWorksSteps from "@/components/HowItWorksSteps";
import RequestCatalogButton from "@/components/catalog/RequestCatalogButton";
import Image from "next/image";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  ContainerIcon,
  DocumentIcon,
  PlaneIcon,
  ShipIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Wholesale Ordering Process & Documentation",
  description:
    "How wholesale ordering works: request a catalog, confirm pricing, issue a purchase order, and receive goods with commercial invoices and packing lists.",
  alternates: { canonical: "/how-it-works" },
  openGraph: {
    title: "How It Works | Hyprr Retail",
    description:
      "A simple, transparent wholesale ordering process — from catalog request to delivery.",
  },
};

const DOCUMENTATION_ITEMS = [
  "Commercial invoices",
  "Packing lists",
  "Certificates of origin (where applicable)",
  "Manufacturer documentation",
  "Product and brand information",
];

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "How It Works" }]} />
          <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] text-soft sm:text-5xl">
            How wholesale ordering and documentation works
          </h1>
          <p className="mt-2 text-xl font-bold text-soft">
            A simple process. Real business opportunities.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-body">
            This is how Hyprr Retail handles wholesale orders from first
            catalog request through delivery. Every step is confirmed with you
            before the next one begins — availability, minimum order
            quantities, pricing and shipping are always agreed before a
            purchase order is issued.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section aria-labelledby="process-steps" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 id="process-steps" className="sr-only">
            The wholesale ordering process
          </h2>
          <HowItWorksSteps detailed />
        </div>
      </section>

      {/* MOQ and quantities */}
      <section
        aria-labelledby="moq-heading"
        className="border-y border-line bg-surface"
      >
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <h2
            id="moq-heading"
            className="text-2xl font-bold tracking-tight text-ink"
          >
            How do MOQ and wholesale quantities work?
          </h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-body">
            <p>
              Minimum order quantities vary by brand, product and order — there
              is no universal MOQ. When you select models from the catalog, we
              confirm the applicable MOQ, current availability and wholesale
              pricing for exactly those items before any purchase order is
              issued. Typical wholesale orders start around commercial
              quantities appropriate to each brand, and we&apos;ll always tell
              you the threshold up front.
            </p>
            <p>
              If you have specific model numbers in mind, include them in your
              catalog request. Quoting against exact models is the fastest way
              to get accurate availability and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section
        id="documentation"
        aria-labelledby="documentation-heading"
        className="scroll-mt-24 bg-white"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <h2
              id="documentation-heading"
              className="text-2xl font-bold tracking-tight text-ink"
            >
              Commercial documentation
            </h2>
            <p className="mt-4 max-w-md text-[0.95rem] leading-relaxed text-body">
              Wholesale orders are supported by the commercial documentation
              applicable to the transaction. Depending on the order, that can
              include:
            </p>
            <ul className="mt-5 space-y-3.5">
              {DOCUMENTATION_ITEMS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1a9b3c]">
                    <CheckIcon className="h-3 w-3 text-white" strokeWidth={3.5} />
                  </span>
                  <span className="text-sm font-semibold text-body">{item}</span>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-lg font-bold text-ink">
              Marketplace documentation support
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-body">
              If you&apos;re concerned about permission or documentation
              requirements for selling a brand on Amazon, Walmart or another
              marketplace, we can provide documentation support and guidance
              before a purchase order for a small service fee, where
              applicable. Requirements vary by seller account, marketplace and
              brand — documentation support never guarantees approval, and
              final decisions always belong to the marketplace. Applicable fee
              and refund terms are governed by our{" "}
              <Link href="/terms" className="font-medium underline underline-offset-4">
                Terms of Use
              </Link>{" "}
              and{" "}
              <Link
                href="/refund-policy"
                className="font-medium underline underline-offset-4"
              >
                Refund Policy
              </Link>
              .
            </p>
          </div>

          {/* Evidence — real transaction documents, redacted for confidentiality. */}
          <div className="flex flex-col rounded-card border border-line bg-surface p-6 sm:p-8">
            <div className="flex items-center gap-3">
              <DocumentIcon className="h-6 w-6 text-ink" />
              <h3 className="text-lg font-bold text-ink">
                Example transaction documentation
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-body">
              Documents from completed wholesale transactions. Company,
              personal, banking and shipment-identifier details are redacted;
              the commercial substance — routes, quantities, weights and terms
              — is unedited.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {[
                {
                  src: "/images/doc-bill-of-lading.jpg",
                  alt: "Redacted express bill of lading for a sea-freight wholesale shipment from Italy to New York",
                  label: "Express Bill of Lading",
                  sub: "Sea freight, Genova → New York",
                  aspect: "aspect-[1309/1850]",
                },
                {
                  src: "/images/doc-ship-notice.jpg",
                  alt: "Redacted ship departure notice for an export consignment from Genova to Newark",
                  label: "Ship Departure Notice",
                  sub: "Export forwarding, Genova → Newark",
                  aspect: "aspect-[1309/1850]",
                },
                {
                  src: "/images/doc-invoice-items.jpg",
                  alt: "Redacted commercial invoice line items for a Knipex and Milwaukee wholesale order with air shipping to the USA",
                  label: "Commercial Invoice — Line Items",
                  sub: "Knipex & Milwaukee wholesale order",
                  aspect: "aspect-[977/807]",
                },
                {
                  src: "/images/doc-brand-approvals.jpg",
                  alt: "Redacted Amazon Seller Central screenshots showing approved brand selling applications for Milwaukee, KNIPEX and LEKI",
                  label: "Amazon Brand Approvals",
                  sub: "Milwaukee · KNIPEX · LEKI — seller account",
                  aspect: "aspect-[902/700]",
                },
              ].map((doc) => (
                <figure key={doc.src} className="overflow-hidden rounded border border-line bg-white">
                  <div className={`relative ${doc.aspect}`}>
                    <Image
                      src={doc.src}
                      alt={doc.alt}
                      fill
                      sizes="(min-width: 1024px) 20vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="border-t border-line px-3 py-2.5">
                    <p className="text-xs font-bold text-ink">{doc.label}</p>
                    <p className="mt-0.5 text-[0.68rem] text-muted">{doc.sub}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
            <p className="mt-4 text-[0.7rem] leading-relaxed text-faint">
              Redacted for confidentiality. Marketplace screenshots are from
              our own seller applications — approval decisions always rest
              with the marketplace. Documentation varies by order, destination
              and channel; ask us what accompanies a typical order for yours.
            </p>
            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
              >
                Ask about documentation
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fulfillment */}
      <section
        aria-labelledby="fulfillment-heading"
        className="border-t border-line bg-surface"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2
            id="fulfillment-heading"
            className="text-2xl font-bold tracking-tight text-ink"
          >
            Global fulfillment
          </h2>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-body">
            Orders ship to the US, UK and international destinations. The
            right method depends on order size, destination, timing, product
            and customs or import requirements where applicable — we confirm
            shipping cost and timing with you before the order is finalized,
            and we never promise a universal delivery time.
          </p>
          <ul className="mt-9 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              {
                icon: PlaneIcon,
                title: "Air Freight",
                copy: "Fast delivery for higher-value or time-critical orders.",
              },
              {
                icon: ShipIcon,
                title: "Sea Freight",
                copy: "Cost-effective for larger, less time-sensitive volumes.",
              },
              {
                icon: ClockIcon,
                title: "Express Shipping",
                copy: "Courier options for smaller urgent shipments.",
              },
              {
                icon: ContainerIcon,
                title: "Full / Partial Containers",
                copy: "FCL and LCL options for substantial wholesale orders.",
              },
            ].map((method) => (
              <li
                key={method.title}
                className="rounded border border-line bg-white p-5 text-center"
              >
                <method.icon
                  className="mx-auto h-9 w-9"
                  style={{ color: "#6b5cff" }}
                />
                <h3 className="mt-3 text-sm font-bold text-ink">
                  {method.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-body">
                  {method.copy}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Contact" className="relative overflow-hidden bg-dark">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden opacity-50 md:block">
          <Image
            src="/images/logistics.jpg"
            alt=""
            width={1400}
            height={933}
            className="h-full w-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/60 to-transparent" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center lg:px-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Have questions about the process?
            </h2>
            <p className="mt-1.5 text-sm text-white/70">
              We&apos;re here to help.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-amber px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-amber-hover"
            >
              Contact Us
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <RequestCatalogButton variant="outline-dark" />
          </div>
        </div>
      </section>
    </>
  );
}
