import ExperiencesSection from "@/components/experiences";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import ResumeSection from "@/components/resume";
import ProjectsSection from "@/components/projects";
import Image from "next/image";
import AboutMe from "@/components/aboutme";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact";
import BooksSection from "@/components/books";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <ResumeSection />
      <ExperiencesSection />
      <ProjectsSection />
      <BooksSection />
      <Footer />
    </div>
  );
}
