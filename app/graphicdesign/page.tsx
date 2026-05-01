"use client";

import { useState } from "react";
import { GdProjectsHtml, Logotypes } from "../components/portfolio/GdProjects";
import SvgHeading01 from "../components/portfolio/headings/Heading01";
import SvgHeading02 from "../components/portfolio/headings/Heading02";
import { characters, nothings } from "../data/gdProjects";
import { gdHeadings } from "../components/portfolio/headings";
import { GdHeadings } from "../components/portfolio/GdHeadings";

export default function GraphicDesign() {
  return (
    <section className="h-full flex flex-col items-center gap-10">
      <GdHeadings />
      <Logotypes />
      <GdProjectsHtml projects={characters} />
      <GdProjectsHtml projects={nothings} />
    </section>
  );
}
