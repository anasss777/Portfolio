import Bio from "@/components/Print/Bio";
import Header from "@/components/Print/Header";
import PrintEducation from "@/components/Print/PrintEducation";
import PrintExperiences from "@/components/Print/PrintExperiences";
import PrintSkills from "@/components/Print/PrintSkills";
import { useLocale } from "next-intl";
import React from "react";

const PrintResume = () => {
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div
      className={`flex flex-col gap-10 text-center mx-auto bg-white h-full min-h-screen ${
        isArabic && "rtl"
      }`}
    >
      <Header />
      <Bio />
      <PrintSkills />
      <PrintExperiences />
      <PrintEducation />
    </div>
  );
};

export default PrintResume;
