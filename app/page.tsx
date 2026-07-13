import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Achievements from "@/components/Achievements";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="relative">
          {/* Subtle ambient glow behind content */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#00d9ff]/20 to-transparent" />
        </div>
        <About />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="cyber-divider" /></div>
        <Experience />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="cyber-divider" /></div>
        <Skills />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="cyber-divider" /></div>
        <Certifications />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="cyber-divider" /></div>
        <Achievements />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="cyber-divider" /></div>
        <Education />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="cyber-divider" /></div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
