"use client";
import { motion } from "framer-motion";
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function QuoteHero() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className=" lg:w-[40%] w-[100%] lg:pt-10"
    >
      <div>
        <h1 className=" text-lg md:text-4xl font-bold mb-3 md:mb-4 lg:mb-6 ">
          Upgrade Your <span className="text-green-700">Delivery</span>{" "}
          Experience with Green Gear: <br />
        </h1>
        <p className="text-green-700 font-bold mb-4  text-3xl">
          Speed, Trust, and Innovation
        </p>
      </div>
      <ul className="flex flex-col gap-4 lg:gap-6 text-sm lg:text-xl">
        <li>
          <strong>Reliable Performance:</strong>Count on us to meet critical
          delivery standards—year-round, even during peak demand.
        </li>
        <li>
          <strong> Smart Pricing: </strong>Get efficient, high-quality service
          at a price that makes sense for your business.
        </li>
        <li>
          <strong>Widespread Reach:</strong> Our fast-growing network covers
          major urban centers, ensuring wide delivery coverage.
        </li>
        <li>
          <strong>Powered by Technology:</strong> We harness cutting-edge tools
          to streamline operations and enhance your experience.
        </li>
      </ul>
    </motion.div>
  );
}

export default QuoteHero;
