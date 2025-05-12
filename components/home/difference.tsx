import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function Difference() {
  return (
    <section className="flex md:px-10 lg:px-36 my-8 md:my-14  items-center justify-between gap-4">
      <div className="flex-3/4 flex flex-col gap-5">
        <h1 className="md:text-[3.5rem] text-2xl font-bold">The Difference</h1>
        <p className="md:font-semibold md:text-lg text-xs ">
          Ensure peak performance during peak season! Our proprietary tech and
          unique crowd sourcing delivery solution enables us to flex our
          services on a daily basis. So when it gets busier and busier,
          we&apos;re able to handle the increase in volume.
        </p>
        <div>
          <Button className="md:border-2 border hover:bg-green-700 hover:text-white cursor-pointer md:h-10 border-green-700 text-green-700 bg-white">
            Ship With US
          </Button>
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
