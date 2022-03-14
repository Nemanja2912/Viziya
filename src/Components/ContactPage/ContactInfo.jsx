import React from "react";
import MinemationText from "./../MinemationText/Minemationtext";

const ContactInfo = ({ content }) => {
  return (
    <div className="contact-info">
      <div className="number">
        <div>
          <p className="opacity">
            <MinemationText
              text={content.phoneLabel}
              animationName="fadeInUp"
              delay={0}
              duration={1000}
              overflowHidden
              scroll={false}
              windowHeight={90}
              scrollRepeat={false}
            />
          </p>
          <p>
            <MinemationText
              text={content.phone}
              animationName="fadeInUp"
              delay={0}
              duration={1000}
              overflowHidden
              scroll={false}
              windowHeight={90}
              scrollRepeat={false}
            />
          </p>
        </div>
      </div>
      <div className="email">
        <div>
          <p className="opacity">
            <MinemationText
              text={content.emailLabel}
              animationName="fadeInUp"
              delay={0}
              duration={1000}
              overflowHidden
              scroll={false}
              windowHeight={90}
              scrollRepeat={false}
            />
          </p>
          <p className="value">
            <MinemationText
              text={content.email}
              animationName="fadeInUp"
              delay={0}
              duration={1000}
              overflowHidden
              scroll={false}
              windowHeight={90}
              scrollRepeat={false}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
