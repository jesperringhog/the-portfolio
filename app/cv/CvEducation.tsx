import { education } from "../data/education";
import { CvSection } from "./CvSection";

export const CvEducation = () => (
  <CvSection polygonClass="bg-project" articleClass="bg-project" heading="Utbildning">
    {education.map((e, i) => (
      <div key={i}>
        <h4 className="font-bold">
          <i className="text-secondary-text">{e.school}</i>
          <span className="font-normal"> {e.education}</span>
        </h4>
        <p className="font-bold">
          {e.program}
          <span className="text-secondary-text"> &bull; {e.period}</span>
        </p>
        <br />
      </div>
    ))}
  </CvSection>
);
