import "./contact.css";
import { ContactForm } from "./contactForm";

export const Contact = () => {
  return (
    <div>
      <section id="contact-section">
        <div className="contact-content">
          <div className="contact-title">
            <h2>Kontakt</h2>
          </div>
          <p className="contact-text">
            Du hast eine Frage, ein Projekt oder du willst einfach nur mal Hallo
            sagen?
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};
