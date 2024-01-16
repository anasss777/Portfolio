"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const Education = () => {
  const t = useTranslations("education");
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
        className={`font-fancy text-5xl text-primary mt-20 mb-10 mx-auto flex flex-col justify-center gap-1 ${
          isArabic && "font-ruqaa"
        }`}
      >
        <span className="mx-auto">
          <Image
            src="/images/education.svg"
            alt="Education image"
            height={45}
            width={45}
          />
        </span>
        {t("education")}
      </motion.h1>

      <motion.div
        variants={fedeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className={`text-white font-montserrat text-left border border-primary md:w-[600px] mx-auto px-5 lg:px-10 py-5 rounded-xl
        shadow-Card`}
      >
        {/* title */}
        <p
          className={`text-xl font-bold text-primary  ${
            isArabic && "rtl text-right font-tajawal"
          }`}
        >
          Üsküdar University / {t("degree")}
        </p>
        {/* time */}
        <p
          className={`text-xs text-white/50 mb-4  ${
            isArabic && "rtl text-right font-tajawal"
          }`}
        >
          {t("gDate")}
        </p>
        {/* content */}
        {isArabic ? (
          <p className="rtl text-right font-tajawal">
            حصلت على درجة البكالوريوس في{" "}
            <span className="text-primary">هندسة البرمجيات</span> من{" "}
            <span className="text-primary">جامعة أوسكودار</span>، وحصلت على{" "}
            <span className="text-primary">معدل تراكمي ممتاز قدره 3.53</span>.
            من المواضيع الجديرة بالذكر والمعدل التراكمي المقابل لها ما يلي:{" "}
            <br /> البرمجة كائنية التوجه (4)، هندسة الكمبيوتر (4)، إنشاء
            البرمجيات (3)، تصميم البرمجيات وهندستها (3.6)، أنظمة إدارة قواعد
            البيانات (4)، التحقق من صحة البرامج واختبارها (4). والشبكات العصبية
            الاصطناعية (3.56).
          </p>
        ) : (
          <p>
            I earned a Bachelor&apos;s degree in{" "}
            <span className="font-bold text-primary/70">
              Software Engineering
            </span>{" "}
            from{" "}
            <span className="font-bold text-primary/70">
              Üsküdar University
            </span>
            , achieving a notable{" "}
            <span className="font-bold text-primary/70">CGPA of 3.53</span>.
            Noteworthy subjects and their corresponding GPAs include{" "}
            <span className="italic text-primary/80">
              Object-Oriented Programming
            </span>{" "}
            (4),
            <span className="italic text-primary/80">
              Computer Architecture
            </span>{" "}
            (4),{" "}
            <span className="italic text-primary/80">
              Software Construction
            </span>{" "}
            (3),{" "}
            <span className="italic text-primary/80">
              Software Design and Architecture
            </span>{" "}
            (3.6),{" "}
            <span className="italic text-primary/80">
              Database Management Systems
            </span>{" "}
            (4),{" "}
            <span className="italic text-primary/80">
              Software Validation and Testing
            </span>{" "}
            (4), and{" "}
            <span className="italic text-primary/80">
              Artificial Neural Networks
            </span>{" "}
            (3.56).
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default Education;
