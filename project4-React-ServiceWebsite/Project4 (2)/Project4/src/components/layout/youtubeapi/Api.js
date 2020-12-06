import React from "react";
import YoutubeVideo from "./youtubevideo";
import "./Api.css";
class YoutubeAPI extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      videos: [],
    };
  }
  async componentDidMount() {
    const url =
      "https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=4&playlistId=PLoYCgNOIyGAB_8_iq1cL8MVeun7cB6eNc&key=AIzaSyAMd6ieAgTnaSO2ogOUP1FAxlI6uBPqjPA";

    const response = await fetch(url);
    const data = await response.json();
    this.setState({ videos: data.items });
  }
  render() {
    const { videos } = this.state;

    const renderedVideos = videos.map((video, index) => {
      return <YoutubeVideo key={video.id} video={video} />;
    });
    return (
      <div>
        <h3
          style={{
            textAlign: "center",
            paddingTop: "3rem",
            fontSize: "1.5rem",
            marginBottom: "1rem",
          }}
        >
          Know About Our Teaching Channel
        </h3>
        <div className="w-youtubeVideos">{renderedVideos}</div>
      </div>
    );
  }
}

export default YoutubeAPI;
