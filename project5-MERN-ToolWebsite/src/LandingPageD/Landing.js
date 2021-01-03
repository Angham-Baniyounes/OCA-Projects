import React from "react";
import "./Landing.css";
import { Link } from "react-scroll";
import { Link as Link2 } from "react-router-dom";

function Landing() {
  return (
    <section>
      <div className="landing-section">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="inner-section">
                <h1 className="header-landing">
                  LOCAL BURGERS <br /> MADE RIGHT.
                </h1>
                <p className="landing-paragraph">
                  LOCALLY SOURCED × CRAFTED WITH LOVE
                </p>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <Link2 to="/food">
                      <button className="btn btn-danger">OUR MENU</button>
                    </Link2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link
            activeClass="active"
            className="test1"
            to="test1"
            spy={true}
            smooth={true}
            duration={800}
            offset={60}
          >
            <i class="far fa-arrow-alt-circle-down navigate-down"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Landing;
