"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";

import { cookies } from "next/headers";
import {
  comparePasswords,
  generateSalt,
  hashPassword,
} from "@/utils/passwordHasher";
import { signInSchema, signUpSchema } from "@/utils/schema";
import { createUserSession, removeUserFromSession } from "@/utils/session";

// export async function signIn(unsafeData: z.infer<typeof signInSchema>) {
//   const { success, data } = signInSchema.safeParse(unsafeData);
//   if (!success) return "Unable to log you in";

//   const user = await prisma.user.findUnique({
//     where: { email: data.email },
//     select: {
//       id: true,
//       email: true,
//       password: true,
//       salt: true,
//       username: true,
//     },
//   });

//   if (!user || !user.password || !user.salt) return "Unable to log you in";

//   const isCorrectPassword = await comparePasswords({
//     hashedPassword: user.password,
//     password: data.password,
//     salt: user.salt,
//   });

//   if (!isCorrectPassword) return "Unable to log you in";

//   await createUserSession({ id: user.id, user }, await cookies());
//   redirect("/dashboard");
// }

export async function signIn(unsafeData: z.infer<typeof signInSchema>) {
  const parsed = signInSchema.safeParse(unsafeData);
  if (!parsed.success) return "Invalid input. Please check your credentials.";

  const { email, password } = parsed.data;

  const user = await prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      email: true,
      password: true,
      salt: true,
      username: true,
    },
  });

  if (!user || !user.password || !user.salt) {
    return "Invalid email or password.";
  }

  const isCorrectPassword = await comparePasswords({
    hashedPassword: user.password,
    password,
    salt: user.salt,
  });

  if (!isCorrectPassword) return "Invalid email or password.";

  await createUserSession({ id: user.id, user }, await cookies());

  redirect("/dashboard");
}

export async function signUp(unsafeData: z.infer<typeof signUpSchema>) {
  const { success, data } = signUpSchema.safeParse(unsafeData);
  if (!success) return "Unable to create account";

  const existingUser = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existingUser) return "Account already exists for this email";

  try {
    const salt = generateSalt();
    const hashedPassword = await hashPassword(data.password, salt);

    const user = await prisma.user.create({
      data: {
        email: data.email,
        username: data.username,
        password: hashedPassword,
        salt: salt,
      },
      select: {
        id: true,
        email: true,
        username: true,
      },
    });

    if (!user) return "Unable to create account";

    await createUserSession({ id: user.id, user }, await cookies());
  } catch (error) {
    console.error(error);
    return "Unable to create account";
  }

  redirect("/");
}

export async function logOut() {
  await removeUserFromSession(await cookies());
  redirect("/");
}
