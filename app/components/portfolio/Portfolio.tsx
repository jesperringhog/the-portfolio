"use client";
import { FeProjects } from "./FeProjects";
import { GdProjects } from "./GdProjects";

type PortfolioProps = {
  portfolio: string;
};

const Portfolios = ({ portfolio }: PortfolioProps) => (
  <section id="portfolio" className="min-h-screen mx-[5%] flex gap-20 px-20 bg-gray-200">
    {portfolio === "frontend" && <FeProjects />}
    {portfolio === "graphicdesign" && <GdProjects />}
  </section>
);

export default Portfolios;
