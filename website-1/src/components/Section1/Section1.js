import React from "react";
import "./Section1.css";
import logo from "../../assets/workskill-proj-1-img-2.svg";

function Section1() {
  return (
    <div>
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
      <div className="section1-div">
        <div className="section1-text">
          <div className="text-sec"> Build like the best teams on the planet</div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
