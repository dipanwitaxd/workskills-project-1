import React from "react";
import "./NavBar.css";
import { useState, useEffect } from "react";
import logo from "../../assets/workskill-proj-1-img-2.svg";
import DragHandleRounded from '@mui/icons-material/DragHandleRounded';

export default function NavBar() {
  const [header, setHeader] = useState("header");
  const [windowSize, setWindowSize] = useState(getWindowSize());
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
    <div className={header}>
      {!isMobile ? (
        <div className="navbar-sec">
          <div className="nav-left">
            <img src={logo} alt="logo" />
            <div>Support</div>
            <div>Product</div>
            <div>Company</div>
            <div>Account</div>
          </div>
          <div className="nav-right">
            <button className="nav-right-button">Buy Template</button>
          </div>
        </div>
      ) : (
        <div className="mobile-view">
          <img src={logo} alt='logo' className="logo-mob"></img>
          <div className="three-bars"> <DragHandleRounded style={{color : '#ccdae7'}} /> </div>
        </div>
      )}
    </div>
  );
}
