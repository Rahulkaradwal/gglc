// "use client";

// import Image from "next/image";
// import React from "react";

// function About() {
//   return (
//     <section className="py-10 px-4 lg:px-0 relative">
//       {/* Story Text */}
//       <div className="mb-6 relative lg:ml-10">
//         <h1 className="text-[2.2rem] lg:text-[3.6rem] mb-4 font-semibold">
//           Our Story
//         </h1>
//         <p className="text-sm lg:text-md">
//           Green Gear Logistics was founded by Kumar Kosuri, whose passion for
//           innovation led to a vision of transforming last-mile delivery. What
//           began as an effort to improve the delivery of big & bulky items
//           evolved into a mission to provide smarter, greener, and more reliable
//           logistics.
//         </p>
//       </div>

//       {/* Additional Story */}
//       <div className="relative lg:absolute lg:left-10 lg:w-[36rem] mt-6 lg:mt-0">
//         <p className="text-sm">
//           What began as a desire to improve the delivery of big & bulky items
//           quickly grew into a mission to provide smarter, greener, and more
//           reliable solutions. With real-time tracking technology, a flexible
//           fleet, and a commitment to reducing emissions, Green Gear helps
//           businesses enhance customer experiences, lower costs, and reduce their
//           environmental impact — all while pushing the boundaries of last-mile
//           delivery.
//         </p>
//       </div>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 relative max-w-screen-xl mx-auto mt-10">
//         <div className="w-full md:w-[17rem] lg:w-[19.1rem] h-[22rem] rounded-xl bg-white flex items-center justify-center relative lg:col-start-4 lg:row-start-1 lg:row-span-3">
//           <Image
//             className="rounded-2xl shadow-xl object-cover"
//             src="/deliver2.jpg"
//             alt="Delivery truck"
//             fill
//           />
//         </div>

//         <div className="w-full md:w-[17rem] lg:w-[19.1rem] h-[20rem] rounded-xl bg-white flex items-center justify-center relative lg:col-start-4 lg:row-start-4 lg:row-span-3">
//           <Image
//             className="rounded-2xl shadow-xl object-cover"
//             src="/delivery1.jpg"
//             alt="Delivery truck"
//             fill
//           />
//         </div>

//         <div className="w-full md:w-[17rem] lg:w-[19.1rem] h-[19rem] rounded-xl bg-white flex items-center justify-center relative lg:col-start-2 lg:row-start-3 lg:row-span-2">
//           <Image
//             className="rounded-2xl shadow-xl object-cover"
//             src="/delivery5.jpg"
//             alt="Delivery truck"
//             fill
//           />
//         </div>

//         <div className="w-full md:w-[17rem] lg:w-[19.1rem] h-[24rem] rounded-xl bg-white flex items-center justify-center relative lg:col-start-2 lg:row-start-5 lg:row-span-3">
//           <Image
//             className="rounded-2xl shadow-xl object-cover"
//             src="/delivery9.jpg"
//             alt="Delivery truck"
//             fill
//           />
//         </div>

//         <div className="w-full md:w-[17rem] lg:w-[19.1rem] h-[26rem] rounded-xl bg-white flex items-center justify-center relative lg:col-start-3 lg:row-start-2 lg:row-span-3">
//           <Image
//             className="rounded-2xl shadow-xl object-cover"
//             src="/delivery-boy.jpg"
//             alt="Delivery truck"
//             fill
//           />
//         </div>

//         <div className="w-full md:w-[17rem] lg:w-[19.1rem] h-[24rem] rounded-xl bg-white flex items-center justify-center relative lg:col-start-1 lg:row-start-4 lg:row-span-4">
//           <Image
//             className="rounded-2xl shadow-xl object-cover"
//             src="/delivery6.jpg"
//             alt="Delivery truck"
//             fill
//           />
//         </div>
//       </div>

//       {/* Workplace Section */}
//       <div className="mt-10 relative lg:absolute lg:right-20 lg:-bottom-[0rem] w-full lg:w-[36rem]">
//         <h1 className="text-xl lg:text-2xl font-bold mb-2">Our Workplace</h1>
//         <p className="text-sm lg:text-base">
//           At Green Gear Logistics, our workplace culture is built on innovation,
//           collaboration, and a shared commitment to sustainability. We empower
//           our team to solve real-world challenges, support each other&apos;s
//           growth, and drive meaningful change in the logistics space. Whether in
//           the field or at our headquarters, every role contributes to delivering
//           smarter, greener solutions.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default About;

"use client";

import Image from "next/image";
import React from "react";

