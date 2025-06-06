"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function Hero() {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className="flex flex-col-reverse  lg:pt-28 lg:flex-row items-center justify-between gap-6 px-4 md:px-16 mt-10 mb-10"
    >
      {/* Text content */}
      <div className="text-center  lg:text-left">
        <h3 className="text-sm md:text-2xl font-bold text-green-700 mb-2">
          Reliable, Responsive, Revolutionary
        </h3>
        <h1 className="text-2xl md:text-5xl font-bold leading-tight mb-4">
          Discover the Power of <span className="text-green-700">Seamless</span>{" "}
          Delivery
        </h1>
        <p className="text-xs md:text-lg font-medium text-gray-600">
          Need help with your package? Contact{" "}
          <Link href="/support" className="text-green-700 underline">
            Customer Services
          </Link>
        </p>
      </div>

      {/* Image */}
      <div className="w-full   max-w-md mx-auto lg:mx-0">
        <Image
          src="/home-bg.png"
          alt="hero"
          width={600}
          height={300}
          className="w-full h-auto object-contain"
          priority
        />
      </div>
    </motion.section>
  );
}

export default Hero;
