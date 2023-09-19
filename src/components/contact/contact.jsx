import "./contact.css";
import { ContactForm } from "./contactForm";

export const Contact = () => {
  return (
    <div>
      <section id="contact-section">
        <div className="contact-title">
          <h2>Kontakt</h2>
        </div>
        <p className="contact-text">
          Bitte nutze das untere Formular dazu, mich zu kontaktieren.
        </p>
        <ContactForm />
      </section>
    </div>
  );
};
