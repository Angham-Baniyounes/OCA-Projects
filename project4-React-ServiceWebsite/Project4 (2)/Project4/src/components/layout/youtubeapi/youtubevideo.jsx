import React from "react";

const YoutubeVideo = ({ video }) => {
  const videoID = video.contentDetails.videoId;
  return (
    <div
      className="w-iframeContainer"
      //   style={{
      //     display: "flex",
      //     alignItems: "center",
      //     justifyContent: "center",
      //     padding: "1rem",
      //   }}
    >
      <iframe
        src={"https://www.youtube.com/embed/" + videoID}
        frameborder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;
