import React from "react";

type CvSectionProps = {
  sectionClass?: string;
  headingClass?: string;
  heading: React.ReactNode;
  children: React.ReactNode;
};

export const CvSection = ({sectionClass, headingClass, heading, children }: CvSectionProps) => (
  <section className={`p-10 rounded-xl ${sectionClass}`}>
    <h3 className={`text-4xl font-brush ${headingClass}`}>{heading}</h3>
    <br />
    <div>{children}</div>
  </section>
);
