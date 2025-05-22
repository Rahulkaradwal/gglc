import React from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
  heading: string;
  description: string;
  className?: string;
}

function ShippingQuote({
  children,
  className,
  href,
  heading,
  description,
}: Props) {
  return (
    <div
      className={`flex mt-4 md:mt-20  shadow-lg rounded-2xl md:rounded-4xl md:mx-32 p-10  items-center flex-col gap-3 md:gap-6 ${className}`}
    >
      <div className="md:w-3/4 ">
        <h1 className="text-[1rem]  text-center md:text-[3rem] font-bold ">
          {heading}
        </h1>
      </div>
      <p className="text-[.75rem] text-center md:text-xl">{description}</p>
      <div>
        <Link
          href={href}
          className="md:border-2 border px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-lg  md:font-semibold duration-300 hover:bg-green-700 hover:text-white cursor-pointer rounded-md border-green-700 text-green-700 bg-white"
        >
          {children}
        </Link>
      </div>
    </div>
  );
}

export default ShippingQuote;
