import { nothing } from "@/app/data/nothing";
import { GdProjectPng, GdProjectSvg } from "@/app/models/GdProject";

type GdSvgsProps = {
  svgs: GdProjectSvg[];
  containerClass: string;
  logoClass: string;
}

export const GdSvgs = ({svgs, containerClass, logoClass}: GdSvgsProps) => {
  return (
    <div className={`h-full flex flex-wrap justify-center items-center gap-10 px-20 ${containerClass}`}>
      {svgs.map((Logo, i) => (
        <Logo
          key={i}
          className={`hover:scale-105 transition-transform bg-white hover:bg-black hover:text-white rounded-xl p-6 ${logoClass}`}
        />
      ))}
    </div>
  );
};