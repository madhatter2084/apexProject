import React, { useEffect, useState } from "react";
import "./Shop.css";
import axios from "../config/axios";
import requests from "../config/requests";

function Shop() {
  const [shop, setShop] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchShop);
      setShop(request.data);
      console.log(request.data);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="shop">
      {shop?.map((items, index) => (
        <div className="shop__tile" key={index}>
          <h1 className="shop__title">{items.title}</h1>
          <div className="shop__image_container">
            <img className="shop__image" src={items.asset} alt={items.title} />
          </div>
          {items.pricing.map((prices, pIndex) => (
            <h3 className="shop__price" key={pIndex}>
              {prices.ref}
              {": "}
              {prices.quantity}
            </h3>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Shop;
