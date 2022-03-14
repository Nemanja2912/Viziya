import React from "react";
// Import components
import Title from "./../Title";
import ServicesCollapse from "./ServicesCollapse";
import ServicesAccordion from "./ServicesAccordion";

const ServicesPage = ({ content }) => {
  return (
    <div className="services-page container">
      <Title title={content.title} />
      <ServicesCollapse
        content={content.collapse}
        priceTitle={content.priceTitle}
        note={content.note}
      />
      <ServicesAccordion content={content} />
    </div>
  );
};

export default ServicesPage;
