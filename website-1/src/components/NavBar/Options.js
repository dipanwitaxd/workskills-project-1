import { React, useState } from "react";
import "./Options.css";
import RocketLaunchRounded from "@mui/icons-material/RocketLaunchRounded";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import StyleRounded from "@mui/icons-material/StyleRounded";
import PersonPinRounded from "@mui/icons-material/PersonPinRounded";
import TravelExploreRounded from "@mui/icons-material/TravelExploreRounded";
import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import CreditCardRounded from "@mui/icons-material/CreditCardRounded";
import PaymentsRounded from "@mui/icons-material/PaymentsRounded";
import PriceChangeRounded from "@mui/icons-material/PriceChangeRounded";
import RecordVoiceOverRounded from "@mui/icons-material/RecordVoiceOverRounded";
import NotListedLocationRounded from "@mui/icons-material/NotListedLocationRounded";
import DownloadingRounded from "@mui/icons-material/DownloadingRounded";

function Options() {
  const [hoverOn1, setHoverOn1] = useState(false);
  const [hoverOn2, setHoverOn2] = useState(false);
  const [hoverOn3, setHoverOn3] = useState(false);
  const [hoverOn4, setHoverOn4] = useState(false);
  const [hoverOn5, setHoverOn5] = useState(false);
  const [hoverOn6, setHoverOn6] = useState(false);
  const [hoverOn7, setHoverOn7] = useState(false);
  const [hoverOn8, setHoverOn8] = useState(false);
  const [hoverOn9, setHoverOn9] = useState(false);
  const [hoverOn10, setHoverOn10] = useState(false);
  const [hoverOn11, setHoverOn11] = useState(false);
  const [product, setProduct] = useState(false);
  const [company, setCompany] = useState(false);
  const [account, setAccount] = useState(false);
  return (
    <div className="option-background" >
      <div className="" >
        <div className="options option">Support</div>
        <div
          onClick={() => setProduct(!product)}
          className="options option"
          style={product ? { paddingBottom: "3vh" } : {}}
        >
          Product
        </div>
        {product && 
          <div className="product" >
            <div className="product-content-1">
              <div className="left-grid-option">
                <div
                  onClick={() => {
                    setHoverOn1(!hoverOn1);
                  }}
                  style={hoverOn1 ? { color: "#CCDAE7" } : { color: "#313a41" }}
                  className="grid-inner-option"
                >
                  <RocketLaunchRounded fontSize="small" />
                  <div>
                    <div className="product-head-option">
                      Product Tour #1{"  "}
                      {hoverOn1 && (
                        <ArrowForwardRounded
                          fontSize="0.8em"
                          style={{ paddingTop: "0.4vh" }}
                          // data-aos="fade-right"
                        />
                      )}
                    </div>
                    <div
                      className="product-desc-option"
                      style={
                        hoverOn1 ? { color: "#b4c0ca" } : { color: "#313a41" }
                      }
                    >
                      Use this text to describe the page
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setHoverOn2(!hoverOn2);
                  }}
                  style={hoverOn2 ? { color: "#CCDAE7" } : { color: "#313a41" }}
                  className="grid-inner-option"
                >
                  <StyleRounded fontSize="small" />
                  <div>
                    <div className="product-head-option">
                      Product Tour #2{"  "}
                      {hoverOn2 && (
                        <ArrowForwardRounded
                          fontSize="0.8em"
                          style={{ paddingTop: "0.4vh" }}
                          // data-aos="fade-right"
                        />
                      )}
                    </div>
                    <div
                      className="product-desc-option"
                      style={
                        hoverOn2 ? { color: "#b4c0ca" } : { color: "#313a41" }
                      }
                    >
                      Use this text to describe the page
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setHoverOn3(!hoverOn3);
                  }}
                  style={hoverOn3 ? { color: "#CCDAE7" } : { color: "#313a41" }}
                  className="grid-inner-option"
                >
                  <PersonPinRounded fontSize="small" />
                  <div>
                    <div className="product-head-option">
                      Product Tour #3{"  "}
                      {hoverOn3 && (
                        <ArrowForwardRounded
                          fontSize="0.8em"
                          style={{ paddingTop: "0.4vh" }}
                          // data-aos="fade-right"
                        />
                      )}
                    </div>
                    <div
                      className="product-desc-option"
                      style={
                        hoverOn3 ? { color: "#b4c0ca" } : { color: "#313a41" }
                      }
                    >
                      Use this text to describe the page
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setHoverOn4(!hoverOn4);
                  }}
                  style={hoverOn4 ? { color: "#CCDAE7" } : { color: "#313a41" }}
                  className="grid-inner-option"
                >
                  <TravelExploreRounded fontSize="small" />
                  <div>
                    <div className="product-head-option">
                      Product Tour #4{"  "}
                      {hoverOn4 && (
                        <ArrowForwardRounded
                          fontSize="0.8em"
                          style={{ paddingTop: "0.4vh" }}
                          // data-aos="fade-right"
                        />
                      )}
                    </div>
                    <div
                      className="product-desc-option"
                      style={
                        hoverOn4 ? { color: "#b4c0ca" } : { color: "#313a41" }
                      }
                    >
                      Use this text to describe the page
                    </div>
                  </div>
                </div>
                <div
                  onClick={() => {
                    setHoverOn5(!hoverOn5);
                  }}
                  style={hoverOn5 ? { color: "#CCDAE7" } : { color: "#313a41" }}
                  className="grid-inner-option"
                >
                  <CalendarTodayRounded fontSize="small" />
                  <div>
                    <div className="product-head-option">
                      Product Tour #5{"  "}
                      {hoverOn5 && (
                        <ArrowForwardRounded
                          fontSize="0.8em"
                          style={{ paddingTop: "0.4vh" }}
                          // data-aos="fade-right"
                        />
                      )}
                    </div>
                    <div
                      className="product-desc-option"
                      style={
                        hoverOn5 ? { color: "#CCDAE7" } : { color: "#313a41" }
                      }
                    >
                      Use this text to describe the page
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-grid-option">
                <div className="features-option">FEATURES</div>
                <div
                  className="text-features-option"
                  onClick={() => {
                    setHoverOn6(!hoverOn6);
                  }}
                  style={hoverOn6 ? { color: "#CCDAE7" } : { color: "#313a41" }}
                >
                  <CreditCardRounded fontSize="small" />
                  {"  "}{" "}
                  <div className="text-sub-option" style={{ color: "#CCDAE7" }}>
                    Pricing One{" "}
                    {hoverOn6 && (
                      <ArrowForwardRounded
                        fontSize="0.8em"
                        style={{ paddingTop: "0.4vh" }}
                        // data-aos="fade-right"
                      />
                    )}{" "}
                  </div>
                </div>
                <div
                  className="text-features-option"
                  onClick={() => {
                    setHoverOn7(!hoverOn7);
                  }}
                  style={hoverOn7 ? { color: "#CCDAE7" } : { color: "#313a41" }}
                >
                  <PaymentsRounded fontSize="small" />
                  {"  "}{" "}
                  <div className="text-sub-option" style={{ color: "#CCDAE7" }}>
                    Pricing two{" "}
                    {hoverOn7 && (
                      <ArrowForwardRounded
                        fontSize="0.8em"
                        style={{ paddingTop: "0.4vh" }}
                        // data-aos="fade-right"
                      />
                    )}{" "}
                  </div>
                </div>
                <div
                  className="text-features-option"
                  onClick={() => {
                    setHoverOn8(!hoverOn8);
                  }}
                  style={hoverOn8 ? { color: "#CCDAE7" } : { color: "#313a41" }}
                >
                  <PriceChangeRounded fontSize="small" />
                  {"  "}
                  <div className="text-sub-option" style={{ color: "#CCDAE7" }}>
                    Pricing three{" "}
                    {hoverOn8 && (
                      <ArrowForwardRounded
                        fontSize="0.8em"
                        style={{ paddingTop: "0.4vh" }}
                        // data-aos="fade-right"
                      />
                    )}{" "}
                  </div>
                </div>
                <div className="border-bottom"></div>
                <div
                  className="text-features-option"
                  onClick={() => {
                    setHoverOn9(!hoverOn9);
                  }}
                  style={hoverOn9 ? { color: "#CCDAE7" } : { color: "#313a41" }}
                >
                  <RecordVoiceOverRounded fontSize="small" />
                  {"  "}{" "}
                  <div className="text-sub-option" style={{ color: "#CCDAE7" }}>
                    Customer{" "}
                    {hoverOn9 && (
                      <ArrowForwardRounded
                        fontSize="0.8em"
                        style={{ paddingTop: "0.4vh" }}
                        // data-aos="fade-right"
                      />
                    )}{" "}
                  </div>
                </div>
                <div
                  className="text-features-option"
                  onClick={() => {
                    setHoverOn10(!hoverOn10);
                  }}
                  style={
                    hoverOn10 ? { color: "#CCDAE7" } : { color: "#313a41" }
                  }
                >
                  <NotListedLocationRounded fontSize="small" />
                  {"  "}{" "}
                  <div className="text-sub-option" style={{ color: "#CCDAE7" }}>
                    FAQ{" "}
                    {hoverOn10 && (
                      <ArrowForwardRounded
                        fontSize="0.8em"
                        style={{ paddingTop: "0.4vh" }}
                        // data-aos="fade-right"
                      />
                    )}{" "}
                  </div>
                </div>
                <div
                  className="text-features-option"
                  onClick={() => {
                    setHoverOn11(!hoverOn11);
                  }}
                  style={
                    hoverOn11 ? { color: "#CCDAE7" } : { color: "#313a41" }
                  }
                >
                  <DownloadingRounded fontSize="small" />
                  {"  "}
                  <div className="text-sub-option" style={{ color: "#CCDAE7" }}>
                    Download{" "}
                    {hoverOn11 && (
                      <ArrowForwardRounded
                        fontSize="0.8em"
                        style={{ paddingTop: "0.4vh" }}
                        // data-aos="fade-right"
                      />
                    )}{" "}
                  </div>
                </div>
                <div className="border-bottom-option"></div>
              </div>
            </div>
          </div>
        }

        <div onClick={() => setCompany(!company)} className="options option">
          Company
        </div>
        <div
          onClick={() => setAccount(!account)}
          className="options option"
          style={{ paddingBottom: "3vh" }}
        >
          Account
        </div>
      </div>
    </div>
  );
}

export default Options;
