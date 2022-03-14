import React from "react";
import MinemationText from "./MinemationText/Minemationtext";

const Title = (props) => {
  return (
    <div className="title-univerzal container">
      <h1>
        <div className="text-box">
          <MinemationText
            text={props.title}
            animationName="fadeInUp"
            delay={200}
            duration={1000}
            overflowHidden
            scroll={false}
            windowHeight={90}
            scrollRepeat={false}
          />
        </div>
      </h1>
      <div className="empty-box"></div>
    </div>
  );
};

export default Title;
