import Navbar from "@/components/ui/Navbar";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";
import Animate from "@/components/ui/Animate"; // Add this import

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Animate>
        <main className="flex-grow pt-16">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </Animate>
      <Footer />
    </div>
  );
}
