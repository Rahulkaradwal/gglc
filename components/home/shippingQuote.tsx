import React from "react";
import { Button } from "../ui/button";

function ShippingQuote() {
  return (
    <div className="flex mt-4 md:mt-20 bg-green-100 rounded-2xl md:rounded-4xl md:mx-32 p-10  items-center flex-col gap-3 md:gap-6">
      <div className="md:w-3/4 ">
        <h1 className="text-[1rem] text-center md:text-[3.5rem] font-bold">
          Discover How Easy Shipping Can Be
        </h1>
      </div>
      <p className="text-[.75rem] text-center md:text-xl">
        We strive to be your first-choice for last-mile delivery
      </p>
      <div>
        <Button className="md:text-lg font-semibold md:h-12 hover:bg-green-700 hover:text-white cursor-pointer  border-green-700 text-green-700 bg-white">
          Ship With Us
        </Button>
      </div>
    </div>
  );
}

export default ShippingQuote;
