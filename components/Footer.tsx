import Link from "next/link";
import Logo from "./Logo";
import RequestCatalogButton from "./catalog/RequestCatalogButton";
import {
  AREA_SERVED,
  CATEGORY_LINKS,
  LEGAL_LINKS,
  SITE_ADDRESS,
  SITE_LEGAL_NAME,
} from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Brands", href: "/brands" },
  ...CATEGORY_LINKS,
  { label: "How It Works", href: "/how-it-works" },
  { label: "Insights", href: "/insights" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Catalog", href: "/request-catalog" },
  {
    label: "Marketplace Documentation Support",
    href: "/how-it-works#documentation",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 lg:grid-cols-4">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              B2B wholesale distribution of branded tools, hardware,
              sports and outdoor products for e-commerce sellers and retailers.
            </p>
            <div className="mt-5">
              <RequestCatalogButton />
            </div>
          </div>

          <nav aria-label="Quick links">
            <p className="text-sm font-semibold text-ink">Quick Links</p>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="text-sm font-semibold text-ink">Company</p>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Policies">
            <p className="text-sm font-semibold text-ink">Policies</p>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-xs font-semibold text-body">{SITE_LEGAL_NAME}</p>
          <p className="mt-1 text-xs text-muted">
            {SITE_ADDRESS.street}, {SITE_ADDRESS.city}, {SITE_ADDRESS.region}{" "}
            {SITE_ADDRESS.postalCode}, United States
          </p>
          <p className="mt-1 text-xs text-muted">
            Serving {AREA_SERVED.slice(0, -1).join(", ")} and{" "}
            {AREA_SERVED[AREA_SERVED.length - 1]}
          </p>

          <div className="mt-5 max-w-4xl space-y-2.5">
            <p className="text-[0.7rem] leading-relaxed text-muted">
              {SITE_LEGAL_NAME} is an independent wholesale distributor. We are
              not affiliated with, authorized by, endorsed by or sponsored by
              Amazon.com, Inc., Walmart Inc., or any of the brands listed on
              this site. All product names, brand names, logos and trademarks
              are the property of their respective owners and are used here for
              identification purposes only.
            </p>
            <p className="text-[0.7rem] leading-relaxed text-muted">
              Hyprr Retail supplies products with commercial documentation.
              Buyers are responsible for their own eligibility to sell any
              product on any marketplace, and for meeting that
              marketplace&apos;s requirements. We do not guarantee marketplace
              approval.
            </p>
          </div>

          <div className="mt-5 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-muted">
              © {new Date().getFullYear()} {SITE_LEGAL_NAME}. All rights
              reserved.
            </p>
            <p className="text-xs text-muted">
              Supplying brands. Building businesses.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
