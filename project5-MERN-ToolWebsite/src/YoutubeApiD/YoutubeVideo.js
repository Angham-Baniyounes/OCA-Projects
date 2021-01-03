import React from 'react';
import { Col } from 'react-bootstrap';
import './YoutubeAPIStyle.css';

const YoutubeVideo = ({ video }) => {
  const videoID = video.contentDetails.videoId;
  return (
    <Col>
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <iframe
          src={'https://www.youtube.com/embed/' + videoID}
          frameborder='0'
          allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowfullscreen
        ></iframe>
      </section>
    </Col>
  );
};

export default YoutubeVideo;
