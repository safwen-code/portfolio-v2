import React from "react";
import MainExp from "./MainExp";
import TopExp from "./TopExp";
const Experiences = () => {
  return (
    <section id="experiences" className="text-gray-400 bg-violet-400 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <TopExp />
        <MainExp />
      </div>
    </section>
  );
};

export default Experiences;
