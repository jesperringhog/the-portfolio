import { BsArrowsFullscreen } from "react-icons/bs";
import { FaFigma, FaGithub } from "react-icons/fa";
import { feProjects } from "../data/feProjects";
import { LinkComponent } from "../components/buttons/LinkComponent";

export default function Frontend() {
  return (
    <section className="h-full flex flex-col lg:flex-row justify-center gap-10 p-10">
      {feProjects.map((p, i) => (
          <div key={i} className="flex flex-col flex-1 hover:scale-101 hover:drop-shadow-xl 
          transition-all duration-300 group">
            <div className="flex justify-center bg-project group-hover:bg-foreground p-3 
            rounded-t-xl transition-colors duration-300">
              <p className="font-brush text-xl group-hover:text-primary 
              transition-colors duration-300">{p.title}</p>
            </div>
            <iframe src={p.vercel} className="flex-1"></iframe>
            <div className="flex justify-end items-center bg-project group-hover:bg-foreground 
            rounded-b-xl transition-colors duration-300">
              <LinkComponent
                href={p.github}
                reactIcon={FaGithub}
                hoverClass="group-hover:fill-primary"
              />
              {p.figma && <LinkComponent
              href={p.figma}
              reactIcon={FaFigma}
              hoverClass="group-hover:fill-primary"
              />}
              <LinkComponent
                href={p.vercel}
                reactIcon={BsArrowsFullscreen}
                hoverClass="group-hover:fill-primary"
              />
            </div>
          </div>
      ))}
    </section>
  );
}
