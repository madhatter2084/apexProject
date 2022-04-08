import React, { useEffect, useState } from "react";
import axios from "../config/axios";
import requests from "../config/requests";
import "./Replicator.css";

function Replicator() {
  const [replicator, setReplicator] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchCraftingRotation);
      setReplicator(request.data);
      console.log(request.data);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="replicator">
      <div className="replicator__item_tile">
        <div className="replicator__image"></div>
        <div className="replicator__info">Here is a thing about a thing</div>
      </div>
    </div>
  );
}

export default Replicator;
