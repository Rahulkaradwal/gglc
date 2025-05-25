import React from "react";
import Image from "next/image";
import Link from "next/link";

function JoinUs() {
  return (
    <section className="flex md:px-10 md:mt-20 lg:px-36 my-8 md:my-14   items-center justify-end gap-2.5">
      <div className=" flex-1/3 block relative h-[230px]  w-[300px] md:h-[300px]">
        <Image
          className="rounded-2xl shadow-xl   object-cover"
          src="/delivery4.jpg"
          alt="Delivery truck"
          fill
        />
      </div>
      <div className="w-1/2  md:ml-16 px-1 md:px-4">
        <div className=" flex-2/3  flex gap-3  flex-col  md:gap-6">
          <h1 className="text-green-700 text-sm md:text-2xl font-bold">
            Gear Up With Us{" "}
          </h1>
          <h1 className=" text-lg md:text-4xl font-bold">
            Become a{" "}
            <span className="text-green-700 md:text-[2.3rem]">GGLC</span> Driver
          </h1>
          <p className="font md:text-lg text-xs ">
            We&apos;re looking for motivated drivers to be part of our growing
            network. Our flexible, on-demand fleet scales effortlessly to meet
            rising demand and peak season surges. Be part of a dynamic team that
            keeps deliveries moving.
          </p>
          <div>
            <Link
              href="/join-us"
              className="md:border-2 border px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-lg  md:font-semibold duration-300  bg-green-700 text-white cursor-pointer rounded-md border-green-700 hover:text-green-700 hover:bg-white"
            >
              Join Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
