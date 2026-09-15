import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function NotFound() {
  return (
    <section className="bg-surface">
      <div className="mx-auto flex max-w-3xl flex-col items-center px-4 py-28 text-center sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted">
          404 — Page not found
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-body">
          The page you&apos;re looking for may have moved. Head back to the
          homepage, browse our brands, or request a catalog.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            Back to homepage
          </Link>
          <Link
            href="/brands"
            className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            View brands
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
