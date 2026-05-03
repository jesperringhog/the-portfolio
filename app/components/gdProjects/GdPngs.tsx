import { GdProjectPng } from "@/app/models/GdProject";

type GdPngsProps = {
  pngs: GdProjectPng[];
}

export const GdPngs = ({pngs}: GdPngsProps) => (
  <div className="h-full flex flex-wrap justify-center items-center gap-10 py-20">
    {pngs.map((p, i) => (
      <img
        key={i}
        src={p.src}
        className="size-40 hover:scale-105 hover:drop-shadow-xl transition-transform rounded-xl"
      />
    ))}
  </div>
);
