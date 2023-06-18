import "./Techs.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faSass,
  faDocker,
  faUbuntu,
  faNodeJs,
  faGithub,
  faPython,
  faFigma,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faDharmachakra,
  faGem,
  faPuzzlePiece,
  faRobot,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";

const icon = (name) => {
  return (
    <div className="Icon">
      <FontAwesomeIcon icon={name} size="2xl" />
    </div>
  );
};

const iconGroup = () => {
  return (
    <div className="Icon_group">
      <div className="Icon_group_line">
        <Tooltip title="React / TS" arrow>
          {icon(faReact)}
        </Tooltip>
        <Tooltip title="scss / css" arrow>
          {icon(faSass)}
        </Tooltip>
      </div>
      <div className="Icon_group_line">
        <Tooltip title="Ruby" arrow>
            <div className="Icon">
                <FontAwesomeIcon id="Gem_icon" icon={faGem} size="2xl" />
            </div>
        </Tooltip>
        <Tooltip title="Python" arrow>
          {icon(faPython)}
        </Tooltip>
        <Tooltip title="Figma" arrow>
          {icon(faFigma)}
        </Tooltip>
      </div>
      <div className="Icon_group_line">
        <Tooltip title="Databases / SQL" arrow>
          {icon(faDatabase)}
        </Tooltip>
        <Tooltip title="PHP" arrow>
          {icon(faNodeJs)}
        </Tooltip>
      </div>
    </div>
  );
};

const iconGroup2 = () => {
    return (
        <div className="Icon_group">
      <div className="Icon_group_line">
        <Tooltip title="Kubernetes" arrow>
          {icon(faDharmachakra)}
        </Tooltip>
        <Tooltip title="Docker" arrow>
          {icon(faDocker)}
        </Tooltip>
      </div>
      <div className="Icon_group_line">
      <Tooltip title="Ubuntu" arrow>
          {icon(faUbuntu)}
        </Tooltip>
        <Tooltip title="Github / Git" arrow>
          {icon(faGithub)}
        </Tooltip>
        <Tooltip title="Scripting" arrow>
          {icon(faTerminal)}
        </Tooltip>
      </div>
      <div className="Icon_group_line">
        <Tooltip title="CI / CD" arrow>
          {icon(faRobot)}
        </Tooltip>
        <Tooltip title="Algorithms" arrow>
          {icon(faPuzzlePiece)}
        </Tooltip>
      </div>
    </div>
  );
};

const groups = () => {
  return (
    <div className="Groups">
      <div className="Left_group">
        <h1>web development</h1>
        {iconGroup()}
      </div>
      <div className="Right_group">
        <h1>tools & others</h1>
        {iconGroup2()}
      </div>
    </div>
  );
};

const Techs = () => {
  return (
    <header className="Techs-header">
      &#128679; Techs (in work) &#128679;
      <div id="techs" className="Techs">
        {groups()}
      </div>
    </header>
  );
};

export default Techs;
