import React from "react";
import { PolygonHeading } from "../components/PolygonHeading";

type CvSectionProps = {
  sectionClass?: string;
  polygonClass?: string;
  articleClass?: string;
  heading: React.ReactNode;
  children: React.ReactNode;
};

export const CvSection = ({
  sectionClass,
  polygonClass,
  articleClass,
  heading,
  children,
}: CvSectionProps) => (
  <section
    className={`xl:flex flex-col items-center ${sectionClass}`}
  >
    <PolygonHeading polygonClass={`lg:rounded-t-xl ${polygonClass}`}>{heading}</PolygonHeading>
    <article
      className={`p-10 text-xs md:text-sm lg:text-base lg:rounded-b-xl xl:rounded-xl ${articleClass}`}
    >
      {children}
    </article>
  </section>
);
