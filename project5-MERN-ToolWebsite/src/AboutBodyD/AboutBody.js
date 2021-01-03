import React from "react";
import "./AboutBody.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';


function AboutBody() {
  return (
    <section>
      <div className="about-container">
        <div className="about-row-container">
          <div className="about-column-66">
            <h2 className="about-header">Who Are We?</h2>
            <p className="about-paragraph">
              We are the best place to go when you’re looking for delicious
              Burgers! <br /> Our specialty is the flavors starting from our
              heart. <br /> We are the diner where you find unexpected as well,
              amazing atmosphere and endless joy! <br /> To Sum Up, Best Burgers
              In Town.
            </p>
            <Link to="about">
            <button className="btn btn-danger">More About Us</button>
            </Link>
          </div>
          <div className="about-column-33">
            <img
              alt="Burger Image"
              className="about-image-style"
              src="https://media-cdn.tripadvisor.com/media/photo-s/10/9f/df/d4/district.jpg"
            ></img>
          </div>
        </div>
      </div>

      <div className="about-container">
        <div className="about-row-container">
          <div className="about-column-33">
            <img
              alt="Burger Image"
              className="about-image-style1"
              src="https://burgershop.templates.editmysite.com/uploads/8/8/9/6/88968090/burger-image-1-2x_orig.png"
            ></img>
          </div>
          <div className="about-column-667">
            <h2 className="about-header">Great Taste, Good Times</h2>
            <p className="about-paragraph">
              Here at Burger Tag we take pride in the quality of the meat used
              for each and every burger. If it’s not perfect and grilled just
              the way you ordered it, we won’t send it out. We guarantee the
              burger delivered to you is the best burger you could have ordered.
            </p>
            <Link to="food">
            <button className="btn btn-danger">OUR MENU</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutBody;
