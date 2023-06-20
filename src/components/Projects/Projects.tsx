import './Projects.scss';

const Project = (title, description, image) => {
    const content = {
        title: title,
        description: description,
        image: image
    };
    return (
        <div className="Project">
            <h1 className="Title"> { content.title } </h1>
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
                    { Project("Project 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus, diam ac scelerisque laoreet, enim libero imperdiet erat, ac tempus.", "public/assets/matrix_gif.gif") }
                    { Project("Project 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus, diam ac scelerisque laoreet, enim libero imperdiet erat, ac tempus.", "public/assets/matrix_gif.gif") }
                    { Project("Project 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum luctus, diam ac scelerisque laoreet, enim libero imperdiet erat, ac tempus.", "public/assets/matrix_gif.gif") }
            </div>
        </header>
    );
}

export default Projects;