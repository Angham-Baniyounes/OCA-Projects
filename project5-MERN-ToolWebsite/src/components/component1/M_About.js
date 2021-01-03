import React from "react";
import Team from "./team/team";
import "./M_About.css";
import IMG from "./about.png";
function M_About() {
  return (
    <div>
      <div className="heading">
        <h1>About Us</h1>
        <span>Get More Info About Our ...</span>
      </div>
      <div className="cd-half-width second-slide">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="content second-content">
                <div className="row">
                  <div className="col-md-7 left-image">
                    <img
                      src="https://images.pexels.com/photos/5920741/pexels-photo-5920741.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                      alt="about burger tag"
                    />
                  </div>
                  <div className="col-md-5">
                    <div className="right-about-text">
                      <h4>Who we are?</h4>
                      <p>
                        Welcome to Burger Tag We are the best place to go when
                        you’re looking for delicious Burgers! Our specialty is
                        the flavors starting from our heart. <br />
                        We are the diner where you find unexpected as well,
                        amazing atmosphere and endless joy! <br /> <br />
                        To Sum Up , Best Burgers In Town.
                        <br />
                        Order NOW!
                      </p>
                      {/* <div className="primary-button">
                            <a href="#">Discover More</a>
                          </div> */}
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-md-7">
                    <div className="left-about-text">
                      <h4>Why Burger Tag?</h4>
                      <p>
                        Programmers use the code tag to define a piece of
                        computer code and the content inside is displayed in the
                        browser. And because the Burger Tag owner are
                        programmers, we choose this name.
                      </p>
                      {/* <div className="primary-button">
                            <a href="#">Discover More</a>
                          </div> */}
                    </div>
                  </div>
                  <div className="col-md-5 right-image">
                    <img src={IMG} alt="why burger tag" />
                  </div>
                </div>
                {/* <br/> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="our_team">Our Team</h1>
      <Team />
    </div>
  );
}

export default M_About;
