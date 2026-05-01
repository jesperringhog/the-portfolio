"use client";

import { Header } from "./components/header/Header";
import { Footer } from "./components/main/Footer";
import { Hero } from "./components/main/Hero";
import { useRef, useState } from "react";
import { Portfolio } from "./models/Portfolio";
import Portfolios from "./components/portfolio/Portfolios";

const Home = () => {
  const [portfolio, setPortfolio] = useState<Portfolio>("frontend");
  const portfolioRef = useRef<HTMLElement | null>(null);

  const switchPortfolio = (portfolio: Portfolio) => {
    setPortfolio(portfolio);
    portfolioRef.current?.scrollIntoView({behavior: "smooth"});
  }

  return <div className="flex flex-col flex-1 bg-zinc-500 font-sans dark:bg-black">
    <main className="flex-1 w-full bg-zinc-100 dark:bg-black sm:items-start">
      <Header portfolio={portfolio} switchPortfolio={switchPortfolio} />
      <Hero />
      <Portfolios portfolio={portfolio} />
      <Footer />
    </main>
  </div>;
};

export default Home;
