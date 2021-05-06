import "./App.css";
import Fetch from "./components/Fetch";
import Navbar from "./components/Navbar";
import Home from "./components/Home";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <header className="App-header">
        <Fetch />
      </header>
    </div>
  );
}

export default App;
