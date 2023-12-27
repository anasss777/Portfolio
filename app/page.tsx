import Skills from "@/components/Skills";
import WhoAmI from "@/components/WhoAmI";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col text-center mx-auto px-7 min-[550px]:px-20 min-[880px]:px-36 lg:px-60">
      <Image
        src="/images/personalPicture.png"
        alt="Portfolio Picture"
        className="mx-auto mt-10"
        height={120}
        width={120}
      />

      <h1 className="text-4xl md:text-6xl text-primary font-montserrat mx-auto mt-10 tracking-widest">
        Anas Chammam
      </h1>

      <h1 className="text-2xl md:text-4xl text-white font-montserrat mx-auto mt-5 tracking-widest">
        Software Engineer
      </h1>

      <WhoAmI />
      <Skills />
    </div>
  );
}
