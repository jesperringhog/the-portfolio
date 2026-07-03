import { GdProjectPng } from "@/app/models/GdProject";
import Image from "next/image";
import { PolygonHeading } from "../components/PolygonHeading";

type GdPngsProps = {
  pngs: GdProjectPng[];
};

export const GdPngs = ({ pngs }: GdPngsProps) => (
  <section className="lg:mx-10 flex flex-col items-center">
    <PolygonHeading polygonClass="bg-primary">Nothing</PolygonHeading>
    <div
      className="p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
    gap-10 bg-primary rounded-xl"
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
  </section>
);
