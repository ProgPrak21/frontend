import React from "react";
import { Button } from "@material-ui/core";
import extension_li from "../lib/assets/Extension_fb.PNG";

const Download = () => {
  return (
    <div className="download" id="download">
      <h1 className="downloadTitle" >The Dara Assistant</h1>
      <div className="downloadContainer">
        <p className="downloadText">
          DARA Assistant is a browser extension to help you to request your
          data. It currently includes almost 50 companies, for over 10 of them
          automated data requests are supported. The rest is annotated with
          descriptions from
          <a target="_blank" rel="noreferrer" href="https://justgetmydata.com">
            just get my data
          </a>
          . The DARA Assistant is a non-profit, hobbyist project. All code is
          open source and waiting for your
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ProgPrak21/DARA-Assistant%22%3Econtribution"
          >
            contribution
          </a>
          !
          <br />
          <br />
          <span className="bButton">
            <a target="_blank" rel="noreferrer" href="https://chrome.google.com/webstore/detail/dara-assistant/heolgaalbnnelipfhbccbkdohecmaimo">
              <Button variant="contained" color="primary">
                Get for Chrome
              </Button>
            </a>
          </span>
          <span spanclassName="bButton">
            <a target="_blank" rel="noreferrer" href="https://addons.mozilla.org/en-US/firefox/addon/dara/">
              <Button variant="contained" color="primary">
                Get for Firefox
              </Button>
            </a>{" "}
          </span>
        </p>
        <img src={extension_li} alt="extension" className="extensionImg" />
      </div>
    </div>
  );
};

export default Download;
