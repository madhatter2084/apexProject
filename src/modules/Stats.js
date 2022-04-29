import React from "react";
import "./Stats.css";

function Character() {
  return (
    <div className="stats">
      <div className="stats__box">
        <form autocomplete="off" name="platform">
          <div className="stats__platform">
            <input type="radio" id="pc" name="platform" value="PC" />
            <label for="pc">PC</label>
            <input type="radio" id="ps4" name="platform" value="PS4" />
            <label for="ps4">Playstation</label>
            <input type="radio" id="xbox" name="platform" value="X1" />
            <label for="xbox">XBox</label>
          </div>
          <div className="stats__gamerTag">
            <input
              type="text"
              placeholder="Gamertag/PSN ID/Steam ID"
              id="stats__text"
            />
          </div>
          <button type="submit" className="stats__btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default Character;
