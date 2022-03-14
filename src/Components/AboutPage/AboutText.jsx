import React from "react";
import MinemationText from "./../MinemationText/Minemationtext";

const AboutText = (props) => {
  return (
    <div className="about-text container">
      {props.title ? (
        <h2>
          <MinemationText
            text={props.title}
            animationName="fadeInUp"
            delay={200}
            duration={1000}
            overflowHidden
            scroll={true}
            windowHeight={90}
            scrollRepeat={false}
          />
        </h2>
      ) : (
        ""
      )}
      <p className="text-wrapper">
        <MinemationText
          text={props.text}
          animationName="fadeInUp"
          delay={200}
          duration={1000}
          overflowHidden
          scroll={true}
          windowHeight={90}
          scrollRepeat={false}
        />
      </p>
    </div>
  );
};

export default AboutText;
