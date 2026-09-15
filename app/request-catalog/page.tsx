import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/site";
import Breadcrumbs from "@/components/Breadcrumbs";
import RequestCatalogForm from "@/components/catalog/RequestCatalogForm";

export const metadata: Metadata = {
  title: "Wholesale Catalog Request",
  description:
    "Request the current wholesale catalog for branded tools, hardware, sports and outdoor products. Tell us your brands, volumes and destination market and we reply within one business day.",
  alternates: { canonical: "/request-catalog" },
  openGraph: {
    title: "Wholesale Catalog Request | Hyprr Retail",
    description:
      "Request the current wholesale catalog for branded tools, hardware, sports and outdoor products.",
    url: "/request-catalog",
    images: [OG_IMAGE],
  },
};

export default function RequestCatalogPage() {
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Request a Catalog" }]} />
          <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] text-soft sm:text-5xl">
            Request the wholesale catalog
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-body sm:text-lg">
            Tell us about your business and the brands you&apos;re interested
            in. Our team reviews every request and replies with the current
            catalog and commercial terms, usually within one business day.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-card border border-line bg-white p-6 sm:p-8">
            <RequestCatalogForm />
          </div>
        </div>
      </section>
    </>
  );
}
