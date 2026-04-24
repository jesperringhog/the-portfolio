"use client";
import { PortfolioProps } from "../models/PortfolioProps";
import { FeProjects } from "./FeProjects";
import { GdProjects } from "./GdProjects";

const Portfolio = ({ activePortfolio }: PortfolioProps) => 
    <section id="portfolio" className="mx-[5%] min-h-screen flex bg-gray-200">
      {activePortfolio === "frontend" && <FeProjects />}
      {activePortfolio === "graphicdesign" && <GdProjects />}
    </section>

export default Portfolio;
