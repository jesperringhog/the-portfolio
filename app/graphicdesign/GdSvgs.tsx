"use client";

import React, { useState } from "react";
import { PolygonHeading } from "../components/PolygonHeading";
import { logotypes } from "./logos";
import { characters } from "./characters";
import { IconComponent } from "../components/buttons/IconComponent";
import { FaCross } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { GdProjectItem } from "../models/GdProject";
import { GdModal } from "./GdModal";

type GdSvgsProps = {
  variant: "logotypes" | "characters";
  children: React.ReactNode;
  containerClass: string;
  polygonClass: string;
  logoClass: string;
};

export const GdSvgs = ({
  variant,
  children,
  containerClass,
  polygonClass,
  logoClass,
}: GdSvgsProps) => {
  const svgs: GdProjectItem[] =
    variant === "logotypes" ? logotypes : characters;

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const SelectedLogo = selectedIndex !== null ? svgs[selectedIndex] : null;

  return (
    <section className="lg:mx-10 flex flex-col items-center">
      <PolygonHeading children={children} polygonClass={polygonClass} />
      <div
        className={`w-full p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10
          lg:rounded-b-xl xl:rounded-xl ${containerClass}`}
      >
        {svgs.map(({ component: Logo, title }, i) => (
          <button
            key={i}
            onClick={() => setSelectedIndex(i)}
            className="cursor-pointer"
          >
            <Logo
              className={`w-full h-auto p-6 group text-foreground rounded-xl hover:scale-105
            hover:drop-shadow-xl transition-all duration-300
            ${logoClass}`}
            />
          </button>
        ))}
      </div>
      {SelectedLogo && (
        <GdModal
          isOpen={Boolean(SelectedLogo)}
          title={SelectedLogo.title}
          onClose={() => setSelectedIndex(null)}
        >
          <SelectedLogo.component className="w-full h-full p-20"/>
        </GdModal>
      )}
    </section>
  );
};
