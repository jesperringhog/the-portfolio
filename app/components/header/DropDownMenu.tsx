"use client";

import Link from "next/link";
import { DropDownNavBtn } from "./DropDownNavBtn";

type DropDownMenuProps = {
  open: boolean;
  openMenu: (open: boolean) => void;
};

export const DropDownMenu = ({ open, openMenu }: DropDownMenuProps) => (
  <div className="w-full flex justify-center xl:hidden fixed">
    <ul onClick={(e) => {
      const target = e.target as HTMLElement;

      target.closest("li") ? openMenu(!open) : "";
    }}
      className={`w-full flex flex-col items-center gap-10 bg-primary p-10 drop-shadow-xl
        absolute top-20 transition-all duration-300 ease-in-out z-100 
          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
    >
          <DropDownNavBtn href="/frontend">Frontend</DropDownNavBtn>
          <DropDownNavBtn href="/graphicdesign">Grafisk design</DropDownNavBtn>
          <DropDownNavBtn href="/cv">CV</DropDownNavBtn>
    </ul>
  </div>
);
