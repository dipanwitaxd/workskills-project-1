import React from "react";
import "./Section3.css";
import Interests from "@mui/icons-material/Interests";
import CardGiftcardRounded from "@mui/icons-material/CardGiftcardRounded";
import ContentCutRounded from "@mui/icons-material/ContentCutRounded";
import AutoFixHighRounded from "@mui/icons-material/AutoFixHighRounded";

function Section3() {
  return (
    <div>
      <div className="background-section3">
        <div className="background-section3-head">
          <div className="background-section3-header">
            Entrepreneurial Culture at{" "}
            <span className="text-gradient">Workskills</span>.
          </div>
          <div className="background-section3-subhead">
            Passion and entrepreneurship is what drives culture at Workskills.
            We don't hire employees! We hire only entrepreneurs!
          </div>
        </div>
        <div className="section3-subsection">
          <div className="subsection-grid">
            <div className="sub-grid-left">
              {" "}
              <Interests style={{ color: "rgb(227,145,6)" }} />{" "}
            </div>
            <div className="sub-grid-right">
              <div
                className="sub-grid-right-head"
                style={{ color: "rgb(227,145,6)" }}
              >
                Unmatched Growth
              </div>
              <div className="sub-grid-right-content">
                Joining an early stage small team means, you get to witness the
                journey of building and scaling a company. If you wish to
                startup at some point in your life, this is the best time to
                join us
              </div>
            </div>
          </div>
          <div className="subsection-grid">
            <div className="sub-grid-left">
              {" "}
              <CardGiftcardRounded style={{ color: "rgb(9,178,158)" }} />{" "}
            </div>
            <div className="sub-grid-right">
              <div
                className="sub-grid-right-head"
                style={{ color: "rgb(9,178,158)" }}
              >
                Your Project = Your Way
              </div>
              <div className="sub-grid-right-content">
                You choose your own projects and execute them your way. You have
                no limitations on ideas here at Workskills. You champion your
                own work!
              </div>
            </div>
          </div>
          <div className="subsection-grid">
            <div className="sub-grid-left">
              {" "}
              <ContentCutRounded style={{ color: "rgb(8,157,224)" }} />{" "}
            </div>
            <div className="sub-grid-right">
              <div
                className="sub-grid-right-head"
                style={{ color: "rgb(8,157,224)" }}
              >
                Imagine the Future
              </div>
              <div className="sub-grid-right-content">
                You won't do mundane and repetetive tasks, you work as a
                creator, educator, freelance, entrepreneur to build new things
                that people love.
              </div>
            </div>
          </div>
          <div className="subsection-grid">
            <div className="sub-grid-left">
              {" "}
              <AutoFixHighRounded style={{ color: "rgb(226,59,59)" }} />{" "}
            </div>
            <div className="sub-grid-right">
              <div
                className="sub-grid-right-head"
                style={{ color: "rgb(226,59,59)" }}
              >
                Become a Leader
              </div>
              <div className="sub-grid-right-content">
                You will be nurtured in a structure learning program, providing
                you the tools, frameworks and mentorship to mould yourself in
                top 1% performer &amp; leader
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
      <div className="sec-button">
        <button className="section3-button">Join Us Now</button>
      </div>
    </div>
  );
}

export default Section3;
