"use client";
import { JrLogo } from "./JrLogo";
import { NavBtn } from "./NavBtn";

export const Header = () => (
  <header className="header-shape h-20 p-5 bg-white">
    <nav className="flex gap-20 justify-center items-center w-full max-h-10">
      <div className="flex-1"></div>
      <NavBtn
        href="/frontend"
        children="Frontend"
      />
      <JrLogo />
      <NavBtn
      href="/graphicdesign"
        children="Graphic Design"
      />
      <NavBtn
      href="/contact"
      children="Contact"
      />
    </nav>
  </header>
);
