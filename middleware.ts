import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/dashboard")) {
    // Match cookie name exactly as used in your server code
    const token = request.cookies.get("auth_token")?.value;

    if (!token || isTokenExpired(token)) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// ✅ Decode and check JWT expiration manually (middleware can't use jwt.verify)
function isTokenExpired(token: string): boolean {
  try {
    const payload = JSON.parse(
      Buffer.from(token.split(".")[1], "base64").toString()
    );
    const now = Math.floor(Date.now() / 1000);
    return payload.exp < now;
  } catch (err) {
    console.error("JWT decode error:", err);
    return true;
  }
}

// ✅ Restrict middleware only to dashboard paths
export const config = {
  matcher: ["/dashboard/:path*"],
};
