import { NextResponse } from "next/server";

/**
 * The domain's previous site exposed /product/ URLs that are still indexed.
 * Serve 410 Gone (not 404) so search engines drop them faster.
 */
export function middleware() {
  return new NextResponse("Gone", {
    status: 410,
    headers: { "content-type": "text/plain" },
  });
}

export const config = {
  matcher: "/product/:path*",
};
