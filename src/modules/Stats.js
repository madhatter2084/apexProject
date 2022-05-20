import React, { useState } from "react";
import "./Stats.css";
import requests from "../config/requests";
import axios from "../config/axios";

function Character() {
  const [platform, setPlatform] = useState("");
  const [user, setUser] = useState("");
  const [stats, setStats] = useState([]);

  const handleChange = (event) => {
    setPlatform(event.target.value);
  };

  const handleInput = (event) => {
    setUser(event.target.value);
  };

  const getStats = async () => {
    const request = await axios.get(
      `bridge?auth=dN5M7fBTN7FCyZEWNlNj&player=${user}&platform=${platform}`
    );
    setStats(request.data);
    return request;
  };

  console.log(stats);

  return (
    <div className="stats">
      <div className="stats__box">
        <form autoComplete="off" name="platforms">
          <div className="stats__platform" id="platform__menu">
            <input
              className="radio"
              type="radio"
              id="pc"
              name="platform"
              value="PC"
              onChange={handleChange}
            />
            <label htmlFor="pc">PC</label>
            <input
              className="radio"
              type="radio"
              id="ps4"
              name="platform"
              value="PS4"
              onChange={handleChange}
            />
            <label htmlFor="ps4">Playstation</label>
            <input
              className="radio"
              type="radio"
              id="xbox"
              name="platform"
              value="X1"
              onChange={handleChange}
            />
            <label htmlFor="xbox">XBox</label>
          </div>
          <div className="stats__gamerTag">
            <input
              type="text"
              placeholder="Gamertag/PSN ID/Steam ID"
              id="user"
              onChange={handleInput}
            />
          </div>
          <button onClick={getStats} type="button" className="stats__btn">
            Search
          </button>
        </form>

        <div className="stats__info">
          BR RP: {stats?.global?.rank?.rankScore}
          <br></br>
          BR Rank: {stats?.global?.rank?.rankName}
          <br></br>
          Arena RP: {stats?.global?.arena?.rankScore}
          <br></br>
          Arena Rank: {stats?.global?.arena?.rankName}
        </div>
      </div>
    </div>
  );
}

export default Character;
