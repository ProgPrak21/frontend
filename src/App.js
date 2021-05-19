import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState } from "react";
import About from "./components/About";

function App() {
  const [comp, setComp] = useState("home");

  return (
    <div className="App">
      <Navbar setComp={setComp} />
      {comp === "home" && <Home setComp={setComp} />}
      {comp === "about" && <About />}
    </div>
  );
}

export default App;
