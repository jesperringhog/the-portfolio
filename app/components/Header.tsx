"use client";
import { HeaderProps } from "../models/PortfolioProps";
import { JrLogo } from "./JrLogo";

export const Header = ({ setActivePortfolio }: HeaderProps) => (
  <header className="header-shape w-full h-20 p-5 bg-white fixed">
    <nav className="grid grid-cols-3 items-center w-full">
      <div></div>
      <JrLogo></JrLogo>
      <div className="flex flex-1 justify-start gap-20">
        <button
          onClick={() => {
            setActivePortfolio("frontend");
          }}
        >
          <a href="#portfolio">Frontend</a>
        </button>
        <button
          onClick={() => {
            setActivePortfolio("graphicdesign");
          }}
        >
          <a href="#portfolio">Graphic Design</a>
        </button>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  </header>
);
