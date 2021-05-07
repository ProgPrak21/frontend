import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  nav: {
    background: "black",
    color: "white",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  button: {
    color: "#5aadaa",
    backgroundColor: "black",
    marginLeft: "5px",
    fontSize: "20px",
    border: "none",
    fontWeight: "bold",
  },
}));

const Navbar = ({ setComp }) => {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <button className={classes.button} onClick={() => setComp("home")}>
        Home
      </button>
      <button className={classes.button} onClick={() => setComp("about")}>
        About
      </button>
    </div>
  );
};
export default Navbar;
