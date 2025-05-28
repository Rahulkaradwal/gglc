import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form
      className={cn("flex flex-col md:w-[24rem]  gap-6", className)}
      {...props}
    >
      <div className="flex  flex-col  gap-2 text-center">
        <h1 className="md:text-2xl text-2xl font-semibold">
          Login to your account
        </h1>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="text">Username</Label>
          <Input id="text" type="text" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center justify-between">
            <Label htmlFor="password ">Password</Label>

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
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full cursor-pointer">
          Login
        </Button>
      </div>
    </form>
  );
}
