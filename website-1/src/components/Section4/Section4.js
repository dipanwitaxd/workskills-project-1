import React from "react";
import "./Section4.css";
import image1 from "../../assets/workskill-proj-1-img-8.png";
import FingerprintRounded from "@mui/icons-material/FingerprintRounded";
import DoneRounded from "@mui/icons-material/DoneRounded";

function Section4() {
  return (
    <div className="section4-background">
      <div className="image-background">
        <img src={image1} alt="img" className="img"></img>
      </div>
      <div className="sec4-col">
        <div className="section4-col2">
          <div className="fingerprint">
            {" "}
            <FingerprintRounded />{" "}
          </div>
          <div>
            <div className="heading-sec4">
              Top notch perks for top notch{" "}
              <span className="gradient-head">people</span>.
            </div>
            <div className="sub-text">
              Stand out online with a professional website, online store, or
              portfolio. With Fouroom templates, you can turn any idea into a
              reality.
            </div>
          </div>
        </div>
        <div className="row2-sec4">
          <div
            className="border-line"
            data-aos="fade-up"
            
          ></div>
          <div className="line"  >
            <div className="lines">Add and edit schema markup</div>
            <DoneRounded
              style={{ color: "rgb(167,181,196)", fontSize: ".875em" }}
            />
          </div>
          <div></div>
          <div
            className="border-line"
            data-aos="fade-up"
            
          ></div>
          <div className="line" data-aos="fade-up" >
            <div className="lines">Meta titles and meta descriptions</div>
            <div className="lines">Unlimited</div>
          </div>
          <div></div>
          <div className="border-line" data-aos="fade-up"></div>
          <div className="line" data-aos="fade-up" >
            <div className="lines">Indexing and sitemap controls</div>
            <div className="lines" >Easy edit</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Section4;
