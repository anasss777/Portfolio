"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { experienceContent } from "./ExperienceContent";
import Image from "next/image";

const Experience = () => {
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
        delay: 0.5,
      },
    }),
  };

  return (
    <div>
      <motion.h1
        variants={fedeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="font-fancy text-5xl text-primary mt-10 mb-10 mx-auto flex flex-col justify-center gap-1"
      >
        <span className="mx-auto">
          <Image
            src="/images/experience.svg"
            alt="Experience image"
            height={40}
            width={40}
          />
        </span>
        Experience
      </motion.h1>

      <div className={`flex flex-col gap-8 justify-center`}>
        {experienceContent.map((exp, index) => (
          <ExperienceCard
            xAxis={index % 2 === 0 ? "-200" : "200"}
            key={index}
            company={exp.company}
            job={exp.job}
            start={exp.start}
            end={exp.end}
            address={exp.address}
            content1={exp.content1}
            content2={exp.content2}
            link1={exp.link1}
            link2={exp.link2}
            link3={exp.link3}
            link1Name={exp.link1Name}
            link2Name={exp.link2Name}
            link3Name={exp.link3Name}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
