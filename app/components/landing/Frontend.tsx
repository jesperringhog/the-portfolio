import { feProjects } from "@/app/data/feProjects";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaFigma, FaGithub } from "react-icons/fa";
import { LinkComponent } from "../buttons/LinkComponent";
import { PolygonHeading } from "../PolygonHeading";
import Image from "next/image";
import { ProjectImg } from "./ProjectImg";

export const Frontend = () => (
  <section id="frontend">
    <div className="flex flex-col items-center">
      <PolygonHeading polygonClass="bg-project lg:rounded-t-xl">
        Frontend
      </PolygonHeading>
      <div
        className="w-full py-10 p-10 grid md:grid-cols-2 justify-center items-center 
      gap-5 lg:gap-10 bg-project lg:rounded-b-xl xl:rounded-none"
      >
        {feProjects.map((p, i) => (
          <article
            key={i}
            className="flex flex-col hover:scale-101 drop-shadow-xl bg-foreground
            transition-all duration-500 rounded-xl xl:rounded-none group"
          >
            <div
              className="flex justify-center p-3 transition-colors duration-500"
            >
              <p
                className="group-hover:font-bold text-background group-hover:text-primary transition-all duration-500"
              >
                {p.title}
              </p>
            </div>
            <ProjectImg project={p} />
            <div
              className="flex justify-end items-center transition-colors duration-500"
            >
              <LinkComponent
                href={p.github}
                reactIcon={FaGithub}
                iconClass="fill-background hover:fill-primary"
              />
              {p.figma && (
                <LinkComponent
                  href={p.figma}
                  reactIcon={FaFigma}
                  iconClass="fill-background hover:fill-primary"
                />
              )}
              <LinkComponent
                href={p.vercel}
                reactIcon={BsArrowsFullscreen}
                iconClass="fill-background hover:fill-primary"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
