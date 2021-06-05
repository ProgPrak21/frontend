import React from "react";
import vid from "../lib/video/video.mp4";
import Upload from "./Upload";
import { makeStyles } from "@material-ui/core";
import DragDrop from "./DragDrop"

const useStyles = makeStyles((theme) => ({
  button: {
    color: "#5aadaa",
    backgroundColor: "black",
    marginLeft: "5px",
    fontSize: "20px",
    border: "none",
    fontWeight: "bold",
  },
  text: {
    color: "white",

    fontWeight: "bold",
    fontSize: "30px",
  },
  title: {
    color: "#5aadaa",
  },
  acronym: {
    fontSize: "60px",
  },
  subtitle: {
    fontSize: "30px",
    color: "#5aadaa",
  },
  home: {
    height: "90vh",
    minHeight: "90vh",
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={vid} type="video/mp4" />
      </video>
      <h1 className={classes.title}>
        <b className={classes.acronym}>D</b>ata{" "}
        <b className={classes.acronym}>A</b>ccess{" "}
        <b className={classes.acronym}>R</b>equest{" "}
        <b className={classes.acronym}>A</b>nalysis{" "}
      </h1>
      <h2 className={classes.subtitle}>Subtite</h2>
      <p className={classes.text}>Cool Text</p>
      <DragDrop/>
     
    </div>
  );
};
export default Home;
