"use client";

import { Header } from "./components/header/Header";
import { Footer } from "./components/main/Footer";
import { Hero } from "./components/main/Hero";
import { useState } from "react";
import Portfolio from "./components/portfolio/Portfolio";

const Home = () => {
  const [activePortfolio, setActivePortfolio] = useState<
    "frontend" | "graphicdesign"
  >("frontend");

  return (
    <main className="flex flex-col min-h-screen bg-gray-100">
      <Header setActivePortfolio={setActivePortfolio}/>
      <Hero />
      <Portfolio activePortfolio={activePortfolio}/>
      <Footer />
    </main>
  );
};

export default Home;
