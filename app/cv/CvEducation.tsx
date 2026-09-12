import { education } from "../data/education";
import { CvSection } from "./CvSection";

export const CvEducation = () => (
  <CvSection polygonClass="bg-project" articleClass="bg-project" heading="Utbildning">
    {education.map((e, i) => (
      <div key={i} className="h-full">
        <h4 className="font-bold text-accent-secondary">
          <i>{e.school}</i>
          <span className="font-normal text-foreground"> {e.education}</span>
        </h4>
        <p className="font-bold">
          {e.program}
          <span className="text-accent-secondary"> &bull; {e.period}</span>
        </p>
        <br />
      </div>
    ))}
  </CvSection>
);
