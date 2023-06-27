import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const eventData = [
  {
    date: "2017",
    title: "University of Paris",
    description: "> Computer Science\n> Mathematics\n> Algorithms\n> Basic web dev",
    image: "/isometric.png",
  },
  {
    date: "2018",
    title: "Educational Engineer",
    description: "> Pedagogical Skills\n> Programming Instruction\n> Basic Robotics",
    image: "/school.png",
  },
  {
    date: "2020",
    title: "School 42 Paris",
    description: "> Peer Learning\n> C, C++ Programming\n> FullStack Development\n> Project-based Learning",
    image: "/42_school.png",
  },
  {
    date: "2022",
    title: "Software Engineer",
    description: "> Implementation of UX\n> Qt Framework\n> Software Development\n> Low-Level",
    image: "/software.png",
  },
  {
    date: "2023",
    title: "DevOps Engineer",
    description: "> Continuous Integration\n> Continuous Deployment\n> Infrastructure as Code\n> MLOps ",
    image: "/devops.png",
  },
];

const Event = ({ whichData }) => {
  console.log(typeof whichData);
  return (
    <div className="event">
      <div className="event-date">{eventData[whichData].date}</div>
      <div className="event-card">
        <img className="image-card" src={eventData[whichData].image} alt="About_gif" />
        <h3>{eventData[whichData].title}</h3>
        <p>{eventData[whichData].description.split('\n').map((line, i) => 
            <span key={i}>
              {line}
              <br />
            </span>
          )}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <header className="About-header">
      <div id="about" className="About">
        <div className="timeline-container">
          <div className="events">
              <Event whichData={4} />
              <Event whichData={3} />
              <Event whichData={2} />
              <Event whichData={1} />
              <Event whichData={0} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default About;
