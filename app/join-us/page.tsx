import Hero from "@/components/join-us/Hero";
import RegistrationForm from "@/components/RegistrationForm";
import React from "react";

function Contact() {
  return (
    <div>
      <Hero />
      <section className="  pt-4 md:pt-10 lg:flex-row  flex flex-col-reverse  justify-between  gap-4 md:gap-36  lg:px-10   ">
        <div className="lg:w-[45%] border w-fit  bg-gradient-to-t from-green-50 to-slate-100   border-gray-100 shadow-2xl rounded-2xl p-3 sm:p-8 lg:p-10">
          {/* <SupportForm /> */}
          <RegistrationForm />
        </div>
        <div className=" flex-1/3 ">
          <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-3 text-green-700 ">
            GGLC DRIVER APPLICATION
          </h3>
          <h1 className=" text-lg md:text-4xl font-bold mb-3 md:mb-4 lg:mb-6 ">
            Apply Now
          </h1>
          <div className="flex flex-col gap-4 lg:gap-6 text-sm lg:text-xl">
            <div className="font-semibold">
              There are only three things you need to get started right away: a
              positive, customer-pleasing attitude, a reliable vehicle and a
              smartphone.
            </div>
            <div>
              <p>
                Ready to get started? <br /> Fill out a driver application now.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
