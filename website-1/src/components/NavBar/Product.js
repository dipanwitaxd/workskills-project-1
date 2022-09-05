import { React, useState } from "react";
import "./Product.css";
import RocketLaunchRounded from "@mui/icons-material/RocketLaunchRounded";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import StyleRounded from "@mui/icons-material/StyleRounded";
import PersonPinRounded from "@mui/icons-material/PersonPinRounded";
import TravelExploreRounded from "@mui/icons-material/TravelExploreRounded";
import CalendarTodayRounded from "@mui/icons-material/CalendarTodayRounded";
import CreditCardRounded from "@mui/icons-material/CreditCardRounded";
import PaymentsRounded from '@mui/icons-material/PaymentsRounded';
import PriceChangeRounded from '@mui/icons-material/PriceChangeRounded';
import RecordVoiceOverRounded from '@mui/icons-material/RecordVoiceOverRounded';
import NotListedLocationRounded from '@mui/icons-material/NotListedLocationRounded';
import DownloadingRounded from '@mui/icons-material/DownloadingRounded';

function Product() {
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

  return (
    <>
      <div className="tooltip-arrow"></div>
      <div className="tooltip">
        <div className="tooltip-grid">
          <div className="left-grid">
            <div
              onMouseEnter={() => {
                setHoverOn1(true);
              }}
              onMouseOut={() => {
                setHoverOn1(false);
              }}
              style={hoverOn1 ? { color: "#CCDAE7" } : { color: "#313a41" }}
              className="grid-inner"
            >
              <RocketLaunchRounded fontSize="small" />
              <div>
                <div className="product-head">
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
                  className="product-desc"
                  style={hoverOn1 ? { color: "#b4c0ca" } : { color: "#313a41" }}
                >
                  Use this text to describe the page
                </div>
              </div>
            </div>
            <div
              onMouseEnter={() => {
                setHoverOn2(true);
              }}
              onMouseOut={() => {
                setHoverOn2(false);
              }}
              style={hoverOn2 ? { color: "#CCDAE7" } : { color: "#313a41" }}
              className="grid-inner"
            >
              <StyleRounded fontSize="small" />
              <div>
                <div className="product-head">
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
                  className="product-desc"
                  style={hoverOn2 ? { color: "#b4c0ca" } : { color: "#313a41" }}
                >
                  Use this text to describe the page
                </div>
              </div>
            </div>
            <div
              onMouseEnter={() => {
                setHoverOn3(true);
              }}
              onMouseOut={() => {
                setHoverOn3(false);
              }}
              style={hoverOn3 ? { color: "#CCDAE7" } : { color: "#313a41" }}
              className="grid-inner"
            >
              <PersonPinRounded fontSize="small" />
              <div>
                <div className="product-head">
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
                  className="product-desc"
                  style={hoverOn3 ? { color: "#b4c0ca" } : { color: "#313a41" }}
                >
                  Use this text to describe the page
                </div>
              </div>
            </div>
            <div
              onMouseEnter={() => {
                setHoverOn4(true);
              }}
              onMouseOut={() => {
                setHoverOn4(false);
              }}
              style={hoverOn4 ? { color: "#CCDAE7" } : { color: "#313a41" }}
              className="grid-inner"
            >
              <TravelExploreRounded fontSize="small" />
              <div>
                <div className="product-head">
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
                  className="product-desc"
                  style={hoverOn4 ? { color: "#b4c0ca" } : { color: "#313a41" }}
                >
                  Use this text to describe the page
                </div>
              </div>
            </div>
            <div
              onMouseEnter={() => {
                setHoverOn5(true);
              }}
              onMouseOut={() => {
                setHoverOn5(false);
              }}
              style={hoverOn5 ? { color: "#CCDAE7" } : { color: "#313a41" }}
              className="grid-inner"
            >
              <CalendarTodayRounded fontSize="small" />
              <div>
                <div className="product-head">
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
                  className="product-desc"
                  style={hoverOn5 ? { color: "#CCDAE7" } : { color: "#313a41" }}
                >
                  Use this text to describe the page
                </div>
              </div>
            </div>
          </div>
          <div className="right-grid">
            <div className="features">FEATURES</div>
            <div
              className="text-features"
              onMouseEnter={() => {
                setHoverOn6(true);
              }}
              onMouseOut={() => {
                setHoverOn6(false);
              }}
              style={hoverOn6 ? { color: "#CCDAE7" } : { color: "#313a41" }}
            >
              <CreditCardRounded fontSize="small" />
              {"  "}{" "}
              <div className="text-sub" style={{ color: "#CCDAE7" }}>
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
              className="text-features"
              onMouseEnter={() => {
                setHoverOn7(true);
              }}
              onMouseOut={() => {
                setHoverOn7(false);
              }}
              style={hoverOn7 ? { color: "#CCDAE7" } : { color: "#313a41" }}
            >
              <PaymentsRounded fontSize="small" />
              {"  "}{" "}
              <div className="text-sub" style={{ color: "#CCDAE7" }}>
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
              className="text-features"
              onMouseEnter={() => {
                setHoverOn8(true);
              }}
              onMouseOut={() => {
                setHoverOn8(false);
              }}
              style={hoverOn8 ? { color: "#CCDAE7" } : { color: "#313a41" }}
            >
              <PriceChangeRounded fontSize="small" />
              {"  "}
              <div className="text-sub" style={{ color: "#CCDAE7" }}>
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
              className="text-features"
              onMouseEnter={() => {
                setHoverOn9(true);
              }}
              onMouseOut={() => {
                setHoverOn9(false);
              }}
              style={hoverOn9 ? { color: "#CCDAE7" } : { color: "#313a41" }}
            >
              <RecordVoiceOverRounded fontSize="small" />
              {"  "}{" "}
              <div className="text-sub" style={{ color: "#CCDAE7" }}>
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
              className="text-features"
              onMouseEnter={() => {
                setHoverOn10(true);
              }}
              onMouseOut={() => {
                setHoverOn10(false);
              }}
              style={hoverOn10 ? { color: "#CCDAE7" } : { color: "#313a41" }}
            >
              <NotListedLocationRounded fontSize="small" />
              {"  "}{" "}
              <div className="text-sub" style={{ color: "#CCDAE7" }}>
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
              className="text-features"
              onMouseEnter={() => {
                setHoverOn11(true);
              }}
              onMouseOut={() => {
                setHoverOn11(false);
              }}
              style={hoverOn11 ? { color: "#CCDAE7" } : { color: "#313a41" }}
            >
              <DownloadingRounded fontSize="small" />
              {"  "}
              <div className="text-sub" style={{ color: "#CCDAE7" }}>
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
            <div className="border-bottom"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
