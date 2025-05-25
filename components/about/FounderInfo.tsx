import Image from "next/image";

const FounderInfo = () => {
  return (
    <section className="flex px-12 md:px-10 mt-10 md:pt-16 lg:px-30 2xl:px-40 2xl:pl-[17rem] my-8 md:my-14  items-center justify-between gap-4">
      <div className="flex-3/4   flex flex-col gap-5">
        <h1 className="md:text-[3.5rem] text-2xl font-bold">
          Meet Our <span className="text-green-700">Founder</span>
        </h1>
        <p className=" md:text-lg w-[90%] text-xs ">
          Kumar Kosuri founded Green Gear Logistics to transform last-mile
          delivery through innovation, technology, and sustainability. With an
          engineering background and a passion for problem-solving, he built a
          smarter, more reliable network for handling small, large, bulky
          deliveries. Under his leadership, Green Gear has become a trusted
          logistics partner, known for real-time tracking, a flexible fleet, and
          eco-conscious operations. Kumar&apos;s ongoing focus is on enhancing
          customer experience, improving efficiency, and driving sustainable
          growth in the logistics industry.
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
