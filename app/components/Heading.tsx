import React from "react";

type HeadingProps = {
  children: React.ReactNode;
  subtitle: React.ReactNode;
};

export const Heading = ({ children, subtitle }: HeadingProps) => (
  <div className="w-full flex justify-center items-center text-foreground">
    <h2
      className="w-full xl:w-auto flex flex-col md:flex-row justify-center items-center md:gap-5 pb-3 font-sanspace tracking-wider md:tracking-widest 
      text-xl md:text-2xl bg-primary xl:[clip-path:polygon(0%_0%,100%_0%,95%_100%,5%_100%)] md:px-20"
    >
      {children}
      <span className="font-sansafe">{subtitle}</span>
    </h2>
  </div>
);
