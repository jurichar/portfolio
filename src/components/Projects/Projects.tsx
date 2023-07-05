import { useState } from "react";
import "./Projects.scss";
import ReactMarkdown from 'react-markdown';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Projects = ({ data }) => {
  const isSmallScreen = window.innerWidth < 768;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [readmeContent, setReadmeContent] = useState("");

  const openModal = (readme) => {
    setReadmeContent(readme);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  }

  const fetchReadme = async (readmeUrl) => {
    try {
      const response = await fetch(readmeUrl);
      const text = await response.text();
      openModal(text);
    } catch (error) {
      console.error("Error fetching readme: ", error);
    }
  }

  return (
    <header className="Project-header">
      <div id="projects" className="Projects">
        <h1 className="title"> Works </h1>
        <div className="events">
          {data.map((event: any, key: any) => {
            return (
              <div className="event" key={key} onClick={() => fetchReadme(event.readme)}>
                <h3>{event.title}</h3>
                  <img className="event-image" src={event.image} alt={event.image_alt} />
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            animation: `${modalIsOpen ? 'appear' : ''} 0.3s`,
          },
          content: {
            backgroundColor: '#22577a',
            color: '#a8dadc',
            margin: '5vh 0 0 0',
            inset: isSmallScreen ? '20px' : '60px',
            border: 'none',
            borderRadius: '10px',
            animation: `${modalIsOpen ? 'appear' : ''} 0.3s`,

          }
        }}
      >
        <ReactMarkdown>{readmeContent}</ReactMarkdown>
      </Modal>
    </header>
  );
};

export default Projects;
