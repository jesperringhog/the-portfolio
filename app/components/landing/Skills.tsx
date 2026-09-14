import { skills } from "@/app/data/skills";
import { PolygonHeading } from "../PolygonHeading";
import { IconComponent } from "../buttons/IconComponent";

export const Skills = () => (
  <article className="md:mt-5 lg:mt-0 md:mx-10 lg:mx-0 md:mb-10 2xl:mt-10 flex flex-col items-center">
    <PolygonHeading polygonClass="text-primary bg-foreground md:rounded-t-xl">
      Skills
    </PolygonHeading>
    <div
      className="w-full px-10 md:px-15 py-5 flex flex-wrap justify-center text-project bg-foreground 
        md:rounded-b-xl xl:rounded-none group"
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
);
