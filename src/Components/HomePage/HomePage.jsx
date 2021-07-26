import React from "react";
// Import Components
import HomeHero from "./HomeHero";
import HomeImageArea from "./HomeImageArea";
import HomeProjects from "./HomeProjects";
import HomeProjectSlider from "./HomeProjectSlider";
import CounterSection from "../CounterSection";

const HomePage = () => {
  return (
    <div className="home-page">
      <HomeHero />
      <HomeProjects />
      <HomeProjectSlider />
      <CounterSection />
      <HomeImageArea />
    </div>
  );
};

export default HomePage;
