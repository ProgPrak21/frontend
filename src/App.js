import "./App.css";
import Fetch from "./components/Fetch";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <header className="App-header">
        <Fetch />
      </header>
    </div>
  );
}

export default App;