function About() {
  return (
    <section className="py-10 px-4 lg:px-0 relative">
      {/* Story Text */}
      <div className="mb-6 relative lg:ml-10">
        <h1 className="text-[2.2rem] lg:text-[3.6rem] mb-4 font-semibold">
          Our Story
        </h1>
        <p className="text-sm lg:text-md">
          Green Gear Logistics was founded by Kumar Kosuri, whose passion for
          innovation led to a vision of transforming last-mile delivery. What
          began as an effort to improve the delivery of big & bulky items
          evolved into a mission to provide smarter, greener, and more reliable
          logistics.
        </p>
      </div>

      {/* Additional Story */}
      <div className="relative lg:absolute lg:left-10 lg:w-[36rem] mt-6 lg:mt-0">
        <p className="text-sm">
          What began as a desire to improve the delivery of big & bulky items
          quickly grew into a mission to provide smarter, greener, and more
          reliable solutions. With real-time tracking technology, a flexible
          fleet, and a commitment to reducing emissions, Green Gear helps
          businesses enhance customer experiences, lower costs, and reduce their
          environmental impact — all while pushing the boundaries of last-mile
          delivery.
        </p>
      </div>

      {/* Image Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 relative max-w-screen-xl mx-auto mt-10">
        
        {[
          {
            src: "/deliver2.jpg",
            col: "lg:col-start-4 lg:row-start-1 lg:row-span-3",
            height: "h-56 md:h-64 lg:h-[22rem]",
          },
          {
            src: "/delivery1.jpg",
            col: "lg:col-start-4 lg:row-start-4 lg:row-span-3",
            height: "h-52 md:h-60 lg:h-[20rem]",
          },
          {
            src: "/delivery5.jpg",
            col: "lg:col-start-2 lg:row-start-3 lg:row-span-2",
            height: "h-48 md:h-56 lg:h-[19rem]",
          },
          {
            src: "/delivery9.jpg",
            col: "lg:col-start-2 lg:row-start-5 lg:row-span-3",
            height: "h-56 md:h-64 lg:h-[24rem]",
          },
          {
            src: "/delivery-boy.jpg",
            col: "lg:col-start-3 lg:row-start-2 lg:row-span-3",
            height: "h-64 md:h-72 lg:h-[26rem]",
          },
          {
            src: "/delivery6.jpg",
            col: "lg:col-start-1 lg:row-start-4 lg:row-span-4",
            height: "h-56 md:h-64 lg:h-[24rem]",
          },
        ].map(({ src, col, height }, i) => (
          <div
            key={i}
            className={`relative w-full md:w-[14rem] lg:w-[19.1rem] ${height} ${col} bg-white rounded-xl flex items-center justify-center`}
          >
            <Image
              src={src}
              alt="Delivery truck"
              fill
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
        ))}
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 relative max-w-screen-xl mx-auto mt-10">
        {[
          {
            src: "/deliver2.jpg",
            col: "lg:col-start-4 lg:row-start-1 lg:row-span-3",
            lgHeight: "lg:h-[22rem]",
          },
          {
            src: "/delivery1.jpg",
            col: "lg:col-start-4 lg:row-start-4 lg:row-span-3",
            lgHeight: "lg:h-[20rem]",
          },
          {
            src: "/delivery5.jpg",
            col: "lg:col-start-2 lg:row-start-3 lg:row-span-2",
            lgHeight: "lg:h-[19rem]",
          },
          {
            src: "/delivery9.jpg",
            col: "lg:col-start-2 lg:row-start-5 lg:row-span-3",
            lgHeight: "lg:h-[24rem]",
          },
          {
            src: "/delivery-boy.jpg",
            col: "lg:col-start-3 lg:row-start-2 lg:row-span-3",
            lgHeight: "lg:h-[26rem]",
          },
          {
            src: "/delivery6.jpg",
            col: "lg:col-start-1 lg:row-start-4 lg:row-span-4",
            lgHeight: "lg:h-[24rem]",
          },
        ].map(({ src, col, lgHeight }, i) => (
          <div
            key={i}
            className={`relative w-full md:w-[16rem] md:h-[20rem] ${lgHeight} ${col} lg:w-[19.1rem] bg-white rounded-xl flex items-center justify-center`}
          >
            <Image
              src={src}
              alt="Delivery truck"
              fill
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
        ))}
      </div>

      {/* Workplace Section */}
      <div className="mt-10 relative lg:absolute lg:right-20 lg:-bottom-[0rem] w-full lg:w-[36rem]">
        <h1 className="text-xl lg:text-2xl font-bold mb-2">Our Workplace</h1>
        <p className="text-sm lg:text-base">
          At Green Gear Logistics, our workplace culture is built on innovation,
          collaboration, and a shared commitment to sustainability. We empower
          our team to solve real-world challenges, support each other&apos;s
          growth, and drive meaningful change in the logistics space. Whether in
          the field or at our headquarters, every role contributes to delivering
          smarter, greener solutions.
        </p>
      </div>
    </section>
  );
}

export default About;
