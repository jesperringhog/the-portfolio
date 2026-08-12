import { feProjects } from "@/app/data/feProjects";
import { BsArrowsFullscreen } from "react-icons/bs";
import { FaFigma, FaGithub } from "react-icons/fa";
import { LinkComponent } from "../buttons/LinkComponent";
import { PolygonHeading } from "../PolygonHeading";

export const Frontend = () => (
  <section id="frontend">
    <div className="lg:px-10 xl:p-0 flex flex-col items-center">
      <PolygonHeading polygonClass="bg-project lg:rounded-t-xl">
        Frontend
      </PolygonHeading>
      <div
        className="w-full py-10 p-10 md:p-20 flex flex-col lg:flex-row flex-wrap justify-center items-center 
      gap-10 bg-project lg:rounded-b-xl xl:rounded-none 2xl:rounded-xl"
      >
        {feProjects.map((p, i) => (
          <article
            key={i}
            className="w-full h-100 flex flex-col flex-1 hover:scale-101 drop-shadow-xl bg-foreground hover:bg-background
            transition-all duration-500 rounded-xl group"
          >
            <div
              className="flex justify-center 
              p-3 md:rounded-t-xl transition-colors duration-500"
            >
              <p
                className="font-bold text-project group-hover:text-foreground transition-colors duration-500"
              >
                {p.title}
              </p>
            </div>
            <iframe src={p.vercel} className="flex-1"></iframe>
            <div
              className="flex justify-end items-center md:rounded-b-xl transition-colors duration-500"
            >
              <LinkComponent
                href={p.github}
                reactIcon={FaGithub}
                iconClass="fill-project group-hover:fill-foreground"
              />
              {p.figma && (
                <LinkComponent
                  href={p.figma}
                  reactIcon={FaFigma}
                  iconClass="fill-project group-hover:fill-foreground"
                />
              )}
              <LinkComponent
                href={p.vercel}
                reactIcon={BsArrowsFullscreen}
                iconClass="fill-project group-hover:fill-foreground"
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
