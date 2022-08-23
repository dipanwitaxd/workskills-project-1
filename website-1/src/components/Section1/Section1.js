import React from "react";
import "./Section1.css";
import { useState, useEffect } from "react";
import logo from "../../assets/workskill-proj-1-img-2.svg";


function Section1() {
    const [header, setHeader] = useState("header");

  const listenScrollEvent = event => {
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
    <div>
        <div className={header}>
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
      </div>
      <div className="section1-div">
        <div className="section1-text">
          <div className="text-sec"> Build like the best teams on the planet</div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
