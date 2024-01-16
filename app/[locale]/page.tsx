import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience/Experience";
import Skills from "@/components/Skills";
import WhoAmI from "@/components/WhoAmI";

export default function Home() {
  return (
    <div className="flex flex-col text-center mx-auto px-7 min-[550px]:px-20 min-[880px]:px-36 lg:px-60">
      <WhoAmI />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}
