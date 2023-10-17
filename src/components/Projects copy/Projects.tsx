import { useRef, useState } from "react";
import "./Projects.scss";
import ReactMarkdown from "react-markdown";
import Modal from "react-modal";
import "github-markdown-css/github-markdown.css";
import useIntersectionObserver from "../../../hooks/useIntersectionObserver";

Modal.setAppElement("#root");

const Projects = ({ data }) => {
  const [isVisible, setIsVisible] = useState(false);
  const projectRef = useRef(null);

  useIntersectionObserver(projectRef, { threshold: 0.5 }, (entry) => {
    setIsVisible(entry.isIntersecting);
  });

  const isSmallScreen = window.innerWidth < 768;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [readmeContent, setReadmeContent] = useState("");

  const openModal = (readme) => {
    setReadmeContent(readme);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const fetchReadme = async (readmeUrl) => {
    try {
      const response = await fetch(readmeUrl);
      const text = await response.text();
      openModal(text);
    } catch (error) {
      console.error("Error fetching readme: ", error);
    }
  };

  return (
    <header
      ref={projectRef}
      className={`Project-header ${isVisible ? "animate" : ""}`}
    >
      {" "}
      <div id="projects" className="Projects">
        <h1 className="title"> Works </h1>
        <div className="events">
          {data.map((event: any, key: any) => {
            return (
              <div
                className="event"
                key={key}
                onClick={() => fetchReadme(event.readme)}
              >
                <h3>{event.title}</h3>
                <div
                  className="event-image"
                  style={{
                    backgroundImage: `url(${event.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
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
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            animation: `${modalIsOpen ? "appear" : ""} 0.3s`,
          },
          content: {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            margin: "5vh 0 0 0",
            inset: isSmallScreen ? "20px" : "60px",
            border: "none",
            borderRadius: "10px",
            animation: `${modalIsOpen ? "appear" : ""} 0.3s`,
          },
        }}
      >
        <div className="markdown-body" id="markdown-body">
          <ReactMarkdown>{readmeContent}</ReactMarkdown>
        </div>
      </Modal>
    </header>
  );
};

export default Projects;
