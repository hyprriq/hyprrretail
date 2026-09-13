/**
 * Clean typographic brand treatment. Official logo assets can replace these
 * marks later without changing any page — swap the implementation here.
 */
export default function BrandMark({
  name,
  className = "",
}: {
  name: string;
  className?: string;
}) {
  return (
    <span
      className={`select-none text-lg font-extrabold uppercase tracking-[0.08em] text-ink ${className}`}
    >
      {name}
    </span>
  );
}
