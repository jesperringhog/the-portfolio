"use client";

import Image from "next/image";
import { PolygonHeading } from "../components/PolygonHeading";
import { useState } from "react";
import { GdModal } from "./GdModal";
import { GdProjectPng } from "../models/GdProject";

type GdPngsProps = {
  pngs: GdProjectPng[];
};

export const GdPngs = ({ pngs }: GdPngsProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const SelectedImage = selectedIndex !== null ? pngs[selectedIndex] : null;

  return (
    <section className="lg:mx-10 flex flex-col items-center">
      <PolygonHeading polygonClass="bg-primary">Ingenting</PolygonHeading>
      <div
        className="p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6
    gap-10 bg-primary lg:rounded-xl"
      >
        {pngs.map((p, i) => (
          <Image
            key={i}
            src={p.src}
            alt={p.alt}
            width={500}
            height={500}
            className="w-full h-auto hover:scale-105 hover:drop-shadow-xl transition-all duration-300 rounded-xl cursor-pointer"
            onClick={() => setSelectedIndex(i)}
          />
        ))}
      </div>
      {SelectedImage && (
        <GdModal
          isOpen={Boolean(SelectedImage)}
          title={SelectedImage.alt}
          onClose={() => setSelectedIndex(null)}
          nextImg={() => setSelectedIndex(selectedIndex! + 1)}
          prevImg={() => setSelectedIndex(selectedIndex! - 1)}
          modalContainerClass="bg-white"
          modalTitleClass="text-white bg-black"
          iconClass="text-black"
        >
            <Image
              src={SelectedImage.src}
              alt={SelectedImage.alt}
              width={500}
              height={500}
              className="max-w-full max-h-[80vh] w-auto h-auto object-contain"
            ></Image>
        </GdModal>
      )}
    </section>
  );
};
