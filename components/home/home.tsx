import React from "react";
import DeliveryData from "../DeliveryData";
import Features from "./features";
import Difference from "./difference";
import Hero from "./hero";
import ShippingQuote from "../shippingQuote";
import JoinUs from "./join-us";

const Home = () => {
  return (
    <main>
      <Hero />
      <DeliveryData />
      <Features />
      <Difference />
      <ShippingQuote
        href="/get-a-quote"
        heading="Discover How Easy Shipping Can Be"
        description="We strive to be your first-choice for last-mile delivery"
      >
        Get a Quote
      </ShippingQuote>
      <JoinUs />
    </main>
  );
};

export default Home;
