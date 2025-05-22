import Image from "next/image";

const FounderInfo = () => {
  return (
    <section className="flex px-12 md:px-10 mt-10 md:pt-16 lg:px-30 my-8 md:my-14  items-center justify-between gap-4">
      <div className="flex-3/4   flex flex-col gap-5">
        <h1 className="md:text-[3.5rem] text-2xl font-bold">
          Meet Our Founder
        </h1>
        <p className=" md:text-lg w-[90%] text-xs ">
          Kumar Kosuri founded Green Gear Logistics with a vision to
          revolutionize last-mile delivery through innovation and
          sustainability.
        </p>
      </div>

      {/* Image */}
      {/* w-[300px] h-[500px] */}
      <div className="  block relative  ">
        <Image
          className="rounded-md shadow-xl   "
          src="/founder.png"
          alt="Delivery truck"
          height={200}
          width={150}
        />
      </div>
    </section>
  );
};

export default FounderInfo;
