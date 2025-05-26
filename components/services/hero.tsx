// Service page hero section
"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className="flex mt-6 sm:mt-10   lg:pt-28  lg:flex-row items-center justify-between gap-1 md:gap-10  sm:px-6 md:px-16  mb-10"
    >
      {/* Text content */}
      <div className="w-2/3 md:text-center md:w-2/5  lg:text-left">
        <h3 className="text-sm md:text-2xl font-bold text-green-700 mb-2">
          Fast, Reliable, Flexible
        </h3>
        <h1 className="text-lg mt-2 md:mt-4 md:text-2xl lg:text-4xl xl:text-6xl font-semibold mb-4">
          The Last Mile, Made Easy
        </h1>
        <p className="text-xs md:text-lg ">
          At GGLC, we specialize in managing the logistics that power your
          business. Our cost-effective, tech-enabled delivery solutions span
          across North America and are built to scale with demand. Whether
          navigating peak volumes or expanding operations, we provide the
          flexibility, efficiency, and reliability needed to keep your supply
          chain moving smoothly
        </p>
        <div className="mt-4">
          <Link
            href="/get-a-quote"
            className="md:border-2  border px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-lg  md:font-semibold duration-300 hover:bg-green-700 hover:text-white cursor-pointer rounded-md border-green-700 text-green-700 bg-white"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Image */}
      <div className=" flex-1/2 block relative h-[230px]  w-[300px] md:h-[300px]">
        <Image
          className="rounded-2xl    object-cover"
          src="/hero-bg.png"
          priority
          alt="Delivery truck"
          fill
        />
      </div>
    </motion.section>
  );
}

export default Hero;
