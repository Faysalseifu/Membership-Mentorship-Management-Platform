// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(function middleware(req) {
  const role = req.nextauth?.token?.role;
  const path = req.nextUrl.pathname;

  // Protect superadmin routes
  if (path.startsWith("/dashboard/superadmin") && role !== "super_admin") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  // Protect admin routes (admin and super_admin)
  if (path.startsWith("/dashboard/admin") && !["admin", "super_admin"].includes(role)) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  // Protect mentor routes (mentor, admin, super_admin)
  if (path.startsWith("/dashboard/mentor") && !["mentor", "admin", "super_admin"].includes(role)) {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  // Allow member routes for all authenticated users
  return NextResponse.next();
});

export const config = {
  matcher: ["/dashboard/:path*", "/settings", "/notifications"]
};
