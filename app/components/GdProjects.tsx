"use client";

import { logotypes } from "../data/logotypes";
import { GdProject } from "../models/GdProject";

const GdProjectsHtml = (projects: GdProject[]) => (
  <div className="flex flex-wrap flex-1 justify-center gap-10">
    {projects.map((p, i) => (
      <img key={i} src={p.svg} className="size-50 bg-white rounded-xl"/>
    ))}
  </div>
);

export const GdProjects = () => 
    GdProjectsHtml(logotypes);
