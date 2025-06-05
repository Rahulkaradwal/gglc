import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import { Admin } from "@/models/Admin";
import { generateSalt, hashPassword, validateInput } from "@/utils/validators";

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const body = await req.json();
    const { username, email, password } = body;

    if (!validateInput(username, email, password)) {
      return NextResponse.json(
        { error: "Invalid input. Username must be 5+ chars, password 10+." },
        { status: 400 }
      );
    }

    const existingUser = await Admin.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const salt = generateSalt();
    const hashedPassword = await hashPassword(password, salt);

    const newAdmin = new Admin({
      username,
      email,
      password: hashedPassword,
      salt,
    });

    await newAdmin.save();

    return NextResponse.json(
      { message: "Signup successful. You can now log in." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
