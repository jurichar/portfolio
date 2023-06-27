import './Projects.scss';

const Project = (description, image) => {
    const content = {
        description: description,
        image: image
    };
    return (
        <div className="Project">
            <div className="Picture">
                <img src={ content.image } alt="Project_gif" />
            </div>
            <div className="Description">
                <p> { content.description }</p>
            </div>
        </div>
    );
}

const Projects = () => {
    return (
        <header className="About-header">
            <div id="projects" className="Projects">
                    { Project("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus, diam ac scelerisque laoreet, enim libero imperdiet erat, ac tempus.", "/matrix_gif.gif") }
                    { Project("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus, diam ac scelerisque laoreet, enim libero imperdiet erat, ac tempus.", "/matrix_gif.gif") }
                    { Project("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus, diam ac scelerisque laoreet, enim libero imperdiet erat, ac tempus.", "/matrix_gif.gif") }
            </div>
        </header>
    );
}

export default Projects;