import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import {
  ArrowRightIcon,
  BoxesIcon,
  DocumentIcon,
  GlobeIcon,
  ShieldCheckIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About Hyprr Retail — B2B Wholesale Distributor",
  description:
    "Hyprr Retail is a B2B wholesale distributor supplying genuine branded tools, hardware, sports and outdoor products to e-commerce sellers, retailers and wholesale buyers.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Hyprr Retail",
    description:
      "A B2B wholesale distributor of genuine branded products for e-commerce sellers and retailers.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About" }]} />
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            About Hyprr Retail
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
            A B2B wholesale operation focused on one thing: supplying genuine
            branded products to commercial buyers through a clear, documented
            process.
          </p>
        </div>
      </section>

      <section aria-labelledby="about-what-we-do" className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h2
            id="about-what-we-do"
            className="text-2xl font-bold tracking-tight text-ink"
          >
            What we do
          </h2>
          <div className="mt-4 space-y-4 text-[0.95rem] leading-relaxed text-body">
            <p>
              Hyprr Retail supplies genuine branded tools, hardware, sports and
              outdoor products in wholesale quantities. Our customers are
              e-commerce sellers — including Amazon and Walmart marketplace
              sellers — online retailers, retail stores and wholesale buyers,
              primarily in the United States, with the United Kingdom and other
              international markets also supported.
            </p>
            <p>
              We work through established commercial supply channels and
              brand-authorized distributors, drawing on manufacturer-source
              markets where that provides better commercial pricing and
              supply-chain efficiency. Every order runs through a
              straightforward purchase-order process: catalog, model
              selection, confirmed availability and MOQ, pricing, purchase
              order, payment, fulfillment and shipping — supported by the
              commercial documentation applicable to the transaction.
            </p>
            <p>
              We build for long-term commercial relationships. That means
              honest answers about availability and MOQ, no invented pricing,
              no guaranteed-outcome claims, and documentation that stands up to
              scrutiny. If we can&apos;t supply something, we say so.
            </p>
          </div>

          <h2 className="mt-12 text-2xl font-bold tracking-tight text-ink">
            How we work
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[
              {
                icon: ShieldCheckIcon,
                title: "Genuine products only",
                copy: "Branded products obtained through established, authorized commercial channels.",
              },
              {
                icon: BoxesIcon,
                title: "Wholesale terms",
                copy: "Commercial quantities with MOQ, availability and pricing confirmed before every order.",
              },
              {
                icon: DocumentIcon,
                title: "Documentation",
                copy: "Commercial invoices, packing lists and shipping documentation as applicable.",
              },
              {
                icon: GlobeIcon,
                title: "Global shipping",
                copy: "Air, express, sea and container options to the US, UK and international markets.",
              },
            ].map((item) => (
              <li
                key={item.title}
                className="rounded-card border border-line bg-white p-6"
              >
                <item.icon className="h-6 w-6 text-ink" />
                <h3 className="mt-3 text-base font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-body">
                  {item.copy}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-[0.95rem] leading-relaxed text-body">
            Want to see the process in detail? Read{" "}
            <Link
              href="/how-it-works"
              className="font-medium underline underline-offset-4"
            >
              How It Works
            </Link>{" "}
            or browse the{" "}
            <Link href="/brands" className="font-medium underline underline-offset-4">
              brands we currently supply
            </Link>
            .
          </p>
          <Link
            href="/how-it-works"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            See how ordering works
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
