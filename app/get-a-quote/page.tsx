import QuoteForm from "@/components/quote/QuoteForm";
import React from "react";

function GetAQuote() {
  return (
    <div className="flex flex-col items-center  justify-center">
      <section className="flex  lg:w-[80%] lg:flex-row gap-6 lg:gap-10  flex-col items-start pt-10  md:pt-32 justify-around">
        <div className=" lg:w-[40%] w-[100%] lg:pt-2">
          <h1 className=" text-lg md:text-4xl font-bold mb-3 md:mb-4 lg:mb-6 ">
            Elevate Your Shipping with Green Gear Logistics:
            <span className="text-green-700"> Fast, Reliable, Innovative</span>
          </h1>
          <ul className="flex flex-col gap-4 lg:gap-6 text-sm lg:text-xl">
            <li>
              <strong>Quality Service: </strong>We deliver consistently on key
              metrics - in peak season too.
            </li>
            <li>
              <strong>Competitive Pricing: </strong>Cost-effective solutions
              without compromising performance.
            </li>
            <li>
              <strong>Expansive Network:</strong> Rapidly growing across major
              cities, for broad delivery coverage.
            </li>
            <li>
              <strong>Tech-Driven:</strong> Leveraging technology for efficiency
              and customer experience.
            </li>
          </ul>
        </div>
        <div className="lg:w-[40%] w-[100%]">
          <h1 className="text-lg md:text-3xl font-semibold">Get a Quote</h1>
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}

export default GetAQuote;
