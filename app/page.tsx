"use client";

import { Header } from "./components/header/Header";
import { Footer } from "./components/main/Footer";
import { Hero } from "./components/main/Hero";
import { useState } from "react";
import Portfolio from "./components/portfolio/Portfolio";

const Home = () => {
  const [activePortfolio, setActivePortfolio] = useState<string>("frontend");

  const switchPortfolio = (portfolio: string) => setActivePortfolio(portfolio);

  return <div className="flex flex-col flex-1 bg-zinc-500 font-sans dark:bg-black">
    <main className="flex-1 w-full bg-zinc-100 dark:bg-black sm:items-start">
      <Header switchPortfolio={switchPortfolio} />
      <Hero />
      <Portfolio activePortfolio={activePortfolio} />
      <Footer />
    </main>
  </div>;
};

export default Home;
