import { IconComponent } from "../components/buttons/IconComponent";
import { skills } from "../data/skills";
import { CvSection } from "./CvSection";

export const CvSkills = () => (
  <CvSection
    sectionClass="flex-1"
    polygonClass="text-project bg-foreground"
    articleClass="grid grid-cols-2 gap-10 bg-foreground"
    heading="Kompetenser"
  >
    {skills.map((s, i) => (
      <div key={i} className="text-project">
        <h4 className="lg:text-xl underline underline-offset-4">{s.heading}</h4>
        <ul className="font-bold">
          {s.skills.map((skill, i) => (
            <li key={i} className="flex items-center">
              {skill.icon ? (
                <IconComponent
                  reactIcon={skill.icon}
                  iconClass="my-3 ml-0 text-project"
                />
              ) : (
                <p className="pr-5 text-5xl">&bull;</p>
              )}
              <p>{skill.name}</p>
            </li>
          ))}
        </ul>
        <br />
      </div>
    ))}
  </CvSection>
);
