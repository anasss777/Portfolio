"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  const t = useTranslations("projects");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    rtl: isArabic && true,
  };

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

  const projects = [
    {
      id: 0,
      link: "https://dentist-sable-ten.vercel.app/en",
      linkAr: "https://dentist-sable-ten.vercel.app/ar",
    },
    {
      id: 1,
      link: "https://haladd.com/en",
      linkAr: "https://haladd.com/ar",
    },
    {
      id: 2,
      link: "https://matloop-demo.vercel.app/en",
      linkAr: "https://matloop-demo.vercel.app/ar",
    },
    {
      id: 3,
      link: "https://dr-basheer-chammam.vercel.app/en",
      linkAr: "https://dr-basheer-chammam.vercel.app/ar",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-10 lg:py-20 sm:px-7 md:px-32">
      <motion.h1
        variants={fedeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={`font-fancy text-5xl text-primary mt-10 mb-10 mx-auto flex flex-col justify-center gap-1 ${
          isArabic && "font-ruqaa"
        }`}
      >
        <span className="mx-auto">
          <Image
            src="/images/project.svg"
            alt="Projects image"
            height={40}
            width={40}
          />
        </span>
        {t("title")}
      </motion.h1>
      <motion.div
        variants={fedeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-full"
      >
        <Slider {...settings}>
          {projects
            .sort((a, b) => a.id - b.id)
            .map((project) => (
              <div
                key={project.id}
                className={`bg-third p-3 w-full ${isArabic && "rtl"}`}
              >
                <div className={`text-white mb-5`}>
                  {t("visitWebsite")}:{" "}
                  <Link
                    href={isArabic ? project.linkAr : project.link}
                    target="_blank"
                    className={`underline text-primary hover:text-primary/70`}
                  >
                    {isArabic ? project.linkAr : project.link}
                  </Link>{" "}
                </div>
                <iframe
                  width="100%"
                  height="300"
                  src={isArabic ? project.linkAr : project.link}
                  className={`h-[80vh] w-full rounded-xl border border-primary shadow-CardSmall shadow-primary`}
                />
              </div>
            ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Projects;
