import React, { Component } from 'react';

import './Image.css';

class Image extends Component {
  htmlElement = null;
  bodyElement = null;
  scrollTop = 0;

  state = {
    open: false,
  };

  constructor() {
    super();
    this.htmlElement = document.querySelector('html');
    this.bodyElement = document.querySelector('body');
  }

  enablePreview = () => {
    this.setState({
      open: true,
    });
    /* Hack for preventing scrolling while modal is open, but show scrollbar (works in Chrome & Edge) */
    this.scrollTop = this.htmlElement.scrollTop || this.bodyElement.scrollTop;
    this.htmlElement.className = 'noscroll';
    this.htmlElement.style.top = `-${this.scrollTop}px`;
  };

  disablePreview = () => {
    this.setState({
      open: false,
    });
    this.htmlElement.className = '';
    window.scrollTo(0, this.scrollTop);
  };

  componentWillUnmount() {
    /* Remove settings if closing modal by clicking on nav link */
    this.htmlElement.className = '';
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
