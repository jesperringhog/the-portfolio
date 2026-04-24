"use client";

import { logotypes } from "../data/logotypes";
import { GdProject } from "../models/Logotype";

const gdProjectsHtml = (gdFiles: GdProject[]) => (
  <div className="flex flex-wrap flex-1 justify-center mx-20 my-10 rounded">
    {gdFiles.map((f) => (
      <img key={f.svg} alt={f.svg} src={f.svg} className="size-70"/>
    ))}
  </div>
);

export const GdProjects = () => <>{gdProjectsHtml(logotypes)}</>;
