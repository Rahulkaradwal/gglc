import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import React from "react";

interface Integration {
  id: string;
  icon: React.ReactNode;
}

interface SocialLinksProps {
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  integrations?: Integration[][];
}

const SocialLinks = ({
  integrations = [
    [
      {
        id: "facebook",
        icon: (
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="size-8 sm:size-9 md:size-10 text-green-700 hover:text-green-600" />
          </Link>
        ),
      },
      {
        id: "instagram",
        icon: (
          <Link
            href="https://www.instagram.com/green_gear_canada"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="size-6 sm:size-9 md:size-10 text-green-700 hover:text-green-600" />
          </Link>
        ),
      },
      {
        id: "twitter",
        icon: (
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="size-6 sm:size-9 md:size-10 text-green-700 hover:text-green-600" />
          </Link>
        ),
      },
      {
        id: "linkedin",
        icon: (
          <Link
            href="https://www.linkedin.com/company/green-gear-logistics-gglc-inc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="size-6 sm:size-9 md:size-10 text-green-700 hover:text-green-600" />
          </Link>
        ),
      },
    ],
  ],
}: SocialLinksProps) => {
  return (
    <section className="flex  flex-col-reverse px-12 md:flex-row   items-start justify-between gap-8 lg:gap-20 2xl:gap-48 2xl:px-40 2xl:pl-[15rem]">
      <div className="  flex flex-col gap-5">
        <h1 className="text-2xl md:text-3xl font-semibold">
          Find us on Social Media
        </h1>

        <div className="">
          {integrations.map((line, i) => (
            <div key={i} className="flex gap-x-6 gap-y-4 ">
              {line.map((integration) => (
                <div
                  key={integration.id}
                  className="w-12 md:w-14 md:h-14 h-12 flex items-center justify-center rounded-xl border border-background bg-background shadow-xl"
                >
                  <div className="w-full h-full flex items-center justify-center bg-muted/20 rounded-xl hover:border-2 hover:border-green-700 duration-300">
                    {integration.icon}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Join Our Team Section */}
      <div className="  block relative  ">
        <div className=" mx-auto max-w-3xl ">
          <h2 className="text-2xl font-bold mb-4">
            Join Our <span className="text-green-700">Team</span>
          </h2>
          <p className=" text-sm md:text-base text-muted-foreground mb-6">
            We&apos;re always looking for talented, passionate people to help
            shape the future of our products and culture. Come build with us!
          </p>

          <div className="flex -mt-4 md:-mt-2 ">
            <Link
              href="/join-us"
              className="group relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-green-700 px-5 py-2.5 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:ring-2 hover:ring-green-700 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join Us
                <ArrowRight className="size-4 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]" />
              </span>
              <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[150px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
