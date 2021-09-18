import React from "react";

import { GrFormCheckmark } from "react-icons/gr";
const SkillsContent = () => {
  return (
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <a href="/" key="" className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src=""
          />

          <div
            key=""
            className="p-2 sm:w-1/2 w-full opacity-0 hover:opacity-100"
          >
            <div className="bg-indigo-200 rounded flex p-4 pt-3 pb-2 items-center">
              <GrFormCheckmark className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font text-blue-400 font-medium text-white">html</span>
            </div>
            <div className="bg-indigo-200 rounded flex p-4 pt-3 pb-2 items-center">
              <GrFormCheckmark className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
              <span className="title-font text-blue-400 font-medium text-white">html</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SkillsContent;
