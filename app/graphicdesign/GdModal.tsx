import { IoMdCloseCircle } from "react-icons/io";
import { IconComponent } from "../components/buttons/IconComponent";
import React from "react";

type GdModalProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  modalContainerClass: string;
  modalTitleClass: string;
  iconClass: string
};

export const GdModal = ({
  isOpen,
  title,
  onClose,
  children,
  modalContainerClass,
  modalTitleClass,
  iconClass
}: GdModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className={`mx-10 xl:mx-[5%] my-45 lg:my-25 flex flex-col
    rounded-t-xl drop-shadow-xl fixed inset-0 z-100 ${modalContainerClass}`}
    >
      <button
        onClick={onClose}
        className="absolute top-1 right-1 cursor-pointer"
      >
        <IconComponent reactIcon={IoMdCloseCircle} iconClass={iconClass} />
      </button>
      <div className="w-full h-full flex justify-center">{children}</div>
      <p className={`p-5 2xl:text-2xl text-center font-bold rounded-b-xl ${modalTitleClass}`}>
        {title}
      </p>
    </div>
  );
};
