import { useState, useMemo } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

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

  const client = new ApolloClient({
    uri: "https://dara.gwhy.de/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Navbar setComp={setComp} />
          {comp === "home" && <Home setComp={setComp} />}
          {comp === "about" && <About />}
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
