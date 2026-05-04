"use client";

import { FaHamburger, FaList } from "react-icons/fa";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";
import { PiHamburger, PiHamburgerBold, PiHamburgerFill } from "react-icons/pi";

type DropDownBtnProps = {
  open: boolean;
  openMenu: (open: boolean) => void;
};

export const DropDownBtn = ({ open, openMenu }: DropDownBtnProps) => (
    <button
      className="h-full flex-1 cursor-pointer xl:hidden"
      onClick={() => {
        openMenu(!open);
      }}
    >
      <div
        className={`h-full flex flex-col justify-between duration-150 ${
          open ? "" : ""
        }`}
      >
        <div className="h-1 bg-black rounded-full"></div>
        <div className="h-1 bg-black rounded-full"></div>
        <div className="h-1 bg-black rounded-full"></div>
      </div>
    </button>
);
