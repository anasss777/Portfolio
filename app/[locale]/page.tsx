import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience/Experience";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WhoAmI from "@/components/WhoAmI";

export default function Home() {
  return (
    <div className="flex flex-col text-center mx-auto px-7 bg-secondary">
      <LocaleSwitcher />
      <WhoAmI />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
