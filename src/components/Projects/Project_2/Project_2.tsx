import { useRef, useState } from "react";
import "../Projects.scss";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

const Project_2 = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectRef = useRef(null);

  useIntersectionObserver(projectRef, { threshold: 0.5 }, (entry) => {
    setIsVisible(entry.isIntersecting);
  });

  const projectData = data[2];

  const goToNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectData.images.length);
  };

  const goToPrevSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projectData.images.length) % projectData.images.length);
  };

  return (
    <header ref={projectRef} className={`Project-header ${isVisible ? "animate" : ""}`}>
      <div id="projects" className="Projects">
        <h1 className="title">{projectData.title}</h1>
        <div>
          <p>
            {projectData.description.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </div>
        <div className="slider-container">
          <div className="menu">
            {projectData.images.map((_, index) => (
              <label
                key={index}
                className={`dot ${currentImageIndex === index ? "active" : ""}`}
                onClick={() => setCurrentImageIndex(index)}
              ></label>
            ))}
          </div>
          <div className="arrows">
            <button className="arrow arrow-left" onClick={goToPrevSlide}>
              <FontAwesomeIcon icon={faCaretLeft} />
            </button>
            <div
              className="event-image fade"
              style={{
                backgroundImage: `url(${projectData.images[currentImageIndex]})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "black"
              }}
            ></div>
            <button className="arrow arrow-right" onClick={goToNextSlide}>
              <FontAwesomeIcon icon={faCaretRight} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Project_2;
