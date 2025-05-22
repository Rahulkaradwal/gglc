// Service page hero section
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Car, FileText, Handshake, IdCard, Speech, User } from "lucide-react";

const items = [
  {
    title: "Valid Canadian Driver's License",
    icon: <IdCard className="w-[40px] h-[40px] md:w-[62px] md:h-[62px]" />,
  },
  {
    title: "Access to vehicle and smartphone",
    icon: <Car className="w-[40px] h-[40px] md:w-[62px] md:h-[62px]" />,
  },

  {
    title: "Eligible to work in the Canada",
    icon: <User className="w-[40px] h-[40px] md:w-[62px] md:h-[62px]" />,
  },
  {
    title: "Criminal Record",
    icon: <FileText className="w-[40px] h-[40px] md:w-[62px] md:h-[62px]" />,
  },
  {
    title: "Responsible and Friendly",
    icon: <Handshake className="w-[40px] h-[40px] md:w-[62px] md:h-[62px]" />,
  },
  {
    title: "Good English Proficiency",
    icon: <Speech className="w-[40px] h-[40px] md:w-[62px] md:h-[62px]" />,
  },
];

function Hero() {
  return (
    <main>
      <section className="flex mt-6 sm:mt-10  lg:pt-10  flex-row items-stretch justify-between gap-3 md:gap-4  sm:px-6 md:px-14 mx-0.5   mb-10">
        {/* Text content */}
        <div className=" flex-3/4  md:w-[50%]  ">
          {/* <h3 className="text-sm md:text-2xl font-bold text-green-700 mb-2">
          Fast, Reliable, Flexible
        </h3> */}
          <h1 className="text-lg mt-2 md:mt-4 md:text-2xl lg:text-4xl xl:text-6xl font-semibold mb-4">
            Drive towards your goals
          </h1>
          <p className="text-xs md:text-lg mt-8 ">
            Our drivers enjoy competitive rates and get a base amount per
            delivery — so the more you deliver, the more you make. Ready to get
            started? Fill out a driver application now.
          </p>
          <div className="mt-8">
            <Link
              href="#"
              className="md:border-2  border px-2 py-1 md:px-3 md:py-1.5 text-xs md:text-lg  md:font-semibold duration-300 hover:bg-green-700 hover:text-white cursor-pointer rounded-md border-green-700 text-green-700 bg-white"
            >
              Apply Today
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className=" flex-1/2 md:w-[35%] h-[230px]   block relative md:h-[370px]">
          <Image
            className="rounded-md md:rounded-2xl shadow-xl   object-cover"
            src="/join-us.jpeg"
            priority
            alt="Delivery truck"
            fill
          />
        </div>
      </section>
      <section className="flex mt-6 sm:mt-10 flex-col   lg:pt-10  md:flex-row items-stretch justify-between gap-3 md:gap-4  sm:px-6 md:px-14 mx-0.5   mb-10">
        {/* Text content */}
        <div className="   md:w-[40%]  ">
          <h3 className="text-sm md:text-2xl font-bold text-green-700 mb-2">
            WHY GGLC DRIVER?
          </h3>
          <h1 className="text-lg mt-2 md:mt-4 md:text-2xl lg:text-2xl font-semibold mb-4">
            Be your own boss and work when you want to
          </h1>
          <p className="text-xs md:text-lg mt-8 ">
            Would you like to be your own boss? Work a flexible schedule?
            Deliver for a company that really cares about every employee?
          </p>
          <p className="text-xs md:text-lg mt-8 ">
            At UniUni, we&apos;re excited to put you in the driver&apos;s seat,
            where you enjoy blue skies and an open road. Sounds good, right?
          </p>
        </div>

        {/* Image */}
        <div className="  w-fit md:w-[35rem] lg:w-[40rem] bg-gradient-to-l from-green-50 to-slate-100  border border-gray-100 shadow-2xl rounded-2xl md:mt-0 mt-6 -mx-2 relative h-fit md:px-4 pt-6 pb-16">
          <h1 className="text-lg pl-6 px-4  mt-2 md:mt-4 md:text-2xl lg:text-4xl font-semibold mb-4">
            Requirements
          </h1>
          <div className="grid  grid-cols-3 gap-2">
            {items.map((item, index) => (
              <div
                key={index}
                className="  flex   text-center items-center flex-col w-fit md:w-[10rem]   px-5  py-1  "
              >
                <span
                  className={`   text-green-800 
                p-2 sm:p-2.5 md:p-3  font-light
              `}
                >
                  {item.icon}
                </span>
                <p className=" font-semibold text-[0.6rem] md:text-sm">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
