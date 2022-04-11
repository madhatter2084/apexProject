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
      {replicator?.map((title, index) => (
        <div className="replicator__item_tile" key={index}>
          <h1 className="replicator__item_type">{title?.bundle}</h1>
          <div className="replicator__card">
            {title.bundleContent.map((items, index) => (
              <div className="replicator__item_name" key={index}>
                {items?.item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Replicator;
