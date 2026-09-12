import { Frontend } from "./components/landing/Frontend";
import { Hero } from "./components/landing/Hero";
import { Skills } from "./components/landing/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Frontend />
    </>
  );
}
