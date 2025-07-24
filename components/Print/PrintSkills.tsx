import React from "react";
import { svgSkills } from "../svgPaths";
import { skillsArray } from "../SkillsArray";
import SkillInstance from "./SkillInstance";
import { useTranslations } from "next-intl";

const PrintSkills = () => {
  const t = useTranslations("print");

  return (
    <div className={`flex flex-row justify-center items-start`}>
      <div className={`flex flex-col justify-center items-center gap-1 w-1/4`}>
        <div className={`flex flex-col justify-center items-start gap-4 w-60`}>
          <div className={`w-14 h-[1.5px] bg-black`}></div>
          <div className={`flex flex-row justify-center items-center gap-1`}>
            <span>{svgSkills}</span>
            <p className={`text-3xl font-tajawal font-bold`}>{t("skills")}</p>
          </div>
        </div>
      </div>

      <div className={`flex flex-col justify-center items-center gap-4 w-3/4`}>
        <div className={`w-4/5 h-0.5 bg-black`}></div>

        <div className={`grid grid-cols-2 w-[550px] gap-4 ltr`}>
          {skillsArray.map((skill, index) => (
            <SkillInstance
              key={index}
              name={skill.name}
              theSvg={skill.theSvg}
              mastery={skill.mastery}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrintSkills;
