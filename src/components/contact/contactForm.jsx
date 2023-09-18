import React, { useState } from "react";
import "../contact/contact.css";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="form-container">
      <form className="contactform" action="">
        <div className="formField">
          <label>Dein Name:</label>
          <input
            placeholder="Dein Name..."
            id="name"
            type="text"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="formField">
          <label>Deine Email:</label>
          <input
            placeholder="Deine Email..."
            id="email"
            type="email"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="formField">
          <label>Dein Nachricht:</label>
          <textarea
            placeholder="Deine Nachricht..."
            id="message"
            type="text"
            name="user_message"
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
