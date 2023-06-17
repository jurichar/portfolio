import React from "react";
import { Link } from "react-scroll";
import "./Navbar.scss";

const Navbar = () => {
  const [activeTab] = React.useState("");

  return (
    <nav className="container">
      <ul className="Navbar">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className={activeTab === "home" ? "active" : ""}
          >
            Julien Richard
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className={activeTab === "about" ? "active" : ""}
          >
            ABOUT ME
          </Link>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className={activeTab === "projects" ? "active" : ""}
          >
            PROJECTS
          </Link>
          <Link
            activeClass="active"
            to="techs"
            spy={true}
            smooth={true}
            duration={500}
            className={activeTab === "techs" ? "active" : ""}
          >
            TECHS
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className={activeTab === "contact" ? "active" : ""}
          >
            CONTACT
          </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
