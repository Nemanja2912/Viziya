import React from "react";
// Import components
import AccordionTitle from "./AccordionTitle";
import AccordionBox from "./AccordionBox";

const ServicesAccordion = () => {
  return (
    <div className="services-accordion">
      <AccordionTitle />

      {accordionList.map((item) => (
        <AccordionBox title={item.title} description={item.description} />
      ))}

      <div className="accordion-box">
        <div className="text">
          <p className="title"></p>
          <p className="description"></p>
        </div>
        <div className="button"></div>
      </div>
    </div>
  );
};

export default ServicesAccordion;

const accordionList = [
  {
    title: "BRIEFING",
    description:
      "Dividing land into functionality zones: playground, pool, barbeque etc. Delivered in the form of sketch.",
  },
  {
    title: "BRIEFING",
    description:
      "Dividing land into functionality zones: playground, pool, barbeque etc. Delivered in the form of sketch.",
  },
  {
    title: "BRIEFING",
    description:
      "Dividing land into functionality zones: playground, pool, barbeque etc. Delivered in the form of sketch.",
  },
  {
    title: "BRIEFING",
    description:
      "Dividing land into functionality zones: playground, pool, barbeque etc. Delivered in the form of sketch.",
  },
  {
    title: "BRIEFING",
    description:
      "Dividing land into functionality zones: playground, pool, barbeque etc. Delivered in the form of sketch.",
  },
  {
    title: "BRIEFING",
    description:
      "Dividing land into functionality zones: playground, pool, barbeque etc. Delivered in the form of sketch.",
  },
  {
    title: "BRIEFING",
    description:
      "Dividing land into functionality zones: playground, pool, barbeque etc. Delivered in the form of sketch.",
  },
];
