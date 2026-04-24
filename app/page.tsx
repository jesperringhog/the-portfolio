"use client";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import Portfolio from "./components/Portfolio";
import { useState } from "react";

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
