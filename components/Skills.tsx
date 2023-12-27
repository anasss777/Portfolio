import React from "react";
import SingleSkill from "./SingleSkill";

const images = [
  {
    name: "HTML",
    imgName: "/images/html.png",
    percentage: "100",
    negPercentage: "0",
  },
  {
    name: "CSS",
    imgName: "/images/css.png",
    percentage: "100",
    negPercentage: "0",
  },
  {
    name: "JavaScript",
    imgName: "/images/js.png",
    percentage: "100",
    negPercentage: "0",
  },

  {
    name: "TypeScript",
    imgName: "/images/Typescript.png",
    percentage: "100",
    negPercentage: "0",
  },
  {
    name: "React.js",
    imgName: "/images/reactjs.png",
    percentage: "100",
    negPercentage: "0",
  },
  {
    name: "Next.js",
    imgName: "/images/nextjs.png",
    percentage: "100",
    negPercentage: "0",
  },

  {
    name: "GitHub",
    imgName: "/images/github-logo.png",
    percentage: "100",
    negPercentage: "0",
  },
  {
    name: "Tailwind CSS",
    imgName: "/images/tailwind-logo.png",
    percentage: "100",
    negPercentage: "0",
  },
  {
    name: "NextAuth.js",
    imgName: "/images/nextauth.png",
    percentage: "80",
    negPercentage: "20",
  },

  {
    name: "Sanity (CMS)",
    imgName: "/images/sanity.png",
    percentage: "80",
    negPercentage: "20",
  },
  {
    name: "Node.js",
    imgName: "/images/nodejs.png",
    percentage: "80",
    negPercentage: "20",
  },
  {
    name: "Next-intl",
    imgName: "/images/next-intl.png",
    percentage: "80",
    negPercentage: "20",
  },

  {
    name: "Java",
    imgName: "/images/java.png",
    percentage: "80",
    negPercentage: "20",
  },
  {
    name: "Python",
    imgName: "/images/python.png",
    percentage: "70",
    negPercentage: "30",
  },
  {
    name: "C#",
    imgName: "/images/cs.png",
    percentage: "70",
    negPercentage: "30",
  },

  {
    name: "C++",
    imgName: "/images/cpp.png",
    percentage: "70",
    negPercentage: "30",
  },
];

const Skills = () => {
  return (
    <div className="xl:mx-[200px] mb-10">
      <h1 className="font-fancy text-4xl text-primary mt-20 mb-5">Skills</h1>

      <div className="flex flex-wrap gap-14 md:mt-5 items-center justify-center">
        {images.map((image, index) => (
          <SingleSkill
            key={index}
            name={image.name}
            imgSrc={image.imgName}
            percentage={image.percentage}
            negPercentage={image.negPercentage}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
