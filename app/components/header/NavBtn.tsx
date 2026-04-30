import { Portfolio } from "@/app/models/Portfolio";
import { ReactNode, useState } from "react";

type NavBtnProps = {
  id: string;
  aClass?: string;
  children: ReactNode;
  portfolio: Portfolio;
  switchPortfolio: (portfolio: Portfolio) => void;
  activePortfolio: Portfolio;
};

export const NavBtn = ({
  id,
  aClass,
  children,
  portfolio,
  switchPortfolio,
  activePortfolio,
}: NavBtnProps) => {
  const isActive = activePortfolio === portfolio;

  return (
    <a
      href="#portfolio"
      className={`flex flex-1 justify-center items-center h-10 hover:bg-black hover:text-white hover:font-medium focus:rounded-full
      ${
        isActive ? "bg-black text-white font-medium rounded-full" : ""
      } ${aClass}`}
      id={id}
      onClick={() => switchPortfolio(portfolio)}
    >
      {children}
    </a>
  );
};
