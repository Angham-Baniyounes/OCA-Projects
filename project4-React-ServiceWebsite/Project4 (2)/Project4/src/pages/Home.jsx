import React from "react";
import BgVideo from "../components/layout/backgroundVideo";
import Testimonials from "../components/layout/testimonals";
// import Footer from "../components/layout/footer";
import Servicesbrief from "../components/layout/servicesInfo";
import Team from "../components/layout/team";
import Youtupe from "../components/layout/youtubeapi/Api";
export default function Home() {
  return (
    <div>
      <BgVideo />
      <h1>What We Do?</h1>
      <Servicesbrief />
      <h1>Our Team</h1>
      <Team />
      <h1>Testimonials</h1>
      <Testimonials />
      <Youtupe />
    </div>
  );
}
