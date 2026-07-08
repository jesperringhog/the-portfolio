import { CvSection } from "./CvSection";

export const CvEducation = () => (
  <CvSection sectionClass="bg-project" heading="Utbildning">
    <h4 className="font-bold">
      <i className="text-secondary-text">Medieinstitutet,</i>
      <span className="font-normal"> Yrkeshögskola</span>
    </h4>
    <p>
      <strong>Front End Developer</strong> &bull; <span>2025 - 2027</span>
    </p>
    <br />
    <h4 className="font-bold">
      <i className="text-secondary-text">Luleå tekniska universitet,</i>
      <span className="font-normal"> Konstnärlig kandidat</span>
    </h4>
    <p>
      <strong>Mediedesign / Grafisk design</strong> &bull;{" "}
      <span>2013 - 2016</span>
    </p>
    <br />
    <h4 className="font-bold">
      <i className="text-secondary-text">Grafiskt utbildningscenter,</i>
      <span className="font-normal"> Gymnasium</span>
    </h4>
    <p>
      <strong>Mediautbildningen / Grafisk kommunikation</strong>
      <br />
      &bull; <span>2009 - 2012</span>
    </p>
  </CvSection>
);
