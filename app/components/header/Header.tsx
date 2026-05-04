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
      <header className="h-20 p-5 bg-white xl:[clip-path:polygon(0%_0%,100%_0%,95%_100%,5%_100%)]">
        <nav className="w-full h-full flex gap-20 justify-center items-center max-h-10">
          <div className="flex-1">
          </div>
          <NavBtn
            href="/frontend"
            children="Frontend"
            activeClass="rounded-full cursor-default"
            defaultClass="focus:rounded-l-full"
          />
          <JrLogo />
          <NavBtn
            href="/graphicdesign"
            children="Graphic Design"
            activeClass="rounded-full hover:rounded-none"
            defaultClass="focus:rounded-r-full"
          />
          <NavBtn
            href="/contact"
            children="Contact"
            defaultClass="focus:rounded-l-full"
          />
          <DropDownBtn open={open} openMenu={openMenu} />
          {/* <div className="flex-1"></div> */}
        </nav>
      </header>
      <DropDownMenu openMenu={open} />
    </>
  );
};
