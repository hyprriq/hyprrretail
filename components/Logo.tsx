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
      <span className="text-[1.55rem] font-extrabold tracking-tight text-ink">
        hyprr<span className="text-brand-red">r</span>etail
      </span>
      {withTagline && (
        <span className="mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-muted">
          Global brands. Real opportunities.
        </span>
      )}
    </Link>
  );
}
