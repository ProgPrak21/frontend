import React,{useEffect,useRef} from "react";
import worldSocialCircle from "../lib/assets/worldSocialCircle2.jpg";
import maze from "../lib/assets/maze.jpg";
import code from "../lib/assets/code.png";
import { Button, Card, CardContent } from "@material-ui/core";
import DragDrop from "./DragDrop";
import UserData from "./UserData";
import {Link} from 'react-scroll'

const Home = () => {
  
useEffect(()=>{
 let e =  document.getElementById("solution");
 e.scrollIntoView()
})

  return (
    <div>
      <div className="landingAboveContainer" id="landingTop">
        <h1 className="maintitle">
          Download
          <br />
          Analyze
          <br />
          Understand
          <br />
          your data
        </h1>
        <h2 className="subTitle">
          with the help of our all in one free toolkit
        </h2>
        <Link to="solution" spy={true} smooth={true}>
        <Button variant="contained" color="primary">
          Get Started
        </Button>
        </Link>
      </div>

      <div className="landingPitch1Container">
        <div>
          <h1 className="landingTitle">
            Did you always wonder what kind of data popular companies store
            about you?
          </h1>
          <p className="landingText">
            why you are getting the ads that you are getting? what categories do
            you fall into?
          </p>
        </div>
        <img
          className="landingImg1"
          src={worldSocialCircle}
          alt="social networks logo's"
        />
      </div>
      <div className="landingPitch2Container">
        <img src={maze} alt="maze" className="landingImg2" />
        <div>
          <h1 className="landingTitle">
            But when you tried to find it you couldn't?
          </h1>
          <p className="landingText">
            data request are often hidden in "dark paths", under a lot of clicks
            and in places you wouldn't expect. Without knowing ahead where to
            look you have slim chances of finding it.
          </p>
        </div>
      </div>
      <div className="LandingPitch3Container">
        <h1 className="landingTitle">
          Or if you did find it, you can't understand it?
        </h1>
        <p className="landingText">
          most companies store data in a machine readable format, which is not
          very human friendly. Trying to understand something from a long
          unending list of values could by a challange.
        </p>
        <img src={code} alt="code" className="landingImg3" />
      </div>
      <div className="landingSolutionContainer" id="solution" >
        <div>
          <h1 className="landingTitle">We have a solution for you!</h1>

          <p className="landingText">in just 3 Steps</p>
        </div>
        <div className="landingSolutionCardsContainer" >
          <Card className="landingSolutionCard">
            <h2>1.Download our Extension</h2>
            <CardContent>
              {" "}
              With the help of our lightweight extension, you can download your
              data in just one click, check on it's status and download it when
              it's ready. The extension is secure since it's all in your browser
              and open source
            </CardContent>
          </Card>
          <Card className="landingSolutionCard">
            <h2>2.Analyze your Data-</h2>
            <CardContent>
              drop your files in our website. In order to keep your privacy, we
              take just the files with the advertisement information and analyze
              them for you. You will receive a secret key with which you can log
              in and see your results.
            </CardContent>
          </Card>
          <Card className="landingSolutionCard">
            <h2>3.Look at your results</h2>
            <CardContent>
              The results can be viewed here on our page, of course only by you
              and the people you decide to share this info with. Now you can
              understand your data and which categories you were sorted in.
            </CardContent>
          </Card>
        </div>
      </div>

      <DragDrop />
      <UserData />
    </div>
  );
};
export default Home;
