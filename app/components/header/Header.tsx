"use client";

import { useState } from "react";
import { DropDownBtn } from "./DropDownBtn";
import { JrLogo } from "./JrLogo";
import { NavBtn } from "./NavBtn";
import { DropDownMenu } from "./DropDownMenu";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const openMenu = (open: boolean) => setOpen(open);

  return (
    <>
      <header className="w-full h-20 p-5 bg-primary xl:[clip-path:polygon(0%_0%,100%_0%,95%_100%,5%_100%)] fixed z-999">
        <nav className="w-full h-full flex gap-10 md:gap-20 justify-center items-center max-h-10">
          <div className="flex-1"></div>
          <NavBtn
            href="/frontend"
            children="Frontend"
            activeClass="rounded-[100] cursor-default"
            defaultClass="focus:rounded-[100]"
          />
          <JrLogo />
          <NavBtn
            href="/graphicdesign"
            children="Grafisk design"
            activeClass="rounded-[100] hover:rounded-[0%]"
            defaultClass="focus:rounded-[100]"
          />
          <NavBtn
            href="/cv"
            children="CV"
            activeClass="rounded-l-[100] cursor-default"
            defaultClass="focus:rounded-l-[100]"
          />
          <DropDownBtn open={open} openMenu={openMenu} />
        </nav>
      </header>
      <DropDownMenu open={open} openMenu={openMenu} />
    </>
  );
};
