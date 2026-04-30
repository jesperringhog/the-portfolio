"use client";
import { JrLogo } from "./JrLogo";
import { NavBtn } from "./NavBtn";

type HeaderProps = {
  switchPortfolio: (portfolio: string) => void;
};

export const Header = ({ switchPortfolio }: HeaderProps) => (
  <header className="header-shape w-full h-20 p-5 bg-white fixed z-100">
    <nav className="flex gap-20 justify-center items-center w-full max-h-10">
      <div className="flex-1"></div>
      <NavBtn
        id="feBtn"
        aClass="rounded-bl-[20]"
        children="Frontend"
        portfolio="frontend"
        switchPortfolio={switchPortfolio}
      />
      <JrLogo />
      <NavBtn
        id="gdBtn"
        aClass="rounded-tr-[20]"
        children="Graphic Design"
        portfolio="graphicdesign"
        switchPortfolio={switchPortfolio}
      />
      <a href="#contact" className="flex-1">
        Contact
      </a>
    </nav>
  </header>
);
