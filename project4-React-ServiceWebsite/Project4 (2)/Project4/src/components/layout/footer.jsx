import React from "react";
import "./footer.css";
import Logo from "../../images/Logo1.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join us now and be one of those who achieved great success, your
          journey begins now
        </p>
        <p className="footer-subscription-text">What Are You Wating For</p>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <a href="#WhatWeDo">What we do</a>
            <Link to="/">Testimonials</Link>
            <Link to="/">Our Team</Link>
          </div>
          <div className="footer-link-items footer-link-items1">
            <h2>Videos</h2>
            <Link to="/">Watch Our Videos</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              <img src={Logo} alt="Website Logo"></img>
              ebSoft
            </Link>
          </div>
          <small className="website-rights">W-ebSoft Solutions © 2020</small>
          <div className="social-icons">
            <a
              className="social-icon-link facebook"
              href="https://web.facebook.com/monthertwaissi"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/MonzerTwaissi/?fbclid=IwAR0eNnk_AEmk0KBSEaVlxY0TA5JJExN6mm8l2FXET9Ox9HeWxBpRnYrgbUQ"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              className="social-icon-link youtube"
              href="https://www.youtube.com/watch?v=Q33KBiDriJY"
              target="_blank"
              aria-label="Youtube"
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="social-icon-link twitter"
              href="https://twitter.com/waedMD98?s=09"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="social-icon-link twitter"
              href="https://www.linkedin.com/in/monther-twaissi/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
