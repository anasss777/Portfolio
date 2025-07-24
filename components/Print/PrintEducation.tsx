import { useLocale, useTranslations } from "next-intl";
import React from "react";
import { svgEducation } from "../svgPaths";
import ExperienceCard2 from "../Experience/ExperienceCard2";
import { parseHTML } from "../Common";

const PrintEducation = () => {
  const t = useTranslations("print");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <div className={`flex flex-row justify-center items-start`}>
      <div className={`flex flex-col justify-center items-center gap-1 w-1/4`}>
        <div className={`flex flex-col justify-center items-start gap-4 w-60`}>
          <div className={`w-14 h-[1.5px] bg-black`}></div>
          <div className={`flex flex-row justify-center items-center gap-1`}>
            <span>{svgEducation}</span>
            <p className={`text-3xl font-tajawal font-bold`}>
              {t("education")}
            </p>
          </div>
        </div>
      </div>

      <div className={`flex flex-col justify-center items-center gap-4 w-4/5`}>
        <div className={`w-4/5 h-0.5 bg-black`}></div>

        <div className={`flex flex-col gap-8 justify-center w-[90%]`}>
          <div
            className={`text-white font-tajawal text-left w-4/5 px-5 lg:px-10 pt-5`}
          >
            {/* title */}
            <p
              className={`text-xl font-bold text-primary ${
                isArabic && "rtl text-right font-tajawal"
              }`}
            >
              {isArabic ? "جامعة أوسكودار" : "Üsküdar University"}{" "}
              <span className="font-normal">|</span>{" "}
              {isArabic
                ? "بكالوريوس هندسة البرمجيات"
                : "Bachelor’s Degree in Software Engineering"}
            </p>
            {/* time and place */}
            <p
              className={`text-xs text-gray-400 mb-4 ${
                isArabic && "rtl text-right font-tajawal"
              }`}
            >
              {isArabic ? "تخرجت في يونيو 2023" : "Graduated in June 2023"}
            </p>
            {/* content */}
            <div className={`custom-quill-style w-full !text-black`}>
              {isArabic
                ? parseHTML(
                    `<p class="ql-align-right">التخرج مع مرتبة الشرف، مع أداء أكاديمي متميّز طوال فترة الدراسة. من أبرز المواد التي تم التفوق فيها:</p><ol><li data-list="bullet" class="ql-align-right"><span class="ql-ui" contenteditable="false"></span><strong>البرمجة كائنية التوجه (OOP)</strong> – 4.00</li><li data-list="bullet" class="ql-align-right"><span class="ql-ui" contenteditable="false"></span><strong>معمارية الحاسوب</strong> – 4.00</li><li data-list="bullet" class="ql-align-right"><span class="ql-ui" contenteditable="false"></span><strong>أنظمة إدارة قواعد البيانات</strong> – 4.00</li><li data-list="bullet" class="ql-align-right"><span class="ql-ui" contenteditable="false"></span><strong>التحقق والاختبار البرمجي</strong> – 4.00</li><li data-list="bullet" class="ql-align-right"><span class="ql-ui" contenteditable="false"></span><strong>تصميم وهندسة البرمجيات</strong> – 3.60</li><li data-list="bullet" class="ql-align-right"><span class="ql-ui" contenteditable="false"></span><strong>الشبكات العصبية الاصطناعية</strong> – 3.56</li><li data-list="bullet" class="ql-align-right"><span class="ql-ui" contenteditable="false"></span><strong>بناء البرمجيات</strong> – 3.00</li></ol><p class="ql-align-right"><br></p>`
                  )
                : parseHTML(
                    `<p>Graduated with honors, demonstrating consistent academic excellence. Notable coursework with top performance:</p><ol><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Object-Oriented Programming</strong> – 4.00</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Computer Architecture</strong> – 4.00</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Database Management Systems</strong> – 4.00</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Software Validation and Testing</strong> – 4.00</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Software Design and Architecture</strong> – 3.60</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Artificial Neural Networks</strong> – 3.56</li><li data-list="bullet"><span class="ql-ui" contenteditable="false"></span><strong>Software Construction</strong> – 3.00</li></ol>`
                  )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrintEducation;
