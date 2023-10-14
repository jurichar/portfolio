import "./Techs.scss";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import techs from "../../data/techs.json";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faSass,
  faApple,
  faPython,
  faVuejs,
  faJava,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faDharmachakra,
  faGears,
  faShieldAlt,
  faSquareRootAlt,
} from "@fortawesome/free-solid-svg-icons";

const Techs = () => {
  const [currentTechs, setCurrentTechs] = useState(techs);
  const [opacity, setOpacity] = useState(1);

  const iconMap = {
    faReact: faReact,
    faVuejs: faVuejs,
    faSass: faSass,
    faApple: faApple,
    faPython: faPython,
    faJava: faJava,
    faDatabase: faDatabase,
    faShieldAlt: faShieldAlt,
    faDocker: faDocker,
    faDharmachakra: faDharmachakra,
    faGears: faGears,
    faSquareRootAlt: faSquareRootAlt,
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
        <div className="separator-pointer"></div>
        <div className="Techs-text">
          <h1 className="Techs-title" style={{ opacity: opacity }}>
            <span className="Techs-title-name">{centerTech.name}</span> :{" "}
            <span className="Techs-title-category">{centerTech.category}</span>
          </h1>
          <br />
          <p className="Techs-experience" style={{ opacity: opacity }}>
            {centerTech.experience}
          </p>
        </div>
      </div>
    </header>
  );
};

export default Techs;
