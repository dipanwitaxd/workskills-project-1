import React from "react";
import "./Section6.css";
import person1 from "../../assets/workskill-proj-1-person-1.jpeg";
import person2 from "../../assets/workskill-proj-1-person-2.jpeg";
import person3 from "../../assets/workskill-proj-1-person-3.jpeg";
import person4 from "../../assets/workskill-proj-1-person-4.jpeg";
import person5 from "../../assets/workskill-proj-1-person-5.jpeg";
import person6 from "../../assets/workskill-proj-1-person-6.jpeg";
import person7 from "../../assets/workskill-proj-1-person-7.jpeg";
import person8 from "../../assets/workskill-proj-1-person-8.jpeg";
import person9 from "../../assets/workskill-proj-1-person-9.jpeg";

function Section6() {
  return (
    <div className="section-6-background">
      <div className="section-title">Our team drives us forward</div>
      <div className="row">
        <div className="column">
          <div className="card" data-aos="fade-up">
            <div className="card-head">
              <div>
                <img
                  src={person1}
                  alt="person1"
                  className="person-img-sec6"
                ></img>
              </div>
              <div>
                <div className="name-sec">Ryan Smith</div>
                <div className="username">@ryansmith · March 19</div>
              </div>
            </div>
            <div className="name-desc">
              Great template and custom service! I needed to make some specific
              changes and Rustam sent me a quick step by step video explaining
              how to make changes. Great communication and help from him. Thank
              you.
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="card-head">
              <div>
                <img
                  src={person4}
                  alt="person4"
                  className="person-img-sec6"
                ></img>
              </div>
              <div>
                <div className="name-sec">Ryan Smith</div>
                <div className="username">@ryansmith · March 19</div>
              </div>
            </div>
            <div className="name-desc">
              Best templates and support out there! Rustam is always happy to
              help with any issues you may be having or even just showing how to
              edit things. They provide detailed videos showing how to overcome
              any complex matters. Would highly recommend!
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="card-head">
              <div>
                <img
                  src={person7}
                  alt="person7"
                  className="person-img-sec6"
                ></img>
              </div>
              <div>
                <div className="name-sec">Ryan Smith</div>
                <div className="username">@ryansmith · March 19</div>
              </div>
            </div>
            <div className="name-desc">
              Had some issues where my site crashed and broke, reached out to
              Rustam to see if he could help me fix it. Even though we are 12
              hours apart in time, he was quick to reply and helpful / willing
              to do what is needed to fix the issue.
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card" data-aos="fade-up">
            <div className="card-head">
              <div>
                <img
                  src={person2}
                  alt="person2"
                  className="person-img-sec6"
                ></img>
              </div>
              <div>
                <div className="name-sec">Rebecca Unger</div>
                <div className="username">@runger · Feb 21</div>
              </div>
            </div>
            <div className="name-desc">
              I couldn't be any happier. The template purchased was very well
              put together and help us to put together for our new marketing
              company. All the pages and features were very well explained and
              made it very easy to change and adapt it to our needs. We were so
              impressed that we will purchase a second template for our second
              brand launching some time in March. Highly recommended!!!!
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <div className="card-head">
              <div>
                <img
                  src={person5}
                  alt="person5"
                  className="person-img-sec6"
                ></img>
              </div>
              <div>
                <div className="name-sec">Ryan Smith</div>
                <div className="username">@ryansmith · March 19</div>
              </div>
            </div>
            <div className="name-desc">
              I bought a template, its goooood, i needed help at some point, and
              it was quick and to the point. Im satisfied
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="card-head">
              <div>
                <img
                  src={person8}
                  alt="person8"
                  className="person-img-sec6"
                ></img>
              </div>
              <div>
                <div className="name-sec">Ryan Smith</div>
                <div className="username">@ryansmith · March 19</div>
              </div>
            </div>
            <div className="name-desc">
              Great communication with detailed screen shots. Thanks heaps R!
            </div>
          </div>
        </div>
        <div className="column">
          <div className="card" data-aos="fade-up">
            <div className="card-head">
              <div>
                <img
                  src={person3}
                  alt="person3"
                  className="person-img-sec6"
                ></img>
              </div>
              <div>
                <div className="name-sec">Ryan Smith</div>
                <div className="username">@ryansmith · March 19</div>
              </div>
            </div>
            <div className="name-desc">
              Best templates and support out there! Rustam is always happy to
              help with any issues you may be having or even just showing how to
              edit things. They provide detailed videos showing how to overcome
              any complex matters. Would highly recommend!
            </div>
          </div>

          <div className="card" data-aos="fade-up">
            <div className="card-head">
              <div>
                <img
                  src={person6}
                  alt="person6"
                  className="person-img-sec6"
                ></img>
              </div>
              <div>
                <div className="name-sec">Ryan Smith</div>
                <div className="username">@ryansmith · March 19</div>
              </div>
            </div>
            <div className="name-desc">
              What more can I say. You can trust Fouroom with your eyes close!!!
            </div>
          </div>
          <div className="card" data-aos="fade-up">
            <div className="card-head">
              <div>
                <img
                  src={person9}
                  alt="person9"
                  className="person-img-sec6"
                ></img>
              </div>
              <div>
                <div className="name-sec">Ryan Smith</div>
                <div className="username">@ryansmith · March 19</div>
              </div>
            </div>
            <div className="name-desc">
              Great template and custom service! I needed to make some specific
              changes and Rustam sent me a quick step by step video explaining
              how to make changes. Great communication and help from him. Thank
              you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section6;
