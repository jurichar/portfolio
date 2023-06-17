import './Techs.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faSass, faDocker, faUbuntu, faGitSquare } from "@fortawesome/free-brands-svg-icons";

const icon = (name) => {
    return (
        <div className="Icon">
            <FontAwesomeIcon icon={name} size="2xl" />
        </div>
    );
}

const iconGroup = () => {
    return (
        <div className="Icon_group">
            <div className="Icon_group_line">
                {icon(faReact)}
                {icon(faSass)}
            </div>
            <div className="Icon_group_line">
                {icon(faUbuntu)}
                {icon(faGitSquare)}
                {icon(faGitSquare)}
            </div>
            <div className="Icon_group_line">
                {icon(faDocker)}
                {icon(faGitSquare)}
            </div>
        </div>
    );
}

const groups = () => {
    return (
        <div className="Groups">
            {iconGroup()}
            {iconGroup()}
        </div>
    );
}

const Techs = () => {
    return (
        <header className="Techs-header">
            &#128679; Techs (in work) &#128679;
            <div id="techs" className="Techs">
                    {groups()}
            </div>
        </header>
    );
}

export default Techs;