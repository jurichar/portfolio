import "./Projects.scss";

const Projects = ({ data }) => {
  return (
    <header className="About-header">
      <div id="projects" className="Projects">
        {data.map((event:any, key:any) => {
          return (
            <div className="Project" key={key}>
              <div className="Picture">
                <img src={event.image} alt="Project_gif" />
              </div>
              <div className="Description">
                <p> {event?.description?.map((line:any, i:any) =>
                    <span key={i}>
                        {line}
                        <br />
                    </span>
                    )} </p>
              </div>
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Projects;
