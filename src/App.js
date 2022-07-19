import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Main />
      <Trending />
    </div>
  );
}

export default App;
