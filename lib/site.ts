export const SITE_NAME = "Hyprr Retail";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hyprrretail.com";

export const SITE_TAGLINE = "Global brands. Real opportunities.";

export const SITE_DESCRIPTION =
  "Hyprr Retail is a B2B wholesale supplier and distributor of genuine branded tools, hardware, sports and outdoor products for e-commerce sellers, retailers and wholesale buyers.";

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const CATEGORY_LINKS: NavItem[] = [
  { label: "Tools & Hardware", href: "/tools-hardware" },
  { label: "Sports & Outdoor", href: "/sports-outdoor" },
];

export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Brands", href: "/brands" },
  { label: "Categories", href: "#", children: CATEGORY_LINKS },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const LEGAL_LINKS: NavItem[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Pricing Policy", href: "/pricing-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Shipping Policy", href: "/shipping-policy" },
];
