import type { Metadata } from "next";
import Link from "next/link";
import CategoryPage from "@/components/CategoryPage";
import {
  BoxesIcon,
  GlobeIcon,
  ShieldCheckIcon,
  TagIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "Wholesale Sports & Outdoor Products Supplier",
  description:
    "Branded climbing, hiking and outdoor equipment in wholesale quantities through established distribution channels. Petzl, Thule, LEKI, KASK, La Sportiva and more for e-commerce sellers and retailers.",
  alternates: { canonical: "/sports-outdoor" },
  openGraph: {
    title: "Wholesale Sports & Outdoor Products Supplier | Hyprr Retail",
    description:
      "Branded climbing, hiking and outdoor equipment in wholesale quantities for e-commerce sellers and retailers.",
  },
};

export default function SportsOutdoorPage() {
  return (
    <CategoryPage
      slug="sports-outdoor"
      name="Sports & Outdoor"
      eyebrow="Outdoor brands. Commercial supply."
      heroTitle="Sports & Outdoor"
      heroTagline="Equipment people trust outdoors."
      heroCopy="We supply branded climbing, hiking and outdoor products — from trekking poles to helmets to backpacks — to e-commerce sellers, retailers and wholesale buyers."
      heroImage="/images/hero-sports-collage.jpg"
      heroImageAlt="Outdoor lifestyle collage: hikers on a ridge, lakeside camping gear, mountain biking and fishing at sunset"
      heroMobilePosition="object-[10%_center]"
      chips={[
        { icon: ShieldCheckIcon, label: "Branded products" },
        { icon: TagIcon, label: "Competitive pricing" },
        { icon: BoxesIcon, label: "Wide range & availability" },
        { icon: GlobeIcon, label: "Global shipping" },
      ]}
      productCategories={[
        {
          title: "Climbing Equipment",
          image: "/images/sp-climbing.jpg",
          alt: "Climber with helmet and carabiners ascending a rock face",
        },
        {
          title: "Hiking & Trekking",
          image: "/images/sp-hiking.jpg",
          alt: "Hikers with packs and trekking poles on a mountain trail",
        },
        {
          title: "Packs & Bags",
          image: "/images/sp-packs.jpg",
          alt: "Technical trekking backpack with poles on alpine rocks",
        },
        {
          title: "Footwear & Helmets",
          image: "/images/sp-footwear.jpg",
          alt: "Hiking boot close-up on rocky mountain terrain",
        },
      ]}
      splitTitle="Gear your customers already trust."
      splitCopy="Outdoor buyers know the brands they want. We help retailers and e-commerce sellers stock Petzl, Thule, LEKI, KASK, La Sportiva and other respected outdoor names — with wholesale terms, documentation and shipping that fit commercial orders."
      splitChecklist={[
        "Authentic branded products",
        "Wholesale quantities",
        "Commercial documentation",
        "Global fulfillment",
        "Support for e-commerce sellers",
      ]}
      splitImage="/images/hero-sports.jpg"
      splitImageAlt="Climber with a Thule pack, helmet and carabiners scaling a rock face above the clouds"
      seoTitle="A wholesale outdoor equipment supplier for retailers and sellers"
      seoContent={
        <>
          <p>
            Hyprr Retail supplies wholesale outdoor products to commercial
            buyers in the United States, the United Kingdom and international
            markets. The range spans climbing equipment, hiking and trekking
            gear, outdoor safety equipment, backpacks and bags, outdoor
            footwear and accessories — all branded products obtained
            through established commercial distribution channels.
          </p>
          <p>
            Our current Sports & Outdoor brands include Petzl, Thule, LEKI, La
            Sportiva, KASK, Scarpa, Garsport, Edelrid, CAMP, Kong Italy,
            Fitwell and Victronix. These are names outdoor customers actively
            search for, which makes them strong wholesale inventory for
            e-commerce sellers, specialist retailers and outdoor stores
            building a branded assortment.
          </p>
          <p>
            As with our tools range, we don&apos;t invent availability or
            publish speculative pricing. You request the catalog, identify the
            brands and models you want, and we confirm real availability,
            minimum order quantities and wholesale pricing before anything is
            committed. Orders ship by air, express, sea or container freight
            depending on size and destination, with commercial documentation
            as applicable. See the full process on{" "}
            <Link href="/how-it-works" className="font-medium underline underline-offset-4">
              How It Works
            </Link>{" "}
            or browse the complete list on our{" "}
            <Link href="/brands" className="font-medium underline underline-offset-4">
              Brands page
            </Link>
            .
          </p>
        </>
      }
      faqs={[
        {
          question:
            "Which outdoor brands can I buy wholesale from Hyprr Retail?",
          answer:
            "Our current Sports & Outdoor range includes Petzl, Thule, LEKI, La Sportiva, KASK, Scarpa, Garsport, Edelrid, CAMP, Kong Italy, Fitwell and Victronix, with more brands added over time. If you need a brand not listed, ask in your catalog request.",
        },
        {
          question: "Do you supply climbing and safety equipment wholesale?",
          answer:
            "Yes. We supply genuine climbing hardware, harnesses, helmets, ropes and related safety equipment from brands such as Petzl, Edelrid, CAMP, Kong Italy and KASK, sourced through established commercial channels.",
        },
        {
          question: "Can e-commerce sellers buy outdoor gear wholesale?",
          answer:
            "Yes. E-commerce sellers, including Amazon and Walmart marketplace sellers, are our primary customers. We provide wholesale quantities, commercial invoices and shipping documentation, plus marketplace documentation support where applicable — with no guarantee of marketplace approval, which always rests with the marketplace.",
        },
        {
          question: "What is the minimum order for outdoor products?",
          answer:
            "Minimum order quantities vary by brand, product and order. We confirm the applicable MOQ for your selected models before the purchase order is issued.",
        },
        {
          question: "How is wholesale outdoor equipment shipped?",
          answer:
            "Options include air freight, express, sea freight and full or partial containers, depending on order size, destination and timing. Shipping method, cost and timing are confirmed with you before the order is finalized.",
        },
      ]}
    />
  );
}
