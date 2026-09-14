import type { ComponentType, SVGProps } from "react";

export interface TrustChip {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}

export default function TrustChips({ chips }: { chips: TrustChip[] }) {
  return (
    <ul className="grid grid-cols-2 gap-x-8 gap-y-3 sm:flex sm:flex-wrap sm:items-center sm:gap-x-12">
      {chips.map(({ icon: Icon, label }) => {
        const [first, ...rest] = label.split(" ");
        return (
          <li key={label} className="flex items-center gap-2.5">
            <Icon className="h-[26px] w-[26px] shrink-0 text-ink" strokeWidth={1.6} />
            <span className="text-[11px] font-semibold leading-[1.3] text-body">
              {first}
              {rest.length > 0 && (
                <>
                  <br />
                  {rest.join(" ")}
                </>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
