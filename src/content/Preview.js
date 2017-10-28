import React, { Component } from 'react';

/**
 * @typedef options
 * @see https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
 * @param {Number} width
 * @param {Number} height
 * @param {String} videoId
 * @param {Object} playerVars
 * @param {Object} events
 */

/**
 * @typedef YT.Player
 * @see https://developers.google.com/youtube/iframe_api_reference
 * */

/**
 * A factory function used to produce an instance of YT.Player and queue function calls and proxy events of the resulting object.
 *
 * @param {YT.Player|HTMLElement|String} elementId Either An existing YT.Player instance,
 * the DOM element or the id of the HTML element where the API will insert an <iframe>.
 * @param {YouTubePlayer~options} options See `options` (Ignored when using an existing YT.Player instance).
 * @param {boolean} strictState A flag designating whether or not to wait for
 * an acceptable state when calling supported functions. Default: `false`.
 * See `FunctionStateMap.js` for supported functions and acceptable states.
 * @returns {Object}
 */
import YouTubePlayer from 'youtube-player';

// import YouTube from 'react-youtube';
import './Preview.css';

class Preview extends Component {
  videoContainer = null;
  state = {
    loaded: false,
    playing: false,
  };

  constructor(props) {
    super();
    console.log(props.info);
  }

  onMouseEnter = event => {
    if (!this.state.loaded) {
      this.player = YouTubePlayer(this.videoContainer, {
        height: '310',
        width: '360',
        videoId: this.props.info.youtubeId,
        playerVars: {
          autoplay: '1',
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
      this.player.on('ready', () =>
        this.setState({ loaded: true, playing: true }),
      );
    } else {
      this.player.playVideo();
      this.setState({
        playing: true,
      });
    }
  };

  onMouseLeave = event => {
    if (this.state.loaded) {
      this.player.pauseVideo();
      this.setState({
        playing: false,
      });
    }
  };

  renderYoutube() {
    if (!this.props.info.youtubeId) return null;
    return (
      <div
        className="video"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <img
          className={`thumbnail ${this.state.loaded ? 'hidden' : ''}`}
          src={`https://img.youtube.com/vi/${this.props.info.youtubeId}/0.jpg`}
        />
        <div ref={n => (this.videoContainer = n)} />
      </div>
    );
  }

  render() {
    return (
      <div className="preview">
        <div className="title">{this.props.info.title}</div>
        <div className="description">{this.props.info.description}</div>
        {this.renderYoutube()}
      </div>
    );
  }
}

export default Preview;
