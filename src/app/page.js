import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Process from "../components/Process/Process";
import Services from "../components/Services/Services";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Process />
      <Services />
      <About />
      {/* Additional sections can be added here */}
      <Footer />
    </main>
  );
}
