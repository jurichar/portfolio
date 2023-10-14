import "./Techs.scss";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import techs from "../../data/techs.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faSass,
  faDocker,
  faUbuntu,
  faVuejs,
  faGithub,
  faPython,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect, useRef } from "react";
import {
  faBrain,
  faDatabase,
  faDharmachakra,
  faGears,
  faGem,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";

const Techs = () => {
  const [currentTechs, setCurrentTechs] = useState(techs);
  const [opacity, setOpacity] = useState(1);

  const iconMap = {
    faReact: faReact,
    faSass: faSass,
    faDocker: faDocker,
    faUbuntu: faUbuntu,
    faVuejs: faVuejs,
    faGithub: faGithub,
    faPython: faPython,
    faFigma: faFigma,
    faDatabase: faDatabase,
    faDharmachakra: faDharmachakra,
    faGears: faGears,
    faGem: faGem,
    faBrain: faBrain,
    faTerminal: faTerminal,
  };

  const icon = (name, index) => {
    const isCenter = index === 1;
    return (
      <div
        key={index}
        className={`Icon ${isCenter ? "Icon--center" : ""}`}
        style={{ opacity: opacity }}
      >
        <FontAwesomeIcon icon={iconMap[name]} size="2xl" />
      </div>
    );
  };

  const rotateTechs = () => {
    setOpacity(0);
    setTimeout(() => {
      const lastTech = currentTechs[currentTechs.length - 1];
      const remainingTechs = currentTechs.slice(0, currentTechs.length - 1);
      setCurrentTechs([lastTech, ...remainingTechs]);
      setOpacity(1);
    }, 500);
  };

  const rotateInvertTechs = () => {
    setOpacity(0);
    setTimeout(() => {
      const firstTech = currentTechs[0];
      const remainingTechs = currentTechs.slice(1, currentTechs.length);
      setCurrentTechs([...remainingTechs, firstTech]);
      setOpacity(1);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      rotateTechs();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentTechs]);

  const iconGroup = () => {
    return (
      <div className="Icon_group">
        <button onClick={rotateInvertTechs} className="Icon_button">
          ←
        </button>
        {currentTechs.slice(0, 3).map((tech, index) => icon(tech.icon, index))}
        <button onClick={rotateTechs} className="Icon_button">
          →
        </button>
      </div>
    );
  };

  const centerTech = currentTechs[1];
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useIntersectionObserver(aboutRef, { threshold: 0.5 }, (entry) => {
    setIsVisible(entry.isIntersecting);
  });

  return (
    <header
      ref={aboutRef}
      className={`Techs-header ${isVisible ? "animate" : ""}`}
    >
      <div id="techs" className="Techs">
        <h1 className="title"> Techs </h1>
        {iconGroup()}
        <div className="Techs-text">
          <h1 className="Techs-title" style={{ opacity: opacity }}>
            {centerTech.name}
          </h1>
          <p
            className="Techs-description 
          "
            style={{ opacity: opacity }}
          >
            {centerTech.description}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Techs;
