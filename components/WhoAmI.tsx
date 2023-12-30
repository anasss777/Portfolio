"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const WhoAmI = () => {
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
    >
      <Image
        src="/images/personalPicture.png"
        alt="Portfolio Picture"
        className="mx-auto mt-10"
        height={120}
        width={120}
      />

      <h1 className="text-4xl md:text-6xl text-primary font-montserrat mx-auto mt-10 tracking-widest">
        Anas Chammam
      </h1>

      <h1 className="text-2xl md:text-4xl text-white font-montserrat mx-auto mt-5 tracking-widest">
        Software Engineer
      </h1>

      <h1 className="font-fancy text-5xl text-primary mt-20 mb-5 mx-auto flex flex-col justify-center gap-3">
        <span className="mx-auto">
          <Image
            src="/images/whoAmI.svg"
            alt="Who am I image"
            height={45}
            width={45}
          />
        </span>
        Who Am I?
      </h1>

      <p className="text-white font-montserrat text-center">
        Accomplished{" "}
        <strong className="text-primary">&nbsp;Software Engineering</strong>{" "}
        graduate from
        <strong className="text-primary">&nbsp;Uskudar University</strong>{" "}
        <strong className="text-primary">&nbsp;(CGPA: 3.53)</strong>. Seeking a
        job to refine <br /> my programming skills and contribute to impactful
        projects.{" "}
        <strong className="text-primary">
          &nbsp;Strong communication skills
        </strong>
        ,<strong className="text-primary">&nbsp;self-motivated</strong>,
        <strong className="text-primary">
          <br />
          team player
        </strong>
        . Passionate about{" "}
        <strong className="text-primary">&nbsp;Full stack development</strong>.
        Eager to start a fulfilling career.
      </p>
    </motion.div>
  );
};

export default WhoAmI;
