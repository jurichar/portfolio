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
  faGears,
  faGem,
  faPuzzlePiece,
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
        <Tooltip title="Python" arrow>
          {icon(faPython)}
        </Tooltip>
        <Tooltip title="Style framework" arrow>
          {icon(faSass)}
        </Tooltip>
      </div>
      <div className="Icon_group_line">
        <Tooltip title="Ruby (on rails)" arrow>
          <div className="Icon">
            <FontAwesomeIcon id="Gem_icon" icon={faGem} size="2xl" />
          </div>
        </Tooltip>
        <Tooltip title="React TS" arrow>
          {icon(faReact)}
        </Tooltip>
        <Tooltip title="Figma" arrow>
          {icon(faFigma)}
        </Tooltip>
      </div>
      <div className="Icon_group_line">
        <Tooltip title="Databases / SQL" arrow>
          {icon(faDatabase)}
        </Tooltip>
        <Tooltip title="NodeJS" arrow>
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
        <Tooltip title="Kubernetes cluster" arrow>
          {icon(faDharmachakra)}
        </Tooltip>
        <Tooltip title="Git" arrow>
          {icon(faGithub)}
        </Tooltip>
      </div>
      <div className="Icon_group_line">
        <Tooltip title="Linux systems" arrow>
          {icon(faUbuntu)}
        </Tooltip>
        <Tooltip title="Containers" arrow>
          {icon(faDocker)}
        </Tooltip>
        <Tooltip title="Scripting" arrow>
          {icon(faTerminal)}
        </Tooltip>
      </div>
      <div className="Icon_group_line">
        <Tooltip title="CI / CD" arrow>
          {icon(faGears)}
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
      <div id="techs" className="Techs">
        {groups()}
      </div>
    </header>
  );
};

export default Techs;
