import React from "react";
import Image from "next/image";
import Link from "next/link";

function Difference() {
  return (
    <section className="flex md:px-10 lg:px-36 my-8 md:my-14  items-center justify-between gap-4">
      <div className="flex-3/4 flex flex-col gap-5">
        <h1 className="md:text-[3.5rem] text-2xl font-bold">
          Our Driving <span className="text-green-700">Principle</span>
        </h1>
        <p className=" md:text-lg text-xs ">
          Stay ahead during peak seasons with our innovative technology and
          dynamic crowdsourced delivery network. Our flexible service model
          adapts daily, allowing us to effortlessly scale and manage high volume
          deliveries as demand rises.
        </p>
        <div>
          <Link
            href="/get-a-quote"
            className="md:border-2 border px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-lg  md:font-semibold duration-300  bg-green-700 text-white cursor-pointer rounded-md border-green-700 hover:text-green-700 hover:bg-white"
          >
            Get a Quote
          </Link>
        </div>
      </div>
      <div className=" flex-1/2 block relative h-[230px]  w-[300px] md:h-[300px]">
        <Image
          className="rounded-2xl shadow-xl   object-cover"
          src="/delivery-boy.jpg"
          alt="Delivery truck"
          fill
        />
      </div>
    </section>
  );
}

export default Difference;
