import "./About.scss";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import { useRef, useState } from "react";

interface Event {
  date: string;
  title: string;
  at: string;
  description: string;
  skills: string;
  image: string;
  image_alt: string;
}

interface AboutData {
  aboutData: Event[];
}

const About = ({ aboutData }: AboutData) => {
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
      {" "}
      <div id="about" className="About">
        <h1 className="title"> About </h1>
        <div className="line"></div>
        <div className="events">
          {aboutData.map((event: Event, key: number) => {
            return (
              <div className="event" key={key}>
                <div className="event-date">{event.date}</div>
                <div className="event-card">
                  <div
                    className="event-image"
                    style={{
                      backgroundImage: `url(${event.image})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <h3>
                    <span>
                      {event.title}
                    </span>
                    <br />
                    <span className="event-at">
                      {" @"}
                      {event.at}
                    </span>
                  </h3>
                  <p className="event-description">
                    {event?.description}
                  </p>
                  <br />
                  <p className="event-skills">
                    <span>Skills: </span>
                    {event?.skills}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header >
  );
};

export default About;
