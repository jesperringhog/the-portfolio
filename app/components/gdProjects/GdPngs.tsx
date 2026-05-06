import { GdProjectPng } from "@/app/models/GdProject";
import Image from "next/image";

type GdPngsProps = {
  pngs: GdProjectPng[];
}

export const GdPngs = ({pngs}: GdPngsProps) => (
  <div className="h-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
    place-items-center gap-10 
    p-10 md:px-20 md:py-10 xl:p-20 duration-150">
    {pngs.map((p, i) => (
      <Image
        key={i}
        src={p.src}
        alt={p.alt}
        width={500}
        height={500}
        className="w-full h-auto hover:scale-105 hover:drop-shadow-xl transition-all duration-300 rounded-xl"
      />
    ))}
  </div>
);
