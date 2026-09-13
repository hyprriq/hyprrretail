import type { ComponentType, SVGProps } from "react";

export interface TrustChip {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}

export default function TrustChips({ chips }: { chips: TrustChip[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-line pt-6 sm:grid-cols-4">
      {chips.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2.5">
          <Icon className="h-5 w-5 shrink-0 text-ink" />
          <span className="text-[0.8rem] font-semibold text-ink">{label}</span>
        </li>
      ))}
    </ul>
  );
}
