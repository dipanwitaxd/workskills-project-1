import React from "react";
import "./Section5.css";
import { useState, useEffect } from "react";
import ManageSearchRounded from "@mui/icons-material/ManageSearchRounded";

function Section5() {
  return (
    <div className="section-5-backgroung">
      <div className="sec-row1">
        <div className="head-sec">Live your best &#40;work&#41; life</div>
        <div className="subhead-sec">
          Love your work, Experience Passion and Freedom
        </div>
      </div>
      <div className="sec-row2">
        <div className="sec-row-col">
          <div className="sec-row-col-title">01.</div>
          <div className="sec-mid">
            <div className="sec-mid-round sec-place">
              <div className="grid-view">
                <div className="snippet-dot"></div>
              </div>
              <div className="grid-back">
                <div className="background-fade"></div>
                <div className="search-row">
                  <ManageSearchRounded style={{ height: "18px" }} />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="sec-head">Work from Anywhere</div>
            <div className="sec-desc">
              You can work from home, our studio office, on mountains, beaches,
              or anywhere in the world.
            </div>
          </div>
        </div>
        <div className="sec-row-col">
          <div className="sec-row-col-title">02.</div>
          <div className="sec-mid">
            <div className="sec-mid-round sec-place">
              <div className="grid-view">
                <div className="snippet-dot"></div>
              </div>
              <div className="grid-back">
                <div className=""></div>
                <div className=""></div>
              </div>
            </div>
          </div>
          <div>
            <div className="sec-head">Flexible Work Hours</div>
            <div className="sec-desc">
              Create your own flexible work schedule. Work as you like, when you
              like!, How you like!
            </div>
          </div>
        </div>
        <div className="sec-row-col">
          <div className="sec-row-col-title">03.</div>
          <div className="sec-mid">
            <div className="sec-mid-round sec-place">
              <div className="grid-view">
                <div className="snippet-dot"></div>
              </div>
              <div className="grid-back">
                <div className=""></div>
                <div className=""></div>
              </div>
            </div>
          </div>
          <div>
            <div className="sec-head">Side Projects</div>
            <div className="sec-desc">
              Have an idea or a passion? Take our help and resource to bring it
              to life
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
