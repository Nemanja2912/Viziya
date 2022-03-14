import React, { useState, useEffect } from "react";
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
import Loader from "./Components/Loader";

export const navMenuOpen = React.createContext();
export const lang = React.createContext();

function App() {
  const [navMenu, openNav] = useState(false);
  const [contentJSON, setContentJSON] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
  const [language, setLanguage] = useState("EN");

  const openingNavigation = () => {
    openNav(!navMenu);
  };

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/json/content.json")
      .then((res) => res.json())
      .then((data) => {
        setContentJSON(data);

        setIsLoaded(true);
      });
  }, []);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    // document.fonts.ready.then(function checkLoad() {
    //   if (document.fonts.check("1em Metronic Pro")) setFontLoaded(true);
    //   else checkLoad();
    // });

    document.fonts.load('1em "Metronic Pro"').then(() => {
      setFontLoaded(true);
    });
  }, []);

  return (
    <>
      {isLoaded && fontLoaded && (
        <navMenuOpen.Provider value={openingNavigation}>
          <lang.Provider value={language}>
            <div
              className=""
              style={{
                fontFamily: language === "RU" ? "Gotham Pro" : "Metronic Pro",
              }}
            >
              <Navigation
                black={location.pathname !== "/"}
                setLanguage={setLanguage}
                language={language}
                content={contentJSON[language].navigation}
              />
              <Route path="/projects">
                <ProjectPage content={contentJSON[language].project} />
              </Route>
              <Route path="/about">
                <AboutPage
                  content={contentJSON[language].about}
                  home={contentJSON[language].home}
                />
              </Route>
              <Route path="/services">
                <ServicesPage content={contentJSON[language].service} />
              </Route>
              <Route path="/contact">
                <ContactPage
                  nav={contentJSON[language].navigation}
                  content={contentJSON[language].contact}
                />
              </Route>
              <Route exact path="/">
                <HomePage content={contentJSON[language].home} />
              </Route>

              <NavigationMenu
                setLanguage={setLanguage}
                language={language}
                active={navMenu}
                content={contentJSON[language].navigation}
              />

              <Footer
                content={contentJSON[language].footer}
                nav={contentJSON[language].navigation}
              />
            </div>
          </lang.Provider>
        </navMenuOpen.Provider>
      )}
      <Loader loaded={isLoaded && fontLoaded} />
    </>
  );
}

export default App;
