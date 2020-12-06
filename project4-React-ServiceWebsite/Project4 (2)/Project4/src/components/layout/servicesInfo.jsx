import React from "react";
import "./servicesinfo.css";

import { Link } from "react-router-dom";

export default function Servicesbrief(params) {
  let isLoggedIn = sessionStorage.getItem("UserStatus") === "loggedIn";
  return (
    <div className="w-brief-container">
      <div className="w-image-container">
        <img
          className="w-image"
          src="https://www.scnsoft.com/blog-pictures/crm-pics/all-in-one-marketing-platforms.png"
          alt=""
        ></img>
      </div>
      <div className="w-content-container">
        <h3>Services</h3>
        <p>
          Web Design with your customer in mind. Modern web design is more
          involved than creating an attractive website. Consideration of user
          experience, search engine optimization, ease of use, and technical
          details are just a few elements that are involved in developing a
          website that is designed to perform in today’s competitive
          marketplace.
        </p>
        <button className="w-info-item btn-nav-item">
          {/* <Link to="/" className="w-info-links btn-info">
            Show More
          </Link> */}
          <Link
            to={isLoggedIn ? "services" : "Login"}
            className="w-info-links btn-info"
            // onClick={closeMobileMenu}
          >
            Show More
          </Link>
        </button>
      </div>
    </div>
  );
}
