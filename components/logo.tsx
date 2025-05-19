import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        priority
        alt="Green Gear Logo"
        width={50}
        height={50}
      />
      <div className="hidden md:block">
        <p className="text-lg italic font-bold text-green-700  leading-tight">
          GREEN GEAR
        </p>
        <p className="text-lgc  italic font-bold text-green-700">LOGISTICS</p>
      </div>
    </Link>
  );
};

export default Logo;
