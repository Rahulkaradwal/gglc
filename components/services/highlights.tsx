"use client";
import React from "react";
import { motion } from "framer-motion";
import { Truck, Leaf, DollarSign, Headphones } from "lucide-react";

const items = [
  {
    title: "First-Attempt Delivery Excellence",
    description:
      "99.7% First-Attempt Delivery Rate ensures packages reach their destination efficiently and on time",
    icon: <Truck size={32} />,
  },
  {
    title: "Eco-Friendly Logistics",
    description:
      "Green Fleet with hybrid/electric vehicles reduces carbon footprint. Sustainable packaging options available",
    icon: <Leaf size={32} />,
  },

  {
    title: "Competitive Pricing",
    description:
      "Transparent and affordable pricing with no hidden fees. Package insurance and re-delivery attempts included",
    icon: <DollarSign size={32} />,
  },
  {
    title: "24/7 Customer Support",
    description:
      "24/7 customer support to address any concerns and ensure smooth delivery experience",
    icon: <Headphones size={32} />,
  },
];
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

function Highlights() {
  return (
    <section className="py-6 md:py-16 sm:px-6 md:px-10 ">
      <h1 className="text-center  text-[1.3rem] md:text-[3rem] font-bold  md:py-10 mb-10 md:mb-14">
        <span className="text-green-700">Green Gear</span> Service&apos;s
        Highlights
      </h1>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={container}
        className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10   md:gap-y-14 lg:gap-10 justify-items-center"
      >
        {items.map((feature, index) => (
          <motion.div
            variants={childVariant}
            key={index}
            className="
              relative  border-2  border-green-800 shadow-md rounded-[1.7rem] rounded-br-sm 
              pt-10 md:pt-12 px-4 pb-4
              w-32 h-24 
              sm:w-40 sm:h-28 
              md:w-56 md:h-52 
              lg:w-72 lg:h-64
              flex flex-col items-center text-center transition-all duration-300
            "
          >
            <span
              className={`
                border-2 border-green-800 bg-white text-green-800 rounded-full
                p-2 sm:p-2.5 md:p-3
                absolute -top-6 sm:-top-8 md:-top-10 left-1/2 transform -translate-x-1/2
              `}
            >
              {feature.icon}
            </span>
            <div
              className={`
                flex flex-col gap-1 sm:gap-2 md:gap-3 
                text-black justify-center
              `}
            >
              <h1 className="text-[0.65rem] sm:text-sm md:text-md lg:text-lg font-bold leading-tight">
                {feature.title}
              </h1>
              <p className="hidden md:block text-[0.65rem] sm:text-sm lg:text-base text-gray-700">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Highlights;
