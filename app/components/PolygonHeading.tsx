import React from "react";

type PolygonHeadingProps = {
  children?: React.ReactNode;
  polygonClass?: string;
};

export const PolygonHeading = ({
  children,
  polygonClass,
}: PolygonHeadingProps) => (
  <h2
    className={`w-full xl:w-60 mb-[1] p-2 pt-10 md:pt-4 xl:pt-2 xl:pb-2 text-2xl text-center font-brush 
            xl:[clip-path:polygon(20%_0%,80%_0%,100%_100%,0%_100%)]
            ${polygonClass}`}
  >
    {children}
  </h2>
);
