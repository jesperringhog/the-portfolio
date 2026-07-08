import { CvSkills } from "./CvSkills";
import { CvHeader } from "./CvHeader";
import { CvSection } from "./CvSection";
import { CvSummary } from "./CvSummary";
import { CvEducation } from "./CvEducation";

export default function Cv() {
  return (
    <section className="max-w-400 w-full h-full flex flex-col">
      <CvHeader />
      <div className="p-10 flex flex-wrap gap-10">
        <CvSkills />
        <div className="flex-1">
          <CvSummary />
          <CvEducation />
        </div>
      </div>
    </section>
  );
}
