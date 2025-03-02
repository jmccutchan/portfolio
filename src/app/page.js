import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Image from "next/image";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}
