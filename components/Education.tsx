"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Education = () => {
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
        className="font-fancy text-5xl text-primary mt-20 mb-10 mx-auto flex flex-col justify-center gap-1"
      >
        <span className="mx-auto">
          <Image
            src="/images/education.svg"
            alt="Education image"
            height={45}
            width={45}
          />
        </span>
        Education
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
        <p className={`text-xl font-bold text-primary`}>
          Üsküdar University / Bachelor
        </p>
        {/* time */}
        <p className={`text-xs text-white/50 mb-4`}>Graduated in June 2023</p>
        {/* content */}
        <p>
          I earned a Bachelor&apos;s degree in{" "}
          <span className="font-bold text-primary/70">
            Software Engineering
          </span>{" "}
          from{" "}
          <span className="font-bold text-primary/70">Üsküdar University</span>,
          achieving a notable{" "}
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
          <span className="italic text-primary/80">Software Construction</span>{" "}
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
      </motion.div>
    </div>
  );
};

export default Education;
