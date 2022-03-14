import React from "react";
// Import Components
import Title from "../Title";
import CounterSection from "../CounterSection";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const AboutPage = ({ content, home }) => {
  return (
    <div className="about-page">
      <Title title={content.title} />
      <AboutImage content={content} />
      <AboutText text={content.mainText} content={content} />
      <CounterSection content={home} />
      <AboutText
        title={content.subtitle1}
        text={content.text1}
        content={content}
      />
      <AboutText
        title={content.subtitle2}
        text={content.text2}
        content={content}
      />
    </div>
  );
};

export default AboutPage;
