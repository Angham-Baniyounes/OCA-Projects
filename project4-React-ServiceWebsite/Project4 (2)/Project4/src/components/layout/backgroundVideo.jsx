import React, { useState, useEffect } from "react";
import Video from "../../videos/video-2.mp4";
import "./bgVideo.css";

export default function BackgroundVideo() {
  return (
    <div className="w-vid-container ">
      <video src={Video} autoPlay loop muted></video>
      <h1>WEB DEVELOPMENT SOLUTIONS</h1>
      <p id="WhatWeDo">What Are You Waiting For?</p>
    </div>
  );
}
