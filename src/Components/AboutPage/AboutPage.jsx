import React from "react";
// Import Components
import Title from "../Title";
import CounterSection from "../CounterSection";
import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const AboutPage = () => {
  return (
    <div className="about-page">
      <Title title="About us" />
      <AboutImage />
      <AboutText text={texts[0].text} />
      <CounterSection />
      <AboutText title={texts[1].title} text={texts[1].text} />
      <AboutText title={texts[2].title} text={texts[2].text} />
    </div>
  );
};

const texts = [
  {
    text: "Not everyone has the opportunity to build their future home, apartment or office. And this wonderful moment should give joy and happiness. But the harsh reality will inevitably interfere with your joy. When questions about the amount of bricks, tiles and paint begin to arise, happiness is often replaced by a headache. VIZIA is a group of architects who will help you find answers to them. We will turn your vision into reality! Any professional strives to complete his work efficiently and to the end. Where, then, do all these long-lived, carelessly done works come from, why does nothing ever give up on time? The answer is simple: due to the lack of communication between the customer and the contractor. They do not understand each other. The customer is convinced that he paid for the work, and nothing more is required of him. The contractor believes that this is not enough.",
  },
  {
    title: "Professional service",
    text: `The development of each project is a process. There are no "small" and "large" projects  in our business. Often, a "small" project is more difficult than a "large" one. And this means that each project needs to be given equal attention, and then the result will not disappoint. And also, to avoid disappointment, you need to plan everything in advance, this will help to avoid unnecessary actions and waste.`,
  },
  {
    title: "Project development",
    text: `The project development process is the same throughout the world, and only following its stages guarantees the result. The so-called "Design Algorithm" is a list of operations that must be performed for the successful implementation of the project. The system sequence and the technological scheme for performing these operations ensures the sequence of the process of coordinating positions, and, accordingly, the schedule of work. Complex positions are divided into many simple, easy to do components. The consistent implementation of these simple steps constitutes the project’s work cycle and leads to its successful completion.`,
  },
];

export default AboutPage;
