import React from "react";
// Import image
import contactImage from "../../assets/image/contact-image.svg";
// Import components
import ContactInfo from "./ContactInfo";
import ContactTitle from "./ContactTitle";
import FullImage from "./../FullImage";
import TextArea from "./TextArea";
import ContactForm from "./ContactForm";

const ContactPage = ({ nav, content }) => {
  return (
    <div className="contact-page container">
      <ContactTitle content={content} />
      <ContactInfo content={content} />
      <FullImage image={contactImage} content={content} />
      <TextArea content={content} />
      <ContactForm content={nav} />
    </div>
  );
};

export default ContactPage;
