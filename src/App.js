import "./App.css";
import Fetch from "./components/Fetch";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Test from "./components/Test";
import { useState } from "react";

function App() {
  const [comp, setComp] = useState("");
  return (
    <div className="App">
      <Navbar setComp={setComp} />
      {comp === "home" && <Home />}
      {comp === "about" && <Test />}
      <header className="App-header">
        <Fetch />
      </header>
    </div>
  );
}

export default App;
