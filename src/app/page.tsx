import ExperiencesSection from "@/components/experiences";
import HeroSection from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ExperiencesSection />
    </>
  );
}
