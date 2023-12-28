import Image from "next/image";
import React from "react";

const test = () => {
  return (
    <div className={`mx-auto mt-40 justify-center flex flex-col w-fit h-fit`}>
      <Image
        src="/images/nextjs.png"
        alt="test image"
        height={100}
        width={100}
        className="object-scale-down my-4"
      />
      <div className={`h-[21.5px] w-[100px] border border-white`}>
        <div className={`bg-primary h-[20px] w-[80px] mr-[20px]`}></div>
      </div>
    </div>
  );
};

export default test;
