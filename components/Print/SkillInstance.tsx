import React from "react";

type Props = {
  theSvg: React.JSX.Element;
  name: string;
  mastery: number;
};

const SkillInstance = ({ name, theSvg, mastery }: Props) => {
  const masteryPercentage = `${Math.min(Math.max(mastery, 0), 1) * 100}%`;

  return (
    <div className="flex flex-col justify-center items-center w-[250px] ltr">
      <div className="flex flex-row justify-start items-center w-full gap-1">
        <span>{theSvg}</span>
        <p className="text-sm mr-2">{name}</p>
      </div>

      <div className="w-full h-4 bg-gray-400 rounded-full overflow-hidden mt-2">
        <div
          className="h-full bg-primary transition-all duration-500"
          style={{ width: masteryPercentage }}
        />
      </div>
    </div>
  );
};

export default SkillInstance;
