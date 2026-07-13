import { CvSkills } from "./CvSkills";
import { CvHeader } from "./CvHeader";
import { CvSummary } from "./CvSummary";
import { CvEducation } from "./CvEducation";
import { CvExperience } from "./CvExperience";

export default function Cv() {
  return (
    <section className="flex flex-1 flex-col">
      <CvHeader />
      <div className="lg:p-10 flex flex-col md:flex-row flex-wrap lg:gap-10">
        <div className="flex-1">
          <CvSummary />
          <CvEducation />
        </div>
        <CvSkills />
        <div className="flex flex-col md:flex-row 2xl:flex-1 flex-wrap lg:gap-10">
          <CvExperience variant="employment" heading="Anställning" />
          <CvExperience variant="internship" heading="Praktik" />
        </div>
      </div>
    </section>
  );
}
