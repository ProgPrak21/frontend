import { useMemo, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Download from "./components/Download";
import EducationalPart from "./components/EducationalPart";
import DragDrop from "./components/DragDrop";
import UserData from "./components/UserData";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

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
  function underline() {
    switch(window.innerHeight){
      case 489:console.log("boo")
         document.getElementById("navHome").style.textDecoration = "underline";
      document.querySelector("#navDownload").style.textDecoration="underline";
      document.querySelector("#root > div > div.makeStyles-nav-91 > a.link1.active").style.textDecoration="underline";
      break;
      case 78: document.getElementById("navDownload").style.textDecoration = "underline";
      break;
      case 4106:document.getElementById("navAnalyse").style.textDecoration = "underline";
      break;
      default: console.log(Window.innerHeight) ; return;
    }
  }

  return (
    <ThemeProvider theme={theme} >
      <ApolloProvider client={client}>
        <div className="App" onScroll={underline}>
          <Navbar place={place} />
          <Home setPlace={setPlace} />

          <Download setPlace={setPlace} />
          <DragDrop />
          <UserData />
          <EducationalPart setPlace={setPlace} />
          <About setPlace={setPlace} />
        </div>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
