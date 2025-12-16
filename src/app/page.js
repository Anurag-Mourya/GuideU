import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import Process from "../components/Process/Process";
import Services from "../components/Services/Services";
import Courses from "../components/Courses/Courses";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Process />
      <Services />
      <Courses />
      <About />
      {/* Additional sections can be added here */}
      <Contact />
      <Footer />
    </main>
  );
}
