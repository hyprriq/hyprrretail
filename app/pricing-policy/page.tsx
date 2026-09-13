import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Pricing Policy",
  description:
    "How wholesale pricing works at Hyprr Retail: individual confirmation per order, currency, validity and payment.",
  alternates: { canonical: "/pricing-policy" },
};

export default function PricingPolicyPage() {
  return (
    <LegalPage
      title="Pricing Policy"
      intro="This policy explains how pricing is determined and confirmed for wholesale orders supplied by Hyprr Retail."
      sections={[
        {
          heading: "No published price list",
          paragraphs: [
            "We do not publish product pricing on this website. Wholesale pricing depends on the brand, model, quantity, current availability and market conditions, so prices are confirmed individually for each enquiry after catalog request and model selection.",
          ],
        },
        {
          heading: "How pricing is confirmed",
          paragraphs: [
            "Once you identify models and quantities, we confirm current availability, the applicable minimum order quantity and the wholesale price for those items. Quoted prices are valid for the period stated in the quotation and may change if availability or market conditions change before a purchase order is accepted.",
          ],
        },
        {
          heading: "What pricing includes",
          paragraphs: [
            "Quotations state what is included — for example product cost and documentation — and identify shipping, duties, taxes and any optional service fees separately, so the total commercial picture is clear before you commit.",
          ],
        },
        {
          heading: "Optional service fees",
          paragraphs: [
            "Optional services, such as marketplace documentation support, carry their own fees, which are confirmed in writing before the service is provided. Related refund and adjustment terms are set out in the Refund Policy.",
          ],
        },
        {
          heading: "Payment",
          paragraphs: [
            "Payment methods, currency and timing are agreed as part of the purchase-order process for each order. Final payment terms wording will be confirmed here before formal publication.",
          ],
        },
      ]}
    />
  );
}
