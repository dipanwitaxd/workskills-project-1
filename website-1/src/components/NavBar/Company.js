import { React, useState } from "react";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import AppsOutageRounded from "@mui/icons-material/AppsOutageRounded";
import AccountBalanceRounded from "@mui/icons-material/AccountBalanceRounded";
import ManageAccountsRounded from "@mui/icons-material/ManageAccountsRounded";
import MovingRounded from "@mui/icons-material/MovingRounded";
import PendingActionsRounded from '@mui/icons-material/PendingActionsRounded';
import FeedRounded from '@mui/icons-material/FeedRounded';
import ContactMailRounded from '@mui/icons-material/ContactMailRounded';
import "./Company.css";

function Company() {
  const [hoverOn6, setHoverOn6] = useState(false);
  const [hoverOn7, setHoverOn7] = useState(false);
  const [hoverOn8, setHoverOn8] = useState(false);
  const [hoverOn9, setHoverOn9] = useState(false);
  const [hoverOn10, setHoverOn10] = useState(false);
  const [hoverOn11, setHoverOn11] = useState(false);

  return (
    <div>
      <div className="tooltip-arrow-company"></div>
      <div className="tooltip-company">
        <div className="right-grid-company">
          <div className="features-company">COMPANY</div>
          <div
            className="text-features-company"
            onMouseEnter={() => {
              setHoverOn6(true);
            }}
            onMouseOut={() => {
              setHoverOn6(false);
            }}
            style={
              hoverOn6
                ? { color: "#CCDAE7", paddingTop: "1vh" }
                : { color: "#313a41", paddingTop: "1vh" }
            }
          >
            <AccountBalanceRounded fontSize="small" />
            {"  "}{" "}
            <div className="text-sub-company" style={{ color: "#CCDAE7" }}>
              About us #1{" "}
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
            className="text-features-company"
            onMouseEnter={() => {
              setHoverOn7(true);
            }}
            onMouseOut={() => {
              setHoverOn7(false);
            }}
            style={hoverOn7 ? { color: "#CCDAE7" } : { color: "#313a41" }}
          >
            <ManageAccountsRounded fontSize="small" />
            {"  "}{" "}
            <div className="text-sub-company" style={{ color: "#CCDAE7" }}>
              About us #2{" "}
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
            className="text-features-company"
            onMouseEnter={() => {
              setHoverOn8(true);
            }}
            onMouseOut={() => {
              setHoverOn8(false);
            }}
            style={hoverOn8 ? { color: "#CCDAE7" } : { color: "#313a41" }}
          >
            <MovingRounded fontSize="small" />
            {"  "}
            <div className="text-sub-company" style={{ color: "#CCDAE7" }}>
              About us #3{" "}
              {hoverOn8 && (
                <ArrowForwardRounded
                  fontSize="0.8em"
                  style={{ paddingTop: "0.4vh" }}
                  // data-aos="fade-right"
                />
              )}{" "}
            </div>
          </div>
          <div className="border-bottom-company"></div>
          <div
            className="text-features-company"
            onMouseEnter={() => {
              setHoverOn9(true);
            }}
            onMouseOut={() => {
              setHoverOn9(false);
            }}
            style={
              hoverOn9
                ? { color: "#CCDAE7", paddingTop: "1vh" }
                : { color: "#313a41", paddingTop: "1vh" }
            }
          >
            <PendingActionsRounded fontSize="small" />
            {"  "}{" "}
            <div className="text-sub-company" style={{ color: "#CCDAE7" }}>
              Careers{" "}
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
            className="text-features-company"
            onMouseEnter={() => {
              setHoverOn10(true);
            }}
            onMouseOut={() => {
              setHoverOn10(false);
            }}
            style={hoverOn10 ? { color: "#CCDAE7" } : { color: "#313a41" }}
          >
            <FeedRounded fontSize="small" />
            {"  "}{" "}
            <div className="text-sub-company" style={{ color: "#CCDAE7" }}>
              Blog{" "}
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
            className="text-features-company"
            onMouseEnter={() => {
              setHoverOn11(true);
            }}
            onMouseOut={() => {
              setHoverOn11(false);
            }}
            style={hoverOn11 ? { color: "#CCDAE7" } : { color: "#313a41" }}
          >
            <ContactMailRounded fontSize="small" />
            {"  "}
            <div className="text-sub-company" style={{ color: "#CCDAE7" }}>
              Contact Us{" "}
              {hoverOn11 && (
                <ArrowForwardRounded
                  fontSize="0.8em"
                  style={{ paddingTop: "0.4vh" }}
                  // data-aos="fade-right"
                />
              )}{" "}
            </div>
          </div>
          <div className="border-bottom-company"></div>
          <div
            className="text-features-company"
            onMouseEnter={() => {
              setHoverOn11(true);
            }}
            onMouseOut={() => {
              setHoverOn11(false);
            }}
            style={
              hoverOn11
                ? { color: "#CCDAE7", paddingTop: "1vh", paddingBottom: "2vh" }
                : { color: "#313a41", paddingTop: "1vh", paddingBottom: "2vh" }
            }
          >
            <AppsOutageRounded fontSize="small" />
            {"  "}
            <div className="text-sub-company" style={{ color: "#CCDAE7" }}>
              Privacy Policy{" "}
              {hoverOn11 && (
                <ArrowForwardRounded
                  fontSize="0.8em"
                  style={{ paddingTop: "0.4vh" }}
                  // data-aos="fade-right"
                />
              )}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
