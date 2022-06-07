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
      <br></br>
      <h1>{stats?.global?.name}</h1>
      <h3>Level: {stats?.global?.level}</h3>
      <br></br>
      <h2>BR Ranked Stats</h2>
      <h3>BR RP: {stats?.global?.rank?.rankScore}</h3>
      <h3>
        BR Rank: {stats?.global?.rank?.rankName} {stats?.global?.rank?.rankDiv}
      </h3>
      <br></br>
      <h2>Arena Ranked Stats</h2>
      <h3>Arena RP: {stats?.global?.arena?.rankScore}</h3>
      <h3>Arena Rank: {stats?.global?.arena?.rankName}</h3>
      <br></br>
      <h2>Account Stats</h2>
      <h3>Lifetime BR Kills: {stats?.total?.kills?.value}</h3>
      <h3>Lifetime BR Damage: {stats?.total?.damage?.value}</h3>
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
              required
            />
          </div>
          <button
            onClick={getStats}
            disabled={isLoading}
            type="submit"
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
