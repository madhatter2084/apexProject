import "./App.css";
import News from "./News.js";
import Banner from "./Banner.js";
import Map from "./Map.js";

function App() {
  return (
    <div className="App">
      {/* nav */}
      <Banner />
      <News />
      {/* character select */}
      {/* crafting */}
      {/* server status */}
      <Map />
    </div>
  );
}

export default App;
