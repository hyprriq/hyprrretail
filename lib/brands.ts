export type CategorySlug = "tools-hardware" | "sports-outdoor";

export interface Category {
  slug: CategorySlug;
  name: string;
  href: string;
  shortDescription: string;
}

export interface Brand {
  name: string;
  slug: string;
  category: CategorySlug;
  featured: boolean;
  description: string;
  /** Path to an official logo asset in /public; omit to fall back to a typographic mark. */
  logo?: string;
  /** Boxed/emblem logos render slightly smaller for optical balance with wordmarks. */
  logoBoxy?: boolean;
}

export const CATEGORIES: Category[] = [
  {
    slug: "tools-hardware",
    name: "Tools & Hardware",
    href: "/tools-hardware",
    shortDescription:
      "Professional power tools, hand tools, accessories and hardware from leading brands.",
  },
  {
    slug: "sports-outdoor",
    name: "Sports & Outdoor",
    href: "/sports-outdoor",
    shortDescription:
      "Climbing, hiking, outdoor equipment and footwear for retailers and e-commerce sellers.",
  },
];

export const BRANDS: Brand[] = [
  // Tools & Hardware
  {
    name: "Milwaukee",
    slug: "milwaukee",
    category: "tools-hardware",
    featured: true,
    description:
      "Professional cordless power tools, drills, impact drivers and jobsite equipment used by trade professionals worldwide.",
    logo: "/brands/milwaukee.svg",
  },
  {
    name: "Milwaukee Accessories",
    slug: "milwaukee-accessories",
    category: "tools-hardware",
    featured: false,
    description:
      "Batteries, chargers, drill bits, blades and other genuine Milwaukee accessories that pair with the core tool range.",
  },
  {
    name: "Makita",
    slug: "makita",
    category: "tools-hardware",
    featured: true,
    description:
      "Cordless and corded power tools for construction, woodworking and industrial applications, with a broad battery-platform ecosystem.",
    logo: "/brands/makita.svg",
    logoBoxy: true,
  },
  {
    name: "Stanley",
    slug: "stanley",
    category: "tools-hardware",
    featured: true,
    description:
      "Hand tools, tape measures, storage and jobsite essentials from one of the most recognized names in tools.",
    logo: "/brands/stanley.svg",
    logoBoxy: true,
  },
  {
    name: "Knipex",
    slug: "knipex",
    category: "tools-hardware",
    featured: true,
    description:
      "Precision pliers, cutters and gripping tools made in Germany, widely used by electricians, mechanics and industrial buyers.",
    logo: "/brands/knipex.svg",
    logoBoxy: true,
  },
  {
    name: "Opinel",
    slug: "opinel",
    category: "tools-hardware",
    featured: false,
    description:
      "Classic French folding knives and cutting tools with strong recognition in outdoor, kitchen and everyday-carry segments.",
    logo: "/brands/opinel.jpg",
    logoBoxy: true,
  },
  // Sports & Outdoor
  {
    name: "Petzl",
    slug: "petzl",
    category: "sports-outdoor",
    featured: false,
    description:
      "Climbing hardware, harnesses, helmets and headlamps for climbing, mountaineering and vertical work.",
    logo: "/brands/petzl.png",
  },
  {
    name: "Thule",
    slug: "thule",
    category: "sports-outdoor",
    featured: true,
    description:
      "Backpacks, luggage, laptop bags, bike carriers and transport solutions for active and travel-focused customers.",
    logo: "/brands/thule.svg",
  },
  {
    name: "LEKI",
    slug: "leki",
    category: "sports-outdoor",
    featured: true,
    description:
      "Trekking poles, ski poles and gloves engineered in Germany for hiking, trail running and winter sports.",
    logo: "/brands/leki.png",
  },
  {
    name: "La Sportiva",
    slug: "la-sportiva",
    category: "sports-outdoor",
    featured: false,
    description:
      "Italian climbing shoes, mountain boots and trail-running footwear with a strong following among outdoor athletes.",
    logo: "/brands/la-sportiva.svg",
  },
  {
    name: "KASK",
    slug: "kask",
    category: "sports-outdoor",
    featured: false,
    description:
      "Italian-made helmets for climbing, cycling, skiing and safety applications, known for design and protection standards.",
  },
  {
    name: "Scarpa",
    slug: "scarpa",
    category: "sports-outdoor",
    featured: false,
    description:
      "Italian mountain footwear covering hiking boots, climbing shoes, mountaineering and ski-touring boots.",
  },
  {
    name: "Garsport",
    slug: "garsport",
    category: "sports-outdoor",
    featured: false,
    description:
      "Italian outdoor and trekking footwear offering solid quality for value-driven hiking and workwear ranges.",
  },
  {
    name: "Edelrid",
    slug: "edelrid",
    category: "sports-outdoor",
    featured: false,
    description:
      "German climbing ropes, harnesses and hardware with a long heritage in mountaineering safety equipment.",
  },
  {
    name: "CAMP",
    slug: "camp",
    category: "sports-outdoor",
    featured: false,
    description:
      "Italian climbing and mountaineering equipment including carabiners, ice axes, crampons and safety gear.",
  },
  {
    name: "Kong Italy",
    slug: "kong-italy",
    category: "sports-outdoor",
    featured: false,
    description:
      "Italian-made carabiners, connectors and rescue hardware for climbing, sailing and professional safety use.",
  },
  {
    name: "Fitwell",
    slug: "fitwell",
    category: "sports-outdoor",
    featured: false,
    description:
      "Handcrafted Italian mountaineering and trekking boots built for demanding alpine conditions.",
  },
  {
    name: "Victronix",
    slug: "victronix",
    category: "sports-outdoor",
    featured: false,
    description:
      "Knives, multi-tools and outdoor cutting tools for everyday carry, camping and outdoor retail assortments.",
  },
];

export function brandsByCategory(category: CategorySlug): Brand[] {
  return BRANDS.filter((brand) => brand.category === category);
}

export function featuredBrands(): Brand[] {
  return BRANDS.filter((brand) => brand.featured);
}

export function categoryName(slug: CategorySlug): string {
  return CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
}

/* ------------------------------------------------------------------ */
/* Request Catalog form options                                        */
/* ------------------------------------------------------------------ */

export const BUSINESS_TYPES = [
  "E-commerce seller",
  "Online retailer",
  "Retail store",
  "Wholesale / distributor",
  "Marketplace seller",
  "Other",
] as const;

export const MARKETPLACES = [
  "Amazon",
  "Walmart",
  "Shopify / DTC",
  "Other marketplace",
  "Retail store",
  "Wholesale / distributor",
  "Other",
] as const;

export const COUNTRIES = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Other",
] as const;

/** Extra selectable option shown at the end of each brand group. */
export const OTHER_BRAND_OPTION = "Other / brand not listed";
