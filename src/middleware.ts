import { getToken } from "next-auth/jwt";
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

function canonicalizeHost(request: NextRequest) {
  const hostHeader = request.headers.get("host") ?? "";
  const host = hostHeader.split(":")[0]?.toLowerCase() ?? "";

  if (!host || isLocalHost(host)) {
    return null;
  }

  const shouldCanonicalizeApex = host === APEX_HOST;
  const shouldCanonicalizeVercel =
    process.env.VERCEL_ENV === "production" && host.endsWith(".vercel.app");

  if (!shouldCanonicalizeApex && !shouldCanonicalizeVercel) {
    return null;
  }

  const url = request.nextUrl.clone();
  url.protocol = "https:";
  url.hostname = SITE_HOST;
  url.port = "";

  return NextResponse.redirect(url, 301);
}

export async function middleware(request: NextRequest) {
  const canonical = canonicalizeHost(request);
  if (canonical) return canonical;

  const { pathname } = request.nextUrl;
  const isAdminUi =
    pathname.startsWith("/admin") && pathname !== "/admin/login";
  const isAdminApi = pathname.startsWith("/api/admin");

  if (isAdminUi || isAdminApi) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    });

    if (!token) {
      if (isAdminApi) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }

      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      url.search = "";
      url.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico|txt|xml)$).*)",
  ],
};
