import { FeProjects } from "./components/FeProjects";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export default function Home() {
  return (
    <div className="">
      <main className="flex-1">
        <Header/>
        <FeProjects/>
        <Footer/>
      </main>
    </div>
  );
}
