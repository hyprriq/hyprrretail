import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import RequestCatalogForm from "@/components/catalog/RequestCatalogForm";
import { ChatIcon, ClipboardIcon, MailIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Contact Us — Request a Catalog or Seller Support",
  description:
    "Contact Hyprr Retail to request a wholesale catalog, ask about brands and model numbers, or get seller support for Amazon, Walmart and other marketplaces.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Hyprr Retail",
    description:
      "Request a wholesale catalog or ask about brands, models, MOQ and shipping.",
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
            Request our catalog, ask about specific brands or model numbers,
            or get support as an e-commerce seller. Tell us what you need and
            we&apos;ll reply by email, usually within one business day.
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
                  icon: ClipboardIcon,
                  title: "Catalog requests",
                  copy: "Access our latest catalog, brand list and availability. Select the brands you're interested in using the form — multiple selections welcome.",
                },
                {
                  icon: ChatIcon,
                  title: "Seller support",
                  copy: "Questions about MOQ, wholesale pricing, marketplace documentation support or the ordering process for Amazon, Walmart and other channels.",
                },
                {
                  icon: MailIcon,
                  title: "Brand & model enquiries",
                  copy: "Already know the model numbers you want? Include them in the form and we'll check availability and pricing directly.",
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
            <p className="mt-8 rounded-card border border-line bg-surface p-5 text-sm leading-relaxed text-body">
              We respond to every genuine business enquiry. The more you tell
              us about your business, marketplace and target brands, the faster
              we can send relevant catalog and availability information.
            </p>
          </div>
          <div className="rounded-card border border-line bg-white p-6 sm:p-8 lg:col-span-3">
            <h2 className="text-xl font-bold tracking-tight text-ink">
              Request Our Catalog
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-body">
              Get access to our latest product catalog, brand list and current
              availability. Tell us a little about your business and we&apos;ll
              send it to you.
            </p>
            <div className="mt-6">
              <RequestCatalogForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
