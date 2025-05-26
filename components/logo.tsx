import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex hover:transform hover:scale-105 duration-300 items-center gap-2">
      <Image
        src="/logo.png"
        priority
        alt="Green Gear Logo"
        width={50}
        height={50}
      />

      <div className="hidden md:block">
        <p className="text-2xl  italic font-bold text-green-700 leading-tight">
          GREEN GEAR
        </p>
        {/* tracking-[.2rem] */}
        <p className="text-2xl  italic ml-1 -mt-1.5 font-bold text-green-700 ">
          LOGISTICS
        </p>
      </div>
    </div>
  );
};

export default Logo;
