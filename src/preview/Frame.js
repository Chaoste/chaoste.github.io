import React, { Component } from 'react';

import './Frame.css';

class Frame extends Component {
  render() {
    return (
      <div className="frame-container">
        <div className="corner top left" />
        <div className="corner top right" />
        <div className="corner bottom right" />
        <div className="corner bottom left" />
      </div>
    );
  }
}

export default Frame;
