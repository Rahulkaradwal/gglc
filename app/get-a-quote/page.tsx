import QuoteForm from "@/components/quote/QuoteForm";
import React from "react";

function GetAQuote() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-green-50 to-slate-100 -mx-10  items-center  justify-center pb-14">
      <section className="flex px-10 lg:w-[90%] lg:flex-row gap-6 lg:gap-10  flex-col items-start pt-10  md:pt-32 justify-around">
        <div className=" lg:w-[40%] w-[100%] lg:pt-10">
          {/* <h1 className=" text-lg md:text-4xl font-bold mb-3 md:mb-4 lg:mb-6 ">
            Upgrade Your Delivery Experience with Green Gear: <br /> <br />
            <span className="text-green-700   text-3xl">
              Speed, Trust, and Innovation
            </span>
          </h1> */}

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
              <strong> Smart Pricing: </strong>Get efficient, high-quality
              service at a price that makes sense for your business.
            </li>
            <li>
              <strong>Widespread Reach:</strong> Our fast-growing network covers
              major urban centers, ensuring wide delivery coverage.
            </li>
            <li>
              <strong>Powered by Technology:</strong> We harness cutting-edge
              tools to streamline operations and enhance your experience.
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
