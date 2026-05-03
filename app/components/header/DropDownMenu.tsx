"use client";

import Link from "next/link";

type DropDownMenuProps = {
  openMenu: boolean;
};

export const DropDownMenu = ({ openMenu }: DropDownMenuProps) => {
  return (
    openMenu && (
      <div className="flex justify-center">
        <ul className="w-full flex flex-col items-center gap-5 bg-white p-10 absolute top-20 xl:hidden">
          <li className="hover:font-bold">
            <Link href={"/frontend"}>Frontend</Link>
          </li>
          <li className="hover:font-bold">
            <Link href={"/graphicdesign"}>Graphic Design</Link>
          </li>
          <li className="hover:font-bold">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    )
  );
};
