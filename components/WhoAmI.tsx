"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

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
        <p
          className={`text-white text-center font-tajawal text-base md:text-xl font-light rtl`}
        >
          <span className={`text-primary`}>خريج جامعة أوسكودار</span> بتركيا قسم
          الهندسة تخصص{" "}
          <span className={`text-primary`}>
            هندسة البرمجيات بتقدير ممتاز بدرجة 3.53 من 4
          </span>
          . حاليًا أبحث عن فرصة عمل تمكّنني من تنمية مهاراتي البرمجية والمساهمة
          في مشاريع ذات تأثير. بفضل{" "}
          <span className={`text-primary`}>مهارات التواصل</span> الاستثنائية و
          <span className={`text-primary`}> الدافع الشخصي</span>، وسجل حافل{" "}
          <span className={`text-primary`}>كعضو قيم في الفريق</span>، أجد نفسي
          مستعدًا للتفوق في أي بيئة تعاونية. شغفي يكمن في{" "}
          <span className={`text-primary`}>تطوير مواقع الويب </span>
          وأتطلع بحماس إلى بداية حياة مهنية مليئة بالإنجازات في هذا الميدان.
        </p>
      ) : (
        <p className="text-white font-montserrat text-center">
          Accomplished{" "}
          <strong className="text-primary">&nbsp;Software Engineering</strong>{" "}
          graduate from
          <strong className="text-primary">
            &nbsp;Uskudar University
          </strong>{" "}
          <strong className="text-primary">&nbsp;(CGPA: 3.53)</strong>. Seeking
          a job to refine <br /> my programming skills and contribute to
          impactful projects.{" "}
          <strong className="text-primary">
            &nbsp;Strong communication skills
          </strong>
          ,<strong className="text-primary">&nbsp;self-motivated</strong>,
          <strong className="text-primary">
            <br />
            team player
          </strong>
          . Passionate about{" "}
          <strong className="text-primary">&nbsp;Full stack development</strong>
          . Eager to start a fulfilling career.
        </p>
      )}
    </motion.div>
  );
};

export default WhoAmI;
