import React, { useState } from "react";
import axios from "axios";

import CheckMark from "../../assets/image/checkmark.svg";

const ContactForm = ({ content }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [mailSent, setMailSent] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = (e) => {
    e.preventDefault();

    console.log(`name: ${name}, email: ${email}, message: ${message}`);

    axios({
      method: "post",
      url: process.env.PUBLIC_URL + "/form/index.php",
      headers: { "content-type": "application/json" },
      data: {
        name: name,
        email: email,
        message: message,
      },
    })
      .then((result) => {
        setMailSent(result.data.sent);
      })
      .catch((error) => {
        setError(error.message);

        console.log("error:", error);
      });
  };
  return (
    <form className="contact-form" action="#" onSubmit={sendMessage}>
      <div className="name">
        <input
          id="name"
          name="name"
          type="text"
          placeholder={content.formName}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="email">
        <input
          id="email"
          name="email"
          type="email"
          placeholder={content.formEmail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="message">
        <input
          id="message"
          name="message"
          type="message"
          placeholder={content.formMessage}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <div className="empty-box"></div>
      <div className="button-section">
        <button type="submit" className="button">
          {mailSent ? <img src={CheckMark} alt="" /> : content.send}
        </button>
      </div>
      <div className="empty-box eb2"></div>
    </form>
  );
};

export default ContactForm;
