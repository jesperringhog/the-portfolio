"use client";
import { HeaderProps } from "../../models/PortfolioProps";
import { JrLogo } from "./JrLogo";

export const Header = ({ setActivePortfolio }: HeaderProps) => (
  <header className="header-shape w-full h-20 p-5 bg-white fixed z-100">
    <nav className="flex gap-20 items-center w-full">
      <div className="flex-1"></div>
        <button id="feBtn" className="flex-1 justify-end" onClick={() => setActivePortfolio("frontend")}>
          <a href="#portfolio">Frontend</a>
        </button>
        <JrLogo />
        <button id="gdBtn" className="flex-1" onClick={() => setActivePortfolio("graphicdesign")}>
          <a href="#portfolio">Graphic Design</a>
        </button>
        <a href="#contact" className="flex-1">Contact</a>
    </nav>
  </header>
);
