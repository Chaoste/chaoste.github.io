import React, { Component } from 'react';

import './Image.css';

class Image extends Component {
  state = {
    open: false,
  };

  onClick = event => {};

  render() {
    return (
      <div className="imageContainer">
        <a className="thumbnailContainer" tabIndex={0} onClick={this.onClick}>
          <img
            className="thumbnail"
            alt="Project Preview"
            src={this.props.info.image}
          />
        </a>
        <div className={`modalWrapper ${this.state.open ? 'open' : 'hidden'}`}>
          <img
            className="modalDialog"
            alt="Project Preview"
            src={this.props.info.image}
          />
        </div>
      </div>
    );
  }
}

export default Image;
