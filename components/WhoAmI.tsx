"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { parseHTML } from "./Common";
import { bioAr, bioEn } from "./Print/BioContent";

const WhoAmI = () => {
  const t = useTranslations("WhoAmI");
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
      },
    }),
  };

  return (
    <motion.div
      variants={fedeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`md:px-20 xl:px-60`}
    >
      <Image
        src="/images/me6.png"
        alt="Portfolio Picture"
        className="mx-auto mt-10 object-cover h-52 w-52 rounded-full border border-primary bg-primary/30 shadow-CardMin shadow-primary/50"
        height={1200}
        width={1200}
      />

      <h1
        className={`text-4xl md:text-6xl text-primary font-montserrat mx-auto mt-10 tracking-widest ${
          isArabic &&
          "font-tajawal text-5xl md:text-7xl font-light tracking-normal"
        }`}
      >
        {t("name")}
      </h1>

      <h1
        className={`text-2xl md:text-4xl text-white font-montserrat mx-auto mt-5 tracking-widest ${
          isArabic && "font-tajawal tracking-normal"
        }`}
      >
        {t("title")}
      </h1>

      <h1
        className={`font-fancy text-5xl text-primary mt-20 mb-5 mx-auto flex flex-col justify-center gap-3 ${
          isArabic && "font-ruqaa font-light gap-6"
        }`}
      >
        <span className="mx-auto">
          <Image
            src="/images/whoAmI.svg"
            alt="Who am I image"
            height={45}
            width={45}
          />
        </span>
        {t("title2")}
      </h1>

      {isArabic ? (
        <div className={`custom-quill-style2 w-full font-tajawal !text-xl`}>
          {parseHTML(bioAr)}
        </div>
      ) : (
        <div className={`custom-quill-style2 w-full font-tajawal !text-xl`}>
          {parseHTML(bioEn)}
        </div>
      )}
    </motion.div>
  );
};

export default WhoAmI;
