"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const images = [
  {
    name: "HTML",
    imgName: "/images/html.png",
    percentage: "100",
    negPercentage: "0",
  },
  {
    name: "CSS",
    imgName: "/images/css.png",
    percentage: "100",
    negPercentage: "0",
  },
  {
    name: "JavaScript",
    imgName: "/images/js.png",
    percentage: "100",
    negPercentage: "0",
  },

  {
    name: "TypeScript",
    imgName: "/images/Typescript.png",
    percentage: "100",
    negPercentage: "0",
  },
  {
    name: "React.js",
    imgName: "/images/reactjs.png",
    percentage: "100",
    negPercentage: "0",
  },
  {
    name: "Next.js",
    imgName: "/images/nextjs.png",
    percentage: "100",
    negPercentage: "0",
  },

  {
    name: "GitHub",
    imgName: "/images/github-logo.png",
    percentage: "100",
    negPercentage: "0",
  },
  {
    name: "Tailwind CSS",
    imgName: "/images/tailwind-logo.png",
    percentage: "100",
    negPercentage: "0",
  },
  {
    name: "NextAuth.js",
    imgName: "/images/nextauth.png",
    percentage: "80",
    negPercentage: "20",
  },

  {
    name: "Sanity (CMS)",
    imgName: "/images/sanity.png",
    percentage: "80",
    negPercentage: "20",
  },
  {
    name: "Node.js",
    imgName: "/images/nodejs.png",
    percentage: "80",
    negPercentage: "20",
  },
  {
    name: "Next-intl",
    imgName: "/images/next-intl.png",
    percentage: "80",
    negPercentage: "20",
  },

  {
    name: "Java",
    imgName: "/images/java.png",
    percentage: "80",
    negPercentage: "20",
  },
  {
    name: "Python",
    imgName: "/images/python.png",
    percentage: "70",
    negPercentage: "30",
  },
  {
    name: "C#",
    imgName: "/images/cs.png",
    percentage: "70",
    negPercentage: "30",
  },

  {
    name: "C++",
    imgName: "/images/cpp.png",
    percentage: "70",
    negPercentage: "30",
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
    <div className="mb-10">
      <motion.h1
        variants={fedeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={`font-fancy text-5xl text-primary mt-20 mb-5 mx-auto flex flex-col justify-center gap-3 ${
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

      <div className="flex flex-wrap gap-4 lg:gap-14 md:mt-5 items-center justify-center">
        {images.map((image, index) => (
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
            className={`h-fit w-fit border-2 rounded-full p-1 ${
              index < 8 && "border-primary"
            } ${
              index > 7 &&
              index < 13 &&
              "border-s-primary border-t-primary border-b-primary border-e-gray-700"
            } ${
              index > 12 &&
              "border-s-primary border-t-gray-700 border-b-primary border-e-gray-700"
            }`}
          >
            <Image
              src={image.imgName}
              alt="Skill image"
              height={100}
              width={100}
              className="object-scale-down my-4 h-[35px] w-[35px] lg:h-[60px] lg:w-[60px]"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
