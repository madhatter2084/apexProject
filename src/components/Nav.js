import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import burger from "../assets/burgerMenu.png";

function Nav() {
  function updateClass() {
    let nav = document.getElementById("navUl");
    nav.classList.toggle("nav__expanded");
  }

  function closeNav() {
    let nav = document.getElementById("navUl");
    nav.classList.remove("nav__expanded");
  }

  return (
    <div className="nav">
      <img
        src={burger}
        alt="menu icon"
        className="nav__burger"
        onClick={updateClass}
      />
      <ul className="nav__links" id="navUl">
        <li>
          <Link to="/" className="nav__link" onClick={closeNav}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/stats" className="nav__link" onClick={closeNav}>
            Stats
          </Link>
        </li>
        <li>
          <Link to="/map" className="nav__link" onClick={closeNav}>
            Map
          </Link>
        </li>
        <li>
          <Link to="/news" className="nav__link" onClick={closeNav}>
            News
          </Link>
        </li>

        <li>
          <Link to="/replicator" className="nav__link" onClick={closeNav}>
            Replicator
          </Link>
        </li>
        <li>
          <Link to="/shop" className="nav__link" onClick={closeNav}>
            Shop
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
