// app/api/login/route.ts
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import dbConnect from "@/lib/mongodb";
import { Admin } from "@/models/Admin";
import { comparePasswords, validateInput } from "@/utils/validators";
import { AdminUser } from "@/utils/types";
import { cookies } from "next/headers"; // server-side only

const JWT_SECRET = process.env.NEXT_PUBLIC_JWT_SECRET!;
// 2 hours in milliseconds from now
const expires = new Date(Date.now() + 2 * 60 * 60 * 1000);

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const body = await req.json();
    const { username, email, password } = body;

    if (!validateInput(username, email, password)) {
      return NextResponse.json(
        { error: "Invalid input. Please check your credentials." },
        { status: 400 }
      );
    }

    const user = (await Admin.findOne({ email }).lean()) as AdminUser | null;

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const isCorrectPassword = await comparePasswords({
      password,
      salt: user.salt,
      hashedPassword: user.password,
    });

    if (!isCorrectPassword) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      {
        sub: user._id.toString(),
        email: user.email,
        username: user.username,
      },
      JWT_SECRET,
      { expiresIn: "2h" }
    );
    (await cookies()).set("auth_token", token, {
      httpOnly: true, // Makes it unreadable by JavaScript (secure)
      secure: true, // Only sent over HTTPS
      sameSite: "lax", // Helps prevent CSRF
      path: "/",
      expires,
    });

    return NextResponse.json({
      message: "Login successful",
      token,
      user: {
        id: user._id,
        email: user.email,
        username: user.username,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
