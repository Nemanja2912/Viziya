import React from "react";
import MinemationText from "./../MinemationText/Minemationtext";

const TextArea = ({ content }) => {
  return (
    <div className="text-area">
      <div className="text">
        <h4>
          <MinemationText
            text={content.formTitle[0]}
            animationName="fadeInUp"
            delay={0}
            duration={1000}
            overflowHidden
            scroll={true}
            windowHeight={90}
            scrollRepeat={false}
          />
          <MinemationText
            text={content.formTitle[1]}
            animationName="fadeInUp"
            delay={0}
            duration={1000}
            overflowHidden
            scroll={true}
            windowHeight={90}
            scrollRepeat={false}
          />
        </h4>
      </div>
      <div className="empty-box"></div>
    </div>
  );
};

export default TextArea;
