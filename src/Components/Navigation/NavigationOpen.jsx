import React, { useContext } from "react";
// Import React Router
import { Link } from "react-router-dom";
// Import components
import ContactForm from "../ContactPage/ContactForm";
import Navigation from "./Navigation";
// Import Context
import { navMenuOpen } from "../../App";
import Button from "../Button";

const NavigationMenu = () => {
  const navMenu = useContext(navMenuOpen);

  return (
    <div className="navigation-menu">
      <div style={{ height: `${window.innerHeight}px` }} className="container">
        <Navigation close />
        <div className="nav-body">
          <div className="left">
            <div className="top">
              <div className="items-list">
                <Link to="/">
                  <p onClick={navMenu} className="item">
                    Home
                  </p>
                </Link>
                <Link to="/projects">
                  <p onClick={navMenu} className="item">
                    Projects
                  </p>
                </Link>
                <Link to="/about">
                  <p onClick={navMenu} className="item">
                    About us
                  </p>
                </Link>
                <Link to="/services">
                  <p onClick={navMenu} className="item">
                    Services
                  </p>
                </Link>
                <Link to="/contact">
                  <p onClick={navMenu} className="item">
                    Contact
                  </p>
                </Link>
              </div>
            </div>
            <div className="cont-info">
              <p className="desktop">office@viziya.rs</p>
              <p className="desktop">+7 (916) 45-34-33</p>
              <div className="mob">
                <Button text="Contact us" />
                <p className="opacity">© 1999 – 2021 Viziya</p>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="text">
              <p className="title">
                Leave a request{" "}
                <span className="hide">to start working together</span>
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationMenu;
