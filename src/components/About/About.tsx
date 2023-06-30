import "./About.scss";

const About = ({data}) => {
  return (
    <header className="About-header">
      <div id="about" className="About">
        <div className="timeline-container">
          <h1 className="title"> About </h1>
          <div className="events">
            {data.map((event:any, key:any) => {
              return (
                <div className="event" key={key}>
                  <div className="event-date">{event.date}</div>
                  <div className="event-card">
                    <img className="image-card" src={event.image} alt={event.image_alt} />
                    <h3>{event.title}</h3>
                    <p>{event?.description?.map((line:any, i:any) => 
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      )}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </header>
  );
};

export default About;
