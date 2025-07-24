import { useTranslations } from "next-intl";
import React from "react";
import { svgAddress, svgEmail, svgPhone } from "../svgPaths";

const Header = () => {
  const t = useTranslations("print");

  return (
    <div
      className={`flex flex-col justify-center items-center w-full gap-10 p-10 bg-secondary`}
    >
      <h1 className={`text-white text-6xl font-bold font-ruqaa`}>
        {t("name")}
      </h1>

      <div
        className={`flex flex-row justify-center gap-10 items-center w-full`}
      >
        <div className={`w-1/4 h-[1px] bg-primary`}></div>
        <h3 className={`text-primary text-4xl font-tajawal`}>{t("title")}</h3>
        <div className={`w-1/4 h-[1px] bg-primary`}></div>
      </div>

      <div
        className={`flex flex-row justify-center gap-10 items-center w-[60%]`}
      >
        <p
          className={`flex flex-col justify-center items-center gap-2 w-1/3 text-gray-300 text-xl font-tajawal whitespace-nowrap`}
        >
          <span>{svgPhone}</span>
          {t("phone")}
        </p>
        <div className={`w-[1px] h-20 bg-primary`}></div>
        <p
          className={`flex flex-col justify-center items-center gap-2 w-1/3 text-gray-300 text-xl font-tajawal whitespace-nowrap`}
        >
          <span>{svgEmail}</span>
          {t("email")}
        </p>
        <div className={`w-[1px] h-20 bg-primary`}></div>

        <p
          className={`flex flex-col justify-center items-center gap-2 w-1/3 text-gray-300 text-xl font-tajawal whitespace-nowrap`}
        >
          <span>{svgAddress}</span>
          {t("address")}
        </p>
      </div>
    </div>
  );
};

export default Header;
