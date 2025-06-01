import { NextResponse, type NextRequest } from "next/server";
import {
  getUserFromSession,
  updateUserSessionExpiration,
} from "./utils/session";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Restrict access to /dashboard and all sub-routes
  if (pathname.startsWith("/dashboard")) {
    const user = await getUserFromSession(request.cookies);
    if (!user) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  const response = NextResponse.next();

  // Optionally update session expiration
  await updateUserSessionExpiration({
    set: (key, value, options) => {
      response.cookies.set({ ...options, name: key, value });
    },
    get: (key) => request.cookies.get(key),
  });

  return response;
}

// Only apply middleware to these routes
export const config = {
  matcher: [
    "/dashboard/:path*", // middleware only runs for dashboard routes
  ],
};
