import { React, useState } from "react";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import NotListedLocationRounded from "@mui/icons-material/NotListedLocationRounded";
import LoginRounded from '@mui/icons-material/LoginRounded';
import AssignmentIndRounded from '@mui/icons-material/AssignmentIndRounded';
import LogoutRounded from '@mui/icons-material/LogoutRounded';
import PasswordRounded from '@mui/icons-material/PasswordRounded';
import './Account.css'

function Account() {
  const [hoverOn6, setHoverOn6] = useState(false);
  const [hoverOn7, setHoverOn7] = useState(false);
  const [hoverOn8, setHoverOn8] = useState(false);
  const [hoverOn9, setHoverOn9] = useState(false);
  const [hoverOn10, setHoverOn10] = useState(false);
  const [hoverOn11, setHoverOn11] = useState(false);

  return (
    <div>
      <div className="tooltip-arrow-account"></div>
      <div className="tooltip-account">
        <div className="right-grid-account">
          <div
            className="text-features-account"
            onMouseEnter={() => {
              setHoverOn6(true);
            }}
            onMouseOut={() => {
              setHoverOn6(false);
            }}
            style={hoverOn6 ? { color: "#CCDAE7"} : { color: "#313a41" }}
          >
            <LoginRounded fontSize="small" />
            {"  "}{" "}
            <div className="text-sub-account" style={{ color: "#CCDAE7" }}>
              Sign Up{" "}
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
            className="text-features-account"
            onMouseEnter={() => {
              setHoverOn7(true);
            }}
            onMouseOut={() => {
              setHoverOn7(false);
            }}
            style={hoverOn7 ? { color: "#CCDAE7" } : { color: "#313a41" }}
          >
            <AssignmentIndRounded fontSize="small" />
            {"  "}{" "}
            <div className="text-sub-account" style={{ color: "#CCDAE7" }}>
              Sign In{" "}
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
            className="text-features-account"
            onMouseEnter={() => {
              setHoverOn8(true);
            }}
            onMouseOut={() => {
              setHoverOn8(false);
            }}
            style={hoverOn8 ? { color: "#CCDAE7" } : { color: "#313a41" }}
          >
            <LogoutRounded fontSize="small" />
            {"  "}
            <div className="text-sub-account" style={{ color: "#CCDAE7" }}>
              Forgot Password{" "}
              {hoverOn8 && (
                <ArrowForwardRounded
                  fontSize="0.8em"
                  style={{ paddingTop: "0.4vh" }}
                  // data-aos="fade-right"
                />
              )}{" "}
            </div>
          </div>
          <div className="border-bottom-account"></div>
          <div
            className="text-features-account"
            onMouseEnter={() => {
              setHoverOn9(true);
            }}
            onMouseOut={() => {
              setHoverOn9(false);
            }}
            style={hoverOn9 ? { color: "#CCDAE7", paddingTop: '1vh' } : { color: "#313a41", paddingTop: '1vh' }}
          >
            <PasswordRounded fontSize="small" />
            {"  "}{" "}
            <div className="text-sub-account" style={{ color: "#CCDAE7" }}>
              Password Protected{" "}
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
            className="text-features-account"
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
            <div className="text-sub-account" style={{ color: "#CCDAE7" }}>
              Not Found{" "}
              {hoverOn10 && (
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

export default Account