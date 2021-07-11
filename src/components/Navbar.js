import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import logo from "../lib/assets/logoModern2.png";
import { Link } from "react-scroll";

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

const Navbar = ({ place }, { left }) => {
  const classes = useStyles();

  function hover(e) {
    e.target.style.textShadow = "0.3px 0.3px ";
  }
  function unhover(e) {
    e.target.style.textShadow = "none";
  }

  useEffect(() => {
    const buttonIds = [
      "navHome",
      "navAbout",
      "navDownload",
      "navUnderstand",
      "navAnalyse",
      "navInformation",
    ];

    buttonIds.forEach((id) => {
      document.getElementById(id).style.textDecoration = "none";
    });
    let e = document.getElementById(place);
    console.log(e);
    e.style.textDecoration = "underline";
  }, [place]);

  return (
    <div className={classes.nav}>
      <img
        className={classes.img}
        src={logo}
        alt="logo"
        width="6%"
        height="auto"
      />

      <Link to="landingTop" spy={true} smooth={true}>
        <button
          onMouseOver={hover}
          onMouseLeave={unhover}
          className={classes.button}
          id="navHome"
        >
          Home
        </button>
      </Link>
      <Link to="about" spy={true} smooth={true} className="link1">
        <button
          onMouseOver={hover}
          onMouseLeave={unhover}
          className={classes.button}
          id="navAbout"
        >
          About
        </button>
      </Link>
      <Link to="solution" spy={true} smooth={true} className="link1">
        <button
          onMouseOver={hover}
          onMouseLeave={unhover}
          className={classes.button}
          id="navDownload"
        >
          Download
        </button>
      </Link>
      <Link to="solution" spy={true} smooth={true} id="link1">
        <button
          onMouseOver={hover}
          onMouseLeave={unhover}
          className={classes.button}
          id="navAnalyse"
        >
          Analyse
        </button>
      </Link>
      <Link to="solution" spy={true} smooth={true}>
        <button
          onMouseOver={hover}
          onMouseLeave={unhover}
          className={classes.button}
          id="navUnderstand"
        >
          Understand
        </button>
      </Link>
       <Link to="Information" spy={true} smooth={true} className="link1">
              <button
                onMouseOver={hover}
                onMouseLeave={unhover}
                className={classes.button}
                id="navInformation"
              >
                Information
              </button>
            </Link>
    </div>
  );
};
export default Navbar;
