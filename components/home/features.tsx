import Image from "next/image";
import React from "react";
import { CircleDollarSign, ClockPlus, Truck } from "lucide-react";
import { Separator } from "../ui/separator";

// Reusable feature block
const FeatureItem = ({
  title,
  icon,
  items,
}: {
  title: string;
  icon?: React.ReactNode;
  items: string[];
}) => (
  <div className="flex gap-6  items-center">
    <div className="bg-green-100 p-4 rounded-full">{icon}</div>
    <div>
      <h2 className="md:text-xl  font-semibold mb-2">{title}</h2>
      <ul className="list-disc pl-5 space-y-2 text-xs md:text-lg">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default function Features() {
  return (
    <section className="flex  flex-col items-center justify-between w-full   px-2 md:px-24 xl:px-56 py-10 md:py-20">
      <h1 className="text-2xl md:text-5xl font-bold text-center mb-8 md:mb-16  ">
        We Keep Your Business Moving Forward!
      </h1>

      <div className="flex flex-col  justify-between  lg:flex-row gap-6 md:gap-24 lg:gap-36 ">
        <div className=" hidden lg:block relative   w-[350px] h-[600px]">
          <Image
            className="rounded-xl shadow-xl   object-cover"
            src="/delivery7.jpg"
            alt="Delivery truck"
            fill
          />
        </div>

        <div className="flex flex-col gap-10 ">
          <FeatureItem
            title="Fast & Reliable"
            items={[
              "Outstanding SLA performance",
              "Next Day delivery",
              "Accountable & process-driven",
            ]}
            icon={<ClockPlus size={48} className="text-green-900" />}
          />
          <Separator />
          <FeatureItem
            title="Quality Full-Service"
            items={[
              "Easy integrations and platform access",
              "Dedicated account optimization",
              "Multi-channel customer support",
            ]}
            icon={<Truck size={48} className="text-green-900" />}
          />
          <Separator />
          <FeatureItem
            title="Super-Competitive Rates"
            items={[
              "Affordable, stable and simple pricing",
              "No added fuel or other surcharges",
              "Flat pricing includes parcel insurance",
            ]}
            icon={<CircleDollarSign size={48} className="text-green-900" />}
          />
        </div>
      </div>
    </section>
  );
}
