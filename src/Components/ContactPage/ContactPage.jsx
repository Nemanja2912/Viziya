import React from "react";
// Import image
import contactImage from "../../assets/image/contact-image.svg";
// Import components
import ContactInfo from "./ContactInfo";
import ContactTitle from "./ContactTitle";
import FullImage from "./../FullImage";
import TextArea from "./TextArea";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="contact-page container">
      <ContactTitle />
      <ContactInfo />
      <FullImage image={contactImage} />
      <TextArea />
      <ContactForm />
    </div>
  );
};

export default ContactPage;
