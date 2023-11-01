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
  const [opacity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);
  const [swipeClass, setSwipeClass] = useState('swipe-in-right');

  const updateCurrentTechs = (newIndex) => {
    const prev = newIndex === 0 ? techs.length - 1 : newIndex - 1;
    const next = newIndex === techs.length - 1 ? 0 : newIndex + 1;
    const newCurrentTechs = [techs[prev], techs[newIndex], techs[next]];
    setCurrentTechs(newCurrentTechs);
    setCurrentImageIndex(newIndex);
  };

  const handleDotClick = (index) => {
    updateCurrentTechs(index);
  };

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

  const rotateTechs = () => {
    setSwipeClass('swipe-out-left');
    setTimeout(() => {
      const newIndex = (currentImageIndex + 1) % techs.length;
      updateCurrentTechs(newIndex);
      setSwipeClass('swipe-in-right');
    }, 500);
  };

  const rotateInvertTechs = () => {
    setSwipeClass('swipe-out-right');
    setTimeout(() => {
      const newIndex = (currentImageIndex - 1 + techs.length) % techs.length;
      updateCurrentTechs(newIndex);
      setSwipeClass('swipe-in-left');
    }, 500);
  };

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchEndX < touchStartX) {
      rotateTechs();
    }
    if (touchEndX > touchStartX) {
      rotateInvertTechs();
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    updateCurrentTechs(currentImageIndex);
  }, []);

  const iconGroup = () => {
    const numIcons = isLargeScreen ? 5 : 3;
    const centerIndex = Math.floor(numIcons / 2);
    const start = (currentImageIndex - centerIndex + techs.length) % techs.length;
    const iconsToShow = Array.from({ length: numIcons }, (_, i) => {
      return techs[(start + i) % techs.length];
    });

    return (
      <div className="Icon_group">
        {iconsToShow.map((tech, index) =>
          icon(tech.icon, index, index === centerIndex))}
      </div>
    );
  };


  const icon = (name, index, isCenter) => {
    return (
      <div
        key={index}
        className={`Icon ${isCenter ? (isLargeScreen ? "Icon--center-large" : "Icon--center") : ""} ${swipeClass}`}
      >
        <FontAwesomeIcon icon={iconMap[name]} size="2xl" />
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
        <div className="Techs-content" onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}>
          <button className="flickity-button flickity-prev-next-button previous" type="button" aria-label="Previous" onClick={rotateInvertTechs}>
            <svg className="flickity-button-icon" viewBox="0 0 100 100">
              <path d="M 10,50 L 60,100 L 65,95 L 20,50  L 65,5 L 60,0 Z" className="arrow">
              </path>
            </svg>
          </button>
          <div className={`Techs-text ${swipeClass}`}>
            <h1 className="Techs-title" style={{ opacity: opacity }}>
              <span className="Techs-title-name">{centerTech.name}</span>{" "}
              <span className="Techs-title-category">{centerTech.category}</span>
            </h1>
            <br />
            <p className="Techs-experience" style={{ opacity: opacity }}>
              {centerTech.experience}
            </p>
          </div>
          <button className="flickity-button flickity-prev-next-button next" type="button" aria-label="Next" onClick={rotateTechs}>
            <svg className="flickity-button-icon" viewBox="0 0 100 100">
              <path d="M 10,50 L 60,100 L 65,95 L 20,50  L 65,5 L 60,0 Z" className="arrow" transform="translate(100, 100) rotate(180) ">
              </path>
            </svg>
          </button>
        </div>
        <div className="menu">
          {techs.map((_, index) => (
            <label
              key={index}
              className={`dot ${currentImageIndex === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></label>
          ))}
        </div>
      </div>
    </header >
  );
};

export default Techs;
