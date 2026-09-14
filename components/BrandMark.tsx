import Image from "next/image";
import type { Brand } from "@/lib/brands";

const sizes = {
  sm: { box: "h-7", width: 96, height: 28 },
  md: { box: "h-9", width: 128, height: 36 },
} as const;

/**
 * Official brand logo where an asset exists (natural brand colors, never
 * recolored), with a clean typographic treatment as the fallback for brands
 * whose official mark hasn't been sourced yet.
 */
export default function BrandMark({
  brand,
  size = "md",
  className = "",
}: {
  brand: Pick<Brand, "name" | "logo" | "logoBoxy">;
  size?: keyof typeof sizes;
  className?: string;
}) {
  const s = sizes[size];
  if (brand.logo) {
    // Boxed/emblem logos carry more visual weight than wordmarks at equal
    // height, so they render one step smaller for optical balance.
    const box = brand.logoBoxy ? (size === "md" ? "h-8" : "h-6") : s.box;
    return (
      <Image
        src={brand.logo}
        alt={`${brand.name} logo`}
        width={s.width}
        height={s.height}
        className={`${box} w-auto object-contain ${className}`}
      />
    );
  }
  return (
    <span
      className={`select-none font-extrabold uppercase tracking-[0.08em] text-ink ${
        size === "sm" ? "text-base" : "text-lg"
      } ${className}`}
    >
      {brand.name}
    </span>
  );
}
