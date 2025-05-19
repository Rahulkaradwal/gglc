import ShippingQuote from "@/components/shippingQuote";
import SupportForm from "@/components/support/SupportForm";
import React from "react";

function Support() {
  return (
    <main>
      <SupportForm />
      <ShippingQuote
        href="/get-a-quote"
        heading="Discover How Easy Shipping Can Be"
        description="We strive to be your first-choice for last-mile delivery"
      >
        Get a Quote
      </ShippingQuote>
    </main>
  );
}

export default Support;
