import Link from "next/link";
import JsonLd from "./JsonLd";
import { SITE_URL } from "@/lib/site";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const all: Crumb[] = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: all.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.label,
            ...(crumb.href ? { item: `${SITE_URL}${crumb.href}` } : {}),
          })),
        }}
      />
      <nav aria-label="Breadcrumb" className="text-xs text-muted">
        <ol className="flex flex-wrap items-center gap-1.5">
          {all.map((crumb, index) => (
            <li key={crumb.label} className="flex items-center gap-1.5">
              {index > 0 && <span aria-hidden>›</span>}
              {crumb.href && index < all.length - 1 ? (
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-ink"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span aria-current="page" className="font-medium text-ink">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
