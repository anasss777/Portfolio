import React from "react";
import { svgExperience } from "../svgPaths";
import { experienceContent } from "../Experience/ExperienceContent";
import ExperienceCard2 from "../Experience/ExperienceCard2";
import { useLocale, useTranslations } from "next-intl";

const PrintExperiences = () => {
  const t = useTranslations("print");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div className={`flex flex-row justify-center items-start mt-40`}>
      <div className={`flex flex-col justify-center items-center gap-1 w-1/4`}>
        <div className={`flex flex-col justify-center items-start gap-4 w-60`}>
          <div className={`w-14 h-[1.5px] bg-black`}></div>
          <div className={`flex flex-row justify-center items-center gap-1`}>
            <span>{svgExperience}</span>
            <p className={`text-3xl font-tajawal font-bold`}>
              {t("experiences")}
            </p>
          </div>
        </div>
      </div>

      <div className={`flex flex-col justify-center items-center gap-4 w-4/5`}>
        <div className={`flex flex-col gap-2 justify-center`}>
          {experienceContent.map((exp, index) => (
            <ExperienceCard2
              key={index}
              isArabic={isArabic}
              company={exp.company}
              job={isArabic ? exp.jobAr : exp.job}
              start={isArabic ? exp.startAr : exp.start}
              end={isArabic ? exp.endAr : exp.end}
              address={isArabic ? exp.addressAr : exp.address}
              content1={isArabic ? exp.content1Ar : exp.content1}
              content2={isArabic ? exp.content2Ar : exp.content2}
              link1={exp.link1}
              link2={exp.link2}
              // link3={exp.link3}
              link1Name={exp.link1Name}
              link2Name={exp.link2Name}
              // link3Name={exp.link3Name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrintExperiences;
