import { useMemo, useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Download from "./components/Download";

import "./App.css";
import EducationalPart from "./components/EducationalPart";



function App() {
  const [place, setPlace] = useState("navHome");

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: "dark",
        },
        typography: {
          button: {
            textTransform: "none",
          },
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
          <Download setPlace={setPlace} ></Download>
          <About setPlace={setPlace} />
          <EducationalPart setPlace={setPlace} />
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
