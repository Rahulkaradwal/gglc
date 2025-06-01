import { z } from "zod";

const signUpSchema = z.object({
  email: z.string().email(),
  username: z.string().min(2),
  password: z.string().min(6),
});

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export { signUpSchema, signInSchema };
