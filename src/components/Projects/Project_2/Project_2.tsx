import { useRef, useState } from "react";
import "../Projects.scss";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver.ts";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import Linkify from 'react-linkify';

const Project_2 = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectRef = useRef(null);
  const [opacity, setOpacity] = useState(1);

  useIntersectionObserver(projectRef, { threshold: 0.5 }, (entry) => {
    setIsVisible(entry.isIntersecting);
  });

  const projectData = data[2];

  const goToNextSlide = () => {
    setOpacity(0);
    setTimeout(() => {
      setOpacity(1);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectData.images.length);
    }, 300);
  };

  const goToPrevSlide = () => {
    setOpacity(0);
    setTimeout(() => {
      setOpacity(1);
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projectData.images.length) % projectData.images.length);
    }, 300);
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
      goToNextSlide();
    }
    if (touchEndX > touchStartX) {
      goToPrevSlide();
    }
  };

  return (
    <header ref={projectRef} className={`Project-header ${isVisible ? "animate" : ""}`}>
      <div id="projects" className="Projects">
        <h1 className="title">{projectData.title}</h1>
        <div className="content">
          <div className="content--description">
            <div className="content--paragraph">
              <Linkify>{projectData.description}</Linkify>
              <br />
              <br />
              <div className="learn-more">
                <a href={projectData.link} target="_blank" rel="noopener noreferrer">learn more {" "}</a>
                <div className="learn-more-arrow" >
                  <a href={projectData.link} target="_blank" rel="noopener noreferrer">→</a>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-container">
            <div className="arrows">
              <button className="arrow arrow-left" onClick={goToPrevSlide}>
                <SlArrowLeft />
              </button>
              <div
                className={`event-image`}
                style={{
                  opacity: opacity,
                  backgroundImage: `url(${projectData.images[currentImageIndex]})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              ></div>
              <button className="arrow arrow-right" onClick={goToNextSlide}>
                <SlArrowRight />
              </button>
            </div>
            <div className="menu">
              {projectData.images.map((_, index) => (
                <label
                  key={index}
                  className={`dot ${currentImageIndex === index ? "active" : ""}`}
                  onClick={() => setCurrentImageIndex(index)}
                ></label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Project_2;
