import "./App.scss";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Techs from "./components/Techs/Techs";
import { aboutData } from "../src/data/about.json";
import { projectsData } from "../src/data/projects.json";
import Cursor from "./components/Cursor/Cursor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const scrollToTop = () => {
    const element = document.getElementById("home");
    element.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <>
      <Cursor />
      <div className="content" id="content">
        <a href="#" className="back-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} size="2xl" />
        </a>
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
