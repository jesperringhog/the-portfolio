"use client";

import { gdHeadings } from "./headings";
import Link from "next/link";

export const GdHeadings = () => {
  return (
    <div className="flex gap-20">
      {gdHeadings.map((h, i) => (
        <Link key={i} href={h.href}>
        <div className="group relative size-70">
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
        </Link>
      ))}
    </div>
  );
};
