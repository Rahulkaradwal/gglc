"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { logIn } from "@/lib/apicalls/authCall";
import { useRouter } from "next/navigation";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = new FormData(e.currentTarget);
    const email = form.get("email") as string;
    const username = form.get("username") as string;
    const password = form.get("password") as string;

    const { error } = await logIn({ email, username, password });

    setLoading(false);

    if (error) {
      setError(error);
    } else {
      router.push("/dashboard");
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col md:w-[24rem] gap-6", className)}
      {...props}
    >
      <div className="flex flex-col gap-2 text-center">
        <h1 className="md:text-2xl text-2xl font-semibold">
          Login to your account
        </h1>
        {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input name="email" id="email" type="email" required />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="username">Username</Label>
          <Input name="username" id="username" type="text" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Popover>
              <PopoverTrigger asChild>
                <p className="ml-auto text-xs md:text-sm underline-offset-4 hover:underline">
                  Forgot your password?
                </p>
              </PopoverTrigger>
              <PopoverContent>
                <span className="text-sm font-semibold">
                  Contact your Developer to reset your password
                </span>
              </PopoverContent>
            </Popover>
          </div>
          <Input name="password" id="password" type="password" required />
        </div>

        {/* <LoginButton /> */}
        <Button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </div>
    </form>
  );
}

// function LoginButton() {
//   const { pending } = useFormStatus();

//   return (
//     <Button
//       type="submit"
//       disabled={pending}
//       className="w-full cursor-pointer disabled:cursor-not-allowed"
//     >
//       {pending ? "Logging in..." : "Login"}
//     </Button>
//   );
// }
