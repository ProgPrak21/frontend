import {  useMemo, useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import "./App.css";

function App() {
  
  const [place, setPlace]= useState("navHome");
  

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
          <Navbar place={place} />
          <Home setPlace={setPlace} />
          <About setPlace={setPlace} />
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
