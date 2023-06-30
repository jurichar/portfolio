import "./Projects.scss";

const Projects = ({ data }) => {
  return (
    <div id="projects" className="FullSizeWrapper">
      <h1 className="Title">Titre</h1>
      <header className="Project-header">
        <div className="Projects">
          {data.map((event:any, key:any) => {
            return (
              <div className="Project" key={key}>
                <div className="Title">
                  <h3>{event.title}</h3>
                </div>
                <div className="Picture">
                  <img src={event.image} alt={event.image_alt} />
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
    </div>
  );
};

export default Projects;
