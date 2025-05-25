"use client";

import SocialLinks from "@/components/about/SocialLinks";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import FounderInfo from "@/components/about/FounderInfo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function About() {
  return (
    <main className="bg-gradient-to-r  from-green-50 to-slate-100 2xl:-ml-56  -mx-10 flex flex-col items-center justify-center max-full pb-20">
      <section className="pt-10 px-4 lg:px-0 relative mx-10">
        {/* Story Text */}
        <motion.div
          className="mb-6 2xl:px-[10%]  2xl:w-[100rem] relative lg:ml-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-[2.2rem] lg:text-[3.6rem] mb-4 font-semibold">
            Our <span className="text-green-700">Story</span>
          </h1>
          <p className="text-sm lg:text-lg leading-relaxed">
            Green Gear Logistics was founded by{" "}
            <span className=" font-semibold">Kumar Kosuri</span>, a passionate
            innovator driven to transform the last-mile delivery experience.
            What began as a mission to improve the delivery of big and bulky
            items quickly evolved into a commitment to delivering smarter,
            greener, and more reliable logistics solutions. Kumar envisioned a
            company that not only moved goods efficiently but also created
            meaningful, customer-first experiences. With a strong focus on
            sustainability, real-time tracking technology, and a flexible,
            scalable fleet, Green Gear Logistics is redefining how businesses
            approach last-mile delivery.
          </p>
        </motion.div>

        {/* Additional Story */}
        <motion.div
          className="relative 2xl:ml-[10%] lg:absolute lg:left-10 lg:w-[50rem] mt-6 lg:mt-0"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="text-sm lg:text-lg leading-relaxed">
            Today, we&apos;re proud to be a trusted logistics partner helping
            companies reduce costs, improve customer satisfaction, and minimize
            their environmental footprint — all while pushing the boundaries of
            what delivery can achieve.
          </p>
        </motion.div>

        {/* Image Grid (unchanged layout) */}
        <div className="grid grid-cols-1 xl:px-10 2xl:px-0  md:grid-cols-3 xl:grid-cols-4 gap-5 max-w-screen-xl mx-auto 2xl:ml-[22rem] py-16">
          {[
            {
              src: "/two-trucks.png",
              col: "lg:col-start-4 lg:row-start-1 hidden lg:block lg:row-span-3",
              lgHeight: "lg:h-[20rem]",
            },
            {
              src: "/delivered-parcel.jpeg",
              col: "lg:col-start-4 lg:row-start-4 hidden lg:block lg:row-span-3",
              lgHeight: "lg:h-[18rem]",
            },
            {
              src: "/boxes-in-truck.jpeg",
              col: "lg:col-start-2 lg:row-start-3 lg:row-span-2",
              lgHeight: "lg:h-[17rem]",
            },
            {
              src: "/tesla-driver.png",
              col: "lg:col-start-2 lg:row-start-5 hidden lg:block lg:row-span-3",
              lgHeight: "lg:h-[22rem]",
            },
            {
              src: "/delivery-truck.png",
              col: "lg:col-start-3 lg:row-start-2 lg:row-span-3",
              lgHeight: "lg:h-[24rem]",
            },
            {
              src: "/container2.png",
              col: "lg:col-start-1 lg:row-start-4 lg:row-span-4",
              lgHeight: "lg:h-[26rem] ",
            },
          ].map(({ src, col, lgHeight }, i) => (
            <motion.div
              key={i}
              className={`relative w-full h-[14rem] md:w-[16rem] md:h-[20rem] ${lgHeight} ${col} lg:w-[17.1rem] bg-white rounded-lg flex items-center justify-center overflow-hidden`}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Image
                src={src}
                alt="Delivery truck"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                className="rounded-xl shadow-xl object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Workplace Section */}
        <motion.div
          className="mt-1 relative lg:absolute lg:right-14 md:right-12 lg:-bottom-[2rem] w-full lg:w-[30rem]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-xl lg:text-3xl font-bold mb-4">
            Our <span className="text-green-700">Workplace</span>
          </h1>
          <p className="text-sm lg:text-lg leading-relaxed">
            At Green Gear Logistics, our workplace is built on innovation,
            collaboration, and a shared commitment to sustainability. We empower
            our team to solve real-world challenges, support each other&apos;s
            growth, and drive meaningful change in the logistics space. Whether
            in the field or at our headquarters, every role contributes to
            delivering smarter, greener solutions.
          </p>
        </motion.div>
      </section>

      {/* Social Links & Quote */}
      <FounderInfo />

      <SocialLinks />
    </main>
  );
}

export default About;
