"use client";

import { BsArrowsFullscreen } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { IconComponent } from "../components/footer/Icon";
import { feProjects } from "../data/feProjects";

export default function Frontend() {
  return (
    <section className="h-full flex justify-center gap-10 p-10">
      {feProjects.map((p, i) => (
          <div key={i} className="flex flex-col flex-1 hover:scale-101 transition-transform">
            <div className="flex justify-center bg-white p-3 rounded-t-xl">
              <p className="text-black">{p.title}</p>
            </div>
            <iframe src={p.vercel} className="flex-1"></iframe>
            <div className="flex justify-end items-center bg-white rounded-b-xl">
              <IconComponent
                href={p.github}
                reactIcon={FaGithub}
              />
              <IconComponent
                href={p.vercel}
                reactIcon={BsArrowsFullscreen}
              />
            </div>
          </div>
      ))}
    </section>
  );
}
