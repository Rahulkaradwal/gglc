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
  heading = "Find us on social media",
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
            <Facebook className="size-10 text-green-700 hover:text-green-600" />
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
            <Instagram className="size-10 text-green-700 hover:text-green-600" />
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
            <Twitter className="size-10 text-green-700 hover:text-green-600" />
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
            <Linkedin className="size-10 text-green-700 hover:text-green-600" />
          </Link>
        ),
      },
    ],
  ],
}: SocialLinksProps) => {
  return (
    <section className="relative px-4  flex items-center  flex-col lg:px-14  pb-10">
      <div className="container relative flex flex-col lg:w-[65%]  items-start md:flex-row md:items-center ">
        <div className="z-20 -mx-4 w-full shrink-0 bg-background px-4 md:w-1/2 md:bg-transparent">
          <div className="flex flex-col items-start text-left">
            <div className="max-w-sm">
              <h1 className="my-6 text-xl font-bold text-pretty lg:text-2xl">
                {heading}
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-16">
            {integrations.map((line, i) => (
              <div key={i} className="flex gap-x-6 odd:-translate-x-6">
                {line.map((integration) => (
                  <div
                    key={integration.id}
                    className="size-22 flex items-center justify-center rounded-xl border border-background bg-background shadow-xl"
                  >
                    <div className="h-full  rounded-xl duration-300 hover:border-2 hover:border-green-700  w-full cursor-pointer flex items-center justify-center bg-muted/20 p-4">
                      {integration.icon}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative pt-24">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-muted-foreground mb-6">
            We&apos;re always looking for talented, passionate people to help
            shape the future of our products and culture. Come build with us!
          </p>

          <div className="flex justify-center">
            <Link
              href="/join-us"
              className="group relative flex transform items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-md border border-white bg-green-700 px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:ring-2 hover:ring-green-700 hover:ring-offset-2 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                Join Us
                <ArrowRight className="size-4 shrink-0 text-white transition-transform duration-300 ease-in-out group-hover:translate-x-[2px]" />
              </span>
              <div className="ease-[cubic-bezier(0.19,1,0.22,1)] absolute -left-[75px] -top-[50px] -z-10 h-[155px] w-8 rotate-[35deg] bg-white opacity-20 transition-all duration-500 group-hover:left-[120%]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
