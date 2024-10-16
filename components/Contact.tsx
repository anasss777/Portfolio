"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const t = useTranslations("contact");
  const locale = useLocale();
  const isArabic = locale === "ar";

  function getCurrentYear(): number {
    const currentYear: number = new Date().getFullYear();
    return currentYear;
  }

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
        duration: 1,
        delay: 0.5,
      },
    }),
  };

  return (
    <div>
      <motion.h1
        variants={fedeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={`font-fancy text-5xl text-primary mt-20 mb-5 mx-auto flex flex-col justify-center gap-1 ${
          isArabic && "font-ruqaa"
        }`}
      >
        <span className="mx-auto">
          <Image
            src="/images/contact.svg"
            alt="Contact image"
            height={40}
            width={40}
          />
        </span>
        {t("contact")}
      </motion.h1>

      <div className={`flex md:flex-row flex-col`}>
        {/* Phone and whatsapp */}
        <motion.h1
          variants={{
            initial: {
              opacity: 0,
              x: "100",
            },
            animate: () => ({
              opacity: 1,
              x: 0,
              transition: {
                ease: "linear",
                duration: 0.7,
                delay: 0.5,
              },
            }),
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="font-montserrat text-xl text-primary mt-10 mb-10 mx-auto flex flex-col justify-center gap-1"
        >
          <span className="mx-auto">
            <Image
              src="/images/phone.png"
              alt="Phone image"
              height={45}
              width={45}
              className="invert h-8 w-auto"
            />
          </span>
          +96594942517
        </motion.h1>
        {/* Email */}
        <motion.h1
          variants={{
            initial: {
              opacity: 0,
              x: "-100",
            },
            animate: () => ({
              opacity: 1,
              x: 0,
              transition: {
                ease: "linear",
                duration: 0.7,
                delay: 0.5,
              },
            }),
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="font-montserrat text-xl text-primary mt-10 mb-10 mx-auto flex flex-col justify-center gap-1"
        >
          <span className="mx-auto">
            <Image
              src="/images/mail.png"
              alt="Email image"
              height={45}
              width={45}
              className="invert h-8 w-auto"
            />
          </span>
          anass2000271@gmail.com
        </motion.h1>
      </div>

      <div className="flex flex-col">
        <motion.div
          variants={{
            initial: {
              scale: 0,
            },
            animate: () => ({
              scale: 1,
              transition: {
                ease: "linear",
                duration: 0.5,
                delay: 0.5,
              },
            }),
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-row mx-auto gap-4"
        >
          <Link
            href="https://www.linkedin.com/in/anas-chammem-977880296/"
            target="_blank"
          >
            <Image
              src="/images/linkedin.svg"
              alt="Email image"
              height={45}
              width={45}
              className="h-auto w-auto rounded-full cursor-pointer hover:shadow-CardExtra hover:scale-105 transition-all duration-300
              ease-linear"
            />
          </Link>
          <Link href="https://github.com/anasss777" target="_blank">
            <Image
              src="/images/github.svg"
              alt="Email image"
              height={45}
              width={45}
              className="h-auto w-auto rounded-full cursor-pointer hover:shadow-CardExtra hover:scale-105 transition-all duration-300
              ease-linear"
            />
          </Link>
        </motion.div>
        <p className="mt-10 text-white/70 font-montserrat">
          © {getCurrentYear()} Anas Chammam
        </p>
      </div>
    </div>
  );
};

export default Contact;
