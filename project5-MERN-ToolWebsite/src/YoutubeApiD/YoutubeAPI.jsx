import React from 'react';
import YoutubeVideo from './YoutubeVideo';
import './YoutubeAPIStyle.css';
import { Col, Container, Row } from 'react-bootstrap';

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
      'https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=4&playlistId=PLnSNI07BPklnz0Iw7wB99VSNjCa8Eg_X7&key=AIzaSyAtJhfD29_hZH256jtRy602PhKBBozo-fo';

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
      <article>
        <h3 style={{ textAlign: 'center', paddingTop: '3rem' }}>
          Feel free to be in love with BURGER
        </h3>
        <Container>
          <Row>{renderedVideos}</Row>
        </Container>
      </article>
    );
  }
}

export default YoutubeAPI;
