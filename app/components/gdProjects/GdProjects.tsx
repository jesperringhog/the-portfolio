import { nothing } from "@/app/data/nothing";
import { GdProjectPng, GdProjectSvg } from "@/app/models/GdProject";

export const GdSvgsHtml = (svgs: GdProjectSvg[]) => {
  return (
    <div className="h-full flex flex-wrap justify-center items-center gap-10 p-10">
      {svgs.map((Logo, i) => (
        <Logo
          key={i}
          className="size-50 hover:scale-105 transition-transform bg-white hover:bg-black hover:text-white rounded-xl p-6"
        />
      ))}
    </div>
  );
};

export const GdPngsHtml = () => (
  <div className="h-full flex flex-wrap justify-center items-center gap-10">
    {nothing.map((p, i) => (
      <img
        key={i}
        src={p.src}
        className="size-40 hover:scale-105 transition-transform bg-white hover:bg-black rounded-xl"
      />
    ))}
  </div>
);
