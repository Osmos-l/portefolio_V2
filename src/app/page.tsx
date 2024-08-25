import ExperiencesSection from "@/components/experiences";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import ResumeSection from "@/components/resume";
import ProjectsSection from "@/components/projects";
import Image from "next/image";
import ContactSection from "@/components/contact";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ExperiencesSection />
      <ProjectsSection />
      <ResumeSection />
      <ContactSection />
    </div>
  );
}
