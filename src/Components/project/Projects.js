import React from "react";
import ProjectMain from "./ProjectMain";
import ProjectHeader from "./ProjectHeader";
const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-violet-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <ProjectHeader />
        <ProjectMain />
      </div>
    </section>
  );
};

export default Projects;
