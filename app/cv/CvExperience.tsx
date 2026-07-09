import { employment } from "../data/employment";
import { internship } from "../data/internship";
import { Experience } from "../models/Resume";
import { CvSection } from "./CvSection";

type CvExperienceProps = {
  variant: "employment" | "internship";
  heading: string;
};

export const CvExperience = ({ variant, heading }: CvExperienceProps) => {
  const isEmployment = variant === "employment";
  const experience: Experience[] = isEmployment ? employment : internship;

  return (
    <CvSection
      heading={heading}
      sectionClass="flex-1"
      polygonClass={
        isEmployment
          ? "text-foreground bg-project"
          : "text-project bg-foreground"
      }
      articleClass={isEmployment ? "bg-project" : "bg-foreground"}
    >
      {experience.map((e, i) => (
        <div key={i}>
          <h4
            className={`font-bold underline underline-offset-2 
          ${isEmployment ? "text-secondary-text" : "text-secondary"}`}
          >
            <i>{e.company}</i>
          </h4>
          <div className={isEmployment ? "text-foreground" : "text-project"}>
            <strong>{e.role}</strong>
            <p>{e.description}</p>
            <p className="font-bold">
              {e.location}
              <span
                className={
                  isEmployment ? "text-secondary-text" : "text-secondary"
                }
              >
                {" "}
                &bull; {e.period}
              </span>
            </p>
          </div>
          <br />
        </div>
      ))}
    </CvSection>
  );
};
