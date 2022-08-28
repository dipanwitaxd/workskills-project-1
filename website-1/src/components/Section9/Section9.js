import React from "react";
import "./Section9.css";
import background1 from "../../assets/workskill-proj-1-img-7.jpeg";
import logo from "../../assets/workskill-proj-1-img-12.svg";

function Section9() {
  return (
    <div className="section9-background">
      <div className="section-9">
        <div className="background-circle">
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="circle-4"></div>
          <div className="circle-5"></div>
          <div className="circle-6"></div>
        </div>
        <div className="text-box-sec-9">
          <div className="text-box-padding">
            <div className="text-grid">
              <div className="logo">
                <img src={background1} alt="img" className="image-logo"></img>
                <img src={logo} alt="logo" className="image-logo-centre"></img>
              </div>
              <div className="content">
                <div className="content-head">
                  Join out team <span className="gradient-code">today</span>
                </div>
                <div className="content-sub-text">
                  Become part of something great. Love your work. Join your
                  dream team.
                </div>
              </div>
              <a href="/get-started-today" className="botton-annimation get-started-today">
                <div className="button-lable">Get started today</div>
                <div className="button-back"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section9;
