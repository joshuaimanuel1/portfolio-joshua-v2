import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";

// IMPORT DATA LANGSUNG DARI FILE DATA.TS LOKAL
import {
  personalInfo,
  techStack,
  projects,
  experiences,
  certificates,
  otherCertificates,
} from "../data";

export default function Home() {
  return (
    // PERUBAHAN KRUSIAL: overflow-x-hidden diganti menjadi overflow-clip
    // agar efek Sticky & Curtain Reveal di Hero bisa berfungsi 100% mulus!
    <main className="bg-slate-950 min-h-screen text-slate-200 selection:bg-blue-500 selection:text-white font-sans overflow-clip relative">
      <Navbar />
      <Hero personalInfo={personalInfo} />
      <About personalInfo={personalInfo} />
      <Skills skills={techStack} />
      <Projects projects={projects} />
      <Experience experiences={experiences} />
      <Certificates
        mainCertificates={certificates}
        otherCertificates={otherCertificates}
      />
      <Contact personalInfo={personalInfo} />
    </main>
  );
}
