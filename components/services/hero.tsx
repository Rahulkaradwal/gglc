// Service page hero section
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

function Hero() {
  return (
    <section className="flex mt-2 sm:mt-10   lg:pt-44  lg:flex-row items-center justify-between gap-1 md:gap-10  sm:px-6 md:px-16  mb-10">
      {/* Text content */}
      <div className="w-2/3 md:text-center md:w-2/5  lg:text-left">
        <h3 className="text-sm md:text-2xl font-bold text-green-700 mb-2">
          Fast, Reliable, Flexible
        </h3>
        <h1 className="text-lg mt-2 md:mt-4 md:text-2xl lg:text-4xl xl:text-6xl font-semibold mb-4">
          The Last Mile, Made Easy
        </h1>
        <p className="text-xs md:text-lg ">
          At GGLC, the logistics behind your business is OUR Business. We offer
          an affordable and innovative delivery solution across North America,
          that scales on demand.
        </p>
        <div>
          <Button className="text-green-700 border-2  md:h-10 font-semibold mt-4 border-green-700 hover:text-white cursor-pointer bg-white">
            Let&apos;s Talk
          </Button>
        </div>
      </div>

      {/* Image */}
      <div className=" flex-1/2 block relative h-[230px]  w-[300px] md:h-[300px]">
        <Image
          className="rounded-2xl    object-cover"
          src="/hero-bg.png"
          alt="Delivery truck"
          fill
        />
      </div>
    </section>
  );
}

export default Hero;
