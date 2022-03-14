import React from "react";
import MinemationText from "./../MinemationText/Minemationtext";

const AccordionTitle = ({ title }) => {
  return (
    <div className="accordion-text">
      <h2>
        <MinemationText
          text={title[0]}
          animationName="fadeInUp"
          delay={200}
          duration={1000}
          overflowHidden
          scroll={true}
          windowHeight={90}
          scrollRepeat={false}
        />
        <MinemationText
          text={title[1]}
          animationName="fadeInUp"
          delay={200}
          duration={1000}
          overflowHidden
          scroll={true}
          windowHeight={90}
          scrollRepeat={false}
        />
      </h2>
      <div className="empty-box"></div>
    </div>
  );
};

export default AccordionTitle;
