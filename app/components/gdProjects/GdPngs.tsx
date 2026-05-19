import { GdProjectPng } from "@/app/models/GdProject";
import Image from "next/image";
import { Heading } from "../Heading";

type GdPngsProps = {
  pngs: GdProjectPng[];
};

export const GdPngs = ({ pngs }: GdPngsProps) => (
  <div className="h-full">
  <Heading subtitle="CAN EXIST OR BE CREATED">NOTHING</Heading>
    <div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
    gap-10 px-10 py-10 xl:pt-10 xl:pb-0 duration-150"
    >
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
  </div>
);
