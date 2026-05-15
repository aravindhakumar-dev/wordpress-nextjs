import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import About from "@/sections/About";
import TechStack from "@/sections/TechStack";
import Services from "@/sections/Services";
import Experience from "@/sections/Experience";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <TechStack />
      <Services />
      <Experience />
      <Projects />
      <Contact />

      <Footer />
    </main>
  );
}