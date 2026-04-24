"use client";

import { ArrowsPointingOutIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

const feProjectHtml = (vercel: string, github: string) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex flex-col flex-1 mx-20 my-10 rounded">
      <iframe src={vercel} className="flex-1 rounded-t-xl"></iframe>
      <div className="flex justify-end bg-black rounded-b-xl">
        <a
          href={github}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          {hover ? (
            <FiGithub className="fill-white w-8 h-8 m-5" />
          ) : (
            <FaGithub className="w-8 h-8 m-5 fill-white" />
          )}
        </a>
        <a href={vercel}>
          <ArrowsPointingOutIcon className="w-8 h-8 m-5 fill-white" />
        </a>
      </div>
    </div>
  );
};

export const FeProjects = () => (
  <>
    {feProjectHtml(
      "https://webshop-godisrattan.vercel.app/",
      "https://github.com/jesperringhog/webshop-godisrattan",
    )}
    {feProjectHtml(
      "https://jesperringhog.github.io/the-todos/",
      "https://github.com/jesperringhog/the-todos.git",
    )}
  </>
);
