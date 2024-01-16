"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
import React from "react";
import { createSharedPathnamesNavigation } from "next-intl/navigation";
export const locales = ["ar", "en"];
const { Link, usePathname } = createSharedPathnamesNavigation({ locales });

const Header = () => {
  const pathname = usePathname();
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div className={`flex flex-row justify-center py-3`}>
      <Link href={pathname} locale={isArabic ? "en" : "ar"}>
        <Image
          src={isArabic ? "/images/UKflag.png" : "/images/KSAflag.png"}
          alt="Change language icon"
          height={600}
          width={600}
          className={`h-auto w-10 object-scale-down cursor-pointer`}
        />
      </Link>
    </div>
  );
};

export default Header;
