import Link from "next/link";
import Logo from "./Logo";
import RequestCatalogButton from "./catalog/RequestCatalogButton";
import { CATEGORY_LINKS, LEGAL_LINKS } from "@/lib/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Brands", href: "/brands" },
  ...CATEGORY_LINKS,
  { label: "How It Works", href: "/how-it-works" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
            <h2 className="text-sm font-semibold text-ink">Quick Links</h2>
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
            <h2 className="text-sm font-semibold text-ink">Company</h2>
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
            <h2 className="text-sm font-semibold text-ink">Policies</h2>
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

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Hyprr Retail. All rights reserved.
          </p>
          <p className="text-xs text-muted">
            Supplying brands. Building businesses.
          </p>
        </div>
      </div>
    </footer>
  );
}
