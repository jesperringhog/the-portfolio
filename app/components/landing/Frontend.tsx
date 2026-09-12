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
      gap-5 lg:gap-10 bg-project lg:rounded-b-xl xl:rounded-xl"
      >
        {feProjects.map((p, i) => (
          <article
            key={i}
            className="flex flex-col hover:scale-101 drop-shadow-xl bg-foreground
            transition-all duration-500 rounded-xl group"
          >
            <div
              className="flex justify-center 
              p-3 md:rounded-t-xl transition-colors duration-500"
            >
              <p
                className="font-bold text-project group-hover:text-accent-primary transition-colors duration-500"
              >
                {p.title}
              </p>
            </div>
            <ProjectImg project={p} />
            <div
              className="flex justify-end items-center md:rounded-b-xl transition-colors duration-500"
            >
              <LinkComponent
                href={p.github}
                reactIcon={FaGithub}
                iconClass="fill-project hover:fill-accent-primary"
              />
              {p.figma && (
                <LinkComponent
                  href={p.figma}
                  reactIcon={FaFigma}
                  iconClass="fill-project hover:fill-accent-primary"
                />
              )}
              <LinkComponent
                href={p.vercel}
                reactIcon={BsArrowsFullscreen}
                iconClass="fill-project hover:fill-accent-primary"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
