import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {
  const role = req.nextauth.token?.role as string | undefined;
  const path = req.nextUrl.pathname;

  if (path.startsWith("/dashboard/superadmin") && role !== "super_admin") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  if (path.startsWith("/dashboard/admin") && !["super_admin", "admin"].includes(role || "")) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  if (path.startsWith("/dashboard/mentor") && !["super_admin", "admin", "mentor"].includes(role || "")) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }
}, {
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

export const config = {
  matcher: ["/dashboard/:path*", "/settings", "/notifications"],
};
