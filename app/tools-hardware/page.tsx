import type { Metadata } from "next";
import { OG_IMAGE } from "@/lib/site";
import Link from "next/link";
import CategoryPage from "@/components/CategoryPage";
import {
  BoxesIcon,
  GlobeIcon,
  ShieldCheckIcon,
  TagIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Tools & Hardware Distributor | Wholesale",
  description:
    "Wholesale Milwaukee, Makita, Stanley and Knipex tools and hardware for Amazon sellers, online retailers and stores. Commercial invoices included.",
  alternates: { canonical: "/tools-hardware" },
  openGraph: {
    images: [OG_IMAGE],
    title: "Wholesale Tools & Hardware Supplier | Hyprr Retail",
    description:
      "Branded power tools, hand tools and hardware in wholesale quantities for e-commerce sellers and retailers.",
  },
};

export default function ToolsHardwarePage() {
  return (
    <CategoryPage
      slug="tools-hardware"
      name="Tools & Hardware"
      eyebrow="Professional tools. Real business."
      heroTitle="Wholesale tools and hardware distribution"
      heroTagline="Trusted brands for demanding businesses."
      heroCopy="We supply branded power tools, hand tools, accessories and hardware to e-commerce sellers, retailers and wholesale buyers."
      heroImage="/images/hero-tools.jpg"
      heroImageAlt="Milwaukee drill driving into steel on a workshop bench beside Makita, Stanley and Knipex tools"
      chips={[
        { icon: ShieldCheckIcon, label: "Branded products" },
        { icon: TagIcon, label: "Competitive pricing" },
        { icon: BoxesIcon, label: "Wide range & availability" },
        { icon: GlobeIcon, label: "Global shipping" },
      ]}
      productCategories={[
        {
          title: "Power Tools",
          image: "/images/cat-power.jpg",
          alt: "Milwaukee cordless drill in use",
        },
        {
          title: "Hand Tools",
          image: "/images/cat-hand.jpg",
          alt: "Knipex pliers with wrenches and hand tools",
        },
        {
          title: "Accessories",
          image: "/images/cat-acc.jpg",
          alt: "Makita abrasive discs and accessories",
        },
        {
          title: "Hardware & Fixings",
          image: "/images/cat-hw.jpg",
          alt: "Screws, anchors and fixings hardware",
        },
      ]}
      splitTitle="Built for businesses that build more."
      splitCopy="From job sites to warehouses to online marketplaces, we supply the tools and hardware that keep your business moving — in wholesale quantities, with commercial documentation and global fulfillment."
      splitChecklist={[
        "Authentic branded products",
        "Wholesale quantities",
        "Commercial documentation",
        "Global fulfillment",
        "Support for e-commerce sellers",
      ]}
      splitImage="/images/stack-tools.jpg"
      splitImageAlt="Shrink-wrapped pallet of Milwaukee M18 FUEL boxes in the warehouse"
      seoTitle="A wholesale tool supplier built for commercial buyers"
      seoContent={
        <>
          <p>
            Hyprr Retail supplies wholesale tools and hardware to qualified
            commercial buyers in the United States, the United Kingdom and
            beyond. Our range covers wholesale power tools, hand tools,
            accessories and hardware from established professional brands —
            including Milwaukee and Milwaukee accessories, Makita, Stanley,
            Knipex and Opinel — obtained through established commercial
            distribution channels and brand-authorized distributors.
          </p>
          <p>
            For e-commerce sellers, that matters in practical terms. Amazon
            sellers and Walmart sellers buying branded tools wholesale need
            genuine products, real commercial invoices and traceable supply.
            Every order we fulfill runs through a purchase-order process with
            confirmed availability, minimum order quantities and pricing, and
            is supported with the commercial documentation applicable to the
            transaction.
          </p>
          <p>
            Minimum order quantities vary by brand and product — we confirm
            the applicable MOQ before your purchase order, so there are no
            surprises. Shipping options range from air freight and express for
            time-sensitive orders to sea freight and containers for larger
            volumes. If you already know the model numbers you want, include
            them in your catalog request and we&apos;ll quote against them
            directly. You can also browse the full brand directory on our{" "}
            <Link href="/brands" className="font-medium underline underline-offset-4">
              Brands page
            </Link>{" "}
            or read about the full ordering process on{" "}
            <Link href="/how-it-works" className="font-medium underline underline-offset-4">
              How It Works
            </Link>
            .
          </p>
        </>
      }
      faqs={[
        {
          question: "Which tool brands can I buy wholesale from Hyprr Retail?",
          answer:
            "Our current Tools & Hardware range includes Milwaukee, Milwaukee Accessories, Makita, Stanley, Knipex and Opinel, with more brands added over time. If you're looking for a brand not listed, mention it in your catalog request and we'll tell you whether we can supply it.",
        },
        {
          question: "Is there a minimum order for wholesale tools?",
          answer:
            "Yes, but it varies. Minimum order quantities differ by brand, product and order, so we confirm the applicable MOQ for your selected models before the purchase order is issued.",
        },
        {
          question: "Can Amazon sellers buy Milwaukee or Makita wholesale?",
          answer:
            "Yes. E-commerce sellers are our primary customers, and we supply Milwaukee, Makita and other branded tools in wholesale quantities with commercial invoices and shipping documentation. Where applicable, we can also provide marketplace documentation support before a purchase order — no approval outcome is ever guaranteed.",
        },
        {
          question: "Do you publish tool pricing on the website?",
          answer:
            "No. Wholesale pricing depends on the brand, model, quantity and current market conditions, so we confirm pricing individually after you request the catalog and select models. That keeps every quote accurate and current.",
        },
        {
          question: "How are wholesale tool orders shipped?",
          answer:
            "Depending on order size, destination and timing, options include air freight, express shipping, sea freight and full or partial containers. We confirm shipping method, cost and timing with you before the order is finalized.",
        },
      ]}
    />
  );
}
