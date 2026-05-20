import { GdProjectPng, GdProjectSvg } from "@/app/models/GdProject";
import { GdSubHeading } from "./GdSubHeading";
import React from "react";

type GdSvgsProps = {
  svgs: GdProjectSvg[];
  children: React.ReactNode;
  subtitle: React.ReactNode;
  containerClass?: string;
  logoClass?: string;
};

export const GdSvgs = ({
  svgs,
  children,
  subtitle,
  containerClass,
  logoClass,
}: GdSvgsProps) => (
  <div>
    <GdSubHeading subtitle={subtitle}>{children}</GdSubHeading>
    <div className="w-full flex flex-col justify-center items-center">
      <div
        className={`w-full xl:w-[90%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4
      gap-10 mb-10 xl:mb-0 2xl:mt-10 p-10 xl:pt-5 pb-0 ${containerClass}`}
      >
        {svgs.map((Logo, i) => (
          <Logo
            key={i}
            className={`w-full h-auto rounded-xl p-6 text-foreground hover:scale-105 
            hover:bg-foreground hover:text-project hover:drop-shadow-xl 
            transition-all duration-300
            ${logoClass}`}
          />
        ))}
      </div>
    </div>
  </div>
);
