"use client";
import { PortfolioProps } from "../models/PortfolioProps";
import { FeProjects } from "./FeProjects";
import { GdProjects } from "./GdProjects";

const Portfolio = ({ activePortfolio }: PortfolioProps) => 
    <section id="portfolio" className="min-h-screen mx-20 px-20 pt-40 pb-20 flex gap-20 bg-gray-200">
      {activePortfolio === "frontend" && <FeProjects />}
      {activePortfolio === "graphicdesign" && <GdProjects />}
    </section>

export default Portfolio;
