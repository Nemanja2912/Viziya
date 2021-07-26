import React from "react";
import Button from "../Button";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="name">
        <input type="name" placeholder="Your name" />
      </div>
      <div className="email">
        <input type="email" placeholder="Your email" />
      </div>
      <div className="message">
        <input type="message" placeholder="Your message" />
      </div>
      <div className="empty-box"></div>
      <div className="button-section">
        <Button text="Send" />
      </div>
      <div className="empty-box eb2"></div>
    </div>
  );
};

export default ContactForm;
