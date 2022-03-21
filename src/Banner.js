import React from "react";
import "./Banner.css";
import logo from "./assets/apexLogo.png";

function Banner() {
  return (
    <header className="banner">
      <img src={logo} alt="Apex Legends Logo" className="banner__logo" />
    </header>
  );
}

export default Banner;
