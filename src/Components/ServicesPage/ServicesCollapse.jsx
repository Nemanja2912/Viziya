import React from "react";
// Import images
import collapse1 from "../../assets/image/collapse1.svg";
// Import components
import CollapseButton from "./CollapseButton";
import CollapseBody from "./CollapseBody";

const collapseText = [
  "Turnkey interior",
  "Interior design",
  "Architectural design",
  "Designer supervision",
];

const collapseTab = {
  image: collapse1,
  description:
    "This service includes 3D visualization, work plans, estimates and completion of the project. All in accordance with your preferences with minimum involvement of yours.",
  price: "75",
};

const ServicesCollapse = () => {
  return (
    <div className="services-collapse">
      <div className="button-tabs">
        {collapseText.map((text, index) => (
          <CollapseButton text={text} active={index === 0} />
        ))}
      </div>
      <CollapseBody
        image={collapseTab.image}
        description={collapseTab.description}
        price={collapseTab.price}
      />
    </div>
  );
};

export default ServicesCollapse;
