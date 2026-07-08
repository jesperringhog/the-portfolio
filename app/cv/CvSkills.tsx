import { skills } from "../data/skills";
import { CvSection } from "./CvSection";

export const CvSkills = () => (
  <CvSection
    sectionClass="flex-1 bg-foreground"
    headingClass="text-project"
    heading="Kompetenser"
  >
    {skills.map((s, i) => (
      <div key={i} className="text-project">
        <h4 className="text-xl underline underline-offset-4">{s.heading}</h4>
        <ul className="ml-6 flex flex-wrap gap-5 font-bold list-disc">
          {s.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
        <br />
      </div>
    ))}
  </CvSection>
);
