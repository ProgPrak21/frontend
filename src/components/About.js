import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "black",
    height: "100vh",
    minHeight: "100vh",
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
    position: "fixed",
    top: "20%",
    left: "38%",
  },
  text: {
    color: "white",
    position: "fixed",
    width: "50%",
    left: "25%",
  },
  text2: {
    color: "white",
    position: "fixed",
    width: "50%",
    left: "25%",
    top: "50%",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h1 className={classes.title}> we are DARA</h1>
      <div className={classes.box}>cool Logo</div>
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
