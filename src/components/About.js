import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "black",
    height: "90vh",
    minHeight: "90vh",
  },
  title: {
    color: "#5aadaa",
    marginTop: "0",
  },
  box: {
    color: "white",
    border: "solid",

    borderColor: "#5aadaa",
    width: "300px",
    height: "300px",
  },
  text: {
    color: "white",

    width: "50%",
  },
  text2: {
    color: "white",

    width: "50%",
  },
}));

const About = ({setPlace},{setLeft}) => {
  const classes = useStyles();
  return (
    <div className={classes.container} id="about" onMouseEnter={() => setPlace("navAbout")} >
      <h2>About Us</h2>
      <p className={classes.text}>
        text about us text about us text about us text about us text about us
        text about us text about us text about us text about us text about us
        text about us text about us text about us text about us text about us
        text about us text about us text about us text about us text about us
        text about us
      </p>
      <p className={classes.text2}>our Github page: www.Github.com/ourPage</p>
    </div>
  );
};

export default About;
