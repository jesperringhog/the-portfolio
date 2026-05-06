import Link from "next/link";
import React from "react";

type DropDownNavBtnProps = {
  href: string;
  children: React.ReactNode;
};

export const DropDownNavBtn = ({ href, children }: DropDownNavBtnProps) => (
  <li>
    <Link
      href={href}
      className="px-10 py-4 rounded-[0%] focus:rounded-[100] 
    hover:bg-foreground hover:text-primary hover:font-bold 
    transition-all duration-300 ease-in-out"
    >
      {children}
    </Link>
  </li>
);
