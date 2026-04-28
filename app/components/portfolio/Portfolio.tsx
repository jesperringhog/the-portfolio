"use client";
import { PortfolioProps } from "@/app/models/PortfolioProps";
import { FeProjects } from "./FeProjects";
import { GdProjects } from "./GdProjects";

const Portfolio = ({ activePortfolio }: PortfolioProps) => 
    <section id="portfolio" className="min-h-screen mx-[5%] flex gap-20 bg-gray-200">
      {activePortfolio === "frontend" && <FeProjects />}
      {activePortfolio === "graphicdesign" && <GdProjects />}
    </section>

export default Portfolio;
