import React, { Component } from 'react';

import YouTubePlayer from 'youtube-player';
import youtubeIcon from '../../res/YouTube_icon_full-color.svg';

import './Youtube.css';

class Youtube extends Component {
  videoContainer = null;
  state = {
    loaded: false,
    playing: false,
  };

  onClick = event => {
    // Store in a new var because event is reused
    const eventType = event.type;
    if (!this.state.loaded) {
      this.player = YouTubePlayer(this.videoContainer, {
        height: '310',
        width: '400',
        videoId: this.props.info.youtubeId,
        playerVars: {
          autoplay: '0',
          controls: '0',
          disablekb: '1',
          loop: '1',
          fs: '0',
          iv_load_policy: '3',
          modestbranding: '1',
          rel: '0',
          showinfo: '0',
        },
      });
      this.player.on('ready', () => {
        this.player.mute();
        this.setState({ loaded: true, playing: false });
        if (eventType === 'click') {
          this.player.playVideo();
        }
      });
    }
  };

  render() {
    return (
      <div className="videoContainer">
        <a
          className={`thumbnailContainer ${this.state.loaded ? 'hidden' : ''}`}
          tabIndex={0}
          onClick={this.onClick}
        >
          <img
            className="thumbnail"
            alt="Demo Thumbnail"
            src={`https://img.youtube.com/vi/${this.props.info
              .youtubeId}/0.jpg`}
          />
          <img
            alt="YouTube play button"
            className="youtubeLogo"
            src={youtubeIcon}
          />
        </a>
        <div ref={n => (this.videoContainer = n)} />
      </div>
    );
  }
}

export default Youtube;
