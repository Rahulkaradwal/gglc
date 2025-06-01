import { LoginForm } from "@/components/login-form";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh  lg:grid-cols-2">
      <div className="flex items-center   flex-col gap-4  p-6 md:p-10">
        <div className=" mb-8 mt-12 flex items-center gap-4 justify-between  ">
          <Avatar>
            <AvatarImage alt="Kumar Kosuri" src="/admin.jpeg" />
            <AvatarFallback>KK</AvatarFallback>
          </Avatar>
          <h1 className="md:text-4xl text-xl font-bold">Hi, Kumar Kosuri</h1>
        </div>
        <LoginForm />
      </div>
      <div className=" bg-white relative hidden lg:block">
        <Image
          src="/login-bg.png"
          alt="Login"
          className="object-contain"
          fill
        />
      </div>
    </div>
  );
}
