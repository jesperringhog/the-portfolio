import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

type NavBtnProps = {
  href: string;
  defaultClass?: string;
  activeClass?: string;
  children: ReactNode;
};

export const NavBtn = ({
  href,
  defaultClass,
  activeClass,
  children,
}: NavBtnProps) => {
  const pathname = usePathname();

  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`hidden xl:flex flex-1 justify-center items-center h-10
      rounded-[0%] transition-all duration-300 ease-in-out ${
        isActive
          ? `bg-foreground text-primary font-bold ${activeClass}`
          : `hover:bg-foreground hover:text-primary hover:font-bold ${defaultClass}`
      }
      `}
    >
      {children}
    </Link>
  );
};
