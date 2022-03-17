import React, { useEffect, useState } from "react";
import axios from "./axios";
import "./Map.css";
import requests from "./requests";

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
      <img
        src={mapData?.battle_royale?.current?.asset}
        alt={mapData?.battle_royale?.current?.map}
        className="map__image"
      />
      <div className="map__name">{mapData?.battle_royale?.current?.map}</div>
    </div>
  );
}

export default Map;
