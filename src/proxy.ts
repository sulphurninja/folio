import { NextResponse } from "next/server";

/** Admin is internal-only and is not linked or served on the public site. */
export function proxy(request: Request) {
  const url = new URL(request.url);
  const hidden =
    url.pathname.startsWith("/admin") ||
    url.pathname.startsWith("/api/admin") ||
    url.pathname.startsWith("/api/auth");

  if (hidden) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*", "/api/admin/:path*", "/api/auth/:path*"],
};
