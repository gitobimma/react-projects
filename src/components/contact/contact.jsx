import "./contact.css";
import { ContactForm } from "./contactForm";

export const Contact = () => {
  return (
    <div>
      <section id="contact-section">
        <div className="contact-title">
          <h2>Kontakt</h2>
        </div>
        <ContactForm />
      </section>
    </div>
  );
};
