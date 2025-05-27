import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-svh  lg:grid-cols-2">
      <div className="flex items-center   flex-col gap-4 lg:gap-12 mt-[11rem] lg:mt-6 p-6 md:pt-[10rem]">
        <h1 className="md:text-4xl text-xl font-bold text-green-700">
          Page Not Found!
        </h1>
        <p className="text-lg text-center font-semibold">
          The page you are looking for is not found
        </p>
        <Link
          className="text-white hover:bg-green-800 bg-green-700 px-4 py-2 rounded-md"
          href="/"
        >
          Return Home
        </Link>
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
