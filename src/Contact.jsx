import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content column">
        <h2 className="section-title">Contact</h2>
        <p className="contact-subtitle"> feel free to reach out !</p>
        <div className="contact-buttons">
          <a href="https://www.linkedin.com/in/supawit-sutthiboriban" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/supawitgolf" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:golf.sutthi@outlook.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.instagram.com/gperse/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.facebook.com/gs.nymph/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;