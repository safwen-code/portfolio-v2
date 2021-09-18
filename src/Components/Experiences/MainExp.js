import React from 'react'
import { VscTerminal } from "react-icons/vsc";
const MainExp = () => {
    return (
        <div className="flex flex-wrap -m-4">
       
          <div className="p-4 md:w-1/2 w-full">
            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <VscTerminal className="block w-8 text-gray-500 mb-4" />
              <p className="leading-relaxed mb-6">Quote</p>
              <div className="inline-flex items-center">
                <img
                  alt="testimonial"
                  src="/"
                  className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                />
                <span className="flex-grow flex flex-col pl-4 ">
                  <span className="title-font font-medium  text-white">
                    Name
                  </span>
                  <span className="text-sm text-gray-500  uppercase">
                    Company
                  </span>
                </span>
              </div>
            </div>
          </div>
        
      </div>
    )
}

export default MainExp
