"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { parseHTML } from "../Common";

type Props = {
  isArabic: boolean;
  company: string;
  job: string;
  start: string;
  end: string;
  address: string;
  content1: string;
  content2?: string;
  link1?: string;
  link2?: string;
  link3?: string;
  link1Name?: string;
  link2Name?: string;
  link3Name?: string;
};

const ExperienceCard2 = ({
  isArabic,
  company,
  job,
  start,
  end,
  address,
  content1,
  content2,
  link1,
  link2,
  link3,
  link1Name,
  link2Name,
  link3Name,
}: Props) => {
  return (
    <div
      className={`text-white font-tajawal text-left w-4/5 mx-auto px-5 lg:px-10 py-5`}
    >
      <div className={`w-4/5 h-0.5 bg-black mb-10`}></div>

      {/* title */}
      <p
        className={`text-xl font-bold text-primary ${
          isArabic && "rtl text-right font-tajawal"
        }`}
      >
        {company} <span className="font-normal">|</span> {job}
      </p>
      {/* time and place */}
      <p
        className={`text-xs text-gray-400 mb-4 ${
          isArabic && "rtl text-right font-tajawal"
        }`}
      >
        {start} - {end}, {address}
      </p>
      {/* content */}
      <div className={`custom-quill-style w-full !text-black`}>
        {parseHTML(content1)}
      </div>
      {content2 && <br />}
      {/* links */}
      <p className={`font-bold text-primary ${isArabic && "rtl text-right"}`}>
        {content2}
      </p>
      <div className={`flex flex-col`}>
        {link1 && (
          <Link
            href={link1}
            target="_blank"
            className={`ml-4 hover:underline text-primary/80 hover:opacity-80 ${
              isArabic && "rtl text-right"
            }`}
          >
            {link1Name}
          </Link>
        )}
        {link2 && (
          <Link
            href={link2}
            target="_blank"
            className={`ml-4 hover:underline text-primary/80 hover:opacity-80 ${
              isArabic && "rtl text-right"
            }`}
          >
            {link2Name}
          </Link>
        )}
        {link3 && (
          <Link
            href={link3}
            target="_blank"
            className={`ml-4 hover:underline text-primary/80 hover:opacity-80 ${
              isArabic && "rtl text-right"
            }`}
          >
            {link3Name}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard2;
