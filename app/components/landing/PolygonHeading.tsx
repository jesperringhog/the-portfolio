import React from "react";

type PolygonHeadingProps = {
  children?: React.ReactNode;
  extClass: string;
};

export const PolygonHeading = ({ children, extClass }: PolygonHeadingProps) => (
  <h2
    className={`w-full xl:w-60 p-3 pt-10 md:pt-3 text-2xl text-center font-brush 
            xl:[clip-path:polygon(20%_0%,80%_0%,100%_100%,0%_100%)]
            ${extClass}`}
  >
    {children}
  </h2>
);
