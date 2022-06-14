import React, { useState } from "react";
import "./Stats.css";
import axios from "../config/axios";
import Spinner from "../components/Spinner";

function Stats() {
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

  const ash = stats?.legends?.all?.Ash?.data || [];
  const bangalore = stats?.legends?.all?.Bangalore?.data || [];
  const bloodhound = stats?.legends?.all?.Bloodhound?.data || [];
  const caustic = stats?.legends?.all?.Caustic?.data || [];
  const crypto = stats?.legends?.all?.Crypto?.data || [];
  const fuse = stats?.legends?.all?.Fuse?.data || [];
  const gibby = stats?.legends?.all?.Gibraltar?.data || [];
  const horizon = stats?.legends?.all?.Horizon?.data || [];
  const lifeline = stats?.legends?.all?.Lifeline?.data || [];
  const loba = stats?.legends?.all?.Loba?.data || [];
  const maggie = stats?.legends?.all?.MadMaggie?.data || [];
  const mirage = stats?.legends?.all?.Mirage?.data || [];
  const newcastle = stats?.legends?.all?.Newcastle?.data || [];
  const octane = stats?.legends?.all?.Octane?.data || [];
  const pathfinder = stats?.legends?.all?.Pathfinder?.data || [];
  const rampart = stats?.legends?.all?.Rampart?.data || [];
  const revenant = stats?.legends?.all?.Revenant?.data || [];
  const seer = stats?.legends?.all?.Seer?.data || [];
  const valk = stats?.legends?.all?.Valkyrie?.data || [];
  const wattson = stats?.legends?.all?.Wattson?.data || [];
  const wraith = stats?.legends?.all?.Wraith?.data || [];

  const renderStats = (
    <>
      <div className="stats__tile stats__ranked">
        <h1>BR Ranked Stats</h1>
        <h3>BR RP: {stats?.global?.rank?.rankScore}</h3>
        <h3>
          BR Rank: {stats?.global?.rank?.rankName}{" "}
          {stats?.global?.rank?.rankDiv}
        </h3>
        <br></br>
        <h1>Arena Ranked Stats</h1>
        <h3>Arena RP: {stats?.global?.arena?.rankScore}</h3>
        <h3>Arena Rank: {stats?.global?.arena?.rankName}</h3>
      </div>
      <div className="stats__tile stats__account">
        <h1>Account Stats</h1>
        <h3>Lifetime BR Kills: {stats?.total?.kills?.value}</h3>
        <h3>Lifetime BR Damage: {stats?.total?.damage?.value}</h3>
      </div>
      <div className="stats__tile stats__selectedLegend">
        <h1>Selected Legend: {stats?.legends?.selected?.LegendName}</h1>
        <img
          className="stats__Icons"
          src={stats?.legends?.selected.ImgAssets?.icon}
          alt="Selected Legend Icon"
        ></img>
        {stats?.legends?.selected?.data.map((currentLegend, index) => (
          <h3 key={index}>
            {currentLegend?.name} : {currentLegend?.value}
          </h3>
        ))}
      </div>
      {/* ash */}
      <div className="stats__tile">
        <h1>ASH</h1>
        <img
          src={stats?.legends?.all?.Ash?.ImgAssets.icon}
          alt="Ash Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {ash.map((ash, index) => (
          <h3 key={index}>
            {ash.name} : {ash.value}
          </h3>
        ))}
      </div>
      {/* bang */}
      <div className="stats__tile">
        <h1>BANGALORE</h1>
        <img
          src={stats?.legends?.all?.Bangalore?.ImgAssets.icon}
          alt="Bangalore Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {bangalore.map((bang, index) => (
          <h3 key={index}>
            {bang.name} : {bang.value}
          </h3>
        ))}
      </div>
      {/* blood */}
      <div className="stats__tile">
        <h1>BLOODHOUND</h1>
        <img
          src={stats?.legends?.all?.Bloodhound?.ImgAssets.icon}
          alt="Bloodhound Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {bloodhound.map((blood, index) => (
          <h3 key={index}>
            {blood.name} : {blood.value}
          </h3>
        ))}
      </div>
      {/* caustic */}
      <div className="stats__tile">
        <h1>CAUSTIC</h1>
        <img
          src={stats?.legends?.all?.Caustic?.ImgAssets.icon}
          alt="Caustic Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {caustic.map((caustic, index) => (
          <h3 key={index}>
            {caustic.name} : {caustic.value}
          </h3>
        ))}
      </div>
      {/* crypto */}
      <div className="stats__tile">
        <h1>CRYPTO</h1>
        <img
          src={stats?.legends?.all?.Crypto?.ImgAssets.icon}
          alt="Crypto Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {crypto.map((crypto, index) => (
          <h3 key={index}>
            {crypto.name} : {crypto.value}
          </h3>
        ))}
      </div>
      {/* fuse */}
      <div className="stats__tile">
        <h1>FUSE</h1>
        <img
          src={stats?.legends?.all?.Fuse?.ImgAssets.icon}
          alt="Fuse Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {fuse.map((fuse, index) => (
          <h3 key={index}>
            {fuse.name} : {fuse.value}
          </h3>
        ))}
      </div>
      {/* gibby */}
      <div className="stats__tile">
        <h1>GIBRALTAR</h1>
        <img
          src={stats?.legends?.all?.Gibraltar?.ImgAssets.icon}
          alt="Gibraltar Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {gibby.map((gibby, index) => (
          <h3 key={index}>
            {gibby.name} : {gibby.value}
          </h3>
        ))}
      </div>
      {/* horizon */}
      <div className="stats__tile">
        <h1>HORIZON</h1>
        <img
          src={stats?.legends?.all?.Horizon?.ImgAssets.icon}
          alt="Horizon Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {horizon.map((horizon, index) => (
          <h3 key={index}>
            {horizon.name} : {horizon.value}
          </h3>
        ))}
      </div>
      {/* lifeline */}
      <div className="stats__tile">
        <h1>LIFELINE</h1>
        <img
          src={stats?.legends?.all?.Lifeline?.ImgAssets.icon}
          alt="Lifeline Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {lifeline.map((life, index) => (
          <h3 key={index}>
            {life.name} : {life.value}
          </h3>
        ))}
      </div>
      {/* loba */}
      <div className="stats__tile">
        <h1>LOBA</h1>
        <img
          src={stats?.legends?.all?.Loba?.ImgAssets.icon}
          alt="Loba Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {loba.map((loba, index) => (
          <h3 key={index}>
            {loba.name} : {loba.value}
          </h3>
        ))}
      </div>
      {/* magz */}
      <div className="stats__tile">
        <h1>MAD MAGGIE</h1>
        <img
          src={stats?.legends?.all?.MadMaggie?.ImgAssets.icon}
          alt="Mad Maggie Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {maggie.map((magz, index) => (
          <h3 key={index}>
            {magz.name} : {magz.value}
          </h3>
        ))}
      </div>
      {/* mirage */}
      <div className="stats__tile">
        <h1>MIRAGE</h1>
        <img
          src={stats?.legends?.all?.Mirage?.ImgAssets.icon}
          alt="Mirage Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {mirage.map((mirage, index) => (
          <h3 key={index}>
            {mirage.name} : {mirage.value}
          </h3>
        ))}
      </div>
      {/* newcastle */}
      <div className="stats__tile">
        <h1>NEWCASTLE</h1>
        <img
          src={stats?.legends?.all?.Newcastle?.ImgAssets.icon}
          alt="Newcastle Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {newcastle.map((newc, index) => (
          <h3 key={index}>
            {newc.name} : {newc.value}
          </h3>
        ))}
      </div>
      {/* octane */}
      <div className="stats__tile">
        <h1>OCTANE</h1>
        <img
          src={stats?.legends?.all?.Octane?.ImgAssets.icon}
          alt="Octane Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {octane.map((octane, index) => (
          <h3 key={index}>
            {octane.name} : {octane.value}
          </h3>
        ))}
      </div>
      {/* pathy */}
      <div className="stats__tile">
        <h1>PATHFINDER</h1>
        <img
          src={stats?.legends?.all?.Pathfinder?.ImgAssets.icon}
          alt="Pathfinder Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {pathfinder.map((pathy, index) => (
          <h3 key={index}>
            {pathy.name} : {pathy.value}
          </h3>
        ))}
      </div>
      {/* rampart */}
      <div className="stats__tile">
        <h1>RAMPART</h1>
        <img
          src={stats?.legends?.all?.Rampart?.ImgAssets.icon}
          alt="Rampart Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {rampart.map((ramp, index) => (
          <h3 key={index}>
            {ramp.name} : {ramp.value}
          </h3>
        ))}
      </div>
      {/* revenant */}
      <div className="stats__tile">
        <h1>REVENANT</h1>
        <img
          src={stats?.legends?.all?.Revenant?.ImgAssets.icon}
          alt="Revenant Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {revenant.map((rev, index) => (
          <h3 key={index}>
            {rev.name} : {rev.value}
          </h3>
        ))}
      </div>
      {/* seer */}
      <div className="stats__tile">
        <h1>SEER</h1>
        <img
          src={stats?.legends?.all?.Seer?.ImgAssets.icon}
          alt="Seer Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {seer.map((seer, index) => (
          <h3 key={index}>
            {seer.name} : {seer.value}
          </h3>
        ))}
      </div>
      {/* valk */}
      <div className="stats__tile">
        <h1>VALKYRIE</h1>
        <img
          src={stats?.legends?.all?.Valkyrie?.ImgAssets.icon}
          alt="Valkyrie Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {valk.map((valk, index) => (
          <h3 key={index}>
            {valk.name} : {valk.value}
          </h3>
        ))}
      </div>
      {/* wattson */}
      <div className="stats__tile">
        <h1>WATTSON</h1>
        <img
          src={stats?.legends?.all?.Wattson?.ImgAssets.icon}
          alt="Wattson Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {wattson.map((watts, index) => (
          <h3 key={index}>
            {watts.name} : {watts.value}
          </h3>
        ))}
      </div>
      {/* wraith */}
      <div className="stats__tile">
        <h1>WRAITH</h1>
        <img
          src={stats?.legends?.all?.Wraith?.ImgAssets.icon}
          alt="Wraith Character Icon"
          className="stats__Icons"
        ></img>
        <br></br>
        {wraith.map((wraith, index) => (
          <h3 key={index}>
            {wraith.name} : {wraith.value}
          </h3>
        ))}
      </div>
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
            type=""
            className="stats__btn"
          >
            <h2>Search</h2>
          </button>
        </form>
        <h1>{stats?.global?.name}</h1>
        <h3>Level: {stats?.global?.level}</h3>
      </div>
      <div className="stats__info">{isLoading ? <Spinner /> : renderStats}</div>
    </div>
  );
}

export default Stats;
