import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET!;

interface DecodedToken {
  sub: string;
  email: string;
  username: string;
  exp: number;
  iat: number;
}

// ✅ Read and decode the JWT from HTTP-only cookies (server-side only)
export async function getDecodedTokenFromCookie(): Promise<DecodedToken | null> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;
    if (!token) return null;

    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
    return decoded;
  } catch (e) {
    console.error("Token verification failed:", e);
    return null;
  }
}

// ✅ Check if the token is expired
export function isTokenExpired(decoded: DecodedToken | null): boolean {
  if (!decoded?.exp) return true;
  const now = Math.floor(Date.now() / 1000);
  return decoded.exp < now;
}

export async function isAuthenticated(): Promise<{
  authenticated: boolean;
  user?: { email: string; username: string };
}> {
  const decoded = await getDecodedTokenFromCookie();
  if (!decoded || isTokenExpired(decoded)) {
    return { authenticated: false };
  }

  const { email, username } = decoded;
  if (!email || !username) return { authenticated: false };

  return {
    authenticated: true,
    user: { email, username },
  };
}
