import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <ul className="nav__links">
        <li>Home</li>
        <li>Map</li>
        <li>News</li>
        <li>Leader Boards</li>
        <li>Replicator</li>
        <li>Apex Shop</li>
      </ul>
    </div>
  );
}

export default Nav;
