import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Hyprr Retail collects, uses and protects the information you provide when requesting a catalog or contacting us.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what information Hyprr Retail collects when you use this website or submit an enquiry, how that information is used, and the choices you have."
      sections={[
        {
          heading: "Information we collect",
          paragraphs: [
            "When you request a catalog or contact us, we collect the information you provide in the form, which can include:",
          ],
          list: [
            "Your name and business or company name",
            "Your email address",
            "Your business type, marketplace and country",
            "The brands, models and order details you tell us about",
            "Any message you include",
          ],
        },
        {
          heading: "How we use your information",
          paragraphs: [
            "We use the information you provide to respond to your enquiry, send the requested catalog and availability information, and communicate with you about potential and actual wholesale orders. We do not sell your personal information.",
            "If analytics tools are enabled on this website, they are used to understand aggregate site usage — for example which pages are visited — and to improve the site.",
          ],
        },
        {
          heading: "How we share information",
          paragraphs: [
            "Information is shared only with service providers needed to operate this website and respond to enquiries — for example email delivery and hosting providers — and where required by law. We do not share your enquiry details with third parties for their own marketing.",
          ],
        },
        {
          heading: "Data retention",
          paragraphs: [
            "We retain enquiry and order-related information for as long as needed to manage the commercial relationship and to meet legal and accounting obligations, after which it is deleted or anonymized.",
          ],
        },
        {
          heading: "Your choices and rights",
          paragraphs: [
            "You can ask us to access, correct or delete the personal information we hold about you, subject to applicable law. To make a request, contact us through the Contact page and we will respond within a reasonable timeframe.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Questions about this policy can be sent through the Contact page. Formal contact details for privacy requests will be published here once confirmed.",
          ],
        },
      ]}
    />
  );
}
