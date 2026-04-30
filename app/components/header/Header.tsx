"use client";
import { Portfolio } from "@/app/models/Portfolio";
import { JrLogo } from "./JrLogo";
import { NavBtn } from "./NavBtn";

type HeaderProps = {
  portfolio: Portfolio;
  switchPortfolio: (portfolio: Portfolio) => void;
};

export const Header = ({ portfolio, switchPortfolio }: HeaderProps) => (
  <header className="header-shape w-full h-20 p-5 bg-white fixed z-100">
    <nav className="flex gap-20 justify-center items-center w-full max-h-10">
      <div className="flex-1"></div>
      <NavBtn
        id="feBtn"
        children="Frontend"
        portfolio="frontend"
        switchPortfolio={switchPortfolio}
        activePortfolio={portfolio}
      />
      <JrLogo />
      <NavBtn
        id="gdBtn"
        children="Graphic Design"
        portfolio="graphicdesign"
        switchPortfolio={switchPortfolio}
        activePortfolio={portfolio}
      />
      <a href="#contact" className="flex-1">
        Contact
      </a>
    </nav>
  </header>
);
