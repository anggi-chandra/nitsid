import Hero from "./components/Hero";
import About from "./components/About";
import ThePilar from "./components/ThePilar";
import Portfolio from "./components/Portfolio";
import ProjectSlider from "./components/ProjectSlider";
import Partnership from "./components/Partnership";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-orange-500 selection:text-black">
      <Hero />
      <About />
      <ThePilar />
      <Portfolio />
      <ProjectSlider />
      <Partnership />
      <Footer />
    </main>
  );
}
