import "./App.css";
import AboutMe from "./Components/Layout/AboutMe";
import ContactMe from "./Components/Layout/ContactMe";
import Content from "./Components/Content";
import MySkills from "./Components/SkillsContent/MySkills";
import Navbar from "./Components/Layout/Navbar";
import Experiences from "./Components/Experiences/Experiences";

const App = () => {
  return (
    <main className="text-gray-400 bg-blue-100 body-font">
      <Navbar />
      <AboutMe />
      <Content />
      <MySkills />
      <Experiences />
      <ContactMe />
    </main>
  );
};

export default App;
