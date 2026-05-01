import { useState } from "react";
import { gdHeadings } from "./headings";

export const GdHeadings = () => {
  return (
    <div className="flex gap-20">
      {gdHeadings.map((h, i) => (
        <div key={i} className="group relative size-40">
          <h.main
            className="w-full h-full absolute inset-0
      transition-opacity duration-150 ease-in-out
      opacity-100 group-hover:opacity-0"
          />
          <h.hover
            className="w-full h-full absolute inset-0
      transition-opacity duration-150 ease-in-out
      opacity-0 group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
};
