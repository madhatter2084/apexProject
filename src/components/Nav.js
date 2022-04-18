import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <ul className="nav__links">
        <li>
          <Link to="/" className="nav__link">
            Home
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
          <Link to="/stats" className="nav__link">
            Stats
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
