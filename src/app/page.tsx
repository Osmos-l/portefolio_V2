import ExperiencesSection from "@/components/experiences";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import ResumeSection from "@/components/resume";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ExperiencesSection />
      <ResumeSection />
    </div>
  );
}
