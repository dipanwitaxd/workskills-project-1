import React from "react";
import "./Section7.css";
import background1 from "../../assets/workskill-proj-1-img-7.jpeg";
import LanguageRounded from "@mui/icons-material/LanguageRounded";
import MonetizationOnRounded from "@mui/icons-material/MonetizationOnRounded";
import LightbulbRounded from "@mui/icons-material/LightbulbRounded";
import BuildRounded from "@mui/icons-material/BuildRounded";
import ThumbUpRounded from "@mui/icons-material/ThumbUpRounded";
import FingerprintRounded from "@mui/icons-material/FingerprintRounded";

function Section7() {
  return (
    <div className="section-7">
      <div className="section-7-background">
        <div className="sec7-inner">
          <div className="picture-list">
            <div className="picture">
              <img src={background1} alt="img" className="image-list"></img>
            </div>
            <div className="history-list" data-aos="fade-up">
              <div className="list">
                <div className="list-item">
                  <div className="year">
                    2013 <br />{" "}
                  </div>
                  <div className="icons">
                    <div className="icon-border">
                      <LanguageRounded
                        style={{
                          fontSize: "13px",
                          color: "rgb(204, 218, 231, 0.8)",
                        }}
                      />
                    </div>
                    <div className="icon-line"></div>
                  </div>
                  <div className="place">
                    Jason H. and Peter T. found Codebase <br />{" "}
                  </div>
                </div>
                <div className="list-item">
                  <div className="year">
                    2014 <br />{" "}
                  </div>
                  <div className="icons">
                    <div className="icon-border">
                      <MonetizationOnRounded
                        style={{
                          fontSize: "13px",
                          color: "rgb(204, 218, 231, 0.8)",
                        }}
                      />
                    </div>
                    <div className="icon-line"></div>
                  </div>
                  <div className="place">
                    Graduated from Y Combinator <br />{" "}
                  </div>
                </div>
                <div className="list-item">
                  <div className="year">
                    2015 <br />{" "}
                  </div>
                  <div className="icons">
                    <div className="icon-border">
                      <LightbulbRounded
                        style={{
                          fontSize: "13px",
                          color: "rgb(204, 218, 231, 0.8)",
                        }}
                      />
                    </div>
                    <div className="icon-line"></div>
                  </div>
                  <div className="place">
                    Released first Web platform <br />{" "}
                  </div>
                </div>
                <div className="list-item">
                  <div className="year">
                    2016 <br />{" "}
                  </div>
                  <div className="icons">
                    <div className="icon-border">
                      <BuildRounded
                        style={{
                          fontSize: "13px",
                          color: "rgb(204, 218, 231, 0.8)",
                        }}
                      />
                    </div>
                    <div className="icon-line"></div>
                  </div>
                  <div className="place">
                    Launched the paid version of the software <br />{" "}
                  </div>
                </div>
                <div className="list-item">
                  <div className="year">
                    2017 <br />{" "}
                  </div>
                  <div className="icons">
                    <div className="icon-border">
                      <ThumbUpRounded
                        style={{
                          fontSize: "13px",
                          color: "rgb(204, 218, 231, 0.8)",
                        }}
                      />
                    </div>
                    <div className="icon-line"></div>
                  </div>
                  <div className="place">
                    Partnership with Norman Inc. <br />{" "}
                  </div>
                </div>
                <div className="list-item">
                  <div className="year">
                    2019 <br />{" "}
                  </div>
                  <div className="icons">
                    <div className="icon-border">
                      <MonetizationOnRounded
                        style={{
                          fontSize: "13px",
                          color: "rgb(204, 218, 231, 0.8)",
                        }}
                      />
                    </div>
                    <div className="icon-line"></div>
                  </div>
                  <div className="place">
                    $72 million series A round of funding led by Accel <br />{" "}
                  </div>
                </div>
                <div className="list-item">
                  <div className="year">
                    2021 <br />{" "}
                  </div>
                  <div className="icons">
                    <div className="icon-border">
                      <MonetizationOnRounded
                        style={{
                          fontSize: "13px",
                          color: "rgb(204, 218, 231, 0.8)",
                        }}
                      />
                    </div>
                    <div className="icon-line"></div>
                  </div>
                  <div className="place">
                    $140 million in a series B round of funding <br />{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sec7-col2">
            <div className="grid-sec">
              <div className="fingerprint">
                {" "}
                <FingerprintRounded />{" "}
              </div>
              <div>
              <div className="description">
                Our hiring <span className="gradient-text">process</span>.
              </div>
              <div className="desc-sec7">
                Webflow was founded in 2013 by Vlad Magdalin (creator of Intuit
                Brainstorm), Sergie Magdalin, and Bryant Chou (former CTO of
                Vungle Inc.). The company graduated from Y Combinator's startup
                accelerator in 2013. Webflow raised venture funding from Khosla
                Ventures, Y Combinator, Tim Draper, and other tech industry
                investors. In 2019, Webflow raised a $72 million series A round
                of funding led by Accel. In January 2021, Webflow raised $140
                million in a series B round of funding.
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section7;
