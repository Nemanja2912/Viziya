import React from "react";
// Import components
import AccordionTitle from "./AccordionTitle";
import AccordionBox from "./AccordionBox";

const ServicesAccordion = ({ content }) => {
  return (
    <div className="services-accordion">
      <AccordionTitle title={content.accordionTitle} />

      {content.accordion?.map((item, itemIndex) => (
        <AccordionBox
          key={itemIndex}
          title={item.title}
          description={item.description}
          body={item.body}
        />
      ))}

      <div className="accordion-box">
        <div className="text">
          <div className="top">
            <p className="title"></p>
            <p className="description"></p>
          </div>
        </div>
        <div className="button"></div>
      </div>
    </div>
  );
};

export default ServicesAccordion;
