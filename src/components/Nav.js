import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <ul className="nav__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/map">Map</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
        <li>
          <Link to="/leaderBoard">Leader Boards</Link>
        </li>
        <li>
          <Link to="/replicator">Replicator</Link>
        </li>
        <li>
          <Link to="/shop">Apex Shop</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
