import React from "react";
import DARA from "../lib/assets/DARA.png";
import TUBerlin from "../lib/assets/TU-Berlin-Logo.svg";

const About = () => {
  return (
    <div>
      <div className="landingAboveContainer2" id="about">
        <h1 className="submaintitle">
          <color>D</color>ata <br /> <color>A</color>ccess <br />{" "}
          <color>R</color>equest <br /> <color>A</color>nalysis
        </h1>
      </div>

      <div className="landingPitch7Container">
        <img src={DARA} alt="DARA" className="landingImg4" />
        <div>
          <h1 className="landingTitle">About DARA</h1>
          <p className="landingText">
            With DARA we want to create a toolkit to give you an idea what a big
            tech company like Facebook might assert about your interests and how
            they categorize you. For this purpose we help you to request your
            data from some big tech companies via our DARA-Assistant browser
            extension. <br />
            If you are interested in the pigeonholes you are likely sorted into,
            we offer to analyze an anonymized version of your requested data and
            extract those categories. The results can be viewed here on our
            page.
          </p>
        </div>
      </div>
      <div className="landingPitch6Container">
        <img src={TUBerlin} alt="TUBerlin" className="landingImg6" />
        <div>
          <h1 className="landingTitle">About us</h1>
          <p className="landingText">
            Hey there &#128075;, we are a group of 7 students from TU-Berlin,
            interested in privacy and tracking on the web. <br /> As part of a
            practical programming module at ISE (Information System Engineering)
            we decided to realize DARA. <br />
            <a href="https://github.com/ProgPrak21" rel="noreferrer" target="_blank" >Our Github page</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
