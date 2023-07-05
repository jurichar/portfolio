import React, { useState } from "react";
import "./Projects.scss";
import ReactMarkdown from 'react-markdown';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Projects = ({ data }) => {
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
            backgroundColor: '#ffe8d6',
            color: '#997461',
            inset: '60px',
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
