import React from "react";
import { Card, CardContent } from "@material-ui/core";

const EducationalPart = () => {
  return (
    <div>
      <div className="LandingPitch3Container" id="Information">
        <h1 className="landingTitle2">
          Does my phone listen to my conversation with my friends to serve me
          creepy ads? <br />
          No! Because it{" "}
          <a
            href="https://www.eff.org/deeplinks/2018/04/facebook-doesnt-need-listen-through-your-microphone-serve-you-creepy-ads"
            rel="noreferrer"
            target="_blank"
          >
            doesn't have to
          </a>{" "}
          .
        </h1>
      </div>
      <div>
        <iframe
          title="educational"
          src="https://player.vimeo.com/video/249633335"
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; margin-bottom: 10vh; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <h1 className="landingTitle2">
        {" "}
        Companies like Facebook, Google, Amazon or twitter have the monopoly
        over our data. This is a problem as they engage deeply in our society,
        economy and states…
      </h1>
      <div className="landingSolutionCardsContainer">
        <Card className="landingSolutionCard">
          <h2>Your surfing behavior is almost completely stored</h2>
          <CardContent>
            {" "}
            Large service providers, such as Google or Facebook, combine the
            collected data into a detailed profile of your interests. Depending
            on how much you do on the Internet, your behavior can reveal a lot
            about your life, interests, business, relationships and problems.
          </CardContent>
        </Card>
        <Card className="landingSolutionCard">
          <h2>Personality profiles are sold</h2>
          <CardContent>
            Personality profiles created from data collections are sold. The
            main buyer is the advertising industry, but headhunters and HR
            departments of companies also pay for detailed information on
            applicants. The data collections can have a lasting impact on your
            professional development.
          </CardContent>
        </Card>
        <Card className="landingSolutionCard">
          <h2>Real Time Bidding </h2>
          <CardContent>
            Today, when we visit a website or use an app, our profile is
            auctioned off in the background to the highest bidder within
            milliseconds. Whoever wins the auction gets to display a message. At
            the same time, dozens to hundreds of third-party companies are
            informed with every click
          </CardContent>
        </Card>
      </div>
      <div className="landingSolutionCardsContainer">
        <Card className="landingSolutionCard">
          <h2>Political Advertising</h2>
          <CardContent>
            {" "}
            Increasingly, data analytics are being used to decide which groups
            to target with which messages on which channels like mail, email and
            telephone or social media like Facebook and other platforms. Have a
            look{" "}
            <a
              href="https://www.facebook.com/ads/archive/report/"
              rel="noreferrer"
              target="_blank"
            >
              here
            </a>{" "}
            , on how much is being spent on facebook by companies and political
            parties to promote politically or socially relevant issues.
          </CardContent>
        </Card>
        <Card className="landingSolutionCard">
          <h2>Movement patterns in the real world are stored</h2>
          <CardContent>
            Your IP address can be used to determine your current location. With
            the help of databases, even city districts and office buildings can
            be identified.When using the Internet on the move or at different
            locations, movement patterns can be evaluated. These movement
            patterns make it possible, for example, to analyze your professional
            activity/unemployment or your social environment. The location data
            from smartphones reveals who you regularly have a beer with, youe
            new love affair, whether you take part in a demonstration and much
            more.
          </CardContent>
        </Card>
      </div>
      <div className="LandingPitch3Container">
        <p className="landingText3">
          Source:{" "}
          <a
            href="https://www.eff.org/de/node/101978"
            rel="noreferrer"
            target="_blank"
          >
            EFF
          </a>{" "}
          &{" "}
          <a
            href="https://www.datenschutzverein.de/wp-content/uploads/2019/09/DANA_19_3_Sonderheft_Real_Time_Bidding.pdf"
            rel="noreferrer"
            target="_blank"
          >
            Datenschutzverein (de)
          </a>{" "}
        </p>
      </div>
      <div className="LandingPitch3Container">
        <h1 className="landingTitle">I have nothing to hide - do I?</h1>
        <p className="landingText1">
          You‘re just a „normal citizen“ and don‘t care care that data
          collectors know about your new love affair and thus influence your
          consumer behavior? Or that your unemployment status is revealed to the
          network via your location data and thus your credit rating
          deteriorates? <br />
        </p>
      </div>
      <div className="LandingPitch3Container">
        <h1 className="landingTitle">But its not just about you!</h1>
        <p className="landingText2">
          „Only on the basis of the data of millions of "normal citizens" who
          think they have "nothing to hide" can predictive analysis be trained
          to classify other people as, for example, deviants, potential dangers,
          suspected depressives or sick people. The primary societal risk of big
          data collection is not just the disclosure of personal information by
          individuals, but the algorithmic selection of societal groups in terms
          of access to opportunities, resources, and information. We are thus
          dealing with a form of data exploitation that produces and stabilizes
          social inequalities if it is not countered by a reflection on
          collective privacy claims.“ <br />-{" "}
          <a
            href="https://netzpolitik.org/2020/warum-wir-gerade-jetzt-eine-debatte-ueber-datenschutz-brauchen/"
            rel="noreferrer"
            target="_blank"
          >
            Rainer Mühlhoff
          </a>{" "}
          , TU Berlin
        </p>
      </div>
      <div className="LandingPitch3Container">
        <h1 className="landingTitle">
          So get active. Get informed. <br />
          <br /> Here are some tips on how you can improve your privacy.
        </h1>
        <p className="landingText">
          Test your digital fingerprint <br />
          <a href="https://browserleaks.com/" rel="noreferrer" target="_blank">
            browserleaks
          </a>{" "}
          <br />
          <a
            href="https://coveryourtracks.eff.org//"
            rel="noreferrer"
            target="_blank"
          >
            Cover Your Tracks
          </a>{" "}
          <br />
          <br /> Protect your data from socialmedia <br />
          <a
            href="https://www.consumerreports.org/privacy/instagram-privacy-settings/"
            rel="noreferrer"
            target="_blank"
          >
            Hot to Use Instagram Privacy Settings
          </a>{" "}
          <br />
          <a
            href="https://www.consumerreports.org/privacy/facebook-privacy-settings/"
            rel="noreferrer"
            target="_blank"
          >
            How to Use Facebook Privacy Settings
          </a>{" "}
          <br />
          <br />{" "}
          <a
            href="https://degooglisons-internet.org/en/alternatives"
            rel="noreferrer"
            target="_blank"
          >
            Degoogle Your Life
          </a>{" "}
          <br />
          <br /> Alternative Search Engines <br />
          <a href="https://www.startpage.com/" rel="noreferrer" target="_blank">
            Startpage
          </a>{" "}
          <br />
          <a href="https://duckduckgo.com/" rel="noreferrer" target="_blank">
            DuckDuckGo
          </a>{" "}
          <br />
          <br /> Alternative Browser <br />
          <a
            href="https://www.mozilla.org/de/firefox/new/"
            rel="noreferrer"
            target="_blank"
          >
            Firefox{" "}
          </a>{" "}
          <br />
          <a
            href="https://www.torproject.org/"
            rel="noreferrer"
            target="_blank"
          >
            Tor Browser
          </a>{" "}
          <br />
          <br /> Plug-Ins <br />
          <a
            href="https://www.eff.org/https-everywhere"
            rel="noreferrer"
            target="_blank"
          >
            HTTPS Everywhere
          </a>{" "}
          <br />
          <a
            href="https://github.com/gorhill/uBlock"
            rel="noreferrer"
            target="_blank"
          >
            uBlock Origin
          </a>{" "}
          <br />
          <br /> Messenger <br />
          <a href="https://signal.org/en/" rel="noreferrer" target="_blank">
            Signal{" "}
          </a>{" "}
          <br />
          <a href="https://threema.ch/en" rel="noreferrer" target="_blank">
            threema
          </a>{" "}
          <br />
          <br /> Mail <br />
          <a href="https://posteo.de/de" rel="noreferrer" target="_blank">
            Posteo
          </a>{" "}
          <br />
          <a href="https://protonmail.com/" rel="noreferrer" target="_blank">
            Proton Mail
          </a>{" "}
          <br />
          <br /> Further reading <br />
          <a href="https://privacytools.io/" rel="noreferrer" target="_blank">
            Privacy Tools
          </a>{" "}
          <br />
          <a
            href="https://privacy-handbuch.de/handbuch_21.htm "
            rel="noreferrer"
            target="_blank"
          >
            Privacy Handbuch (de)
          </a>{" "}
          <br />
          <a href="https://myshadow.org/" rel="noreferrer" target="_blank">
            Me And My Shadow
          </a>{" "}
          <br />
          <a href="https://netzpolitik.org/" rel="noreferrer" target="_blank">
            Netzpolitik.Org (de)
          </a>{" "}
          <br />
          <a href="https://tosdr.org/" rel="noreferrer" target="_blank">
            TermsOfServiceDidn’tRead
          </a>{" "}
          <br />
          <a
            href="hhttps://switching.software/"
            rel="noreferrer"
            target="_blank"
          >
            Switching Software
          </a>{" "}
          <br /> <br /> <br /> <br />
        </p>
      </div>
    </div>
  );
};

export default EducationalPart;
