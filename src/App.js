import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="container">
        <Navbar />
        <Main />
        <Trending />
      </div>
    </div>
  );
}

export default App;
