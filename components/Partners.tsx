"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

interface Logo {
  id: string;
  description: string;
  image: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
}

const Partners = ({
  logos = [
    {
      id: "logo-1",
      description: "Amazon Flex",
      image: "/partner-logo/amazonflex.webp",
    },
    {
      id: "logo-2",
      description: "Emile Express",
      image: "/partner-logo/emile.png",
    },
    {
      id: "logo-3",
      description: "GoBolt",
      image: "/partner-logo/gobolt.jpg",
    },
    {
      id: "logo-4",
      description: "Uber Delivery",
      image: "/partner-logo/uber.jpg",
    },
    {
      id: "logo-5",
      description: "Amazon Flex",
      image: "/partner-logo/amazonflex.webp",
    },
    {
      id: "logo-6",
      description: "Emile Express",
      image: "/partner-logo/emile.png",
    },
    {
      id: "logo-7",
      description: "GoBolt",
      image: "/partner-logo/gobolt.jpg",
    },
  ],
}: Logos3Props) => {
  return (
    <section className="overflow-hidden bg-green-50 py-6">
      <div className="flex flex-col md:flex-row items-start lg:gap-10 px-4 md:px-24 justify-between">
        <div className="flex-2/3">
          <h3 className="text-md lg:text-[3rem] mb-2 font-semibold">
            <span className="text-green-700">Our</span> Partners
          </h3>
        </div>
        <div className="lg:w-2/3">
          <p className="text-sm lg:text-lg">
            We&apos;ve all heard the expression: “There&apos;s strength in
            numbers.” Well, we are proud to say, we&apos;ve partnered with some
            of the biggest names in the industry to offer you the best in
            last-mile shipping. Here&apos;s a nod to our logistics business
            teams—the list keeps growing!
          </p>
        </div>
      </div>

      <div className="pt-8 md:pt-14 lg:pt-16">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div className="relative w-[100px] bg-green-50 h-[40px]">
                      <Image
                        src={logo.image}
                        alt={logo.description}
                        fill
                        className="object-contain mix-blend-multiply "
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Partners;
