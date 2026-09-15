import Link from "next/link";

/**
 * Temporary approved wordmark from the mockups. The final logo is not yet
 * locked, so it is isolated here for easy replacement across header/footer.
 */
export default function Logo({
  withTagline = true,
  className = "",
}: {
  withTagline?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      aria-label="Hyprr Retail — home"
      className={`inline-flex flex-col leading-none ${className}`}
    >
      <span className="text-[1.7rem] tracking-[-0.02em]">
        <span className="font-extrabold text-ink">
          hypr
          <span className="bg-gradient-to-b from-[#E8A21C] to-[#DC6412] bg-clip-text text-transparent">
            r
          </span>
        </span>
        <span className="font-normal text-[#7a7e8a]">retail</span>
      </span>
      {withTagline && (
        <span className="mt-1.5 text-[0.53rem] font-semibold uppercase tracking-[0.14em] text-faint">
          Global brands. Real opportunities.
        </span>
      )}
    </Link>
  );
}
