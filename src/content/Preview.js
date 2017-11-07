import React, { Component } from 'react';

import Youtube from './Youtube.js';

import './Preview.css';

class Preview extends Component {
  render() {
    return (
      <div className="preview">
        <div className="moreDescription mobile">{this.props.children}</div>
        {this.props.info.youtubeId ? <Youtube info={this.props.info} /> : null}
        <div className="about">
          <div className="title">{this.props.info.title}</div>
          <div className="description">{this.props.info.description}</div>
          <div className="moreDescription desktop">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Preview;
