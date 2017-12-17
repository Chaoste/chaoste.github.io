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
    /* Hack for preventing scrolling while modal is open */
    document.querySelector('body').style.overflow = 'hidden';
  };

  disablePreview = () => {
    this.setState({
      open: false,
    });
    /* Hack for preventing scrolling while modal is open */
    document.querySelector('body').style.overflow = 'auto';
  };

  componentWillUnmount() {
    /* Hotfix for click nav link while modal is open */
    document.querySelector('body').style.overflow = 'auto';
  }

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
          <img alt="Project Preview" src={this.props.info.image} />
        </div>
      </div>
    );
  }
}

export default Image;
