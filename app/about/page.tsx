// "use client";

// import SocialLinks from "@/components/about/SocialLinks";
// import ShippingQuote from "@/components/shippingQuote";
// import Image from "next/image";
// import React from "react";

// function About() {
//   return (
//     <main className="bg-gradient-to-r   from-green-50 to-slate-100 -mx-10 pb-20">
//       <section className="pt-10 px-4  lg:px-0 relative mx-10">
//         {/* Story Text */}
//         <div className="mb-6 2xl:px-[10%] 2xl:border 2xl:w-[100rem]  relative lg:ml-10">
//           <h1 className="text-[2.2rem] lg:text-[3.6rem] mb-4 font-semibold">
//             Our Story
//           </h1>
//           <p className="text-sm lg:text-lg  ">
//             Green Gear Logistics was founded by Kumar Kosuri, whose passion for
//             innovation led to a vision of transforming last-mile delivery. What
//             began as an effort to improve the delivery of big & bulky items
//             evolved into a mission to provide smarter, greener, and more
//             reliable logistics.
//           </p>
//         </div>

//         {/* Additional Story */}
//         <div className="relative 2xl:ml-[10%] lg:absolute lg:left-10 lg:w-[50rem]   mt-6 lg:mt-0">
//           <p className="text-sm lg:text-lg">
//             What began as a desire to improve the delivery of big & bulky items
//             quickly grew into a mission to provide smarter, greener, and more
//             reliable solutions. With real-time tracking technology, a flexible
//             fleet, and a commitment to reducing emissions, Green Gear helps
//             businesses enhance customer experiences, lower costs, and reduce
//             their environmental impact — all while pushing the boundaries of
//             last-mile delivery.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 xl:px-10  2xl:px-0  mb-16  md:grid-cols-3 xl:grid-cols-4  gap-5  max-w-screen-xl mx-auto 2xl:ml-[22rem] py-16">
//           {[
//             {
//               src: "/deliver2.jpg",
//               col: "lg:col-start-4 lg:row-start-1 hidden lg:block lg:row-span-3",
//               lgHeight: "lg:h-[20rem]",
//             },
//             {
//               src: "/delivery1.jpg",
//               col: "lg:col-start-4 lg:row-start-4 hidden lg:block lg:row-span-3",
//               lgHeight: "lg:h-[18rem]",
//             },
//             {
//               src: "/delivery5.jpg",
//               col: "lg:col-start-2 lg:row-start-3 lg:row-span-2",
//               lgHeight: "lg:h-[17rem]",
//             },
//             {
//               src: "/delivery9.jpg",
//               col: "lg:col-start-2 lg:row-start-5 hidden lg:block lg:row-span-3",
//               lgHeight: "lg:h-[22rem]",
//             },
//             {
//               src: "/delivery-boy.jpg",
//               col: "lg:col-start-3 lg:row-start-2 lg:row-span-3",
//               lgHeight: "lg:h-[24rem]",
//             },
//             {
//               src: "/delivery6.jpg",
//               col: "lg:col-start-1 lg:row-start-4 lg:row-span-4",
//               lgHeight: "lg:h-[26rem] ",
//             },
//           ].map(({ src, col, lgHeight }, i) => (
//             <div
//               key={i}
//               className={`relative w-full h-[14rem] md:w-[16rem] md:h-[20rem]  ${lgHeight} ${col} lg:w-[17.1rem] bg-white rounded-lg flex items-center justify-center overflow-hidden`}
//             >
//               <Image
//                 src={src}
//                 alt="Delivery truck"
//                 fill
//                 sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
//                 className="rounded-xl shadow-xl object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Workplace Section */}
//         <div className="mt-10 relative lg:absolute lg:right-14 md:right-12 2xl:right-[20rem] lg:-bottom-[2rem]   w-full lg:w-[30rem] ">
//           <h1 className="text-xl lg:text-3xl font-bold mb-4">Our Workplace</h1>
//           <p className="text-sm lg:text-lg">
//             At Green Gear Logistics, our workplace culture is built on
//             innovation, collaboration, and a shared commitment to
//             sustainability. We empower our team to solve real-world challenges,
//             support each other&apos;s growth, and drive meaningful change in the
//             logistics space. Whether in the field or at our headquarters, every
//             role contributes to delivering smarter, greener solutions.
//           </p>
//         </div>
//       </section>
//       <SocialLinks />
//       <ShippingQuote
//         className="bg-white"
//         href="/get-a-quote"
//         heading="Discover How Easy Shipping Can Be"
//         description="We strive to be your first-choice for last-mile delivery"
//       >
//         Get a Quote
//       </ShippingQuote>
//     </main>
//   );
// }

