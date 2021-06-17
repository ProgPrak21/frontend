import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { useState, useMemo } from "react";
import About from "./components/About";

function App() {
  const [comp, setComp] = useState("home");

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "dark",
        },
      }),
    []
  );

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar setComp={setComp} />
        {comp === "home" && <Home setComp={setComp} />}
        {comp === "about" && <About />}
      </div>
    </ThemeProvider>
  );
}

export default App;
