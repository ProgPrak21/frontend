import "./App.css";
import Fetch from "./components/Fetch";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Test from "./components/Test";
import { useState } from "react";
import About from "./components/About"

function App() {
  const [comp, setComp] = useState("");
  
  return (
    <div className="App">
      <Navbar setComp={setComp}  />
      {comp === "home" && <Home setComp={setComp}/>}
      {comp === "about" && <About />}
      {comp === "fetch" && <div><Test/>
      
      <header className="App-header">
        <Fetch />
      </header>
      </div>
      }
    </div>
  );
}

export default App;
