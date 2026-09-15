import { Fragment } from "react";
import {
  ClipboardIcon,
  ListIcon,
  TagIcon,
  CheckCircleIcon,
  CreditCardIcon,
  TruckIcon,
} from "./icons";

/** Step tints sampled from the approved board. */
export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Request a catalog",
    icon: ClipboardIcon,
    bg: "#e3ecfb",
    fg: "#2b6cd9",
    summary: "Tell us which brands and categories you're interested in.",
    detail:
      "You tell us which categories, brands or specific model numbers you're interested in, along with basic information about your business. We reply with the relevant catalog and brand availability.",
  },
  {
    number: "02",
    title: "Select products",
    icon: ListIcon,
    bg: "#e2f4e6",
    fg: "#1a9b3c",
    summary:
      "Review available models and identify the products and quantities you want.",
    detail:
      "You review the catalog and product information we provide, then identify the models, variants and quantities that fit your business. You can ask about specific model numbers at any point.",
  },
  {
    number: "03",
    title: "Receive pricing",
    icon: TagIcon,
    bg: "#fbefd6",
    fg: "#d98a12",
    summary:
      "We confirm availability, minimum order quantities and current pricing.",
    detail:
      "We confirm availability, applicable minimum order quantities, wholesale pricing and the shipping options relevant to your destination and order size. MOQ varies by brand and product, so we confirm it before anything is committed.",
  },
  {
    number: "04",
    title: "Approve order",
    icon: CheckCircleIcon,
    bg: "#fbe3e1",
    fg: "#d4342a",
    summary:
      "You confirm the order details — products, quantities, pricing and shipping.",
    detail:
      "You review and confirm the full order: products, quantities, pricing, shipping method and timing. Nothing moves forward until you've approved the commercial terms.",
  },
  {
    number: "05",
    title: "Purchase order & payment",
    icon: CreditCardIcon,
    bg: "#ebe6fb",
    fg: "#6b5cff",
    summary:
      "The purchase order is issued and payment is arranged on agreed terms.",
    detail:
      "The purchase order is issued and accepted, and payment is arranged according to the agreed terms. This gives both sides a clear commercial record of the transaction.",
  },
  {
    number: "06",
    title: "Fulfillment & delivery",
    icon: TruckIcon,
    bg: "#dff4f0",
    fg: "#0e8f7d",
    summary:
      "Products are prepared with documentation and shipped by the agreed method.",
    detail:
      "Products are obtained through our established commercial supply channels, prepared with the required commercial documentation and shipped to you using the agreed method — air, express, sea or container freight depending on the order.",
  },
] as const;

function StepCircle({
  step,
  withArrow,
}: {
  step: (typeof PROCESS_STEPS)[number];
  withArrow: boolean;
}) {
  return (
    <div className="flex items-center">
      <span
        className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: step.bg }}
      >
        <step.icon className="h-6 w-6" style={{ color: step.fg }} />
      </span>
      {withArrow && (
        <span
          aria-hidden
          className="hidden flex-1 text-center text-base text-faint lg:block"
        >
          →
        </span>
      )}
    </div>
  );
}

export default function HowItWorksSteps({
  detailed = false,
}: {
  detailed?: boolean;
}) {
  return (
    <ol className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
      {PROCESS_STEPS.map((step, index) => (
        <Fragment key={step.number}>
          <li>
            <StepCircle
              step={step}
              withArrow={index < PROCESS_STEPS.length - 1}
            />
            <p className="mt-3 text-base font-extrabold text-ink">
              {step.number}
            </p>
            <h3 className="mt-0.5 max-w-[10rem] text-sm font-bold leading-snug text-ink">
              {step.title}
            </h3>
            <p
              className={`mt-2 max-w-[11rem] text-xs leading-relaxed text-body ${
                detailed ? "" : "hidden sm:block"
              }`}
            >
              {detailed ? step.detail : step.summary}
            </p>
          </li>
        </Fragment>
      ))}
    </ol>
  );
}
