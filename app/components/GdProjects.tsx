"use client";

import { logotypes } from "../data/logotypes";

export const GdProjects = () => (
  <div className="flex flex-wrap flex-1 justify-center gap-10">
    {logotypes.map((Logo, i) => (
      <Logo key={i} className="size-50 bg-white rounded-xl hover:text-green-500"/>
    ))}
  </div>
);
