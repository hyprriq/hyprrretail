import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that govern use of the Hyprr Retail website and the general framework for wholesale enquiries and orders.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="These terms govern your use of the Hyprr Retail website and set out the general framework under which wholesale enquiries and orders are handled."
      sections={[
        {
          heading: "About this website",
          paragraphs: [
            "This website provides information about the wholesale supply of branded products by Hyprr Retail to business customers. Content on this site is informational: product availability, minimum order quantities, pricing and shipping options are confirmed individually for each enquiry and are not offers capable of acceptance in themselves.",
          ],
        },
        {
          heading: "Business-to-business supply",
          paragraphs: [
            "Hyprr Retail supplies business customers. By submitting an enquiry, you confirm that you are acting in the course of a business rather than as a consumer.",
          ],
        },
        {
          heading: "Orders and purchase process",
          paragraphs: [
            "Wholesale orders proceed by catalog request, model selection, confirmation of availability, MOQ and pricing, issuance and acceptance of a purchase order, payment, and fulfillment. No order exists until a purchase order has been issued and accepted and the applicable commercial terms agreed in writing.",
          ],
        },
        {
          heading: "Marketplace documentation support",
          paragraphs: [
            "Where offered, marketplace documentation support is a paid optional service subject to its own conditions. It does not guarantee approval by Amazon, Walmart or any other marketplace: requirements vary by seller account, marketplace and brand, and final decisions always rest with the marketplace. Applicable fees and any refund or adjustment terms are governed by these Terms, the Pricing Policy and the Refund Policy.",
          ],
        },
        {
          heading: "No guarantees of commercial outcome",
          paragraphs: [
            "Nothing on this website or in our communications constitutes a guarantee of marketplace approval, listing eligibility, sales, profit or any other commercial outcome.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "Brand names referenced on this website are trademarks of their respective owners and are used to identify genuine products available for wholesale supply. No affiliation or endorsement is implied beyond the supply relationships described.",
          ],
        },
        {
          heading: "Liability",
          paragraphs: [
            "To the extent permitted by law, Hyprr Retail's liability in connection with the use of this website is limited. Liability in connection with wholesale orders is governed by the commercial terms agreed for each order. Final limitation-of-liability wording will be confirmed before formal publication.",
          ],
        },
        {
          heading: "Changes and contact",
          paragraphs: [
            "We may update these terms from time to time; the current version will always be published on this page. Questions can be sent through the Contact page. Governing law, jurisdiction and the legal entity name will be confirmed here once finalized.",
          ],
        },
      ]}
    />
  );
}
