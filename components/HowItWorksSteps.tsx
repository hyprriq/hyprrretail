import { Fragment } from "react";
import {
  ClipboardIcon,
  ListIcon,
  TagIcon,
  CheckCircleIcon,
  CreditCardIcon,
  TruckIcon,
  ArrowRightIcon,
} from "./icons";

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Request a catalog",
    icon: ClipboardIcon,
    accent: "bg-sky-50 text-sky-700",
    summary: "Tell us which brands and categories you're interested in.",
    detail:
      "You tell us which categories, brands or specific model numbers you're interested in, along with basic information about your business. We reply with the relevant catalog and brand availability.",
  },
  {
    number: "02",
    title: "Select products",
    icon: ListIcon,
    accent: "bg-emerald-50 text-emerald-700",
    summary:
      "Review available models and identify the products and quantities you want.",
    detail:
      "You review the catalog and product information we provide, then identify the models and quantities that fit your business. You can ask about specific model numbers at any point.",
  },
  {
    number: "03",
    title: "Receive pricing",
    icon: TagIcon,
    accent: "bg-amber-50 text-amber-700",
    summary:
      "We confirm availability, minimum order quantities and current pricing.",
    detail:
      "We confirm availability, applicable minimum order quantities, wholesale pricing and the shipping options relevant to your destination and order size. MOQ varies by brand and product, so we confirm it before anything is committed.",
  },
  {
    number: "04",
    title: "Approve order",
    icon: CheckCircleIcon,
    accent: "bg-rose-50 text-rose-700",
    summary:
      "You confirm the order details — products, quantities, pricing and shipping.",
    detail:
      "You review and confirm the full order: products, quantities, pricing, shipping method and timing. Nothing moves forward until you've approved the commercial terms.",
  },
  {
    number: "05",
    title: "Purchase order & payment",
    icon: CreditCardIcon,
    accent: "bg-indigo-50 text-indigo-700",
    summary:
      "The purchase order is issued and payment is arranged on agreed terms.",
    detail:
      "The purchase order is issued and accepted, and payment is arranged according to the agreed terms. This gives both sides a clear commercial record of the transaction.",
  },
  {
    number: "06",
    title: "Fulfillment & delivery",
    icon: TruckIcon,
    accent: "bg-teal-50 text-teal-700",
    summary:
      "Products are prepared with documentation and shipped by the agreed method.",
    detail:
      "Products are obtained through our established commercial supply channels, prepared with the required commercial documentation and shipped to you using the agreed method — air, express, sea or container freight depending on the order.",
  },
] as const;

export default function HowItWorksSteps({
  detailed = false,
}: {
  detailed?: boolean;
}) {
  if (detailed) {
    return (
      <ol className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PROCESS_STEPS.map((step) => (
          <li
            key={step.number}
            className="rounded-card border border-line bg-white p-6"
          >
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-md ${step.accent}`}
            >
              <step.icon className="h-5 w-5" />
            </span>
            <p className="mt-3 text-[0.7rem] font-bold tracking-wider text-muted">
              {step.number}
            </p>
            <h3 className="mt-1 text-base font-bold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">
              {step.detail}
            </p>
          </li>
        ))}
      </ol>
    );
  }

  return (
    <ol className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:flex lg:items-start lg:gap-1">
      {PROCESS_STEPS.map((step, index) => (
        <Fragment key={step.number}>
          <li className="flex flex-col items-center text-center lg:flex-1">
            <span
              className={`flex h-11 w-11 items-center justify-center rounded-md ${step.accent}`}
            >
              <step.icon className="h-5 w-5" />
            </span>
            <p className="mt-3 text-[0.7rem] font-bold tracking-wider text-muted">
              {step.number}
            </p>
            <h3 className="mt-1 text-sm font-bold text-ink">{step.title}</h3>
            <p className="mt-2 hidden max-w-[11rem] text-xs leading-relaxed text-body sm:block">
              {step.summary}
            </p>
          </li>
          {index < PROCESS_STEPS.length - 1 && (
            <li
              aria-hidden
              className="hidden shrink-0 pt-3 text-faint lg:block"
            >
              <ArrowRightIcon className="h-4 w-4" />
            </li>
          )}
        </Fragment>
      ))}
    </ol>
  );
}
