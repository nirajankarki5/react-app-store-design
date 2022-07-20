import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Overview from "./components/pages/Overview";
import Trending from "./components/Trending";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Arcade from "./components/pages/Arcade";
import Charts from "./components/pages/Charts";
import Settings from "./components/pages/Settings";
import Updates from "./components/pages/Updates";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <div className="container">
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Overview />
                  <Trending />
                </>
              }
            />
            <Route
              path="/arcade"
              element={
                <>
                  <Arcade />
                  <Trending />
                </>
              }
            />
            <Route path="/charts" element={<Charts />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/updates" element={<Updates />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
