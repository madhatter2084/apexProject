import React, { useState } from "react";
import "./Stats.css";
import axios from "../config/axios";
import Spinner from "../components/Spinner";

function Character() {
  const [platform, setPlatform] = useState("");
  const [user, setUser] = useState("");
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setPlatform(event.target.value);
  };

  const handleInput = (event) => {
    setUser(event.target.value);
  };

  const getStats = async () => {
    setIsLoading(true);
    const request = await axios.get(
      `bridge?auth=dN5M7fBTN7FCyZEWNlNj&player=${user}&platform=${platform}`
    );
    setStats(request.data);
    setIsLoading(false);
    return request;
  };

  console.log(stats);

  const renderStats = (
    <>
      <h1>{stats?.global?.name}</h1>
      <h3>Level: {stats?.global?.level}</h3>
      <br></br>
      BR RP: {stats?.global?.rank?.rankScore}
      <br></br>
      BR Rank: {stats?.global?.rank?.rankName} {stats?.global?.rank?.rankDiv}
      <br></br>
      <br></br>
      Arena RP: {stats?.global?.arena?.rankScore}
      <br></br>
      Arena Rank: {stats?.global?.arena?.rankName}
      <br></br>
      <br></br>
      Lifetime BR Kills: {stats?.total?.kills?.value}
      <br></br>
      Lifetime BR Damage: {stats?.total?.damage?.value}
    </>
  );

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
              placeholder="Gamertag/PSN ID/Steam ID/Origin ID"
              id="user"
              onChange={handleInput}
            />
          </div>
          <button
            onClick={getStats}
            disabled={isLoading}
            type="button"
            className="stats__btn"
          >
            <h2>Search</h2>
          </button>
        </form>

        <div className="stats__info">
          {isLoading ? <Spinner /> : renderStats}
        </div>
      </div>
    </div>
  );
}

export default Character;
