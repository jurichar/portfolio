import "./Contact.scss";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const notify = () => {
    if (
      name !== "" &&
      email !== "" &&
      message !== "" &&
      checkEmail(email) &&
      checkName(name) &&
      checkMessage(message)
    ) {
      toast.success("Email envoyé avec succès!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Veuillez remplir tous les champs!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const checkEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]{2,}\.[a-z]{2,4}$/;
    return regex.test(email);
  };

  const checkName = (name) => {
    const regex = /^[a-zA-Z0-9._-]{2,}$/;
    return regex.test(name);
  };

  const checkMessage = (message) => {
    const regex = /^[a-zA-Z0-9._-]{2,}$/;
    return regex.test(message);
  };

  const handleSubmit = (e) => {
    setButtonDisabled(true);
    e.preventDefault();
    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Erreur:", error));

    setName("");
    setEmail("");
    setMessage("");
    setTimeout(() => {
      setButtonDisabled(false);
    }, 10000);
  };

  return (
    <header className="Contact-header">
      <div id="contact" className="Contact">
        <form onSubmit={handleSubmit}>
          <h1> Contact </h1>
          <input
            type="text"
            id="name-input"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            id="email-input"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            id="message-input"
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            id="send-button"
            onClick={notify}
            disabled={isButtonDisabled}
            style={{ opacity: isButtonDisabled ? 0.5 : 1 }}
          >
            Send
          </button>
          <ToastContainer />
        </form>
      </div>
    </header>
  );
};

export default Contact;
