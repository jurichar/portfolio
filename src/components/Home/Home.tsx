import { useState, useEffect, useRef } from "react";
import "./Home.scss";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const letters = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
const phrase = "fullstack developper";

const icon = (name: IconProp, link: string) => {
  return (
    <div className="Icon">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={name} size="xl" />
      </a>
    </div>
  );
};

const Home = () => {
  const [title, setTitle] = useState(phrase);
  const intervalRef = useRef(0);

  const onMouseOver = () => {
    let iterations = 0;

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTitle(
        phrase
          .split("")
          .map((_, index) => {
            if (index < iterations) {
              return phrase[index];
            } else {
              return letters[Math.floor(Math.random() * 30)];
            }
          })
          .join("")
      );

      if (iterations >= phrase.length) clearInterval(intervalRef.current);

      iterations += 1 / 3;
    }, 40);
  };

  useEffect(() => {
    // Démarrez l'animation lors du montage du composant
    onMouseOver();

    // Répétez l'animation toutes les 5 secondes
    const intervalId = setInterval(onMouseOver, 5000);

    // Nettoyez l'intervalle lorsque le composant est démonté
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div id="home" className="Home">
      <header className="Home-header">
        <h1>
          <strong>
            Hi, <br /> I'm Julien Richard
          </strong>
        </h1>
        <br />
        <p>
          and I'm a&nbsp;
          <a id="interactive_title" data-value="" onMouseOver={onMouseOver}>
            {title}
          </a>
        </p>
        <div className="buttons">
          {icon(faGithubSquare, "https://github.com/jurichar/")}
          {icon(faLinkedin, "https://www.linkedin.com/in/julien-rchd/")}
          {icon(
            faFileAlt,
            "https://github.com/jurichar/jurichar.github.io/blob/c01860c6a2e4dbe4a89246711703aa29136083d7/public/CV.pdf"
          )}
        </div>
      </header>
    </div>
  );
};

export default Home;
