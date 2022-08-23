import React from "react";
import "./Section2.css";
import person1 from "../../assets/workskill-proj-1-img-3.jpeg";
import person2 from "../../assets/workskill-proj-1-img-3.jpeg";
import person3 from "../../assets/workskill-proj-1-img-4.jpeg";
import person4 from "../../assets/workskill-proj-1-img-5.jpeg";
import person5 from "../../assets/workskill-proj-1-img-6.jpeg";


function Section2() {
  return (
    <div>
      <div className="section">
        <div className="text-sec2">Build by a small but mighty crew.</div>
        <div className="person-sec">
          <div className="grid-person">
            <div style={{paddingBottom : '2vh'}}><img src={person1} alt="person 1" className="person-img"></img></div>
            <div className="bottom-text-bold" >Sharon Park</div>
            <div className="bottom-text">Human Capital Expert</div>
          </div>
          <div className="grid-person">
            <div style={{paddingBottom : '2vh'}}><img src={person2} alt="person 2" className="person-img"></img></div>
            <div className="bottom-text-bold" >George Light</div>
            <div className="bottom-text">Co-Founder</div>
          </div>
          <div className="grid-person">
            <div style={{paddingBottom : '2vh'}}><img src={person3} alt="person 3" className="person-img"></img></div>
            <div className="bottom-text-bold" >Chris Wright</div>
            <div className="bottom-text">Business Director</div>
          </div>
          <div className="grid-person">
            <div style={{paddingBottom : '2vh'}}><img src={person4} alt="person 4" className="person-img"></img></div>
            <div className="bottom-text-bold" >George Light</div>
            <div className="bottom-text">Entrepreneur Partner</div>
          </div>
          <div className="grid-person">
            <div style={{paddingBottom : '2vh'}}><img src={person5} alt="person 5" className="person-img"></img></div>
            <div className="bottom-text-bold" >Eric Lewis</div>
            <div className="bottom-text">Business Director</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
