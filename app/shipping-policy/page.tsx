import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description:
    "How shipping works for Hyprr Retail wholesale orders: available methods, how costs and timing are confirmed, and documentation.",
  alternates: { canonical: "/shipping-policy" },
};

export default function ShippingPolicyPage() {
  return (
    <LegalPage
      title="Shipping Policy"
      intro="This policy describes how shipping is arranged for wholesale orders supplied by Hyprr Retail."
      sections={[
        {
          heading: "Shipping methods",
          paragraphs: [
            "Depending on the order, available methods can include:",
          ],
          list: [
            "Air freight — faster delivery for time-sensitive or higher-value orders",
            "Express courier — smaller urgent shipments",
            "Sea freight — cost-effective for larger volumes",
            "Full or partial containers (FCL / LCL) — substantial wholesale orders",
          ],
        },
        {
          heading: "How shipping is confirmed",
          paragraphs: [
            "The appropriate shipping method depends on order size, destination, timing, product and availability. Shipping costs and estimated timing are confirmed with you before the order is finalized, as part of the purchase-order process.",
            "We do not promise universal delivery times. Any delivery estimate applies only to the specific order for which it is confirmed.",
          ],
        },
        {
          heading: "Customs and import requirements",
          paragraphs: [
            "International shipments may be subject to customs clearance, duties, taxes and import requirements in the destination country. Responsibility for these is agreed as part of the commercial terms for each order.",
          ],
        },
        {
          heading: "Documentation",
          paragraphs: [
            "Shipments are accompanied by the commercial documentation applicable to the transaction, which can include commercial invoices, packing lists and shipping documents.",
          ],
        },
        {
          heading: "Damage or discrepancies",
          paragraphs: [
            "Procedures for reporting transit damage, shortages or discrepancies are agreed in the commercial terms for each order. Report any issue promptly through the Contact page so it can be handled with the carrier and supplier channel.",
          ],
        },
      ]}
    />
  );
}
