import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import RequestCatalogButton from "@/components/catalog/RequestCatalogButton";
import { ChatIcon, ClipboardIcon, MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us — Wholesale & Business Enquiries",
  description:
    "Contact Hyprr Retail with wholesale enquiries, brand and model availability questions, shipping questions or seller support — or request our wholesale catalog.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Hyprr Retail",
    description:
      "Wholesale enquiries, brand and product availability, shipping questions and seller support.",
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact" }]} />
          <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] text-soft sm:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
            Ask about brands, models, shipping or anything else — we reply by
            email, usually within one business day. For full catalog access,
            use Request Catalog.
          </p>
        </div>
      </section>

      <section aria-label="Contact form" className="bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold tracking-tight text-ink">
              What can we help with?
            </h2>
            <ul className="mt-6 space-y-6">
              {[
                {
                  icon: MailIcon,
                  title: "Brand & model enquiries",
                  copy: "Wondering whether we carry a brand or can supply a specific model? Ask — we'll answer honestly, including when we can't.",
                },
                {
                  icon: ChatIcon,
                  title: "Seller support",
                  copy: "Questions about MOQ, wholesale pricing, marketplace documentation support or the ordering process for Amazon, Walmart and other channels.",
                },
                {
                  icon: ClipboardIcon,
                  title: "Shipping & business enquiries",
                  copy: "Shipping options and timing, distribution enquiries, or anything else commercial — send a message and we'll route it to the right person.",
                },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-surface text-ink">
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
            <div className="mt-8 rounded-card border border-line bg-surface p-5">
              <h3 className="text-sm font-bold text-ink">
                Looking for the catalog?
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-body">
                For catalog requests, brand and model availability and
                wholesale enquiries with order details, use the catalog form —
                it collects everything we need to quote you accurately.
              </p>
              <div className="mt-4">
                <RequestCatalogButton />
              </div>
            </div>
          </div>
          <div className="rounded-card border border-line bg-white p-6 sm:p-8 lg:col-span-3">
            <h2 className="text-xl font-bold tracking-tight text-ink">
              Send us a message
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-body">
              A quick question doesn&apos;t need a long form. Tell us what you
              need and we&apos;ll get back to you.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
