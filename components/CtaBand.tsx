import Link from "next/link";
import RequestCatalogButton from "./catalog/RequestCatalogButton";
import { ArrowRightIcon } from "./icons";

export default function CtaBand({
  title = "Ready to grow your business?",
  subtitle = "Request our latest catalog and product availability.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section aria-label="Request a catalog" className="bg-dark">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center lg:px-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-1.5 text-sm text-white/70">{subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <RequestCatalogButton variant="primary-lg" />
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-md border-[1.5px] border-white px-7 py-3.5 text-sm font-extrabold text-white transition-colors hover:bg-white/10"
          >
            Contact Us
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
