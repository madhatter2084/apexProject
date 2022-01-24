import "./App.css";
import News from "./News.js";
import requests from "./requests.js";

function App() {
  return (
    <div className="App">
      <h1>sexy ass apex api site</h1>
      {/* nav */}
      {/* banner */}
      {/* player cards */}
      {/* map */}
      {/* crafting */}
      {/* server status */}
      <News fetchURL={requests.fetchNews} />
    </div>
  );
}

export default App;
