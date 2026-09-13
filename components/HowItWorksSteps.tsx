import {
  ClipboardIcon,
  ListIcon,
  TagIcon,
  CheckCircleIcon,
  CreditCardIcon,
  TruckIcon,
} from "./icons";

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Request a catalog",
    icon: ClipboardIcon,
    summary:
      "Tell us which brands and categories you're interested in.",
    detail:
      "You tell us which categories, brands or specific model numbers you're interested in, along with basic information about your business. We reply with the relevant catalog and brand availability.",
  },
  {
    number: "02",
    title: "Select products",
    icon: ListIcon,
    summary:
      "Review available models and identify the products and quantities you want.",
    detail:
      "You review the catalog and product information we provide, then identify the models and quantities that fit your business. You can ask about specific model numbers at any point.",
  },
  {
    number: "03",
    title: "Receive pricing",
    icon: TagIcon,
    summary:
      "We confirm availability, minimum order quantities and current pricing.",
    detail:
      "We confirm availability, applicable minimum order quantities, wholesale pricing and the shipping options relevant to your destination and order size. MOQ varies by brand and product, so we confirm it before anything is committed.",
  },
  {
    number: "04",
    title: "Approve order",
    icon: CheckCircleIcon,
    summary:
      "You confirm the order details — products, quantities, pricing and shipping.",
    detail:
      "You review and confirm the full order: products, quantities, pricing, shipping method and timing. Nothing moves forward until you've approved the commercial terms.",
  },
  {
    number: "05",
    title: "Purchase order & payment",
    icon: CreditCardIcon,
    summary:
      "The purchase order is issued and payment is arranged on agreed terms.",
    detail:
      "The purchase order is issued and accepted, and payment is arranged according to the agreed terms. This gives both sides a clear commercial record of the transaction.",
  },
  {
    number: "06",
    title: "Fulfillment & delivery",
    icon: TruckIcon,
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
  return (
    <ol
      className={`grid gap-5 ${
        detailed
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
      }`}
    >
      {PROCESS_STEPS.map((step) => (
        <li
          key={step.number}
          className={
            detailed
              ? "rounded-card border border-line bg-white p-6"
              : "flex flex-col items-center text-center"
          }
        >
          <span
            className={`flex h-11 w-11 items-center justify-center rounded-md bg-surface text-ink ${
              detailed ? "" : "mx-auto"
            }`}
          >
            <step.icon className="h-5 w-5" />
          </span>
          <p
            className={`mt-3 text-[0.7rem] font-bold tracking-wider text-muted ${
              detailed ? "" : "text-center"
            }`}
          >
            {step.number}
          </p>
          <h3
            className={`mt-1 text-sm font-bold text-ink ${
              detailed ? "text-base" : ""
            }`}
          >
            {step.title}
          </h3>
          <p
            className={`mt-2 text-body ${
              detailed
                ? "text-sm leading-relaxed"
                : "hidden text-xs leading-relaxed sm:block"
            }`}
          >
            {detailed ? step.detail : step.summary}
          </p>
        </li>
      ))}
    </ol>
  );
}
