import { BsArrowsFullscreen } from "react-icons/bs";
import { FaFigma, FaGithub } from "react-icons/fa";
import { feProjects } from "../data/feProjects";
import { LinkComponent } from "../components/buttons/LinkComponent";

export default function Frontend() {
  return (
    <section className="h-full flex flex-col lg:flex-row justify-center gap-10 p-10">
      {feProjects.map((p, i) => (
          <div key={i} className="flex flex-col flex-1 hover:scale-101 hover:drop-shadow-xl 
          transition-all duration-300">
            <div className="flex justify-center bg-project p-3 rounded-t-xl">
              <p>{p.title}</p>
            </div>
            <iframe src={p.vercel} className="flex-1"></iframe>
            <div className="flex justify-end items-center bg-project rounded-b-xl">
              <LinkComponent
                href={p.github}
                reactIcon={FaGithub}
              />
              {p.figma ? <LinkComponent
              href={p.figma}
              reactIcon={FaFigma}
              /> : null}
              <LinkComponent
                href={p.vercel}
                reactIcon={BsArrowsFullscreen}
              />
            </div>
          </div>
      ))}
    </section>
  );
}
