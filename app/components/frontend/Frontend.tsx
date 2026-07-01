import { BsArrowsFullscreen } from "react-icons/bs";
import { FaFigma, FaGithub } from "react-icons/fa";
import { feProjects } from "../../data/feProjects";
import { LinkComponent } from "../buttons/LinkComponent";
import { PolygonHeading } from "../landing/PolygonHeading";

export const Frontend = () => (
  <section id="frontend">
    <div className="lg:px-10 flex flex-col items-center">
      <PolygonHeading extClass="bg-project lg:rounded-t-xl">Frontend</PolygonHeading>
      <div className="w-full flex flex-col lg:flex-row justify-center gap-10 p-10 bg-project lg:rounded-b-xl">
        {feProjects.map((p, i) => (
          <div
            key={i}
            className="h-full flex flex-col flex-1 hover:scale-101 hover:drop-shadow-xl 
          transition-all duration-300 group"
          >
            <div
              className="flex justify-center bg-foreground group-hover:bg-project p-3 
            rounded-t-xl transition-colors duration-300"
            >
              <p
                className="text-primary text-xl group-hover:text-foreground 
              transition-colors duration-300"
              >
                {p.title}
              </p>
            </div>
            <iframe src={p.vercel} className="flex-1"></iframe>
            <div
              className="flex justify-end items-center bg-foreground group-hover:bg-project 
            rounded-b-xl transition-colors duration-300"
            >
              <LinkComponent
                href={p.github}
                reactIcon={FaGithub}
                extClass="fill-primary group-hover:fill-foreground"
              />
              {p.figma && (
                <LinkComponent
                  href={p.figma}
                  reactIcon={FaFigma}
                  extClass="fill-primary group-hover:fill-foreground"
                />
              )}
              <LinkComponent
                href={p.vercel}
                reactIcon={BsArrowsFullscreen}
                extClass="fill-primary group-hover:fill-foreground"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
