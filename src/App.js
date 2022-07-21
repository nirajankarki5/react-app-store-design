import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Overview from "./components/pages/Overview";
import Trending from "./components/Trending";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Arcade from "./components/pages/Arcade";
import Charts from "./components/pages/Charts";
import Settings from "./components/pages/Settings";
import Updates from "./components/pages/Updates";
import { useState } from "react";

function App() {
  // inititlize with window.location.pathname because when user reloades the page, active state remains on selected item on sidebar
  const [path, setPath] = useState(window.location.pathname);

  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar path={path} setPath={setPath} />
        <div className="container">
          <Navbar path={path} />
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
