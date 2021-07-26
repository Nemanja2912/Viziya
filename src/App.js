import React, { useState } from "react";
// Import SCSS
import "./css/style.css";
// Import React Router
import { Route, useLocation } from "react-router-dom";
// Import Components
import HomePage from "./Components/HomePage/HomePage";
import ProjectPage from "./Components/ProjectPage/ProjectPage";
import Footer from "./Components/Footer";
import Navigation from "./Components/Navigation/Navigation";
import ContactPage from "./Components/ContactPage/ContactPage";
import ServicesPage from "./Components/ServicesPage/ServicesPage";
import AboutPage from "./Components/AboutPage/AboutPage";
import NavigationMenu from "./Components/Navigation/NavigationOpen";

export const navMenuOpen = React.createContext();

function App() {
  const [navMenu, openNav] = useState(false);

  const openingNavigation = () => {
    openNav(!navMenu);
  };

  const location = useLocation();

  console.log("test2", location.pathname);

  return (
    <navMenuOpen.Provider value={openingNavigation}>
      <div className="">
        <Navigation black={location.pathname !== "/"} />
        <Route path="/projects">
          <ProjectPage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/services">
          <ServicesPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        {navMenu ? <NavigationMenu /> : ""}
        <Footer />
      </div>
    </navMenuOpen.Provider>
  );
}

export default App;
