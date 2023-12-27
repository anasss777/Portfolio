import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  imgSrc: string;
  percentage: string;
  negPercentage: string;
};

const SingleSkill = ({ name, imgSrc, percentage, negPercentage }: Props) => {
  const multiplyStringByPercentage = (
    inputString: string,
    percentage: number
  ): string => {
    // Convert the input string to a number
    const inputNumber: number = parseFloat(inputString);

    // Check if the conversion was successful
    if (isNaN(inputNumber)) {
      throw new Error("Invalid input: Please provide a valid numeric string");
    }

    // Calculate the result by multiplying the number with the percentage
    const result: number = inputNumber * (percentage / 100);

    // Convert the result to a string and return it
    return result.toString();
  };

  return (
    <div
      className={`mx-auto justify-center items-center flex flex-col w-fit h-[${multiplyStringByPercentage(
        percentage,
        60
      )}px]md: h-[${multiplyStringByPercentage(
        percentage,
        80
      )}px] lg:h-[200px]`}
    >
      <Image
        src={imgSrc}
        alt="Skill image"
        height={100}
        width={100}
        className="object-scale-down my-4 h-[60px] w-[60px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px]"
      />
      {/* Tech name */}
      <p className={`font-mcLaren font-medium mt-2 mb-1`}>{name}</p>

      {/* Tech level */}
      <div
        className={`h-[21.5px] w-[${multiplyStringByPercentage(
          "100",
          60
        )}px] md:w-[${multiplyStringByPercentage(
          "100",
          80
        )}px] lg:w-[100px] border border-white`}
      >
        <div
          className={`bg-primary h-[20px] w-[${multiplyStringByPercentage(
            percentage,
            60
          )}px] md:w-[${multiplyStringByPercentage(
            percentage,
            80
          )}px] lg:w-[${percentage}px] mr-[${negPercentage}px]`}
        ></div>
      </div>
    </div>
  );
};

export default SingleSkill;
