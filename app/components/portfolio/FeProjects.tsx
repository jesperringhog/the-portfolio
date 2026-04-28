"use client";

import { FaGithub } from "react-icons/fa";
import { IconComponent } from "../main/Icon";
import { BsArrowsFullscreen } from "react-icons/bs";

type FeProjectProps = {
  vercel: string;
  github: string;
};

const FeProjectHtml = ({ vercel, github }: FeProjectProps) => (
  <div className="flex flex-col flex-1 mx-20 mt-40 mb-20">
    <iframe src={vercel} className="flex-1 rounded-t-xl"></iframe>
    <div className="flex justify-end bg-black rounded-b-xl">
      <IconComponent
        href={github}
        reactIcon={FaGithub}
        className="fill-white m-5"
      />
      <IconComponent
        href={vercel}
        reactIcon={BsArrowsFullscreen}
        className="fill-white m-5"
      />
    </div>
  </div>
);

export const FeProjects = () => (
  <>
    <FeProjectHtml
      vercel="https://webshop-godisrattan.vercel.app/"
      github="https://github.com/jesperringhog/webshop-godisrattan"
    />
    <FeProjectHtml
      vercel="https://jesperringhog.github.io/the-todos/"
      github="https://github.com/jesperringhog/the-todos.git"
    />
  </>
);
