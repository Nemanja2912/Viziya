import React from "react";
// Import components
import Title from "./../Title";
import ServicesCollapse from "./ServicesCollapse";
import ServicesAccordion from "./ServicesAccordion";

const ServicesPage = () => {
  return (
    <div className="services-page container">
      <Title title={"Our Services"} />
      <ServicesCollapse />
      <ServicesAccordion />
    </div>
  );
};

export default ServicesPage;
