import "./App.scss";
// import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Techs from "./components/Techs/Techs";
import { aboutData } from "../src/data/about.json";
import { projectsData } from "../src/data/projects.json";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="content">
        <Home />
        <About data={aboutData} />
        <Projects data={projectsData} />
        <Techs />
        <Contact />
      </div>
    </>
  );
};

export default App;
