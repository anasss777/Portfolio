"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { parseHTML } from "./Common";

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
          <div className={`custom-quill-style w-full`}>
            {parseHTML(
              `<p class="ql-align-right">التخرج مع مرتبة الشرف، مع أداء أكاديمي متميّز طوال فترة الدراسة. من أبرز المواد التي تم التفوق فيها:</p><ol><li data-list="bullet" class="ql-align-right"><span class="ql-ui" contenteditable="false"></span><strong>البرمجة كائنية التوجه (OOP)</strong> – 4.00</li><li data-list="bullet" class="ql-align-right"><span class="ql-ui" contenteditable="false"></span><strong>معمارية الحاسوب</strong> – 4.00</li><li data-list="bullet" class="ql-align-right"><span class="ql-ui" contenteditable="false"></span><strong>أنظمة إدارة قواعد البيانات</strong> – 4.00</li><li data-list="bullet" class="ql-align-right"><span class="ql-ui" contenteditable="false"></span><strong>التحقق والاختبار البرمجي</strong> – 4.00</li><li data-list="bullet" class="ql-align-right"><span class="ql-ui" contenteditable="false"></span><strong>تصميم وهندسة البرمجيات</strong> – 3.60</li><li data-list="bullet" class="ql-align-right"><span class="ql-ui" contenteditable="false"></span><strong>الشبكات العصبية الاصطناعية</strong> – 3.56</li><li data-list="bullet" class="ql-align-right"><span class="ql-ui" contenteditable="false"></span><strong>بناء البرمجيات</strong> – 3.00</li></ol><p class="ql-align-right"><br></p>`
            )}
          </div>
        ) : (
          <div className={`custom-quill-style w-full`}>
            {parseHTML(
              `<p>Graduated with honors, demonstrating consistent academic excellence. Notable coursework with top performance:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Object-Oriented Programming</strong> – 4.00</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Computer Architecture</strong> – 4.00</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Database Management Systems</strong> – 4.00</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Software Validation and Testing</strong> – 4.00</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Software Design and Architecture</strong> – 3.60</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Artificial Neural Networks</strong> – 3.56</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Software Construction</strong> – 3.00</li></ol>`
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Education;
