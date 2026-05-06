import { GdProjectPng, GdProjectSvg } from "@/app/models/GdProject";

type GdSvgsProps = {
  svgs: GdProjectSvg[];
  containerClass?: string;
  logoClass?: string;
}

export const GdSvgs = ({svgs, containerClass, logoClass}: GdSvgsProps) => {
  return (
    <div className={`h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
    place-items-center gap-10 
    p-10 md:px-20 md:py-10 ${containerClass}`}>
      {svgs.map((Logo, i) => (
        <Logo
          key={i}
          className={`w-full h-auto rounded-xl p-6 hover:scale-105 
            bg-project hover:bg-foreground hover:text-project hover:drop-shadow-xl 
            transition-all duration-300
            ${logoClass}`}
        />
      ))}
    </div>
  );
};