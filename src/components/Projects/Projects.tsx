import "./Projects.scss";

const Projects = ({ data }) => {
  return (
    <header className="Project-header">
      <div id="projects" className="Projects">
        <h1 className="title"> Works </h1>
        <div className="events">
          {data.map((event: any, key: any) => {
            return (
              <div className="event" key={key}>
                  <h3>{event.title}</h3>
                  <a target="_blank" href={event.link}>
                    <img className="event-image" src={event.image} alt={event.image_alt} />
                  </a>
                  <p>
                    {event?.description?.map((line: any, i: any) => (
                      <span key={i}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Projects;
