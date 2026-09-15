import { NextResponse, type NextRequest } from "next/server";

/**
 * The domain previously ran WordPress/WooCommerce and was compromised: Google
 * still holds hundreds of thousands of injected spam URLs (hiroshi.php,
 * item.php and friends) alongside the legitimate old /product/ URLs.
 *
 * Every one of these must answer 410 Gone — NOT 404 and definitely not 403.
 * A 403 reads to a crawler as "temporarily blocked, try again later", which is
 * why the spam URLs have persisted. 410 is the only status that says the
 * resource is permanently gone and should be dropped from the index.
 */
const GONE_PREFIXES = ["/product/", "/shop/", "/product-category/"];

function isGone(pathname: string): boolean {
  // Any leftover PHP endpoint — the whole class is spam or dead WordPress.
  if (pathname.toLowerCase().endsWith(".php")) return true;
  return GONE_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export function middleware(request: NextRequest) {
  if (!isGone(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  return new NextResponse("Gone", {
    status: 410,
    headers: {
      "content-type": "text/plain",
      // Don't let a CDN hold these; we want crawlers hitting origin.
      "cache-control": "no-store",
    },
  });
}

export const config = {
  // Broad matcher with static assets excluded, so the check above is the single
  // source of truth rather than duplicating patterns in path-to-regexp syntax.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
