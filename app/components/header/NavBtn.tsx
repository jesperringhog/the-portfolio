import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

type NavBtnProps = {
  href: string;
  extClass?: string;
  children: ReactNode;
};

export const NavBtn = ({ href, extClass, children }: NavBtnProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex flex-1 justify-center items-center h-10
      duration-150 ease-in-out hover:bg-black hover:text-white hover:font-medium focus:rounded-full ${extClass} ${
        isActive ? "bg-black text-white font-medium rounded-full" : ""
      }`}
    >
      {children}
    </Link>
  );
};
