import React from "react";

function ChooseUs() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-start gap-4 p-2 sm:p-8 2xl:gap-x-24 lg:mt-20 lg:px-10">
      {/* Stats Boxes */}
      <div className="flex flex-col gap-12   2xl:w-[50rem] w-full lg:w-auto">
        <div className="bg-gradient-to-l shadow-xl   from-green-50 to-slate-100 border-0 border-gray-100 rounded-xl font-semibold p-3 sm:p-8 lg:p-10 text-center">
          <h1 className="text-2xl sm:text-5xl lg:text-[4rem] 2xl:text-[5rem]">
            98.6%
          </h1>
          <p className="text-sm sm:text-xl">First-Attempt Delivery Rate</p>
        </div>
        <div className="bg-gradient-to-r shadow-xl  from-green-50 to-slate-100 rounded-xl font-semibold p-3 sm:p-8 lg:p-10 text-center ">
          <h1 className="text-2xl sm:text-5xl lg:text-[4rem] 2xl:text-[5rem]">
            99.7%
          </h1>
          <p className="text-sm sm:text-xl">Closing Delivery Rate</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-[40rem] 2xl:w-[65rem] flex flex-col gap-2 sm:gap-4 lg:gap-6">
        <h3 className="text-green-700 2xl:text-4xl font-semibold text-md sm:text-3xl">
          Why Choose Us?
        </h3>
        <h1 className="font-bold text-xl  sm:text-4xl lg:text-5xl leading-tight">
          Delivering On Our Promises
        </h1>

        <div>
          <h2 className="font-semibold text-green-700 text-md sm:text-2xl mb-2">
            Built Around Your Needs
          </h2>
          <p className="text-xs sm:text-lg lg:text-xl">
            We tailor our delivery solutions to fit your business goals—offering
            flexibility, speed, and reliability when you need it most.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-green-700 text-md sm:text-2xl mb-2">
            Your Success Is Our Priority
          </h2>
          <p className="text-xs sm:text-lg lg:text-xl">
            From real-time tracking to responsive support, we&apos;re committed
            to delivering a smooth, worry-free experience every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
