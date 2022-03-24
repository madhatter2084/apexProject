import React from "react";
import Map from "../modules/Map.js";
import "./Layout.css";
import Character from "../modules/Character.js";

function Layout() {
  return (
    <div className="layout">
      {/* <News /> */}
      <Character />
      <Map />

      {/* crafting */}
      {/* server status */}
    </div>
  );
}

export default Layout;
