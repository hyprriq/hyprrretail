import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "How refunds and adjustments are handled for Hyprr Retail wholesale orders and optional services.",
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      intro="This policy describes the general framework for refunds and adjustments relating to wholesale orders and optional services provided by Hyprr Retail."
      sections={[
        {
          heading: "Wholesale orders",
          paragraphs: [
            "Wholesale orders are commercial transactions confirmed by purchase order. Because availability, MOQ and pricing are confirmed with you before each order, refunds and adjustments are handled according to the commercial terms agreed for that order.",
            "If an order cannot be fulfilled as agreed — for example due to availability changes before fulfillment — we will discuss remedies with you, which may include adjustment, substitution by agreement, or refund of amounts paid for unfulfilled items.",
          ],
        },
        {
          heading: "Damaged, missing or incorrect items",
          paragraphs: [
            "Report transit damage, shortages or incorrect items promptly through the Contact page. Verified issues are resolved according to the commercial terms of the order, which may include replacement, credit or refund for the affected items.",
          ],
        },
        {
          heading: "Marketplace documentation support fees",
          paragraphs: [
            "Where marketplace documentation support is provided as an optional paid service, its fee covers the documentation and guidance work performed. It does not purchase a marketplace approval outcome, and approval decisions rest solely with the marketplace. The specific fee, and any applicable refund or adjustment conditions, are confirmed in writing before the service is provided.",
          ],
        },
        {
          heading: "How to raise a refund request",
          paragraphs: [
            "Contact us through the Contact page with your order reference and the details of the issue. We aim to acknowledge refund-related requests promptly and to resolve verified issues in a commercially reasonable timeframe.",
            "Final refund terms, including timeframes and any exclusions, will be confirmed in this policy before formal publication.",
          ],
        },
      ]}
    />
  );
}
