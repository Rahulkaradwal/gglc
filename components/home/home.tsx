import React from "react";
import DeliveryData from "../DeliveryData";
import Features from "./features";
import Difference from "./difference";
import Hero from "./hero";
import ShippingQuote from "./shippingQuote";
import JoinUs from "./join-us";

const Home = () => {
  return (
    <main>
      <Hero />
      <DeliveryData />
      <Features />
      <Difference />
      <ShippingQuote />
      <JoinUs />
    </main>
  );
};

export default Home;
