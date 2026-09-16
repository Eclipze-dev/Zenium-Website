import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { APEX_HOST, SITE_HOST } from "@/lib/seo/site";

function isLocalHost(host: string) {
  return (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host.endsWith(".local")
  );
}

export function middleware(request: NextRequest) {
  const hostHeader = request.headers.get("host") ?? "";
  const host = hostHeader.split(":")[0]?.toLowerCase() ?? "";

  if (!host || isLocalHost(host)) {
    return NextResponse.next();
  }

  const shouldCanonicalizeApex = host === APEX_HOST;
  const shouldCanonicalizeVercel =
    process.env.VERCEL_ENV === "production" && host.endsWith(".vercel.app");

  if (!shouldCanonicalizeApex && !shouldCanonicalizeVercel) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = SITE_HOST;
  url.port = "";

  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|txt|xml)$).*)",
  ],
};
