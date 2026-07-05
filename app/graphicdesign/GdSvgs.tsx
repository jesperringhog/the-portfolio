import { GdProjectSvg } from "@/app/models/GdProject";
import React from "react";
import { PolygonHeading } from "../components/PolygonHeading";

type GdSvgsProps = {
  svgs: GdProjectSvg[];
  children: React.ReactNode;
  containerClass: string;
  polygonClass: string;
  logoClass: string;
};

export const GdSvgs = ({
  svgs,
  children,
  containerClass,
  polygonClass,
  logoClass,
}: GdSvgsProps) => (
  <section className="lg:mx-10 flex flex-col items-center">
    <PolygonHeading children={children} polygonClass={polygonClass}/>
      <div
        className={`w-full p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10
          lg:rounded-b-xl xl:rounded-xl ${containerClass}`}
      >
        {svgs.map((Logo, i) => (
          <Logo
            key={i}
            className={`w-full h-auto p-6 group text-foreground rounded-xl hover:scale-105
            hover:drop-shadow-xl transition-all duration-300
            ${logoClass}`}
          />
        ))}
      </div>
  </section>
);
10