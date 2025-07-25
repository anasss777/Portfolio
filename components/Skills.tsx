"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { skillsArray } from "./SkillsArray";

const images = [
  {
    name: "HTML",
    imgName: "/images/html.png",
  },
  {
    name: "CSS",
    imgName: "/images/css.png",
  },
  {
    name: "JavaScript",
    imgName: "/images/js.png",
  },
  {
    name: "TypeScript",
    imgName: "/images/Typescript.png",
  },
  {
    name: "React.js",
    imgName: "/images/reactjs.png",
  },
  {
    name: "Next.js",
    imgName: "/images/nextjs.png",
  },
  {
    name: "GitHub",
    imgName: "/images/github-logo.png",
  },
  {
    name: "Tailwind CSS",
    imgName: "/images/tailwind-logo.png",
  },
  {
    name: "Firebase",
    imgName: "/images/firebase.svg",
  },
  {
    name: "NextAuth.js",
    imgName: "/images/nextauth.png",
  },
  {
    name: "Node.js",
    imgName: "/images/nodejs.png",
  },
  {
    name: "MySQL",
    imgName: "/images/mysql.png",
  },
  {
    name: "Next-intl",
    imgName: "/images/next-intl.png",
  },
  {
    name: "Sanity (CMS)",
    imgName: "/images/sanity.png",
  },
  {
    name: "Java",
    imgName: "/images/java.png",
  },
  {
    name: "Python",
    imgName: "/images/python.png",
  },
  {
    name: "C#",
    imgName: "/images/cs.png",
  },
  {
    name: "C++",
    imgName: "/images/cpp.png",
  },
];

const Skills = () => {
  const t = useTranslations("skills");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const fedeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: () => ({
      opacity: 1,
      y: 0,
      transition: {
        ease: "linear",
        duration: 0.5,
        delay: 1,
      },
    }),
  };

  return (
    <div className={`mt-10 pt-20 md:px-20 xl:px-60`}>
      <motion.h1
        variants={fedeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={`font-fancy text-5xl text-primary mb-20 mx-auto flex flex-col justify-center gap-3 ${
          isArabic && "font-ruqaa"
        }`}
      >
        <span className="mx-auto">
          <Image
            src="/images/skills.svg"
            alt="Skills image"
            height={40}
            width={40}
          />
        </span>
        {t("skills")}
      </motion.h1>

      <div className="flex flex-wrap gap-6 md:gap-10 md:mt-5 items-center justify-center">
        {skillsArray.map((skill, index) => (
          <motion.div
            variants={{
              initial: {
                scale: 0,
              },
              animate: () => ({
                scale: 1,
                transition: {
                  ease: "linear",
                  duration: 0.5,
                  delay: Number("0." + index),
                },
              }),
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            key={index}
            className={`h-fit w-fit`}
          >
            <div
              className={`p-2 md:p-4 bg-white/20 border border-gray-500/50 rounded-full shadow-Card md:shadow-CardExtra
              shadow-white/20 md:shadow-white/20`}
            >
              <span>
                {window.innerWidth > 768 ? skill.bigSvg : skill.theSvg}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
