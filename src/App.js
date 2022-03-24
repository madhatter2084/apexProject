import "./App.css";
import Banner from "./components/Banner.js";
import Layout from "./components/Layout.js";
import News from "./modules/News.js";

function App() {
  return (
    <div className="App">
      {/* nav */}
      <Banner />
      <News />
      <Layout />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
