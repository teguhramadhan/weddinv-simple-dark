import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Rute yang ingin diproteksi
const protectedRoutes = ["/admin"];
const publicRoutes = ["/login", "/"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Cek apakah rute sedang mengakses /admin
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // Cek apakah cookie login tersedia
  const token = request.cookies.get("admin_token");

  if (isProtected && !token) {
    // Jika tidak login, redirect ke login
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // Jika sudah login dan mengakses login page, redirect ke admin
  if (token && pathname === "/login") {
    return NextResponse.redirect(new URL("/admin", request.url));
  }

  return NextResponse.next();
}

// Konfigurasi matcher untuk menentukan rute mana saja yang akan dijalankan middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
