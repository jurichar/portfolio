import React from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";

const Navbar = () => {
  const [activeTab] = React.useState("");

  return (
    <nav className="container">
      <div className="Navbar">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            id="home-link"
            className={activeTab === "home" ? "active" : "home"}
          >
            Julien Richard
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            id="about-link"
            className={activeTab === "about" ? "active" : "about"}
          >
            ABOUT ME
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            id="projects-link"
            className={activeTab === "projects" ? "active" : "projects"}
          >
            PROJECTS
          </Link>
          <Link
            activeClass="active"
            to="techs"
            spy={true}
            smooth={true}
            duration={500}
            id="techs-link"
            className={activeTab === "techs" ? "active" : "techs"}
          >
            TECHS
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            id="contact-link"
            className={activeTab === "contact" ? "active" : "contact"}
          >
            CONTACT
          </Link>
      </div>
    </nav>
  );
};

export default Navbar;
