import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json(
    { message: "Logged out" },
    { status: 200 }
  );

  response.headers.set(
    "Set-Cookie",
    `auth_token=; Path=/; HttpOnly; Max-Age=0; SameSite=Strict; Secure`
  );

  return response;
}
