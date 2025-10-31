import React from "react";
import "../styles/contact.css";

export const Contact = () => (
  <section className="contact-section">
    <h2>Entrons en Contact</h2>
    <p className="contact-intro">
     Discutons ! Un projet en tête ? Envie de brainstormer ou juste de faire connaissance ? Écris-moi, je suis là.
    </p>

    <div className="contact-links">
      <a
        href="mailto:Wilfried.gomesfortes@gmail.com"
        className="contact-card neon-border"
      >
        <i className="fa-solid fa-envelope"></i>
        <span>Email</span>
      </a>

      <a
        href="https://github.com/Willygo06"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card neon-border"
      >
        <i className="fa-brands fa-github"></i>
        <span>GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/wilfried-gomes-fortes-610575326/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-card neon-border"
      >
        <i className="fa-brands fa-linkedin"></i>
        <span>LinkedIn</span>
      </a>
    </div>

    <p className="contact-footer">
      © Merci pour ta visite ! 
    </p>
  </section>
);
