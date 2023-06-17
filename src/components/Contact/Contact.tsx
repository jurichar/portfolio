import './Contact.scss';

const Contact = () => {
    return (
        <header className="Contact-header">
                &#128679; Contact (in work) &#128679;
        <div id="contact" className="Contact">
                <h1> Contact </h1>
                <p> This is the contact page</p>
                <p> You can find my github page
                    <a id="github-link" href="https://www.github.com/jurichar" target="_blank" rel="noopener noreferrer"> here </a>
                </p>
                <p> You can find my linkedin page
                    <a id="linkedin-link" href="https://www.linkedin.com/in/julien-rchd/" target="_blank" rel="noopener noreferrer"> here </a>
                </p>
                <p> You can find my email
                    <a id="email-link" href="mailto: jurichar@student.42.fr" target="_blank" rel="noopener noreferrer"> here </a>
                </p>
        </div>
            </header>
    );
}

export default Contact;