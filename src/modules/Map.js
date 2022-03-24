import React, { useEffect, useState } from "react";
import axios from "../config/axios";
import "./Map.css";
import requests from "../config/requests";

function Map() {
  const [mapData, setMapData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchMapData);
      setMapData(request.data);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="map">
      <div className="brCurrent">
        <img
          src={mapData?.battle_royale?.current?.asset}
          alt={mapData?.battle_royale?.current?.map}
          className="map__image"
        />
        <div className="map__text">
          <h1>Battle Royale</h1>
          <h3 className="map__name">
            Current Map: {mapData?.battle_royale?.current?.map}
          </h3>
          <h3>
            Remaining Time: {mapData?.battle_royale?.current?.remainingTimer}{" "}
            (refresh to update)
          </h3>
          <h3 className="map__name">
            Up Next: {mapData?.battle_royale?.next?.map}
          </h3>
        </div>
      </div>
      <div className="arenaCurrent">
        <img
          src={mapData?.arenas?.current?.asset}
          alt={mapData?.arenas?.current?.map}
          className="map__image"
        />
        <div className="map__text">
          <h1>Arenas</h1>
          <h3 className="map__name">
            Current Map: {mapData?.arenas?.current?.map}
          </h3>
          <h3>
            Remaining Time: {mapData?.arenas?.current?.remainingTimer} (refresh
            to update)
          </h3>
          <h3 className="map__name">Up Next: {mapData?.arenas?.next?.map}</h3>
        </div>
      </div>
    </div>
  );
}

export default Map;
