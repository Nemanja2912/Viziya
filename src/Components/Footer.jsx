import React from "react";
// Import images
import logo from "../assets/image/logo-white.svg";
import location from "../assets/image/location.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="left">
          <div>
            <img src={logo} className="logo" alt="" />
            <div className="location">
              <p>
                Vojvode stepe 141, <br /> Belgrade, Serbia
              </p>
              <img src={location} alt="" />
            </div>
          </div>
          <div className="created">
            <p className="opacity">Develop by</p>
            <p>Mine Dev</p>
          </div>
        </div>
        <div className="middle">
          <p>Home</p>
          <p>About us</p>
          <p>Our service</p>
          <p>Projects</p>
          <p>Contract</p>
        </div>
        <div className="right">
          <div className="box1">
            <p className="opacity">Our phone number</p>
            <p>+7 (916) 45-34-33</p>
          </div>
          <div className="box2">
            <div>
              <p className="opacity">Our e-mail</p>
              <p>office@viziyaarch.com</p>
            </div>
          </div>
          <div className="box3">
            <p>© 1999 – 2021 Viziya architecture</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
