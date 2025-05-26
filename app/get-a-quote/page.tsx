import QuoteForm from "@/components/quote/QuoteForm";
import QuoteHero from "@/components/quote/QuoteHero";
import React from "react";

function GetAQuote() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-green-50 to-slate-100 -mx-10  items-center  justify-center pb-14">
      <section className="flex px-10 lg:w-[90%] lg:flex-row gap-6 lg:gap-10  flex-col items-start pt-10  md:pt-32 justify-around">
        <QuoteHero />
        <div className="lg:w-[40%] w-[100%]">
          <h1 className="text-lg md:text-3xl font-semibold">Get a Quote</h1>
          <QuoteForm />
        </div>
      </section>
    </div>
  );
}

export default GetAQuote;
