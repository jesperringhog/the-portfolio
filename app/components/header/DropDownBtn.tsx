"use client";

type DropDownBtnProps = {
  open: boolean;
  openMenu: (open: boolean) => void;
};

export const DropDownBtn = ({ open, openMenu }: DropDownBtnProps) => (
  <button
    className="h-full flex-1 cursor-pointer xl:hidden"
    onClick={() => {
      openMenu(!open);
    }}
  >
    <div className={`h-full flex flex-col justify-center hover:justify-between ${open ? "" : ""}`}>
      <div className="w-10 h-1 bg-black"></div>
      <div className="w-10 h-1 bg-black"></div>
      <div className="w-10 h-1 bg-black"></div>
    </div>
  </button>
);
