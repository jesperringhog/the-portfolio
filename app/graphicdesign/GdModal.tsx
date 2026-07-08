import React from "react";
import { IconComponent } from "../components/buttons/IconComponent";
import { IoMdCloseCircle } from "react-icons/io";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

type GdModalProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  nextImg: () => void;
  prevImg: () => void;
  children: React.ReactNode;
  modalContainerClass: string;
  modalTitleClass: string;
  iconClass: string
};

export const GdModal = ({
  isOpen,
  title,
  onClose,
  nextImg,
  prevImg,
  children,
  modalContainerClass,
  modalTitleClass,
  iconClass
}: GdModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      className={`mx-5 md:mx-10 xl:mx-[5%] my-45 lg:my-25
    rounded-t-xl drop-shadow-xl fixed inset-0 z-100 ${modalContainerClass}`}
    >
      <button
        onClick={onClose}
        className="absolute top-1 right-1 cursor-pointer"
      >
        <IconComponent reactIcon={IoMdCloseCircle} iconClass={iconClass} />
      </button>
      <button
        onClick={prevImg}
        className="absolute top-[80%] md:top-[45%] left-1 cursor-pointer"
      >
        <IconComponent reactIcon={FaArrowCircleLeft} iconClass={iconClass} />
      </button>
      <button
        onClick={nextImg}
        className="absolute top-[80%] md:top-[45%] right-1 cursor-pointer"
      >
        <IconComponent reactIcon={FaArrowCircleRight} iconClass={iconClass} />
      </button>
      <div className="w-full h-full p-5 flex justify-center">{children}</div>
      <p className={`p-5 2xl:text-2xl text-center font-bold rounded-b-xl ${modalTitleClass}`}>
        {title}
      </p>
    </div>
  );
};
