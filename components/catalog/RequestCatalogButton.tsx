"use client";

import type { ReactNode } from "react";
import { useCatalogModal } from "./CatalogModalContext";
import { ArrowRightIcon } from "../icons";

const variants = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-md bg-amber px-5 py-2.5 text-sm font-bold text-ink transition-colors hover:bg-amber-hover",
  "primary-lg":
    "inline-flex items-center justify-center gap-2 rounded-md bg-amber px-7 py-3.5 text-base font-bold text-ink transition-colors hover:bg-amber-hover",
  outline:
    "inline-flex items-center justify-center gap-2 rounded-md border border-line bg-white px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink",
  dark: "inline-flex items-center justify-center gap-2 rounded-md bg-dark px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-black",
  "outline-dark":
    "inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white/60",
  ghost:
    "inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline-offset-4 hover:underline",
} as const;

export default function RequestCatalogButton({
  variant = "primary",
  className = "",
  children,
  withArrow = true,
}: {
  variant?: keyof typeof variants;
  className?: string;
  children?: ReactNode;
  withArrow?: boolean;
}) {
  const { openModal } = useCatalogModal();
  return (
    <button
      type="button"
      onClick={openModal}
      className={`${variants[variant]} ${className}`}
    >
      {children ?? "Request a Catalog"}
      {withArrow && <ArrowRightIcon className="h-4 w-4" />}
    </button>
  );
}
