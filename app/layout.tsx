import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CatalogModalProvider from "@/components/catalog/CatalogModalContext";
import JsonLd from "@/components/JsonLd";
import {
  AREA_SERVED,
  OG_IMAGE,
  SITE_ADDRESS,
  SITE_DESCRIPTION,
  SITE_LEGAL_NAME,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import { BRANDS } from "@/lib/brands";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Amazon Wholesale Distributors | Hyprr Retail",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: SITE_NAME,
            legalName: SITE_LEGAL_NAME,
            url: SITE_URL,
            logo: `${SITE_URL}/logo.png`,
            description: SITE_DESCRIPTION,
            slogan: "Supplying brands. Building businesses.",
            address: {
              "@type": "PostalAddress",
              streetAddress: SITE_ADDRESS.street,
              addressLocality: SITE_ADDRESS.city,
              addressRegion: SITE_ADDRESS.region,
              postalCode: SITE_ADDRESS.postalCode,
              addressCountry: SITE_ADDRESS.country,
            },
            areaServed: [...AREA_SERVED],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              url: `${SITE_URL}/contact`,
              availableLanguage: "en",
            },
            brand: BRANDS.map((b) => ({ "@type": "Brand", name: b.name })),
          }}
        />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            name: SITE_NAME,
            url: SITE_URL,
            publisher: { "@id": `${SITE_URL}/#organization` },
          }}
        />
        <CatalogModalProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CatalogModalProvider>
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
