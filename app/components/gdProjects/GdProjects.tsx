"use client";

import { logotypes } from "./logos";
import { GdProject } from "@/app/models/GdProject";

type GdProjectsProps = {
  projects: GdProject[];
};

export const Logotypes = () => (
  <div className="flex flex-wrap flex-1 justify-center gap-10 mx-20 mb-20">
    {logotypes.map((Logo, i) => (
      <Logo
        key={i}
        className="size-50 hover:scale-105 transition-transform bg-white hover:bg-black hover:text-white rounded-xl p-6"
      />
    ))}
  </div>
);

export const GdProjectsHtml = ({ projects }: GdProjectsProps) => 
    <div className="flex flex-wrap flex-1 justify-center gap-10 mb-20">
      {projects.map((p, i) => (
        <img
          key={i}
          src={p.src}
          className="size-40 hover:scale-105 transition-transform bg-white hover:bg-black rounded-xl"
        />
      ))}
    </div>
