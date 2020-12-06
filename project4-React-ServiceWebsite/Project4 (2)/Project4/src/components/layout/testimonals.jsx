import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./testmo.css";

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img
            src="https://avatars1.githubusercontent.com/u/71584075?s=460&u=8f8bc66b32c0084f0872d17b4161a4209a9aac01&v=4"
            alt="Ashraf Al jabari Image"
          />
          <div className="myCarousel">
            <h3>Ashraf Al jabari</h3>
            <h4>Designer</h4>
            <p>
              I highly recommend W-ebSite Services they helped me biuld my own
              online bussiness.
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://avatars3.githubusercontent.com/u/71584804?s=460&u=3b941316bf72ff47d8fef9577006e2b54ba5462e&v=4"
            alt="Razan Zuaiter Image"
          />
          <div className="myCarousel">
            <h3>Razan Zuaiter</h3>
            <h4>مهننندسههه</h4>
            <p>
              Over the past three years, Our company was very pleased with the
              service provided by WebSoft development teams and executive
              management.
            </p>
          </div>
        </div>

        <div>
          <img
            src="https://avatars3.githubusercontent.com/u/71769659?s=460&u=f79c2bdf655b094836b60d58a15f4a478631e827&v=4"
            alt="alfokaha-taima Image"
          />
          <div className="myCarousel">
            <h3> Taima alfokaha</h3>
            <h4>Tainee</h4>
            <p>
              WebSoft proved to be a professional service provider from the
              outset. We appreciate their proactive approach and ability to
              suggest improvements.
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}
