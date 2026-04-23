import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FeProjects } from "./components/FeProjects";

const Home = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <FeProjects/>
      <Footer />
    </main>
  );
};

export default Home;
