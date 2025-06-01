// "use client";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { useFormStatus } from "react-dom";
// import { useActionState } from "react";
// import { signIn } from "@/lib/authActions";

// export function LoginForm({
//   className,
//   ...props
// }: React.ComponentProps<"form">) {
//   const [errorMessage, dispatch] = useActionState(
//     async (_state: string | undefined, formData: FormData) => {
//       return signIn({
//         email: formData.get("username") as string,
//         password: formData.get("password") as string,
//       });
//     },
//     undefined
//   );
//   return (
//     <form
//       action={dispatch}
//       className={cn("flex flex-col md:w-[24rem]  gap-6", className)}
//       {...props}
//     >
//       <div className="flex  flex-col  gap-2 text-center">
//         <h1 className="md:text-2xl text-2xl font-semibold">
//           Login to your account
//         </h1>
//         {errorMessage && (
//           <p className="text-sm text-red-500 font-medium">{errorMessage}</p>
//         )}
//       </div>
//       <div className="grid gap-6">
//         <div className="grid gap-3">
//           <Label htmlFor="text">Username</Label>
//           <Input name="username" id="username" type="text" required />
//         </div>
//         <div className="grid gap-3">
//           <div className="flex items-center justify-between">
//             <Label htmlFor="password ">Password</Label>

//             <Popover>
//               <PopoverTrigger>
//                 <a
//                   href="#"
//                   className="ml-auto text-xs md:text-sm underline-offset-4 hover:underline"
//                 >
//                   Forgot your password?
//                 </a>
//               </PopoverTrigger>
//               <PopoverContent>
//                 <span className="text-sm font-semibold">
//                   Contact your Developer to reset your password
//                 </span>
//               </PopoverContent>
//             </Popover>
//           </div>
//           <Input name="password" id="password" type="type" required />
//         </div>

//         <LoginButton />
//       </div>
//     </form>
//   );
// }

// function LoginButton() {
//   const { pending } = useFormStatus();

//   return (
//     <Button
//       type="submit"
//       aria-disabled={pending}
//       className="w-full cursor-pointer disabled:cursor-not-allowed"
//     >
//       {pending ? "Logging in..." : "Login"}
//     </Button>
//   );
// }

"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { signIn } from "@/lib/authActions";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [errorMessage, dispatch] = useActionState(
    async (_state: string | undefined, formData: FormData) => {
      return signIn({
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      });
    },
    undefined
  );

  return (
    <form
      action={dispatch}
      className={cn("flex flex-col md:w-[24rem] gap-6", className)}
      {...props}
    >
      <div className="flex flex-col gap-2 text-center">
        <h1 className="md:text-2xl text-2xl font-semibold">
          Login to your account
        </h1>
        {errorMessage && (
          <p className="text-sm text-red-500 font-medium">{errorMessage}</p>
        )}
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input name="email" id="email" type="email" required />
        </div>

        <div className="grid gap-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Popover>
              <PopoverTrigger>
                <a
                  href="#"
                  className="ml-auto text-xs md:text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
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

        <LoginButton />
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      aria-disabled={pending}
      className="w-full cursor-pointer disabled:cursor-not-allowed"
    >
      {pending ? "Logging in..." : "Login"}
    </Button>
  );
}
