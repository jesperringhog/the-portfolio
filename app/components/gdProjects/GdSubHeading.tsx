import React from "react";

type HeadingProps = {
  children: React.ReactNode;
};

export const GdSubHeading = ({ children }: HeadingProps) => (
  <div className="w-full flex justify-center items-center">
    <h2
      className="w-full xl:w-auto flex flex-col md:flex-row justify-center items-center md:items-end md:gap-5 pb-3 
      bg-primary xl:[clip-path:polygon(0%_0%,100%_0%,90%_100%,10%_100%)] md:px-20"
    >
      <span className="font-brush text-2xl">{children}</span>
    </h2>
  </div>
);
