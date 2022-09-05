import React from "react";
import "./NavBar.css";
import { useState, useEffect } from "react";
import logo from "../../assets/workskill-proj-1-img-2.svg";
import DragHandleRounded from "@mui/icons-material/DragHandleRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";
import Product from "./Product";
import Company from "./Company";
import Account from "./Account";
import Options from "./Options";

export default function NavBar() {
  const [header, setHeader] = useState("header");
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [showProduct, setShowProduct] = useState(false);
  const [product, setProduct] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [company, setCompany] = useState(false);
  const [account, setAccount] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  function getWindowSize() {
    if (typeof window !== "undefined") {
      const { innerWidth, innerHeight } = window;
      return innerWidth;
    }
  }
  useEffect(() => {
    getWindowSize();
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    console.log(windowSize);
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  const isMobile = windowSize <= 988;

  const listenScrollEvent = (event) => {
    if (window.scrollY < 73) {
      return setHeader("header");
    } else if (window.scrollY > 70) {
      return setHeader("header2");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <div >
      {!isMobile ? (
        <div className={header}>
          <div className="navbar-sec">
            <div className="nav-left">
              <img src={logo} alt="logo" />
              <div>Support</div>
              <div
                onClick={() => setProduct(!product)}
                onMouseOver={(e) => setShowProduct(true)}
                onMouseOut={() => setShowProduct(false)}
              >
                Product
              </div>
              <div
                onClick={() => setCompany(!company)}
                onMouseOver={(e) => setShowCompany(true)}
                onMouseOut={() => setShowCompany(false)}
              >
                Company
              </div>
              <div
                onClick={() => setAccount(!account)}
                onMouseOver={(e) => setShowAccount(true)}
                onMouseOut={() => setShowAccount(false)}
              >
                Account
              </div>
            </div>
            <div className="nav-right">
              <button className="nav-right-button">Buy Template</button>
            </div>
          </div>
          {(showProduct || product) && <Product />}{" "}
          {(showCompany || company) && <Company />}{" "}
          {(showAccount || account) && <Account />}
        </div>
      ) : (
        <>
          <div
            className="mobile-view"
            style={showOptions ? { backgroundColor: "#1e252c" } : {}}
          >
            <img src={logo} alt="logo" className="logo-mob"></img>
            <div
              className="three-bars"
              onClick={() => {
                setShowOptions(!showOptions);
              }}
            >
              {" "}
              {!showOptions ? (
                <DragHandleRounded style={{ color: "#ccdae7" }} />
              ) : (
                <CloseRounded style={{ color: "#ccdae7" }} />
              )}{" "}
            </div>
          </div>
          <div>{showOptions && <Options />} </div>
        </>
      )}
    </div>
  );
}
