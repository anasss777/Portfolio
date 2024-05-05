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
      id: 1,
      imageSrc: "/images/matloop.png",
      imageSrcAr: "/images/matloopAr.png",
      link: "https://matloop-demo.vercel.app/en",
      linkAr: "https://matloop-demo.vercel.app/ar",
    },
    {
      id: 2,
      imageSrc: "/images/almutahde.png",
      imageSrcAr: "/images/almutahdeAr.png",
      link: "https://almutahde.com/en",
      linkAr: "https://www.almutahde.com/ar",
    },
    {
      id: 3,
      imageSrc: "/images/e-shop.png",
      imageSrcAr: "/images/e-shop.png",
      link: "https://eshop-responsive-website.vercel.app/",
      linkAr: "https://eshop-responsive-website.vercel.app/",
    },
    {
      id: 4,
      imageSrc: "/images/mazzadak.png",
      imageSrcAr: "/images/mazzadakAr.png",
      link: "https://mazzadak-demo.vercel.app/en",
      linkAr: "https://mazzadak-demo.vercel.app/ar",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center py-10 lg:py-20">
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
        className="w-full max-w-4xl"
      >
        <Slider {...settings}>
          {projects
            .sort((a, b) => a.id - b.id)
            .map((project) => (
              <div
                key={project.id}
                className={`bg-third p-3 w-full ${isArabic && "rtl"}`}
              >
                <Link
                  href={isArabic ? project.linkAr : project.link}
                  target="_blank"
                >
                  <Image
                    src={isArabic ? project.imageSrcAr : project.imageSrc}
                    alt={`Project ${project.id}`}
                    height={497}
                    width={1400}
                    className={`object-cover h-[497px] w-full rounded-xl border border-primary shadow-CardSmall shadow-primary`}
                  />
                </Link>
              </div>
            ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Projects;
