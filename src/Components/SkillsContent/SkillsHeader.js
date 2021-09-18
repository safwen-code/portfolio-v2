import React from 'react'

import { AiOutlineCoffee } from "react-icons/ai";
const SkillsHeader = () => {
    return (
        <div className="text-center mb-20">
          <AiOutlineCoffee className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font  text-blue-300 mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
    )
}

export default SkillsHeader
