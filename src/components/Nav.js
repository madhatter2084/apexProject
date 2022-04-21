import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import burger from "../assets/burgerMenu.png";

function Nav() {
  function updateClass() {
    let nav = document.getElementById("navUl");
    nav.classList.toggle("nav__expanded");
  }

  return (
    <div className="nav" id="nav">
      <img
        src={burger}
        alt="menu icon"
        className="nav__burger"
        onClick={updateClass}
      />
      <ul className="nav__links" id="navUl">
        <li>
          <Link to="/" className="nav__link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/stats" className="nav__link">
            Stats
          </Link>
        </li>
        <li>
          <Link to="/map" className="nav__link">
            Map
          </Link>
        </li>
        <li>
          <Link to="/news" className="nav__link">
            News
          </Link>
        </li>

        <li>
          <Link to="/replicator" className="nav__link">
            Replicator
          </Link>
        </li>
        <li>
          <Link to="/shop" className="nav__link">
            Shop
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
