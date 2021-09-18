import React from "react";

const ProjectMain = () => {
  return (
    <div className="flex flex-wrap -m-4">
      <a href="/" key="" className="sm:w-1/2 w-100 p-4">
        <div className="flex relative">
          <img
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src=""
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-blue-200 bg-blue-300 opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-gray-600 mb-1">
              SubTitel
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-600 mb-3">
              Titel
            </h1>
            <p className="leading-relaxed">Description</p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectMain;
