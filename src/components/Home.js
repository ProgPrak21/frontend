import React from "react";
import vid from "./video/video.mp4";
import { makeStyles } from "@material-ui/core";

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
  acronym:{
      fontSize:"60px",
      

  },
  subtitle:{
      fontSize:"30px",
      color: "#5aadaa"

  },
  home: {
    height: "100vh",
    minHeight: "100vh"
  },
}));

const Home = ({ setComp }) => {
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
      <h1 className={classes.title}><b className={classes.acronym}>D</b>ata <b className={classes.acronym}>A</b>ccess <b className={classes.acronym}>R</b>equest <b className={classes.acronym}>A</b>nalysis </h1>
        <h2 className={classes.subtitle}>Our Mission</h2>
      <p className={classes.text}>
        ad nulla adipisicing consequat ex ut id quis aliquip elit nostrud
        consequat reprehenderit magna et duis Lorem culpa adipisicing do do
        aliqua est ex excepteur ipsum ut labore reprehenderit consectetur dolore
        pariatur mollit mollit exercitation anim quis do enim sint exercitation
        excepteur amet id consequat non sit dolor in irure pariatur enim veniam
        eu fugiat non labore dolore irure cupidatat mollit officia consectetur
        dolore et dolor incididunt do aliqua fugiat et pariatur consectetur
        reprehenderit fugiat pariatur commodo ad nulla adipisicing consequat ex
        ut id quis aliquip elit nostrud consequat reprehenderit magna et duis
        Lorem culpa adipisicing do do aliqua est ex excepteur consectetur do
        cupidatat eu non nulla ut enim labore in eu ut fugiat cupidatat laborum
        cupidatat et aute tempor nostrud fugiat cupidatat minim consequat ipsum
        ut labore reprehenderit consectetur dolore pariatur mollit mollit
        exercitation anim quis do enim sint exercitation excepteur amet id
        consequat incididunt ea nisi adipisicing quis nostrud proident culpa non
        sit dolor in irure pariatur enim veniam eu fugiat non labore dolore
        irure cupidatat mollit officia consectetur dolore et dolor incididunt do
        aliqua fugiat et pariatur consectetur reprehenderit fugiat pariatur
        commodo
      </p>
      <button className={classes.button} onClick={() => setComp("fetch")}>click here to send email</button>
    </div>
  );
};
export default Home;
