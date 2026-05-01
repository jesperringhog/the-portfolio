import { useState } from "react";

export const JrLogo = () => (
  <a href="#">
    <div className="flex gap-1 justify-center cursor-pointer">
      <div className="w-10 h-10 bg-black rounded-br-[50%] hover:rounded-none"></div>
      <div className="flex flex-col gap-1">
        <div className="w-10 h-4.5 bg-black rounded-tr-full hover:rounded-none"></div>
        <div className="w-10 h-4.5 bg-black rounded-tr-full hover:rounded-none"></div>
      </div>
    </div>
  </a>
);
