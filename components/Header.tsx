"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import RequestCatalogButton from "./catalog/RequestCatalogButton";
import { CATEGORY_LINKS, MAIN_NAV } from "@/lib/site";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "./icons";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);

  // Close the categories dropdown on outside click or Escape.
  useEffect(() => {
    if (!categoriesOpen) return;
    function onPointerDown(event: MouseEvent) {
      if (!categoriesRef.current?.contains(event.target as Node)) {
        setCategoriesOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setCategoriesOpen(false);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [categoriesOpen]);

  const linkClasses = (href: string) =>
    `text-sm font-medium transition-colors hover:text-ink ${
      pathname === href ? "text-ink" : "text-body"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {MAIN_NAV.map((item) =>
            item.children ? (
              <div key={item.label} ref={categoriesRef} className="relative">
                <button
                  type="button"
                  onClick={() => setCategoriesOpen((v) => !v)}
                  aria-expanded={categoriesOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1 text-sm font-medium text-body transition-colors hover:text-ink"
                >
                  {item.label}
                  <ChevronDownIcon
                    className={`h-3.5 w-3.5 transition-transform ${
                      categoriesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {categoriesOpen && (
                  <div className="absolute left-0 top-full mt-3 w-56 rounded-card border border-line bg-white p-2 shadow-lg">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setCategoriesOpen(false)}
                        className="block rounded-md px-3 py-2.5 text-sm font-medium text-body transition-colors hover:bg-surface hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={linkClasses(item.href)}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <RequestCatalogButton />
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="rounded-md p-2 text-ink lg:hidden"
        >
          {mobileOpen ? (
            <CloseIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav
          aria-label="Mobile"
          className="border-t border-line bg-white px-4 pb-6 pt-2 lg:hidden"
          onClickCapture={(event) => {
            if ((event.target as HTMLElement).closest("a, button")) {
              setMobileOpen(false);
            }
          }}
        >
          <Link
            href="/"
            className="block py-3 text-base font-medium text-body"
          >
            Home
          </Link>
          <Link
            href="/brands"
            className="block border-t border-line py-3 text-base font-medium text-body"
          >
            Brands
          </Link>
          <p className="border-t border-line pb-1 pt-3 text-xs font-semibold uppercase tracking-wider text-muted">
            Categories
          </p>
          {CATEGORY_LINKS.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block py-2.5 pl-3 text-base font-medium text-body"
            >
              {child.label}
            </Link>
          ))}
          {[
            { label: "How It Works", href: "/how-it-works" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border-t border-line py-3 text-base font-medium text-body"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4">
            <RequestCatalogButton className="w-full" />
          </div>
        </nav>
      )}
    </header>
  );
}
