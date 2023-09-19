import React, { useState } from "react";
import "../contact/contact.css";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nak7ltb",
        "template_260aizo",
        e.target,
        "9rOKws-wj2M5D1Ny9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="form-container">
      <form className="contactform" onSubmit={sendEmail}>
        <div className="formField">
          <label>Dein Name:</label>
          <input
            placeholder="Dein Name..."
            required
            id="name"
            type="text"
            name="from_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="formField">
          <label>Deine Email:</label>
          <input
            placeholder="Deine Email..."
            required
            id="email"
            type="email"
            name="email_from"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formField">
          <label>Dein Nachricht:</label>
          <textarea
            placeholder="Deine Nachricht..."
            required
            id="message"
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            cols={40}
          />
        </div>

        <button className="submit-button">Senden</button>
      </form>
    </div>
  );
};
