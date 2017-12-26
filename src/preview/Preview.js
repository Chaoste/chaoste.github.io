import React, { Component } from 'react';

import Youtube from './Youtube.js';
import Image from './Image.js';
import Linksbar from './Linksbar.js';
import Frame from './Frame.js';

import './Preview.css';

class Preview extends Component {
  renderMedia() {
    if (this.props.info.youtubeId) {
      return (
        <div className="centeringContainer">
          <Youtube info={this.props.info} />
        </div>
      );
    }
    if (this.props.info.image) {
      return (
        <div className="centeringContainer">
          <Image info={this.props.info} />
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="preview">
        <Frame />
        <div className="moreDescription mobile">{this.props.children}</div>
        {this.renderMedia()}
        <div className="about">
          <div className="title">
            <div className="arrow left" />
            <div className="arrow right" />
            {this.props.info.title}
          </div>
          <div className="description">{this.props.info.description}</div>
          <div className="moreDescription desktop">{this.props.children}</div>
          <Linksbar info={this.props.info} />
        </div>
      </div>
    );
  }
}

export default Preview;
