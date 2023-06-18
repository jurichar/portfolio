import "./About.scss";

const eventData = [
  {
    date: "2017",
    title: "University Paris Diderot",
    description: "Event description goes here.",
  },
  {
    date: "2018",
    title: "Educational Engineer",
    description: "Event description goes here.",
  },
  {
    date: "2020",
    title: "School 42 Paris",
    description: "Event description goes here.",
  },
  {
    date: "2022",
    title: "Software Engineer",
    description: "Event description goes here.",
  },
  {
    date: "2023",
    title: "DevOps Engineer",
    description: "Event description goes here.",
  },
];

const Event = ({whichData}) => {
        console.log(typeof whichData);
    return (
      <div className="event">
        <div className="event-date">{eventData[whichData].date}</div>
        <div className="event-card">
          <span role="img" aria-label="rocket">
            🚀
          </span>
          <h3>{eventData[whichData].title}</h3>
          <p>{eventData[whichData].description}</p>
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
          <div className="timeline"></div>
          <div className="events">
                <div className="events_upper">
                <Event whichData={0} />
                <div id="middle_card">
                        <Event whichData={1} />
                </div>
                <Event whichData={2} />
                </div>
                <div className="events_lower">
                <Event whichData={3} />
                <Event whichData={4} />
                </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default About;
