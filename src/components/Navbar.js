import React from "react";
import { makeStyles } from "@material-ui/core";
import logo from "../lib/assets/logoModern2.png";

const useStyles = makeStyles((theme) => ({
  nav: {
    background: "white",
    color: "grey",
    paddingTop: "10px",
    paddingBottom: "0px",
    position: "fixed",
    zIndex: "1",
    width: "100%",
  },
  button: {
    color: "black",
    background: "none",
    marginLeft: "5px",
    marginRight: "5px",
    fontSize: "1em",
    border: "none",
    fontWeight: "bold",
    float: "left",
  },
  img: {
    float: "left",
  },
}));

const Navbar = ({ setComp }) => {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <img
        className={classes.img}
        src={logo}
        alt="logo"
        width="6%"
        height="auto"
      />

      <button className={classes.button} onClick={() => setComp("home")}>
        Home
      </button>
      <button className={classes.button} onClick={() => setComp("about")}>
        About
      </button>
      <button className={classes.button}>Download</button>
      <button className={classes.button}>Analyze</button>
      <button className={classes.button}>Understand</button>
    </div>
  );
};
export default Navbar;
