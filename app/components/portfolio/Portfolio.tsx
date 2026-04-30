"use client";
import { FeProjects } from "./FeProjects";
import { GdProjects } from "./GdProjects";

type PortfolioProps = {
  activePortfolio: string;
};

const Portfolio = ({ activePortfolio }: PortfolioProps) => (
  <section
    id="portfolio"
    className="min-h-screen mx-[5%] flex gap-20 px-20 bg-gray-200"
  >
      {activePortfolio === "frontend" && <FeProjects />}
      {activePortfolio === "graphicdesign" && <GdProjects />}
  </section>
);

export default Portfolio;
