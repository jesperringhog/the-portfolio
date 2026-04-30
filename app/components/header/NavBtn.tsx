import { ReactNode, useState } from "react";

type NavBtnProps = {
  id: string;
  aClass?: string;
  bClass?: string;
  children: ReactNode;
  portfolio: string;
  switchPortfolio: (portfolio: string) => void;
};

export const NavBtn = ({
  id,
  aClass,
  bClass,
  children,
  portfolio,
  switchPortfolio,
}: NavBtnProps) => {
  return (
    <a
      href="#portfolio"
      className={`flex flex-1 justify-center items-center h-10 hover:bg-black hover:text-white hover:font-medium focus:rounded-full ${aClass}`}
      id={id}
      onClick={() => {
        switchPortfolio(portfolio);
      }}
    >
      {children}
    </a>
  );
};
