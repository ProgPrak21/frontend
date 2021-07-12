import React from "react";
import { Button } from "@material-ui/core";
import extension_li from "../lib/assets/Extension_fb.PNG";

const Download = () => {
  return (
    <div className="download">
      <h1 className="downloadTitle">The Dara Assistant</h1>
      <div className="downloadContainer">
        <p className="downloadText">
          The DARA Assistant is a non-profit, hobbyist project, to help users
          with requesting their data from companies on the web. It can execute
          the clicks necessary to issue a data request on the corresponding data
          request page. The Assistant supports just shy of 50 companies and
          offers fully automated data requests for over 10 of them. The other
          companies are annotated with descriptions from{" "}
          <a target="_blank" rel="noreferrer" href="https://justgetmydata.com">
            just get my data{" "}
          </a>
          . All code is open source and waiting for your{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ProgPrak21/DARA-Assistant"
          >
            contribution
          </a>
          .
          <br />
          <br />
          <span className="bButton">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://chrome.google.com/webstore/detail/dara-assistant/heolgaalbnnelipfhbccbkdohecmaimo"
            >
              <Button variant="contained" color="primary">
                Get for Chrome
              </Button>
            </a>
          </span>
          <span spanclassName="bButton">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://addons.mozilla.org/en-US/firefox/addon/dara/"
            >
              <Button variant="contained" color="primary">
                Get for Firefox
              </Button>
            </a>
          </span>
        </p>
        <img src={extension_li} alt="extension" className="extensionImg" />
      </div>
    </div>
  );
};

export default Download;
