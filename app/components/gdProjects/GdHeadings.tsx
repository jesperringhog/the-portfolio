"use client";

import { gdHeadings } from "./headings";
import Link from "next/link";

export const GdHeadings = () => (
  <div
    className="flex flex-col lg:flex-row justify-center items-center gap-20
    "
  >
    {gdHeadings.map((h, i) => (
      <Link key={i} href={h.href}>
        <div className="group relative inline-block
        w-70 md:w-auto lg:w-auto xl:w-70 md:h-10 xl:h-auto"
        >
          <h.main className="block w-auto h-full 
          transition-opacity duration-150 group-hover:opacity-0" />
          <h.hover
            className="w-auto h-full 
            transition-opacity duration-150 ease-in-out
      opacity-0 group-hover:opacity-100 absolute inset-0"
          />
        </div>
      </Link>
    ))}
  </div>
);
