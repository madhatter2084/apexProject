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
      {replicator?.map((repContent, index) => (
        <div className="replicator__item_tile" key={index}>
          <h1 className="replicator__item_type">{repContent?.bundleType}</h1>
          <div className="replicator__card">
            {repContent.bundleContent.map((items, bIndex) => (
              <div className="" key={bIndex}>
                <div className="replicator__item">{items?.itemType?.name}</div>
                <img
                  className="replicator__image"
                  src={items?.itemType?.asset}
                  alt={items?.itemType?.name}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Replicator;
