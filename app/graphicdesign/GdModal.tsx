import { IoMdCloseCircle } from "react-icons/io";
import { IconComponent } from "../components/buttons/IconComponent";
import React from "react";

type GdModalProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

export const GdModal = ({ isOpen, title, onClose, children }: GdModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="mx-[5%] my-25 flex flex-col bg-project rounded-xl 
    fixed inset-0 z-100">
      <button
        onClick={onClose}
        className="absolute top-1 right-1 cursor-pointer"
      >
        <IconComponent reactIcon={IoMdCloseCircle} />
      </button>
      <div className="w-full h-full flex justify-center">{children}</div>
      <div className="w-full bg-foreground rounded-b-xl">
        <p className="p-5 text-project text-center font-bold">{title}</p>
      </div>
    </div>
  );
};
