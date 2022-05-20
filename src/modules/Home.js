import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__tile">
        <div className="home__button_grp">
          <Link to="/stats">
            <button className="home__button home__stats">
              <h1>Stats</h1>
            </button>
          </Link>
          <Link to="/map">
            <button className="home__button home__map">
              <h1>Map</h1>
            </button>
          </Link>
          <Link to="/news">
            <button className="home__button home__news">
              <h1>News</h1>
            </button>
          </Link>
          <Link to="/replicator">
            <button className="home__button home__replicator">
              <h1>Replicator</h1>
            </button>
          </Link>
          <Link to="/shop">
            <button className="home__button home__shop">
              <h1>Shop</h1>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
