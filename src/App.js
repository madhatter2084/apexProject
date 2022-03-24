import "./App.css";
import Banner from "./components/Banner.js";
import Layout from "./components/Layout.js";
import News from "./modules/News.js";
import Nav from "./components/Nav.js";

function App() {
  return (
    <div className="App">
      <Banner />
      <Nav />
      <div className="content">
        <News />
        <Layout />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
