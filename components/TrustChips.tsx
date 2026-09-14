import type { ComponentType, SVGProps } from "react";

export interface TrustChip {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}

export default function TrustChips({ chips }: { chips: TrustChip[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-12">
      {chips.map(({ icon: Icon, label }) => (
        <li key={label} className="flex items-center gap-2.5">
          <Icon className="h-6 w-6 shrink-0 text-ink" strokeWidth={1.5} />
          <span className="text-xs font-semibold leading-tight text-body">
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
