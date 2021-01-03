import React from "react";
import Landing from "../src/LandingPageD/Landing";
import AboutBody from "../src/AboutBodyD/AboutBody";
import BurgerListHome from "../src/BurgerListHomeD/BurgerListHome";
import Location from "../src/LocationD/Location";
import YoutubeAPI from "../src/YoutubeApiD/YoutubeAPI";
import { Element } from "react-scroll";

function LandingPage() {
  return (
    <div>
      <Landing />
      <Element name="test1" className="element">
        <AboutBody />
        <BurgerListHome />
      </Element>
      <YoutubeAPI />
      <Location />
    </div>
  );
}

export default LandingPage;
