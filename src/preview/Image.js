import React, { Component } from 'react';

import './Image.css';

class Image extends Component {
  state = {
    open: false,
  };

  enablePreview = () => {
    this.setState({
      open: true,
    });
  };

  disablePreview = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div className="imageContainer">
        <a tabIndex={0} onClick={this.enablePreview} className="previewImg">
          <img alt="Project Preview" src={this.props.info.image} />
        </a>
        <div
          className={`modalWrapper ${this.state.open ? 'open' : 'hidden'}`}
          onClick={this.disablePreview}
        >
          <a className="modalDialog">
            <img alt="Project Preview" src={this.props.info.image} />
          </a>
        </div>
      </div>
    );
  }
}

export default Image;
