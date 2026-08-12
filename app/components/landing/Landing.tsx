import { skills } from "@/app/data/skills";
import { IconComponent } from "../buttons/IconComponent";
import { PolygonHeading } from "../PolygonHeading";
import { ProfileImg } from "./ProfileImg";
import { Heading } from "./Heading";

export const Landing = () => (
  <section
    id="home"
    className="w-full md:mb-10 flex flex-col lg:gap-10 items-center"
  >
    <Heading />
    <article
      className="lg:mx-10 xl:m-0 flex flex-col-reverse lg:flex-row-reverse
      justify-center items-center md:gap-5 xl:gap-0"
    >
      <ProfileImg />
      <div
        className="min-h-80 xl:max-h-80 p-10 md:p-15 bg-project lg:rounded-xl xl:rounded-none 2xl:rounded-l-xl"
      >
        <p className="text-sm md:text-base">
          <strong>Frontend Developer</strong>-student med bakgrund inom grafisk
          design och UX. Jag trivs bäst när jag får kombinera teknik med kreativ
          problemlösning och skapa webbupplevelser som är både funktionella och
          genomtänkta. För mig handlar bra frontend om mer än att få något att
          fungera – det handlar om struktur, tillgänglighet, prestanda och
          detaljer som gör skillnad för användaren. Jag lägger lika stor vikt
          vid kodens kvalitet som vid användarens upplevelse och strävar efter
          att bygga lösningar som är hållbara bakom kulisserna, samtidigt som de
          känns enkla, intuitiva och visuellt genomarbetade.
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
