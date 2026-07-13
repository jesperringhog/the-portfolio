import { skillIcons, skills } from "@/app/data/skills";
import Image from "next/image";
import { IconComponent } from "./buttons/IconComponent";
import { PolygonHeading } from "./PolygonHeading";

export const Landing = () => (
  <section
    id="home"
    className="w-full md:mb-5 flex flex-col lg:gap-5 items-center"
  >
    <div
      className="w-full xl:w-auto mt-[1] xl:px-40 py-5 flex flex-col items-center bg-primary 
      xl:[clip-path:polygon(0%_0%,100%_0%,80%_100%,20%_100%)]"
    >
      <h1 className="flex flex-col text-center font-brush text-5xl">
        Portfolio
      </h1>
    </div>
    <article
      className="xl:max-h-80 lg:px-10 flex flex-col-reverse lg:flex-row-reverse
      justify-center items-center md:gap-5 xl:gap-0"
    >
      <Image
        src="/profile/london-punk-square-fade.jpg"
        alt="Jesper Ringhög"
        width={200}
        height={200}
        loading="eager"
        className="w-full md:w-auto h-full md:h-70 xl:h-full
          md:rounded-full xl:rounded-l-none xl:rounded-r-xl"
      />
      <div
        className="min-h-80 xl:max-h-80 bg-project p-10 md:p-15
        lg:rounded-xl xl:rounded-r-none xl:rounded-l-xl"
      >
        <p className="text-sm md:text-base">
          <strong>Frontend Developer</strong>-student med utbildning inom modern
          webbutveckling, grafisk design och UX. Jag trivs i skärningspunkten
          mellan kod och design — där funktionalitet möter estetik. Jag
          kombinerar ett tekniskt intresse med ett öga för detaljer och
          användarupplevelse, med fokus på att skapa tydliga, strukturerade och
          intuitiva lösningar. Mitt arbetssätt bygger på både användbarhet och
          visuell kvalitet. Jag söker just nu en <strong>LIA</strong>{" "}
          (praktikplats) för perioden
          <strong> v. 39 - 11</strong>, där jag vill fortsätta utvecklas, bidra
          i skarpa projekt och arbeta tillsammans med ett team.
        </p>
      </div>
    </article>
    <article className="md:mt-5 lg:mt-0 md:mx-10 flex flex-col items-center">
      <PolygonHeading polygonClass="text-project bg-foreground md:rounded-t-xl">
        Skills
      </PolygonHeading>
      <div
        className="px-10 md:px-15 py-5 flex flex-wrap justify-center text-project bg-foreground 
        md:rounded-b-xl xl:rounded-xl"
      >
        {skills.map((s, i) => (
          <div key={i} className="flex flex-wrap">
            {s.skills.map((skill, i) =>
              skill.icon ? (
                <IconComponent key={i} reactIcon={skill.icon!} />
              ) : null,
            )}
          </div>
        ))}
      </div>
    </article>
  </section>
);
