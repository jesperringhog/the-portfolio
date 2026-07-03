import { BsArrowsFullscreen } from "react-icons/bs";
import { FaFigma, FaGithub } from "react-icons/fa";
import { feProjects } from "../data/feProjects";
import { LinkComponent } from "./buttons/LinkComponent";
import { PolygonHeading } from "./PolygonHeading";

export const Frontend = () => (
  <section id="frontend">
    <div className="lg:px-10 flex flex-col items-center">
      <PolygonHeading polygonClass="bg-primary lg:rounded-t-xl">
        Frontend
      </PolygonHeading>
      <div
        className="w-full px-10 flex flex-col lg:flex-row flex-wrap justify-center 
      gap-10 p-10 bg-primary lg:rounded-b-xl xl:rounded-xl"
      >
        {feProjects.map((p, i) => (
          <div
            key={i}
            className="w-full flex flex-col flex-1 hover:scale-101 drop-shadow-xl
          rounded-xl transition-all duration-500 group"
          >
            <div
              className="flex justify-center bg-project group-hover:bg-foreground p-3 
            rounded-t-xl transition-colors duration-500"
            >
              <p
                className="text-foreground group-hover:text-project 
              transition-colors duration-500"
              >
                {p.title}
              </p>
            </div>
            <iframe src={p.vercel} className="flex-1"></iframe>
            <div
              className="flex justify-end items-center bg-project group-hover:bg-foreground 
            rounded-b-xl transition-colors duration-500"
            >
              <LinkComponent
                href={p.github}
                reactIcon={FaGithub}
                extClass="fill-foreground group-hover:fill-project"
              />
              {p.figma && (
                <LinkComponent
                  href={p.figma}
                  reactIcon={FaFigma}
                  extClass="fill-foreground group-hover:fill-project"
                />
              )}
              <LinkComponent
                href={p.vercel}
                reactIcon={BsArrowsFullscreen}
                extClass="fill-foreground group-hover:fill-project"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
