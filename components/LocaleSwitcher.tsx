"use client";

import { useLocale } from "next-intl";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { svgKsa, svgLocale, svgUk } from "./svgPaths";

export const locales = ["ar", "en"];
const { Link, usePathname } = createSharedPathnamesNavigation({ locales });

function LocaleSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div
      className={`relative flex flex-col justify-center items-center pt-4 hover:contrast-[110%] contrast-[95%] py-1 ${
        locale === "ar" && "rtl"
      }`}
    >
      <div
        className={`group flex flex-col justify-center items-center gap-1 text-primary`}
      >
        <p>{isArabic ? "Language" : "اللغة"}</p>
        <span>{svgLocale}</span>

        <div
          className={`border border-primary w-[125px] rounded-md bg-[#242c39] py-2 duration-300 group-hover:opacity-100 text-white
          invisible absolute top-20 opacity-0 shadow-lg group-hover:visible`}
        >
          {/* Arabic Option */}
          <Link
            href={pathname}
            locale="ar"
            className={`contrast-[95%] hover:contrast-125 rounded text-sm hover:opacity-50 w-full flex flex-row justify-center
            items-center gap-2 ${isArabic ? "text-right" : "text-left"} ${
              locale === "ar" && "hidden"
            }`}
          >
            <span>{svgKsa}</span>
            <p>العربية</p>
          </Link>

          {/* English Option */}
          <Link
            href={pathname}
            locale="en"
            className={`contrast-[95%] hover:contrast-125 rounded text-sm hover:opacity-50 w-full flex flex-row justify-center
            items-center gap-2 ${isArabic ? "text-right" : "text-left"} ${
              locale === "en" && "hidden"
            }`}
          >
            <span>{svgUk}</span>
            <p>English</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LocaleSwitcher;
