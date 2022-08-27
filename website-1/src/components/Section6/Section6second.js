import React from "react";
import "./Section6.css";
import person from "../../assets/workskill-proj-1-person-2.jpeg";
import background1 from "../../assets/workskill-proj-1-background-img-3.jpeg";
import background2 from "../../assets/workskill-proj-1-background-translucent-1.jpeg";

function Section6second() {
  return (
    <div className="section-6-2-background">
      <div className="banner-outer" data-aos="fade-up">
        <img src={background2} alt="person" className="background-2"></img>
        <img src={background1} alt="person" className="background-1"></img>
        <div className="banner">
          <div>
            <img src={person} alt="person" className="person-image"></img>
          </div>
          <div>
            <div className="banner-head">
              “Our vision is to build the world’s most powerful no-code
              development platform.”
            </div>
            <div className="desc-banner">
                <div className="desc-banner-name">Sandra Lewis</div>
                <div className="desc-banner-desg">Head of Development, petsplay.io</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6second;
