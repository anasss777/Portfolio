import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { parseHTML } from "../Common";
import { bioAr2, bioEn2 } from "./BioContent";
import Link from "next/link";
import { svgGitHubSmall, svgWebsite } from "../svgPaths";

const Bio = () => {
  const t = useTranslations("print");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div className={`flex flex-row justify-center items-center`}>
      <div className={`flex flex-col justify-center items-center gap-4 w-1/4`}>
        <Image
          src={"/images/me6.png"}
          alt={`Anas Chammam image`}
          height={500}
          width={500}
          className={`object-scale-down rounded-full shadow-Card h-60 w-60 border border-gray-300 shadow-gray-300`}
        />

        <div className={`flex flex-col justify-start items-start gap-2 w-fit`}>
          <div
            className={`flex flex-row justify-start items-center w-full gap-2 ${
              isArabic && "flex-row-reverse"
            }`}
          >
            <span>{svgGitHubSmall}</span>
            <Link
              href={`https://github.com/anasss777`}
              target="_blank"
              className={`text-blue-500 hover:underline hover:text-opacity-70 transition-all duration-300 ease-linear`}
            >
              github.com/anasss777
            </Link>
          </div>

          <div
            className={`flex flex-row justify-start items-center w-full gap-2 ${
              isArabic && "flex-row-reverse"
            }`}
          >
            <span>{svgWebsite}</span>
            <Link
              href={`https://anas-chammam.vercel.app`}
              target="_blank"
              className={`text-blue-500 hover:underline hover:text-opacity-70 transition-all duration-300 ease-linear`}
            >
              anas-chammam.vercel.app
            </Link>
          </div>
        </div>
      </div>

      {isArabic ? (
        <div
          className={`custom-quill-style2 font-tajawal !text-3xl w-2/3 px-20`}
        >
          {parseHTML(bioAr2)}
        </div>
      ) : (
        <div
          className={`custom-quill-style2 font-tajawal !text-3xl w-3/4 px-20`}
        >
          {parseHTML(bioEn2)}
        </div>
      )}
    </div>
  );
};

export default Bio;
