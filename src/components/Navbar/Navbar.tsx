import React from "react";
import "./Navbar.scss";
import ScrollIntoView from "react-scroll-into-view";

const Navbar = () => {
  const [activeTab] = React.useState("");

  return (
      <div className="Navbar">
        <ScrollIntoView selector="#home">
          <div
            id="home-link"
            className={activeTab === "home" ? "active" : "home"}
          >
            HOME
          </div>
        </ScrollIntoView>
        <ScrollIntoView selector="#about">
          <div
            id="about-link"
            className={activeTab === "about" ? "active" : "about"}
          >
            ABOUT
          </div>
        </ScrollIntoView>
        <ScrollIntoView selector="#projects">
          <div
            id="projects-link"
            className={activeTab === "projects" ? "active" : "projects"}
          >
            WORKS
            </div>
        </ScrollIntoView>
        <ScrollIntoView selector="#techs">
          <div
            id="techs-link"
            className={activeTab === "techs" ? "active" : "techs"}
          >
            TECHS
            </div>
        </ScrollIntoView>
        <ScrollIntoView selector="#contact">
          <div
            id="contact-link"
            className={activeTab === "contact" ? "active" : "contact"}
          >
            CONTACT
            </div>
        </ScrollIntoView>
      </div>
  );
};

export default Navbar;