// export default About;

"use client";

import SocialLinks from "@/components/about/SocialLinks";
import ShippingQuote from "@/components/shippingQuote";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function About() {
  return (
    <main className="bg-gradient-to-r from-green-50 to-slate-100 -mx-10 pb-20">
      <section className="pt-10 px-4 lg:px-0 relative mx-10">
        {/* Story Text */}
        <motion.div
          className="mb-6 2xl:px-[10%] 2xl:border 2xl:w-[100rem] relative lg:ml-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-[2.2rem] lg:text-[3.6rem] mb-4 font-semibold">
            Our Story
          </h1>
          <p className="text-sm lg:text-lg leading-relaxed">
            Green Gear Logistics was founded by Kumar Kosuri, whose passion for
            innovation led to a vision of transforming last-mile delivery. What
            began as an effort to improve the delivery of big & bulky items
            evolved into a mission to provide smarter, greener, and more
            reliable logistics.
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
            What began as a desire to improve the delivery of big & bulky items
            quickly grew into a mission to provide smarter, greener, and more
            reliable solutions. With real-time tracking technology, a flexible
            fleet, and a commitment to reducing emissions, Green Gear helps
            businesses enhance customer experiences, lower costs, and reduce
            their environmental impact — all while pushing the boundaries of
            last-mile delivery.
          </p>
        </motion.div>

        {/* Image Grid (unchanged layout) */}
        <div className="grid grid-cols-1 xl:px-10 2xl:px-0 mb-16 md:grid-cols-3 xl:grid-cols-4 gap-5 max-w-screen-xl mx-auto 2xl:ml-[22rem] py-16">
          {[
            {
              src: "/deliver2.jpg",
              col: "lg:col-start-4 lg:row-start-1 hidden lg:block lg:row-span-3",
              lgHeight: "lg:h-[20rem]",
            },
            {
              src: "/delivery1.jpg",
              col: "lg:col-start-4 lg:row-start-4 hidden lg:block lg:row-span-3",
              lgHeight: "lg:h-[18rem]",
            },
            {
              src: "/delivery5.jpg",
              col: "lg:col-start-2 lg:row-start-3 lg:row-span-2",
              lgHeight: "lg:h-[17rem]",
            },
            {
              src: "/delivery9.jpg",
              col: "lg:col-start-2 lg:row-start-5 hidden lg:block lg:row-span-3",
              lgHeight: "lg:h-[22rem]",
            },
            {
              src: "/delivery-boy.jpg",
              col: "lg:col-start-3 lg:row-start-2 lg:row-span-3",
              lgHeight: "lg:h-[24rem]",
            },
            {
              src: "/delivery6.jpg",
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
          className="mt-10 relative lg:absolute lg:right-14 md:right-12 2xl:right-[20rem] lg:-bottom-[2rem] w-full lg:w-[30rem]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-xl lg:text-3xl font-bold mb-4">Our Workplace</h1>
          <p className="text-sm lg:text-lg leading-relaxed">
            At Green Gear Logistics, our workplace culture is built on
            innovation, collaboration, and a shared commitment to
            sustainability. We empower our team to solve real-world challenges,
            support each other&apo;s growth, and drive meaningful change in the
            logistics space. Whether in the field or at our headquarters, every
            role contributes to delivering smarter, greener solutions.
          </p>
        </motion.div>
      </section>

      {/* Social Links & Quote */}
      <SocialLinks />
      <ShippingQuote
        className="bg-white"
        href="/get-a-quote"
        heading="Discover How Easy Shipping Can Be"
        description="We strive to be your first-choice for last-mile delivery"
      >
        Get a Quote
      </ShippingQuote>
    </main>
  );
}

export default About;
