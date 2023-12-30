"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  xAxis: string;
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

const ExperienceCard = ({
  xAxis,
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
    <motion.div
      variants={{
        initial: {
          opacity: 0,
          x: Number(xAxis),
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
      className={`text-white font-montserrat text-left border border-primary md:w-[600px] mx-auto px-5 lg:px-10 py-5 rounded-xl shadow-Card`}
    >
      {/* title */}
      <p className={`text-xl font-bold text-primary`}>
        {company} / {job}
      </p>
      {/* time and place */}
      <p className={`text-xs text-white/50 mb-4`}>
        {start} - {end}, {address}
      </p>
      {/* content */}
      <p>{content1}</p> {content2 && <br />}
      {/* links */}
      <p className={`font-bold text-primary`}>{content2}</p>
      <div className={`flex flex-col`}>
        {link1 && (
          <Link
            href={link1}
            target="_blank"
            className={`ml-4 hover:underline text-primary/80 hover:opacity-80`}
          >
            {link1Name}
          </Link>
        )}
        {link2 && (
          <Link
            href={link2}
            target="_blank"
            className={`ml-4 hover:underline text-primary/80 hover:opacity-80`}
          >
            {link2Name}
          </Link>
        )}
        {link3 && (
          <Link
            href={link3}
            target="_blank"
            className={`ml-4 hover:underline text-primary/80 hover:opacity-80`}
          >
            {link3Name}
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
