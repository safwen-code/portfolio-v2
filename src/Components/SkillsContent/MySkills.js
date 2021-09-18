import React from "react";
import SkillsHeader from "./SkillsHeader";
import SkillsContent from "./SkillsContent";
const MySkills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <SkillsHeader />
        <SkillsContent />
      </div>
    </section>
  );
};

export default MySkills;
