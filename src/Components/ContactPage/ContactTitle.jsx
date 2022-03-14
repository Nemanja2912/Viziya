import React from "react";
// Import image
import map from "../../assets/image/map.svg";
import MinemationText from "./../MinemationText/Minemationtext";

const ContactTitle = ({ content }) => {
  return (
    <div className="title-section">
      <div className="title">
        <h1>
          <MinemationText
            text={content.title}
            animationName="fadeInUp"
            delay={200}
            duration={1000}
            overflowHidden
            scroll={false}
            windowHeight={90}
            scrollRepeat={false}
          />
        </h1>
        <p className="description">
          <MinemationText
            text={content.desc[0]}
            animationName="fadeInUp"
            delay={0}
            duration={1000}
            overflowHidden
            scroll={false}
            windowHeight={90}
            scrollRepeat={false}
          />
          <MinemationText
            text={content.desc[1]}
            animationName="fadeInUp"
            delay={200}
            duration={1000}
            overflowHidden
            scroll={false}
            windowHeight={90}
            scrollRepeat={false}
          />
        </p>
      </div>
      <div className="box2">
        <img src={map} alt="" />
      </div>
    </div>
  );
};

export default ContactTitle;
