import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experienceContent } from "./ExperienceContent";
import Image from "next/image";

const Experience = () => {
  return (
    <div>
      <h1 className="font-fancy text-5xl text-primary mt-10 mb-10 mx-auto flex flex-col justify-center gap-1">
        <span className="mx-auto">
          <Image
            src="/images/experience.svg"
            alt="Experience image"
            height={40}
            width={40}
          />
        </span>
        Experience
      </h1>

      <div className={`flex flex-col gap-8 justify-center`}>
        {experienceContent.map((exp, index) => (
          <ExperienceCard
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
