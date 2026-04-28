"use client";

import { ComponentType, JSX, SVGProps, useState } from "react";
import { logotypes } from "./logos";
import { GdProject } from "@/app/models/GdProject";
import { characters } from "@/app/data/character";
import SvgHeading01 from "./headings/Heading01";
import SvgHeading02 from "./headings/Heading02";

type GdProjectsProps = {
  projects: GdProject[];
};

const Logotypes = () => {
  const [hover, setHover] = useState<Boolean>(false);

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex flex-col items-center"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {hover ? <SvgHeading02 className="size-30"/> : <SvgHeading01 className="size-30"/>}
      </div>
      <div className="flex flex-wrap flex-1 justify-center gap-10 mx-20 mb-20">
        {logotypes.map((Logo, i) => (
          <Logo
            key={i}
            className="size-50 hover:scale-105 transition-transform bg-white hover:bg-black hover:text-white rounded-xl p-6"
          />
        ))}
      </div>
    </div>
  );
};

const GdProjectsHtml = ({ projects }: GdProjectsProps) => (
  <div className="flex flex-wrap flex-1 justify-center gap-10 mx-10 mt-40 mb-20">
    {projects.map((p, i) => (
      <img
        key={i}
        src={p.src}
        className="size-50 hover:scale-105 transition-transform bg-white hover:bg-black hover:text-white rounded-xl p-6"
      />
    ))}
  </div>
);

export const GdProjects = () => (
  <div className="flex flex-col gap-40">
    <Logotypes />
    <GdProjectsHtml projects={characters} />
  </div>
);
