import "./About.scss";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useRef, useState } from "react";

const About = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useIntersectionObserver(aboutRef, { threshold: 0.5 }, (entry) => {
    setIsVisible(entry.isIntersecting);
  });

  return (
    <header
      ref={aboutRef}
      className={`About-header ${isVisible ? "animate" : ""}`}
    >
      <div id="about" className="About">
        <h1 className="title"> About </h1>
        <div className="events">
          {data.map((event: any, key: any) => {
            return (
              <div className="event" key={key}>
                <div className="event-date">{event.date}</div>
                <div className="event-card">
                  <img
                    className="image-card"
                    src={event.image}
                    alt={event.image_alt}
                  />
                  <h3>{event.title}</h3>
                  <p>
                    {event?.description?.map((line: any, i: any) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default About;
