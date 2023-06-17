import './Techs.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

const icon = () => {
    return (
        <div className="Icon">
            <FontAwesomeIcon icon={faReact} size="2xl" />
        </div>
    );
}

const iconGroup = () => {
    return (
        <div className="Icon_group">
            <div className="Icon_group_line">
                {icon()}
                {icon()}
            </div>
            <div className="Icon_group_line">
                {icon()}
                {icon()}
                {icon()}
            </div>
            <div className="Icon_group_line">
                {icon()}
                {icon()}
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
                    <p> This is the techs page</p>
                    {groups()}
            </div>
        </header>
    );
}

export default Techs;