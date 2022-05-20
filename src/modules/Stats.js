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
      `bridge?auth=${requests.API_KEY}&player=${user}&platform=${platform}`
    );
    setStats(request.data);
    console.log(request.data);
    return request;
  };

  console.log(stats);

  return (
    <div className="stats">
      <div className="stats__box">
        <form autoComplete="off" name="platforms">
          <div className="stats__platform" id="platform__menu">
            <input
              type="radio"
              id="pc"
              name="platform"
              value="PC"
              onChange={handleChange}
            />
            <label htmlFor="pc">PC</label>
            <input
              type="radio"
              id="ps4"
              name="platform"
              value="PS4"
              onChange={handleChange}
            />
            <label htmlFor="ps4">Playstation</label>
            <input
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
          <button onClick={getStats} type="submit" className="stats__btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Character;
