import Partners from "@/components/Partners";
import ChooseUs from "@/components/services/chooseUs";
import Hero from "@/components/services/hero";
import Highlights from "@/components/services/highlights";
import ShippingQuote from "@/components/shippingQuote";
import React from "react";

const Services = () => {
  return (
    <main>
      <Hero />
      <ChooseUs />
      <Highlights />
      <Partners />
      <ShippingQuote
        href="/get-a-quote"
        heading="Discover How Easy Shipping Can Be"
        description="We strive to be your first-choice for last-mile delivery"
      >
        Get a Quote
      </ShippingQuote>
    </main>
  );
};

export default Services;
