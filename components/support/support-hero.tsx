"use client";
import Image from "next/image";
import React from "react";
import SupportAccordion from "./Accordion";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
function SupportHero() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className="flex flex-col  items-center  justify-center"
    >
      <section className="flex px-10 lg:w-[80%] md:flex-row gap-6 lg:gap-10  flex-col items-start pt-10   justify-around">
        <div className=" lg:w-[40%] w-[100%] lg:pt-2">
          <h1 className=" text-lg text-green-700 md:text-5xl font-bold mb-3 md:mb-4 lg:mb-6 ">
            FAQs
          </h1>
          <p className="text-sm mb-6 md:text-xl">
            Find answers to common questions
          </p>
          <div
            className="relative block h-[300px] w-[300px] md:w-[350px] md:h-[350px]"
            style={{
              clipPath:
                " polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)",
            }}
          >
            <Image
              className="object-cover shadow-xl"
              src="/delivery-boy.jpg"
              alt="Delivery truck"
              fill
              priority
            />
          </div>
        </div>
        <div className="lg:w-[40%] w-[100%]">
          <SupportAccordion />
        </div>
      </section>
    </motion.div>
  );
}

export default SupportHero;
