import React from "react";
// Import Components
import HomeHero from "./HomeHero";
import HomeImageArea from "./HomeImageArea";
import HomeProjects from "./HomeProjects";
import HomeProjectSlider from "./HomeProjectSlider";
import CounterSection from "../CounterSection";

const HomePage = ({ content }) => {
  return (
    <div className="home-page">
      <HomeHero content={content} />
      <HomeProjects content={content} />
      <HomeProjectSlider content={content} />
      <CounterSection content={content} />
      <HomeImageArea content={content} />
    </div>
  );
};

export default HomePage;
