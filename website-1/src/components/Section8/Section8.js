import React from "react";
import "./Section8.css";
import ShareRounded from "@mui/icons-material/ShareRounded";
import img1 from "../../assets/workskill-proj-1-img-8.png";
import img2 from "../../assets/workskill-proj-1-img-9.png";
import img3 from "../../assets/workskill-proj-1-img-10.png";
import img4 from "../../assets/workskill-proj-1-img-11.png";

import KeyboardArrowRightRounded from "@mui/icons-material/KeyboardArrowRightRounded";

function Section8() {
  return (
    <div className="section8-background">
      <div className="overflow">
        <div className="section8">
          <div className="sec-8">
            <div className="sec8-top">
              <div className="section-grid">
                <div className="sec8-head">
                  <div className=" section-top">
                    <div className="how-it-works">
                      <div className="how-it-works-pattern">
                        <div className="fingerprint">
                          <ShareRounded />
                        </div>
                        <div className="header-text">And that’s not all...</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="header-sub"
                    style={{ backgroundColor: "#6d2cd3" }}
                    data-aos="fade-up"
                  >
                    <img src={img1} alt="" className="images"></img>
                    <div className="sub-text">
                      <div className="sub-text-head">
                        <div className="sub-head"> Product Tour </div>
                        <div className="text-s" style={{ color: "#8d62ee" }}>
                          This is some text inside of a div block.
                        </div>
                      </div>
                      <a href="/product-tour" style={{ color: "#c0b3f3", textDecoration: 'none' }}>
                        <div className="link">
                          <div className="link-text">Learn more</div>
                          <KeyboardArrowRightRounded
                            style={{ fontSize: ".875em" }}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    className="header-sub"
                    style={{ backgroundColor: "#4036be" }}
                    data-aos="fade-up"
                  >
                    <img src={img2} alt="" className="images"></img>
                    <div className="sub-text">
                      <div className="sub-text-head">
                        <div className="sub-head"> Product Tour </div>
                        <div
                          className="text-s"
                          style={{ color: "#6668eb" }}
                        >This is some text inside of a div block.</div>
                      </div>
                      <a href="/product-tour" style={{ color: "#a5b3f7", textDecoration: 'none' }}>
                        <div className="link">
                          <div className="link-text">Learn more</div>
                          <KeyboardArrowRightRounded
                            style={{ fontSize: ".875em" }}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    className="header-sub"
                    style={{ backgroundColor: "#06689e" }}
                    data-aos="fade-up"
                  >
                    <img src={img3} alt="" className="images"></img>
                    <div className="sub-text">
                      <div className="sub-text-head">
                        <div className="sub-head"> Product Tour </div>
                        <div
                          className="text-s"
                          style={{ color: "#079de0" }}
                        >This is some text inside of a div block.</div>
                      </div>
                      <a href="/product-tour" style={{ color: "#73cbf5" , textDecoration: 'none' }}>
                        <div className="link">
                          <div className="link-text">Learn more</div>
                          <KeyboardArrowRightRounded
                            style={{ fontSize: ".875em" }}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                  <div
                    className="header-sub"
                    style={{ backgroundColor: "#097068" }}
                    data-aos="fade-up"
                  >
                    <img src={img4} alt="" className="images"></img>
                    <div className="sub-text">
                      <div className="sub-text-head">
                        <div className="sub-head"> Product Tour </div>
                        <div
                          className="text-s"
                          style={{ color: "#0eb3a0" }}
                        >This is some text inside of a div block.</div>
                      </div>
                      <a href="/product-tour" style={{ color: "#55e4d6", textDecoration: 'none' }}>
                        <div className="link">
                          <div className="link-text">Learn more</div>
                          <KeyboardArrowRightRounded
                            style={{ fontSize: ".875em" }}
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section8;
