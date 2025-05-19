import DeliveryData from "@/components/DeliveryData";
import Difference from "@/components/home/difference";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import JoinUs from "@/components/home/join-us";
import ShippingQuote from "@/components/shippingQuote";
import React from "react";

const Page = () => {
  return (
    <main>
      <Hero />
      <DeliveryData />
      <Features />
      <Difference />
      <ShippingQuote
        href="/get-a-quote"
        className="bg-gradient-to-r   from-green-50 to-slate-100"
        heading="Discover How Easy Shipping Can Be"
        description="We strive to be your first-choice for last-mile delivery"
      >
        Get a Quote
      </ShippingQuote>
      <JoinUs />
    </main>
  );
};

export default Page;
