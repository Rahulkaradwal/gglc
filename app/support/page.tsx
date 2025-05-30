import SupportHero from "@/components/support/support-hero";
import SupportForm from "@/components/support/SupportForm";
import React from "react";

function Support() {
  return (
    <main className="flex flex-col -mx-10 bg-gradient-to-r   from-green-50 to-slate-100 ">
      <SupportHero />
      <div className="flex flex-col   items-center  justify-center pb-14">
        <section className="flex px-10 lg:w-[80%] lg:flex-row gap-6 lg:gap-10  flex-col items-start pt-10   justify-around">
          <div className=" lg:w-[40%] w-[100%] lg:pt-2">
            <h3 className="text-sm md:text-2xl font-bold mb-2 md:mb-3 text-green-700 ">
              Have Questions?
            </h3>
            <h1 className=" text-lg md:text-4xl font-bold mb-3 md:mb-4 lg:mb-6 ">
              Let&apos;s Connect
            </h1>
            <div className="flex flex-col gap-4 lg:gap-6 text-sm lg:text-xl">
              <div className="font-semibold">
                You can also contact us by{" "}
                <span className="text-green-700">Phone</span>.
              </div>
              <div>
                <h4>For Customer Service in Canada:</h4>
                <p> +1 (647) 517-2949</p>
              </div>
              <div className="font-semibold">
                You can also contact us by{" "}
                <span className="text-green-700">Email</span>.
              </div>
              <div className="flex flex-col  gap-2">
                <p className="hover:text-green-600">
                  greengearlogistics@gmail.com
                </p>
                <p className="hover:text-green-600"> dispatch.gglc@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] w-[100%]">
            <SupportForm />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Support;
