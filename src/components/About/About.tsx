import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const eventData = [
  {
    date: "2017",
    title: "University of Paris",
    description: "> Computer Science\n> Mathematics\n> Algorithms\n> Basic web dev",
    image: "src/assets/matrix_gif.gif",
  },
  {
    date: "2018",
    title: "Educational Engineer",
    description: "> Pedagogical Skills\n> Programming Instruction\n> Basic Robotics",
    image: "src/assets/matrix_gif.gif",
  },
  {
    date: "2020",
    title: "School 42 Paris",
    description: "> Peer Learning\n> C, C++ Programming\n> FullStack Development\n> Project-based Learning",
    image: "src/assets/matrix_gif.gif",
  },
  {
    date: "2022",
    title: "Software Engineer",
    description: "> Implementation of UX\n> Qt Framework\n> Software Development\n> User Interface Design",
    image: "src/assets/matrix_gif.gif",
  },
  {
    date: "2023",
    title: "DevOps Engineer",
    description: "> Continuous Integration\n> Continuous Deployment\n> Infrastructure as Code\n> MLOps ",
    image: "src/assets/matrix_gif.gif",
  },
];

const Event = ({ whichData }) => {
  console.log(typeof whichData);
  return (
    <div className="event">
      <div className="event-date">{eventData[whichData].date}</div>
      <div className="event-card">
        <img src={eventData[whichData].image} alt="About_gif" />
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
      &#128679; About (in work) &#128679;
      <div id="about" className="About">
        <div className="timeline-container">
          <div className="timeline">
          <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className="events">
            <div className="events_upper">
              <Event whichData={0} />
              <div id="middle_card">
                <Event whichData={2} />
              </div>
              <Event whichData={4} />
            </div>
            <div className="events_lower">
              <Event whichData={1} />
              <Event whichData={3} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default About;
