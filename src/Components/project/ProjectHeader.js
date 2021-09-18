import React from 'react'

import { BiCodeCurly } from "react-icons/bi";
const ProjectHeader = () => {
    return (
        <div className="flex flex-col w-full mb-20">
          <BiCodeCurly className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-blue-300">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
    )
}

export default ProjectHeader
