"use client";

import { useState } from "react";
import { characters, nothings } from "../data/gdProjects";
import { GdHeadings } from "../components/gdProjects/GdHeadings";
import { Logotypes, GdProjectsHtml } from "../components/gdProjects/GdProjects";

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
