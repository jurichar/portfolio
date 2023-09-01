import "./Contact.scss";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  //     window.location.href = `mailto:joricha01@gmail.com?subject=Contact from ${name} &body=${message} From: ${email}`;

  //     setName("");
  //     setEmail("");
  //     setMessage("");
  //   };

  const handleSubmit = (e) => {
    fetch("/api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "joricha01@gmail.com",
        message: "Salut !",
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log("Erreur:", error));
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
          <button type="submit" id="send-button">
            Send
          </button>
        </form>
      </div>
    </header>
  );
};

export default Contact;
