import { FeProject } from "@/app/models/FeProject";
import Image from "next/image";

type ProjectImgProps = {
  project: FeProject;
};

export const ProjectImg = ({ project }: ProjectImgProps) => {
  const imgClass = "w-full h-auto";

  return (
    <>
      <Image
        src={project.desktopImg}
        alt={project.title}
        width={500}
        height={500}
        loading="eager"
        className={`${imgClass} hidden lg:block`}
      />
      <Image
        src={project.mobileImg}
        alt={project.title}
        width={500}
        height={500}
        loading="eager"
        className={`${imgClass} lg:hidden`}
      />
    </>
  );
};
