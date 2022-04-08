import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner.js";
import Nav from "./components/Nav.js";
import Home from "./modules/Home";
import Map from "./modules/Map";
import Error from "./modules/Error";
import News from "./modules/News";

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
